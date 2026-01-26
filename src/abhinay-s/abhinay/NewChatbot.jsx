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
    {
      path: '/government-scheme-listing',
      keys: ['govt', 'government', 'scheme', 'schemes', 'subsidies', 'support programs', 'govt scheme finder']
    },
    {
      path: '/startups-zone-opportunities',
      keys: ['startup', 'startups zone', 'startups', 'funding', 'recognition', 'unicorns', 'business models']
    },
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
        'food franchise',
        'best food franchise',
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
    // Individual Products
    {
      path: '/individual-product',
      keys: ['cricket bat','cricket', 'mrf bat','mrf cricket bat']
    },

    // B2B Products (fallback to coming-soon until route exists)
    {
      path: '/product-category',
      keys: ['sports', 'equipment', 'suppliers', 'supplier']
    },

    // Software Products (fallback)
    {
      path: '/crm',
      keys: ['software products', 'crm', 'crm softwares']
    },
    {
      path: '/webdev',
      keys: ['software services','web development', 'web dev']
    },
    {
      path: '/ai',
      keys: ['ai products', 'ai tools', 'ai software']
    },

    // Market Research (fallback)
    {
      path: '/market-research-listing',
      keys: ['market research', 'economy', 'growth']
    },
    // Investment (fallback)

    // Experts & Consulting (fallback)
    {
      path: '/expert-listing',
      keys: ['expert', 'consultant', 'consult', 'consulting', 'advice', 'advisor', 'mentorship', 'specialist', 'professional']
    },

    // Project Reports
    {
      path: '/project-reports-listing',
      keys: ['project', 'reports', 'report']
    },

    // Data Providers
    {
      path: '/data-listing',
      keys: ['data', 'provider','Data provider']
    },

    // Company Info
    {
      path: '/cosco-company-profile',
      keys: ['cosco', 'company profile','cosco company profile', 'company research', 'cosco research']
    },

    // Golf Industry Profile
    {
      path: '/golf-ball-profile',
      keys: ['golf ball', 'golf industry', 'golf ball profile', 'industry research']
    },

    // Business Directory
    {
      path: '/business-solutions/home',
      keys: ['business directory', 'business solutions']
    },

    // Associations
    {
      path: '/association-listing',
      keys: ['association', 'business association']
    },

    // Surveys
    {
      path: '/survey',
      keys: ['survey', 'poll', 'questionnaire']
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
    if (hasFranchiseKeyword && q.includes('food') && 
        q.includes('golf')) {
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
    if (e.key === 'Enter' && !e.shiftKey) {
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
 const textareaRef = useRef(null);
  const DEFAULT_HEIGHT = 71; // px
  const MAX_HEIGHT = 171; // px (you can change)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = DEFAULT_HEIGHT + "px";
    }
  }, []);

  const handleInput = () => {
    const el = textareaRef.current;
    el.style.height = "auto";
    el.style.height =
      Math.min(el.scrollHeight, MAX_HEIGHT) + "px";
  };
  
  return (
    <>
      <Toaster position="bottom-center" />
         <div className="max-w-2xl mx-auto px-4 py-2 shadow-xl rounded-[48px] border border-gray-300 bg-transparent">
      <div className="relative rounded-3xl px-4 py-2">
        <div className="flex flex-col gap-2">
          {/* INPUT ROW */}
          <div className="flex items-center">
            {/* TEXTAREA */}
            <div className="flex-[0.8] flex items-center">
              <textarea
                ref={textareaRef}
                rows={1}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onInput={handleInput}
                onKeyDown={handleKeyDown}
                placeholder="Ask Anything (Industry / Company / Sector)"
                className="
                  w-full text-sm text-gray-700 placeholder-gray-400
                  bg-transparent outline-none border-none
                  resize-none overflow-y-auto
                  leading-5
                  flex items-center
                "
                style={{
                  minHeight: `${DEFAULT_HEIGHT}px`,
                  maxHeight: `${MAX_HEIGHT}px`,
                  paddingTop: '40px'
                }}
              />
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex-[0.2] flex items-center justify-end gap-2 mt-6">
              {/* MIC */}
              <button
                title="Speak your query"
                className="p-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
              >
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 19V16.5M7 16.5C5.4 16.5 3.9 15.9 2.8 14.6
                    C1.6 13.4 1 11.7 1 10
                    M7 16.5C8.6 16.5 10.1 15.9 11.2 14.6
                    C12.4 13.4 13 11.7 13 10
                    M7 14.1C4.9 14.1 3.3 12.3 3.3 10.1V5
                    C3.3 2.8 4.9 1 7 1
                    C9.1 1 10.8 2.8 10.8 5V10.1
                    C10.8 12.3 9.1 14.1 7 14.1Z"
                    stroke="black"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* SEND / CUBE */}
              <button className="cursor-pointer" onClick={handleSubmit}>
                <div className="w-[46px] h-[46px] bg-white rounded-sm flex items-center justify-center p-1 opacity-90">
                  <img
                    src="/abhinay/HomePageImages/cube.png"
                    alt="send"
                    className="w-9 h-9 object-contain"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* ICON ROW */}
          <div className="flex items-center gap-1 mt-1">
            <div className="flex items-center bg-[#e8f6f6] rounded-[6px]">
              <img
                src="/abhinay/aaaa.png"
                alt="A"
                className="w-8 h-8 px-1 rounded-[6px] cursor-pointer hover:bg-white transition"
              />
            </div>

            <div className="flex items-center gap-1 bg-[#FCEFE0] rounded-[6px] px-1">
              <img
                src="/abhinay/bbbb.png"
                alt="B"
                className="w-6 h-8 p-1 rounded-[6px] cursor-pointer hover:bg-white transition"
              />
              <img
                src="/abhinay/cccc.png"
                alt="C"
                className="w-8 h-8 p-1 rounded-[6px] cursor-pointer hover:bg-white transition"
              />
            </div>

            <div className="flex items-center gap-1 bg-[#F0EAF4] rounded-[6px] px-1">
              <img
                src="/abhinay/dddd.png"
                alt="D"
                className="w-8 h-8 p-1 rounded-[6px] cursor-pointer hover:bg-white transition"
              />
              <img
                src="/abhinay/eeee.png"
                alt="E"
                className="w-8 h-8 p-1 rounded-[6px] cursor-pointer hover:bg-white transition"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default NewChatbot;

