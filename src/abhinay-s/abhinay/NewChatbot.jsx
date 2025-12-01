import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Search, User, Eye, Filter, Settings, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const NewChatbot = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const recognitionRef = useRef(null);

  // input based routing - comprehensive intent map
  const intentMatchers = useMemo(() => ([
    // Home Page
    // {
    //     path: '/',
    //     keys: ['home', 'homepage', 'main', 'landing', 'lemici', 'lemici demo']
    // },


    // Offerings & Services
    // {
    //     path: '/offerings',
    //     keys: ['offering', 'offerings', 'offers', 'promotions', 'seasonal offers', 'deals', 'discounts', 'special deals', 'what you do']
    // },

    // Government Schemes
    {
      path: '/government-scheme-listing',
      keys: ['govt', 'government', 'scheme', 'schemes', 'subsidies', 'support programs', 'govt scheme finder']
    },
    // {
    //     path: '/pricings',
    //     keys: ['pricing', 'pricings', 'price', 'plan', 'plans', 'cost', 'subscription', 'fees']
    // },

    // Startups Zone
    {
      path: '/startups-zone-opportunities',
      keys: ['startup', 'startups zone', 'startups', 'funding', 'recognition', 'unicorns', 'business models']
    },
    // {
    //   path: '/startups-zone-opportunities',
    //   keys: ['opportunity', 'opportunities', 'startup opportunities', 'business models']
    // },
    {
      path: '/startups-zone-investorhub',
      keys: ['Investor page', 'Investors', 'Investment Themes', 'investor']
    },

    // Franchise – Food Category (check first for specific match)
    {
      path: '/Individual-food-listingpage',
      keys: [
        'food',
        'restaurant',
        'cafe',
        'food court',
        'fast food',
        'dining',
        'eatery',
        'bistro',
        'bakery',
        'food franchise',
        'franchise food',
        'best food franchise',
        'food business franchise',
        'restaurant franchise',
        'cafe franchise',
        'food court franchise',
        'fast food franchise',
        'franchise in food'
      ],
      requiresSecondary: 'franchise'
    },

    // Franchise – Golf Category (check second for specific match)
    {
      path: '/Individual-golf-listingpage',
      keys: [
        'golf',
        'golf franchise',
        'franchise golf',
        'golf business franchise',
        'golf academy franchise',
        'sports golf franchise',
        'golf franchise business'
      ],
      requiresSecondary: 'franchise'
    },

    // Franchise – General Opportunities (fallback for generic franchise queries)
    {
      path: '/franchise/oppurtunties',
      keys: [
        'franchise ideas',
        'franchise',
        'franchising',
        'franchise business',
        'franchise opportunities',
        'franchise investment',
        'franchise setup',
        'franchise cost'
      ]
    },

    // Dynamic Pages
    // {
    //     path: '/investment',
    //     keys: ['investment', 'investment opportunities', 'investors']
    // },
    // {
    //     path: '/products',
    //     keys: ['products', 'catalog', 'product list', 'available products', 'food products', 'product showcase']
    // },
    // {
    //   path: '/compliance',
    //   keys: ['licenses', 'food license', 'compliance requirements', 'registration', 'licensing']
    // },
    // {
    //   path: '/partnership',
    //   keys: ['partnership', 'partnership opportunities', 'collaboration']
    // },
    // {
    //   path: '/training',
    //   keys: ['training', 'growth programs', 'skill development']
    // },
    // {
    //   path: '/account',
    //   keys: ['account setup', 'account login', 'login', 'signup', 'sign up', 'register']
    // },
    // {
    //   path: '/support',
    //   keys: ['support', 'customer care', 'customer support', 'help']
    // },
    // {
    //   path: '/aboutus',
    //   keys: ['about', 'about us', 'company', 'team', 'who we are']
    // },


    // B2B Products (fallback to coming-soon until route exists)
    {
      path: '/product-category',
      keys: ['sports', 'equipment', 'suppliers', 'marketplace', 'wholesale', 'bulk', 'machinery', 'supplier', 'machines', 'supplies', 'manufacturers', 'cotton', 'cricket', 'bat', 'b2b', 'products']
    },

    // Software Products (fallback)
    {
      path: '/software-hunt-home',
      keys: ['hrms', 'software', 'system', 'crm', 'lms', 'capterra', 'keka', 'bitrix']
    },

    // Market Research (fallback)
    {
      path: '/research',
      keys: ['market', 'research', 'economy', 'growth']
    },
    // Investment (fallback)

    // Experts & Consulting (fallback)
    {
      path: '/expert-listing',
      keys: ['expert', 'consultant', 'consult', 'consulting', 'advice', 'advisor', 'mentorship', 'specialist', 'professional']
    },

    // Business Events & Associations (fallback)
    // {
    //   path: '/coming-soon',
    //   keys: ['events', 'networking', 'conferences', 'trade', 'fairs', 'mahakumbh', 'expo', 'world', 'shrm', 'mumbai', 'bengaluru', 'eventbrite', 'associations', 'chambers', 'commerce', 'nasscom', 'siam', 'ficci', 'cii']
    // },
    {
      path: '/project-reports-listing',
      keys: ['project', 'reports', 'report']
    },

    // Data, Surveys, Dashboards
    {
      path: '/data-listing',
      keys: ['list', 'database', 'data', 'surveys', 'open data', 'datasets']
    },

    // AI Features (fallback)
    // {
    //   path: '/coming-soon',
    //   keys: ['ai', 'search', 'find', 'query', 'lookup', 'mega', 'menu', 'dropdown', 'buttons', 'navigation', 'upload', 'file', 'summary', 'extract', 'pdf', 'word', 'excel', 'multiple', 'llm', 'chatgpt', 'grok', 'model', 'comparison', 'vernacular', 'language', 'results', 'english']
    // },

    // Company Info
    {
      path: '/data-listing',
      keys: ['cosco', 'information', 'master', 'tofler', 'financials']
    },

    // Generic Coming Soon
    {
      path: '/coming-soon',
      keys: ['coming soon', 'beta', 'preview']
    },
  ]), []);

  const resolveRoute = useCallback((text) => {
    if (!text) return null;
    const q = text.toLowerCase().trim();
    // Exact page mentions like "/route"
    console.log("Resolving route for query:", q);
    if (q.startsWith('/')) {
      return q; // trust explicit route input
    }
    
    // Check if query contains "franchise" keyword
    const hasFranchiseKeyword = q.includes('franchise');
    
    // If franchise keyword exists but not food or golf, show unavailable message
    if (hasFranchiseKeyword && !q.includes('food') && !q.includes('restaurant') && 
        !q.includes('cafe') && !q.includes('dining') && !q.includes('eatery') && 
        !q.includes('golf')) {
      // Check if it's a specific category franchise query (not just generic "franchise")
      const franchiseGeneralKeys = ['franchise ideas', 'franchise opportunities', 'franchise business', 
                                   'franchise investment', 'franchise setup', 'franchise cost', 
                                   'franchising', 'franchise'];
      const isGeneralFranchise = franchiseGeneralKeys.some(k => q === k || q === k + 's');
      
      if (!isGeneralFranchise) {
        // Extract potential category name (word before or after "franchise")
        const words = q.split(/\s+/);
        const franchiseIndex = words.findIndex(w => w.includes('franchise'));
        const category = franchiseIndex > 0 ? words[franchiseIndex - 1] : 
                        franchiseIndex < words.length - 1 ? words[franchiseIndex + 1] : 'requested';
        toast.error(`Sorry, ${category.charAt(0).toUpperCase() + category.slice(1)} franchise data is not available at the moment. We currently have data for Food and Golf franchises only.`);
        return 'UNAVAILABLE';
      }
    }
    
    for (const { path, keys, requiresSecondary } of intentMatchers) {
      const hasKeyMatch = keys.some((k) => q.includes(k));
      if (hasKeyMatch) {
        // Check if secondary keyword is required and present
        if (requiresSecondary && !q.includes(requiresSecondary.toLowerCase())) {
          continue;
        }
        console.log(`Matched intent for query "${q}" to path "${path}" using keys:`, keys);
        return path;
      }
    }
    // Fallbacks for common words
    if (/price|plan|cost/.test(q)) return '/pricings';
    if (/invest(or|ment)|fund/i.test(q)) return '/startups-zone-investorhub';
    if (/startup/i.test(q)) return '/startups-zone';
    if (/franchise/i.test(q)) return '/franchise';
    if (/offer|deal|discount|promotion/i.test(q)) return '/offerings';
    if (/schemes?|subsid(y|ies)|grant|msme|government|govt/i.test(q)) return '/offerings/govtnavigator';
    if (/product|catalog|list/i.test(q)) return '/products';
    if (/compliance|license|registration/i.test(q)) return '/compliance';
    if (/partner|collab/i.test(q)) return '/partnership';
    if (/train|skill|growth/i.test(q)) return '/training';
    if (/account|login|signup|sign up|register/i.test(q)) return '/account';
    if (/support|help|customer/i.test(q)) return '/support';
    return null;
  }, [intentMatchers]);

  const handleSubmit = useCallback(() => {
    const route = resolveRoute(query);
    if (route === 'UNAVAILABLE') {
      // Error message already shown in resolveRoute
      return;
    }
    if (route) {
      navigate(route);
    } else {
      console.info('NewChatbot: No matching page for query ->', query);
      toast("I couldn't find a matching page. Try keywords like 'franchise', 'investment', 'govt schemes', 'products', 'offers', 'compliance', 'partnership', 'training', 'account', or 'support'.");
    }
  }, [navigate, query, resolveRoute]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  }, [handleSubmit]);

  const quickGo = useCallback((text) => {
    setQuery(text);
    const route = resolveRoute(text);
    if (route) navigate(route);
  }, [navigate, resolveRoute]);

  // Initialize SpeechRecognition (Web Speech API)
  useEffect(() => {
    // Ensure we're in a browser
    if (typeof window === 'undefined') return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeechSupported(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-IN'; // choose locale as needed
      recognition.continuous = false; // stop after a phrase
      recognition.interimResults = true; // show partial text while speaking

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = (event) => {
        setIsListening(false);
        // Common errors: 'no-speech', 'audio-capture', 'not-allowed'
        const msg =
          event.error === 'not-allowed'
            ? 'Microphone permission denied. Please allow access in your browser settings.'
            : event.error === 'no-speech'
              ? "Didn't catch that. Try speaking again."
              : 'Voice input error. Please try again.';
        toast.error(msg);
      };

      recognition.onresult = (event) => {
        let transcript = '';
        let hasFinal = false;
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const res = event.results[i];
          transcript += res[0].transcript;
          if (res.isFinal) hasFinal = true;
        }
        const text = transcript.trim();
        if (text) setQuery(text);

        // On final result, attempt navigation based on intent
        if (hasFinal && text) {
          const route = resolveRoute(text);
          if (route === 'UNAVAILABLE') {
            // Error message already shown in resolveRoute
            return;
          }
          if (route) {
            navigate(route);
          } else {
            toast(
              "I couldn't find a matching page for your voice query. Try keywords like 'franchise', 'investment', 'govt schemes', 'products', 'offers', 'compliance', 'partnership', 'training', 'account', or 'support'."
            );
          }
        }
      };

      recognitionRef.current = recognition;
    } catch (e) {
      setSpeechSupported(false);
      console.error('SpeechRecognition setup failed:', e);
    }

    return () => {
      try {
        if (recognitionRef.current) {
          recognitionRef.current.onstart = null;
          recognitionRef.current.onend = null;
          recognitionRef.current.onerror = null;
          recognitionRef.current.onresult = null;
          recognitionRef.current.abort();
        }
      } catch { }
    };
  }, [navigate, resolveRoute]);

  const toggleListening = useCallback(() => {
    const recognition = recognitionRef.current;
    if (!recognition) {
      toast('Voice input is not supported in this browser.');
      return;
    }
    try {
      if (isListening) {
        recognition.stop();
      } else {
        recognition.start();
      }
    } catch (e) {
      // start() can throw InvalidStateError if already started; ignore
      console.debug('Speech start/stop error:', e);
    }
  }, [isListening]);

  return (
    <>
      <Toaster position="bottom-center" />
      <div className="max-w-2xl px-4 py-3 mx-auto shadow-xl rounded-[64px]  border-gray-300 border-t-1">
        <div className="relative bg-white rounded-3xl px-5 py-2">
          {/* Main flex container: 80% left (input + icons), 20% right (mic + send) */}
          <div className="flex items-center gap-0">
            {/* Left section: 80% */}
            <div className="flex-[0.8] flex flex-col gap-3">
              {/* Input row */}
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Ask Anything (Industry/Company/Sector)"
                  className="flex-1 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none text-sm pr-2"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>

              {/* Quick-go icons row */}
              <div className="flex items-center gap-1 mt-6">
                <div className="flex items-center bg-[#e8f6f6] rounded-[6px]">
                  <img
                    onClick={() => quickGo("show offerings")}
                    className="hover:bg-white rounded-[6px] p-1 transition-colors cursor-pointer w-8 h-8"
                    src="/abhinay/aaaa.png"
                    alt="Icon A"
                  />
                </div>

                <div className="flex items-center gap-1 bg-[#FCEFE0] rounded-[6px] p-1">
                  <img
                    onClick={() => quickGo("pricing plans")}
                    className="hover:bg-white rounded-[6px] p-1 transition-colors cursor-pointer w-6 h-6"
                    src="/abhinay/bbbb.png"
                    alt="Icon B"
                  />
                  <img
                    onClick={() => quickGo("startups zone")}
                    className="hover:bg-white rounded-[6px] p-1 transition-colors cursor-pointer w-6 h-6"
                    src="/abhinay/cccc.png"
                    alt="Icon C"
                  />
                </div>

                <div className="flex items-center gap-1 bg-[#F0EAF4] rounded-[6px] p-1">
                  <img
                    onClick={() => quickGo("Investor page")}
                    className="hover:bg-white rounded-[6px] p-1 transition-colors cursor-pointer w-6 h-6"
                    src="/abhinay/dddd.png"
                    alt="Icon D"
                  />
                  <img
                    onClick={() => quickGo("franchise opportunities")}
                    className="hover:bg-white rounded-[6px] p-1 transition-colors cursor-pointer w-6 h-6"
                    src="/abhinay/eeee.png"
                    alt="Icon E"
                  />
                </div>
              </div>
            </div>

            {/* Right section: 20% - mic + send buttons */}
            <div className="flex-[0.2] flex items-center justify-end gap-2">
              <button
                onClick={toggleListening}
                disabled={!speechSupported}
                title={
                  speechSupported
                    ? isListening
                      ? "Listening… click to stop"
                      : "Speak your query"
                    : "Voice input not supported"
                }
                className={`rounded-md p-2 transition-colors flex items-center justify-center ${isListening ? "bg-red-100" : "bg-transparent"
                  } ${!speechSupported
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                  }`}
              >
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 19V16.5455M7 16.5455C5.4087 16.5455 3.88258 15.8558 2.75736 14.6283C1.63214 13.4008 1 11.736 1 10M7 16.5455C8.5913 16.5455 10.1174 15.8558 11.2426 14.6283C12.3679 13.4008 13 11.736 13 10M7 14.0909C4.9375 14.0909 3.25 12.3138 3.25 10.1407V4.95018C3.25 2.77709 4.9375 1 7 1C9.0625 1 10.75 2.77709 10.75 4.95018V10.1407C10.75 12.3138 9.0625 14.0909 7 14.0909Z"
                    stroke={isListening ? "#ef4444" : "black"}
                    strokeOpacity={isListening ? "0.8" : "0.3"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={handleSubmit}
                className="flex items-center justify-center"
              >
                <div className="w-7 h-7 bg-white rounded-sm opacity-90 flex items-center justify-center cursor-pointer p-1">
                  <img
                    src="/abhinay/cube.png"
                    alt="send"
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewChatbot;
