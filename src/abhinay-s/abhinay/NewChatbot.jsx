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
        {
            path: '/',
            keys: ['home', 'homepage', 'main', 'landing', 'lemici', 'lemici demo']
        },


        // Offerings & Services
        {
            path: '/abhinay/offerings',
            keys: ['offering', 'offerings', 'offers', 'promotions', 'seasonal offers', 'deals', 'discounts', 'special deals', 'what you do']
        },
        {
            path: '/abhinay/offerings/govtnavigator',
            keys: ['govt', 'government', 'scheme', 'schemes', 'subsidies', 'support programs', 'msme schemes', 'grants', 'women entrepreneur schemes', 'startup india schemes', 'navigator', 'govt scheme finder']
        },
        {
            path: '/abhinay/pricings',
            keys: ['pricing', 'pricings', 'price', 'plan', 'plans', 'cost', 'subscription', 'fees']
        },

        // Startups Zone
        {
            path: '/abhinay/startups-zone-opportunities',
            keys: ['startup', 'startups zone', 'founder', 'incubation', 'accelerator', 'startups', 'agri', 'tech', 'seed', 'funding', 'mrr', 'fintech', 'deeptech', 'healthtech', 'climate', 'edtech', 'saas', 'space', 'angel', 'venture', 'capital', 'india', 'dpiit', 'recognition', 'top', 'unicorns', 'ecosystem']
        },
        {
            path: '/abhinay/startups-zone-opportunities',
            keys: ['opportunity', 'opportunities', 'startup opportunities']
        },
        {
            path: '/abhinay/startups-zone-investorhub',
            keys: ['Investor page', 'Investors', 'Exits', 'Investment Themes']
        },

        // Franchise
        {
            path: '/abhinay/franchise/oppurtunties',
            keys: ['franchise', 'franchising', 'food franchise', 'franchise partnerships', 'franchise investment', 'franchise cost', 'franchise location', 'franchise setup', 'franchise application', 'biryani', 'delhi', 'lakh', 'low', '2025', 'profitable', 'business', 'high', 'roi', 'small', 'budget', 'ideas', 'beverage', 'cloud', 'kitchen', 'education', 'beauty', 'wellness', 'automotive', 'retail', 'courier', 'logistics', 'pharmacy', 'amul', 'domino', 'mcdonald', 'kfc', 'subway', 'lakme', 'salon', 'tumbledry', 'firstcry', 'patanjali', 'lenskart', 'jan', 'aushadhi', 'kendra', 'expos', 'news', 'trends', 'franchisebazar', 'bharat', 'discovery', 'mart', 'frankart', 'global', 'getdistributors', 'consultants']
        },
        {
            path: '/abhinay/franchise/oppurtunties',
            keys: ['franchise opportunities', 'franchise oppurtunities']
        },
        {
            path: '/abhinay/franchise/details',
            keys: ['franchise details', 'individual franchise', 'franchise profile']
        },
        {
            path: '/abhinay/franchise/category',
            keys: ['category', 'categories', 'business categories']
        },

        // Dynamic Pages
        // {
        //     path: '/abhinay/investment',
        //     keys: ['investment', 'investment opportunities', 'investors']
        // },
        {
            path: '/abhinay/govt-schemes',
            keys: ['govt schemes', 'government schemes', 'scheme finder', 'govt scheme finder']
        },
        {
            path: '/abhinay/products',
            keys: ['products', 'catalog', 'product list', 'available products', 'food products', 'product showcase']
        },
        {
            path: '/abhinay/compliance',
            keys: ['licenses', 'food license', 'compliance requirements', 'registration', 'licensing']
        },
        {
            path: '/abhinay/partnership',
            keys: ['partnership', 'partnership opportunities', 'collaboration']
        },
        {
            path: '/abhinay/training',
            keys: ['training', 'growth programs', 'skill development']
        },
        {
            path: '/abhinay/account',
            keys: ['account setup', 'account login', 'login', 'signup', 'sign up', 'register']
        },
        {
            path: '/abhinay/support',
            keys: ['support', 'customer care', 'customer support', 'help']
        },
        {
            path: '/abhinay/aboutus',
            keys: ['about', 'about us', 'company', 'team', 'who we are']
        },

        // Government Schemes
        {
            path: '/abhinay/govt-schemes',
            keys: ['govt schemes', 'government schemes', 'scheme finder', 'agri', 'goa', , 'loan', 'central', 'farmers', 'application', 'pmegp', 'rashtriya', 'krishi', 'vikas', 'yojana']
        },

        // B2B Products (fallback to coming-soon until route exists)
        {
            path: '/abhinay/eb2b-product-category',
            keys: ['sports', 'equipment', 'suppliers', 'moq', 'marketplace', 'wholesale', 'bulk', 'order', 'manufacturing', 'companies', 'industrial', 'machinery', 'supplier', 'cnc', 'machines', 'construction', 'steel', 'chemicals', 'packaging', 'materials', 'electrical', 'mro', 'supplies', 'power', 'tools', 'basmati', 'rice', 'cashew', 'nuts', 'wheat', 'flour', 'spices', 'processing', 'bakery', 't-shirts', 'ladies', 'kurtis', 'garment', 'manufacturers', 'cotton', 'fabric', 'synthetic', 'fabrics', 'medical', 'surgical', 'ppe', 'kits', 'pharmaceutical', 'medicines', 'ayurvedic', 'indiamart', 'pipes', 'amazon', 'moglix', 'safety', 'cricket', 'bat', 'b2b']
        },

        // Software Products (fallback)
        {
            path: '/abhinay/data',
            keys: ['hrms', 'software', 'employees', 'applicant', 'tracking', 'system', 'crm', 'accounting', 'payroll', 'lms', 'hospital', 'management', 'enterprise', 'bfsi', 'automate', 'gst', 'billing', 'track', 'leads', 'clients', 'data', 'backup', 'solutions', 'inventory', 'development', 'it', 'services', 'managed', 'capterra']
        },

        // Market Research (fallback)
        {
            path: '/abhinay/coming-soon',
            keys: ['market', 'research', 'economy', 'growth', 'rate', 'consumer', 'behavior', 'demographic', 'mosp', 'economic', 'census', 'ibef', 'industry', 'reports', 'kantar', 'nielsen', 'marketsandmarkets', 'techsci', 'moneycontrol', 'trading', 'economics', 'think', 'google', 'statista', 'fmcg', 'report', 'automotive', 'trends', 'pharmaceutical', 'sector', 'analysis', 'e-commerce', 'statistics', 'golf', 'ball', 'indian']
        },
        // Investment (fallback)

        // Experts & Consulting (fallback)
        {
            path: '/abhinay/expert-connect',
            keys: ['expert',
                'consultant',
                'name', 'subject', 'matter', 'expert', 'sales', 'talcum', 'organizational', 'strategy', 'upwork', 'consulting', 'top', 'consultants', 'firms', 'advisory', 'smes', 'msme', 'big4', 'operations', 'supply', 'chain', 'entry', 'financial', 'corporate', 'finance', 'tax', 'legal', 'ip', 'digital', 'transformation', 'artificial', 'intelligence', 'cybersecurity', 'brand', 'hr', 'executive', 'search', 'recruitment', 'esg', 'sustainability', 'environmental']
        },

        // Business Events & Associations (fallback)
        {
            path: '/abhinay/coming-soon',
            keys: ['events', 'networking', 'conferences', 'trade', 'fairs', 'mahakumbh', 'expo', 'world', 'shrm', 'mumbai', 'bengaluru', 'eventbrite', 'associations', 'chambers', 'commerce', 'nasscom', 'siam', 'ficci', 'cii']
        },

        // Data, Surveys, Dashboards (fallback)
        {
            path: '/abhinay/data',
            keys: ['list', 'database', 'hospitals', 'bangalore', 'beds', 'director', 'email', 'directory', 'jewellery', 'stores', 'pin', 'code', 'survey', 'eyewear', 'glasses', 'dashboard', 'cement', 'xyz', 'par', 'abc', 'detailed', 'project', 'dpr', 'cardboard', 'jharkhand', 'bank']
        },

        // AI Features (fallback)
        {
            path: '/abhinay/coming-soon',
            keys: ['ai', 'search', 'find', 'query', 'lookup', 'mega', 'menu', 'dropdown', 'buttons', 'navigation', 'upload', 'file', 'summary', 'extract', 'pdf', 'word', 'excel', 'multiple', 'llm', 'chatgpt', 'grok', 'perplexity', 'model', 'comparison', 'vernacular', 'language', 'results', 'english']
        },

        // Company Info (fallback)
        {
            path: '/abhinay/coming-soon',
            keys: ['cosco', 'information', 'master', 'tofler', 'financials']
        },

        // Generic Coming Soon
        {
            path: '/abhinay/coming-soon',
            keys: ['coming soon', 'beta', 'preview']
        },
    ]), []);

    const resolveRoute = useCallback((text) => {
        if (!text) return null;
        const q = text.toLowerCase().trim();
        // Exact page mentions like "/route"
        if (q.startsWith('/')) {
            return q; // trust explicit route input
        }
        for (const { path, keys } of intentMatchers) {
            if (keys.some((k) => q.includes(k))) {
                return path;
            }
        }
        // Fallbacks for common words
        if (/price|plan|cost/.test(q)) return '/abhinay/pricings';
        if (/invest(or|ment)|fund/i.test(q)) return '/abhinay/startups-zone-investorhub';
        if (/startup/i.test(q)) return '/abhinay/startups-zone';
        if (/franchise/i.test(q)) return '/abhinay/franchise';
        if (/offer|deal|discount|promotion/i.test(q)) return '/abhinay/offerings';
        if (/schemes?|subsid(y|ies)|grant|msme|government|govt/i.test(q)) return '/abhinay/offerings/govtnavigator';
        if (/product|catalog|list/i.test(q)) return '/abhinay/products';
        if (/compliance|license|registration/i.test(q)) return '/abhinay/compliance';
        if (/partner|collab/i.test(q)) return '/abhinay/partnership';
        if (/train|skill|growth/i.test(q)) return '/abhinay/training';
        if (/account|login|signup|sign up|register/i.test(q)) return '/abhinay/account';
        if (/support|help|customer/i.test(q)) return '/abhinay/support';
        return null;
    }, [intentMatchers]);

    const handleSubmit = useCallback(() => {
        const route = resolveRoute(query);
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
            <div className="max-w-2xl px-4 py-2 mx-auto shadow-xl rounded-[64px] border-gray-300 border-t-1">
                <div className="relative bg-white rounded-3xl pt-6 pl-3">
                    <div className="flex items-center space-x-3 mt-1 mb-9 ml-2">
                        <input
                            type="text"
                            placeholder="Ask Anything (Industry/Company/Sector)"
                            className="flex-1 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none text-base"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>

                    {/* Search Controls */}
                    <div className="flex items-center justify-between mb-1">

                        <div className="flex items-center space-x-1">
                            <div className='flex items-center bg-[#e8f6f6] rounded-[6px] scale-90'>
                                <img
                                    onClick={() => quickGo('show offerings')}
                                    className='hover:bg-white rounded-[6px] p-1 transition-colors cursor-pointer w-9 h-9'
                                    src="/abhinay/aaaa.png"
                                    alt="Icon A"
                                />
                            </div>

                            <div className='flex items-center gap-1 bg-[#FCEFE0] rounded-[6px] p-1 scale-90'>
                                <img
                                    onClick={() => quickGo('pricing plans')}
                                    className='hover:bg-white rounded-[6px] p-1 transition-colors cursor-pointer w-7 h-7'
                                    src="/abhinay/bbbb.png"
                                    alt="Icon B"
                                />
                                <img
                                    onClick={() => quickGo('startups zone')}
                                    className='hover:bg-white rounded-[6px] p-1 transition-colors cursor-pointer w-7 h-7'
                                    src="/abhinay/cccc.png"
                                    alt="Icon C"
                                />
                            </div>

                            <div className='flex items-center gap-1 bg-[#F0EAF4] rounded-[6px] p-1 scale-90'>
                                <img
                                    onClick={() => quickGo('Investor page')}
                                    className='hover:bg-white rounded-[6px] p-1 transition-colors cursor-pointer w-7 h-7'
                                    src="/abhinay/dddd.png"
                                    alt="Icon D"
                                />
                                <img
                                    onClick={() => quickGo('franchise opportunities')}
                                    className='hover:bg-white rounded-[6px] p-1 transition-colors cursor-pointer w-7 h-7'
                                    src="/abhinay/eeee.png"
                                    alt="Icon E"
                                />
                            </div>
                        </div>


                        {/* Search Button */}
                        <div className="text-white p-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">

                            <button
                                onClick={toggleListening}
                                disabled={!speechSupported}
                                title={speechSupported ? (isListening ? 'Listening… click to stop' : 'Speak your query') : 'Voice input not supported'}
                                className={`rounded-md p-1 transition-colors ${isListening ? 'bg-red-100' : 'bg-transparent'
                                    } ${!speechSupported ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                {/* Microphone Icon */}
                                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 19V16.5455M7 16.5455C5.4087 16.5455 3.88258 15.8558 2.75736 14.6283C1.63214 13.4008 1 11.736 1 10M7 16.5455C8.5913 16.5455 10.1174 15.8558 11.2426 14.6283C12.3679 13.4008 13 11.736 13 10M7 14.0909C4.9375 14.0909 3.25 12.3138 3.25 10.1407V4.95018C3.25 2.77709 4.9375 1 7 1C9.0625 1 10.75 2.77709 10.75 4.95018V10.1407C10.75 12.3138 9.0625 14.0909 7 14.0909Z" stroke={isListening ? '#ef4444' : 'black'} stroke-opacity={isListening ? '0.8' : '0.3'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button onClick={handleSubmit}>
                                <div className="w-6 h-6 bg-white rounded-sm opacity-90 flex items-center justify-center cursor-pointer">
                                    <img src="/abhinay/cube.png" alt="send" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewChatbot;