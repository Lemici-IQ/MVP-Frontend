import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FcardGrid } from './Fcard';
import { FaCar, FaUserTie, FaTruck, FaUtensils, FaHeartbeat, FaBook, FaStore } from 'react-icons/fa';
import { GiScissors } from 'react-icons/gi';
import { MdLocalShipping } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { FiFilter } from 'react-icons/fi';
import Svg from './Svg';
import { Bus, Search, User, Eye, Filter, Settings, Menu, X, Bot, UserCircle, Minimize2, TrendingUp, MapPin, Users, Building, Clock, Star, Send, Loader2, AlertCircle } from 'lucide-react';
import Opp from './Opp';
import Single from './Single';
import { Toaster, toast } from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChartRenderer, parseChartData, removeChartDataBlocks } from '../../../../../components/ChartRenderer';
// import { generateFranchiseAdvice } from '@/lib/ai.js';
import { streamFranchiseAdvice } from '../../../../../lib/ai.js';

const backendUrl = "https://ai-overview-backend.onrender.com";
const claudeApi = import.meta.env.VITE_claudeApi;
const tavilyApi = import.meta.env.VITE_tavilyApi;

// Dynamic Component Renderers for structured responses
const ComponentRenderer = ({ data, onQueryClick }) => {
  if (!data || !data.type) return null;

  switch (data.type) {
    case 'summary_cards':
      return <SummaryCards data={data} />;
    case 'recommendation_list':
      return <RecommendationList data={data} />;
    case 'market_analysis':
      return <MarketAnalysis data={data} />;
    case 'location_options':
      return <LocationOptions data={data} />;
    case 'evaluation_table':
      return <EvaluationTable data={data} />;
    case 'related_queries':
      return <RelatedQueries data={data} onQueryClick={onQueryClick} />;
    case 'text':
      return <TextContent data={data} />;
    default:
      return <TextContent data={{ content: JSON.stringify(data) }} />;
  }
};

const SummaryCards = ({ data }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold text-gray-800 mb-2">{data.title}</h2>
    {data.subtitle && <p className="text-gray-600 text-sm mb-4">{data.subtitle}</p>}
    <div className="grid grid-cols-2 gap-4">
      {data.cards.map((card, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            {card.icon === 'trending' && <TrendingUp className="w-5 h-5 text-indigo-600" />}
            {card.icon === 'money' && <span className="text-xl">₹</span>}
          </div>
          <div className="text-2xl font-bold text-gray-800">{card.value}</div>
          <div className="text-sm text-gray-600">{card.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const RecommendationList = ({ data }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">{data.title}</h2>
    <div className="space-y-3">
      {data.items.map((item, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Building className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MarketAnalysis = ({ data }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold text-gray-800 mb-2">{data.title}</h2>
    <p className="text-gray-700 mb-4">{data.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {data.tags?.map((tag, idx) => (
        <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm flex items-center gap-2">
          {tag.icon === 'users' && <Users className="w-4 h-4" />}
          {tag.icon === 'trending' && <TrendingUp className="w-4 h-4" />}
          {tag.icon === 'building' && <Building className="w-4 h-4" />}
          {tag.label}
        </span>
      ))}
    </div>
    {data.tip && (
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">Investment Tip: </span>
          {data.tip}
        </p>
      </div>
    )}
  </div>
);

const LocationOptions = ({ data }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold text-gray-800 mb-2">{data.title}</h2>
    {data.subtitle && <p className="text-gray-600 text-sm mb-4">{data.subtitle}</p>}
    <div className="space-y-3">
      {data.locations.map((loc, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">{loc.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{loc.description}</p>
            {loc.rent && <p className="text-xs text-gray-500 mt-1">Rent: {loc.rent}</p>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const EvaluationTable = ({ data }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">{data.title}</h2>
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {data.headers.map((header, idx) => (
              <th key={idx} className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 text-sm text-gray-700">
                  {cellIdx === row.length - 1 ? (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{cell}</span>
                    </div>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const RelatedQueries = ({ data, onQueryClick }) => {
  const handleClick = (query) => {
    if (onQueryClick) {
      onQueryClick(query);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-600 mb-3">{data.title || 'Related Queries'}</h3>
      <div className="space-y-2">
        {data.queries.map((query, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleClick(query)}
            className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-300 rounded-lg text-sm text-gray-700 transition-all flex items-center justify-between group cursor-pointer shadow-sm hover:shadow-md"
          >
            <span className="font-medium">{query}</span>
            <span className="text-gray-400 group-hover:text-indigo-600 transition-colors text-lg">→</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const TextContent = ({ data }) => (
  <div className="mb-4">
    <p className="text-gray-700 whitespace-pre-wrap">{data.content}</p>
  </div>
);

const Chatbotsub = () => {
    const [query, setQuery] = useState("");
    const [messages, setMessages] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [speechSupported, setSpeechSupported] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [apiKey] = useState(claudeApi);
    const [tavilyApiKey] = useState(tavilyApi);
    const inputRef = useRef(null);
    const recognitionRef = useRef(null);
    const messagesEndRef = useRef(null);
    const modalContentRef = useRef(null);

    // Initialize SpeechRecognition (Web Speech API)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            setSpeechSupported(false);
            return;
        }

        try {
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-IN';
            recognition.continuous = false;
            recognition.interimResults = true;

            recognition.onstart = () => setIsListening(true);
            recognition.onend = () => setIsListening(false);
            recognition.onerror = (event) => {
                setIsListening(false);
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
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    transcript += event.results[i][0].transcript;
                }
                const text = transcript.trim();
                if (text) setQuery(text);
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
    }, []);

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
            console.debug('Speech start/stop error:', e);
        }
    }, [isListening]);

    // Auto-scroll to latest message
    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].role === 'assistant') {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    // Auto-scroll modal content as it streams
    useEffect(() => {
        if (showModal && modalContentRef.current) {
            modalContentRef.current.scrollTop = modalContentRef.current.scrollHeight;
        }
    }, [messages, showModal]);

    const quickGo = (text) => {
        setQuery(text);
        inputRef.current?.focus();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    const parseStructuredResponse = (responseText) => {
        try {
            let cleanedText = responseText
                .replace(/```json\n?/g, '')
                .replace(/```\n?/g, '')
                .trim();
            
            const parsed = JSON.parse(cleanedText);
            return parsed;
        } catch (e) {
            console.error('Failed to parse JSON:', e);
            return {
                components: [{
                    type: 'text',
                    content: responseText
                }]
            };
        }
    };

    const performWebSearch = async (query) => {
        if (!tavilyApiKey) {
            return {
                error: 'Tavily API key not provided',
                results: []
            };
        }

        try {
            const response = await fetch(`${backendUrl}/api/tavily`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    api_key: tavilyApiKey,
                    query: query,
                    search_depth: 'basic',
                    include_answer: true,
                    include_raw_content: false,
                    max_results: 5
                })
            });

            if (!response.ok) {
                throw new Error(`Tavily API error: ${response.status}`);
            }

            const data = await response.json();
            
            return {
                answer: data.answer || '',
                results: data.results?.map(result => ({
                    title: result.title,
                    url: result.url,
                    content: result.content,
                    score: result.score
                })) || []
            };
        } catch (error) {
            console.error('Tavily search error:', error);
            return {
                error: error.message,
                results: []
            };
        }
    };

    const callClaudeAPI = async (userMessage) => {
        if (!apiKey) {
            toast.error('Claude API key not configured');
            return;
        }
        
        if (!tavilyApiKey) {
            toast.error('Tavily API key not configured');
            return;
        }

        const conversationHistory = messages.map(msg => ({
            role: msg.role,
            content: typeof msg.content === 'string' ? msg.content : JSON.stringify(msg.content)
        }));

        const instructionPrompt = `Please analyze the following query and respond with a JSON structure containing UI components.

Use this exact format:
{
"components": [
  {
    "type": "summary_cards",
    "title": "Title here",
    "subtitle": "Subtitle here",
    "cards": [
      {"icon": "trending", "value": "20-25%", "label": "Expected ROI"},
      {"icon": "money", "value": "7-8 Lakhs", "label": "Max Investment"}
    ]
  },
  {
    "type": "recommendation_list",
    "title": "Top Recommendations",
    "items": [
      {"name": "Item Name", "details": "Investment: ₹X | ROI: Y% | Space: Z sq ft"}
    ]
  },
  {
    "type": "market_analysis",
    "title": "Market Analysis",
    "description": "Description text",
    "tags": [
      {"icon": "users", "label": "High Footfall"},
      {"icon": "trending", "label": "Growing Area"}
    ],
    "tip": "Investment tip text here"
  },
  {
    "type": "location_options",
    "title": "Prime Location Options",
    "subtitle": "Strategic site selection",
    "locations": [
      {"name": "Location Name", "description": "Details", "rent": "₹25K-35K"}
    ]
  },
  {
    "type": "evaluation_table",
    "title": "Evaluation Matrix",
    "headers": ["Location", "Footfall", "Rent Range", "Score"],
    "rows": [
      ["Metro Station", "Very High", "₹25K-35K", "9/10"]
    ]
  },
  {
    "type": "related_queries",
    "title": "Related Queries",
    "queries": ["Query 1", "Query 2", "Query 3"]
  }
]
}

Available component types:
- summary_cards: For key metrics/stats
- recommendation_list: For listing options/franchises
- market_analysis: For market insights with tags
- location_options: For location suggestions
- evaluation_table: For comparison tables
- related_queries: For follow-up questions
- text: For simple text (use sparingly)

Choose appropriate components based on the query.

Important: Return ONLY the JSON object, no markdown, no extra text.

User Query: ${userMessage}`;

        conversationHistory.push({
            role: 'user',
            content: instructionPrompt
        });

        try {
            const response = await fetch(`${backendUrl}/api/claude`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    apiKey: apiKey,
                    data: {
                        model: 'claude-sonnet-4-20250514',
                        max_tokens: 4096,
                        tools: [
                            {
                                name: 'web_search',
                                description: 'Search the web for current information',
                                input_schema: {
                                    type: 'object',
                                    properties: {
                                        query: {
                                            type: 'string',
                                            description: 'The search query'
                                        }
                                    },
                                    required: ['query']
                                }
                            }
                        ],
                        messages: conversationHistory
                    }
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || 'API request failed');
            }

            const data = await response.json();
            
            if (data.stop_reason === 'tool_use') {
                const toolUse = data.content.find(block => block.type === 'tool_use');
                
                if (toolUse && toolUse.name === 'web_search') {
                    const searchQuery = toolUse.input.query;
                    setMessages(prev => [...prev, {
                        role: 'assistant',
                        content: `🔍 Searching: "${searchQuery}"...`,
                        isSearching: true
                    }]);

                    const searchResults = await performWebSearch(searchQuery);
                    
                    conversationHistory.push({
                        role: 'assistant',
                        content: data.content
                    });

                    conversationHistory.push({
                        role: 'user',
                        content: [
                            {
                                type: 'tool_result',
                                tool_use_id: toolUse.id,
                                content: JSON.stringify(searchResults)
                            }
                        ]
                    });

                    conversationHistory.push({
                        role: 'user',
                        content: 'Now please format the search results above into the JSON component structure I requested earlier. Remember to return ONLY valid JSON with the components array.'
                    });

                    const finalResponse = await fetch(`${backendUrl}/api/claude`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            apiKey: apiKey,
                            data: {
                                model: 'claude-sonnet-4-20250514',
                                max_tokens: 4096,
                                messages: conversationHistory
                            }
                        })
                    });

                    const finalData = await finalResponse.json();
                    const textBlock = finalData.content?.find(block => block.type === 'text');
                    
                    if (!textBlock || !textBlock.text) {
                        setMessages(prev => {
                            const filtered = prev.filter(msg => !msg.isSearching);
                            return [...filtered, {
                                role: 'assistant',
                                content: 'I found information but had trouble formatting it. Please try again.',
                                isError: true
                            }];
                        });
                        return;
                    }

                    const assistantMessage = textBlock.text;

                    setMessages(prev => {
                        const filtered = prev.filter(msg => !msg.isSearching);
                        return [...filtered, {
                            role: 'assistant',
                            content: parseStructuredResponse(assistantMessage),
                            hadSearch: true,
                            searchQuery: searchQuery,
                            isStructured: true
                        }];
                    });
                }
            } else {
                const assistantMessage = data.content.find(block => block.type === 'text')?.text || 
                                        'Sorry, I could not generate a response.';
                
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: parseStructuredResponse(assistantMessage),
                    isStructured: true
                }]);
            }

        } catch (error) {
            console.error('Error calling Claude API:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: `Error: ${error.message}. Please check your API keys and try again.`,
                isError: true
            }]);
        }
    };

    const handleRelatedQueryClick = async (query) => {
        if (isGenerating) return;

        setMessages(prev => [...prev, {
            role: 'user',
            content: query
        }]);

        setIsGenerating(true);
        await callClaudeAPI(query);
        setIsGenerating(false);
    };

    const handleSubmit = async () => {
        const q = query.trim();
        if (!q || isGenerating) return;

        setQuery("");
        setShowModal(true);
        setIsGenerating(true);

        setMessages(prev => [...prev, {
            role: 'user',
            content: q
        }]);

        await callClaudeAPI(q);
        setIsGenerating(false);
    };

    const closeModal = () => {
        setShowModal(false);
        inputRef.current?.focus();
    };

    // Lock body scroll when modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    return (
        <>
            <Toaster position="bottom-center" />
            <div className="max-w-2xl mx-auto">
                <div className="border-2 rounded-[20px] border-black">
                    <div className="relative bg-white rounded-3xl pt-6 pl-3">
                        <div className="flex items-center space-x-3 mt-1 mb-9 ml-2">
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Ask about franchises (e.g., 'suggest biryani franchise in Ghaziabad with 20% ROI')"
                                className="flex-1 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none text-base"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                disabled={isGenerating}
                            />
                        </div>

                        {/* Search Controls */}
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center space-x-2">
                                <div className='flex items-center gap-1 bg-[#FF61054D] p-1 rounded-[8px]'>
                                    <img onClick={() => quickGo('show offerings')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/a.svg" alt="Icon A" />
                                    <img onClick={() => quickGo('pricing plans')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/b.svg" alt="Icon B" />
                                </div>
                                <div className='flex items-center gap-1 bg-[#13A3B54D] p-1 rounded-[8px]'>
                                    <img onClick={() => quickGo('startups zone')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/c.svg" alt="Icon C" />
                                    <img onClick={() => quickGo('Investor page')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/d.svg" alt="Icon D" />
                                </div>
                                <div className='flex items-center gap-1 bg-[#6D3E934D] py-1 px-2 rounded-[8px]'>
                                    <img onClick={() => quickGo('franchise opportunities')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/e.svg" alt="Icon E" />
                                </div>
                            </div>

                            {/* Search Button */}
                            <div className="text-white p-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                                <button
                                
                                    onClick={toggleListening}
                                    disabled={!speechSupported || isGenerating}
                                    title={speechSupported ? (isListening ? 'Listening… click to stop' : 'Speak your query') : 'Voice input not supported'}
                                    className={`rounded-md p-1 transition-colors ${isListening ? 'bg-red-100' : 'bg-transparent'
                                                        } ${!speechSupported || isGenerating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                >
                                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 19V16.5455M7 16.5455C5.4087 16.5455 3.88258 15.8558 2.75736 14.6283C1.63214 13.4008 1 11.736 1 10M7 16.5455C8.5913 16.5455 10.1174 15.8558 11.2426 14.6283C12.3679 13.4008 13 11.736 13 10M7 14.0909C4.9375 14.0909 3.25 12.3138 3.25 10.1407V4.95018C3.25 2.77709 4.9375 1 7 1C9.0625 1 10.75 2.77709 10.75 4.95018V10.1407C10.75 12.3138 9.0625 14.0909 7 14.0909Z" stroke={isListening ? '#ef4444' : 'black'} strokeOpacity={isListening ? '0.8' : '0.3'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button onClick={handleSubmit} disabled={isGenerating || !query.trim()} aria-label="Submit query">
                                    <div className={`w-6 h-6 bg-white rounded-sm opacity-90 flex items-center justify-center ${isGenerating || !query.trim() ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
                                        <img src="/abhinay/cube.png" alt="send" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* View Chat Button */}
                {/* {messages.length > 0 && (
                    <div className="mt-4 flex items-center justify-center gap-3">
                        <button
                            onClick={() => setShowModal(true)}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                        >
                            <Bot className="w-5 h-5" />
                            View Chat History
                        </button>
                        <button
                            onClick={() => setMessages([])}
                            className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
                        >
                            Clear History
                        </button>
                    </div>
                )} */}
            </div>

            {/* Full-Screen Modal for AI Response */}
            {showModal && (
                <div className="fixed inset-0 z-[9999] bg-white overflow-hidden">
                    <div className="relative w-full h-full flex flex-col">
                        {/* Close Button - Top Right */}
                        <div className="absolute top-4 right-4 z-10">
                            <button
                                onClick={closeModal}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors bg-white shadow-md"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        {/* Messages Container */}
                        <div ref={modalContentRef} className="flex-1 overflow-y-auto p-4">
                            <div className="max-w-4xl mx-auto space-y-4">
                                {messages.map((message, index) => (
                                    <div key={index}>
                                        {message.role === 'user' ? (
                                            <div className="flex justify-end mb-4">
                                                <div className="max-w-[80%] bg-indigo-600 text-white rounded-lg p-4">
                                                    <p className="whitespace-pre-wrap">{message.content}</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4">
                                                {message.hadSearch && (
                                                    <div className="flex items-center gap-2 text-xs text-indigo-600 mb-4 pb-3 border-b border-gray-200">
                                                        <Search className="w-4 h-4" />
                                                        <span>Searched the web: {message.searchQuery}</span>
                                                    </div>
                                                )}
                                                
                                                {message.isSearching ? (
                                                    <div className="flex items-center gap-2">
                                                        <Loader2 className="w-5 h-5 animate-spin text-indigo-600" />
                                                        <span className="text-gray-700">{message.content}</span>
                                                    </div>
                                                ) : message.isError ? (
                                                    <p className="text-red-600">{message.content}</p>
                                                ) : message.isStructured && message.content.components ? (
                                                    <div className="space-y-6">
                                                        {message.content.components.map((component, idx) => (
                                                            <ComponentRenderer 
                                                                key={idx} 
                                                                data={component} 
                                                                onQueryClick={handleRelatedQueryClick}
                                                            />
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p className="text-gray-700 whitespace-pre-wrap">{message.content}</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {isGenerating && (
                                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Analyzing and preparing your response...</span>
                                        </div>
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Footer - Input stays at bottom */}
                        <div className="bg-white border-gray-200 pl-4 pr-4 pb-4">
                            <div className="max-w-4xl mx-auto">
                                <div className="border-2 rounded-[20px] border-gray-300">
                                    <div className="relative bg-white rounded-3xl pt-6 pl-3">
                                        <div className="flex items-center space-x-3 mt-1 mb-9 ml-2">
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                placeholder="Ask me anything..."
                                                className="flex-1 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none text-base"
                                                value={query}
                                                onChange={(e) => setQuery(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                                disabled={isGenerating}
                                            />
                                        </div>

                                        {/* Search Controls */}
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center space-x-2">
                                                <div className='flex items-center gap-1 bg-[#FF61054D] p-1 rounded-[8px]'>
                                                    <img onClick={() => quickGo('show offerings')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/a.svg" alt="Icon A" />
                                                    <img onClick={() => quickGo('pricing plans')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/b.svg" alt="Icon B" />
                                                </div>
                                                <div className='flex items-center gap-1 bg-[#13A3B54D] p-1 rounded-[8px]'>
                                                    <img onClick={() => quickGo('startups zone')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/c.svg" alt="Icon C" />
                                                    <img onClick={() => quickGo('Investor page')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/d.svg" alt="Icon D" />
                                                </div>
                                                <div className='flex items-center gap-1 bg-[#6D3E934D] py-1 px-2 rounded-[8px]'>
                                                    <img onClick={() => quickGo('franchise opportunities')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/e.svg" alt="Icon E" />
                                                </div>
                                            </div>

                                            {/* Search Button */}
                                            <div className="text-white p-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                                                <button
                                                    onClick={toggleListening}
                                                    disabled={!speechSupported || isGenerating}
                                                    title={speechSupported ? (isListening ? 'Listening… click to stop' : 'Speak your query') : 'Voice input not supported'}
                                                    className={`rounded-md p-1 transition-colors ${isListening ? 'bg-red-100' : 'bg-transparent'
                                                        } ${!speechSupported || isGenerating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                                >
                                                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 19V16.5455M7 16.5455C5.4087 16.5455 3.88258 15.8558 2.75736 14.6283C1.63214 13.4008 1 11.736 1 10M7 16.5455C8.5913 16.5455 10.1174 15.8558 11.2426 14.6283C12.3679 13.4008 13 11.736 13 10M7 14.0909C4.9375 14.0909 3.25 12.3138 3.25 10.1407V4.95018C3.25 2.77709 4.9375 1 7 1C9.0625 1 10.75 2.77709 10.75 4.95018V10.1407C10.75 12.3138 9.0625 14.0909 7 14.0909Z" stroke={isListening ? '#ef4444' : 'black'} strokeOpacity={isListening ? '0.8' : '0.3'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <button onClick={handleSubmit} disabled={isGenerating || !query.trim()} aria-label="Submit query">
                                                    <div className={`w-6 h-6 bg-white rounded-sm opacity-90 flex items-center justify-center ${isGenerating || !query.trim() ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
                                                        <img src="/abhinay/cube.png" alt="send" />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )

}

// Insights import was unused; removed to avoid lint warnings
export default function Franchise() {

    //order is so important here
    const industries = [
        { id: 1, label: "Restaurant Franchise", icon: "/abhinay/franchise/icons/1.svg" },
        { id: 2, label: "Business professional", icon: "/abhinay/franchise/icons/2.svg" },
        { id: 3, label: "Business opportunities", icon: "/abhinay/franchise/icons/10.svg" },
        { id: 4, label: "Cleaning Franchise", icon: "/abhinay/franchise/icons/19.svg" },
        { id: 5, label: "Property & Real estate", icon: "/abhinay/franchise/icons/17.svg" },
        { id: 6, label: "Education franchise", icon: "/abhinay/franchise/icons/14.svg" },
        { id: 7, label: "Health care franchise", icon: "/abhinay/franchise/icons/11.svg" },
        { id: 8, label: "Home based franchise", icon: "/abhinay/franchise/icons/15.svg" },
        { id: 9, label: "Home services franchise", icon: "/abhinay/franchise/icons/18.svg" },
        { id: 10, label: "Fitness franchise", icon: "/abhinay/franchise/icons/16.svg" },
        { id: 11, label: "Retail franchise", icon: "/abhinay/franchise/icons/8.svg" },
        { id: 12, label: "Franchise services provider", icon: "/abhinay/franchise/icons/12.svg" },
        { id: 13, label: "Pet franchise", icon: "/abhinay/franchise/icons/21.svg" },
        { id: 14, label: "Health & beauty", icon: "/abhinay/franchise/icons/20.svg" },
        { id: 15, label: "Fast food franchise", icon: "/abhinay/franchise/icons/13.svg" },
        { id: 16, label: "Online franchise", icon: "/abhinay/franchise/icons/9.svg" },
        { id: 17, label: "Computer & internet", icon: "/abhinay/franchise/icons/3.svg" },
        { id: 18, label: "Food franchise", icon: "/abhinay/franchise/icons/7.svg" },
    ];
    const cities = [
        { id: 1, label: "delhi", icon: "/abhinay/franchise/cities/delhi.jpg" },
        { id: 2, label: "bengaluru", icon: "/abhinay/franchise/cities/bengaluru.jpg" },
        { id: 3, label: "hyderabad", icon: "/abhinay/franchise/cities/hyderabad.jpg" },
        { id: 4, label: "ahmedabad", icon: "/abhinay/franchise/cities/ahmedabad.png" },
        { id: 5, label: "pune", icon: "/abhinay/franchise/cities/pune.jpg" },
        { id: 6, label: "kolkata", icon: "/abhinay/franchise/cities/kolkata.jpg" },
        { id: 7, label: "chennai", icon: "/abhinay/franchise/cities/chennai.png" },
        { id: 8, label: "Mumbai", icon: "/abhinay/franchise/cities/mumbai.jpg" }
    ]
    const stats = [
        { label: "Businesses", value: "4000+" },
        { label: "Investors", value: "2 Lakhs" },
        { label: "Industries", value: "100+" },
        { label: "Investment size", value: "20K to 4 Cr" },
    ];
    const items = [
        {
            location: "Gurgaon, India",
            title: "Natural Salon",
            since: "1997",
            logoUrl: "/abhinay/franchise/rrom.jpg",
            description:
                "Own a Natural Salon Franchise – where beauty meets wellness with eco-friendly products, sustainable care, and a luxurious experience for every client...",
            rating: 4.5,
            tags: ["Unit", "Verified", "2022", "Beauty & Health", "High brand recall"],
            stats: { space: "150-250 Sq Ft.", outlets: "350", investment: "₹20-30 Lakhs" },
            highlights: "High brand recall, training support",
            verified: true,
            ctaText: "Send Inquiry",
            c: "#DD75AB"
        },
        {
            location: "Gurgaon, India",
            title: "Haldiram’s",
            since: "1937",
            logoUrl: "/abhinay/franchise/8.png",
            description:
                "Own a Haldiram’s Franchise – bringing India’s favorite snacks, sweets, and authentic flavors to your community with a trusted brand legacy.",
            rating: 4.5,
            tags: ["Unit", "Verified", "2022", "Food & Beverage", "Pan-India presence"],
            stats: { space: "150-250 Sq Ft.", outlets: "350", investment: "₹25-35 Lakhs" },
            highlights: "Pan-India presence, trusted brand",
            verified: true,
            ctaText: "Send Inquiry",
            c: "#FF6265"
        },
        {
            location: "",
            title: "GolfEdge Academy",
            since: "1997",
            logoUrl: "/abhinay/franchise/golf.jpg",
            description:
                "Own a Natural Salon Franchise – where beauty meets wellness with eco-friendly products, sustainable care, and a luxurious experience for every client...",
            rating: 4.2,
            tags: ["Unit", "Verified", "2022", "Beauty & Health", "Niche sports academy"],
            stats: { space: "150-250 Sq Ft.", outlets: "350", investment: "₹15-25 Lakhs" },
            highlights: "Niche sports academy, rising demand",
            verified: true,
            ctaText: "Send Inquiry",
            c: "#7DB3EF"
        },
    ];
    const categories = [
        { name: "Automobiles", icon: <FaCar /> },
        { name: "Beauty & salon", icon: <GiScissors /> },
        { name: "Business", icon: <FaUserTie /> },
        { name: "Dealers & Distribution", icon: <FaTruck /> },
        { name: "Food", icon: <FaUtensils /> },
        { name: "Health and Wellness", icon: <FaHeartbeat /> },
        { name: "Education", icon: <FaBook /> },
        { name: "Retail", icon: <FaStore /> },
        { name: "Courier Logistics", icon: <MdLocalShipping /> },
    ];

    return (
        <div>
            <div className="w-full px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10">
                <div className="mx-auto text-center">
                    <div className="flex flex-col items-center justify-center">
                        <h1
                            className="mb-3 sm:mb-2 font-bold leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl"
                            style={{ fontFamily: 'Space Grotesk' }}
                        >
                            Discover <span className="text-[#4A53FA]">Franchise</span> And <span className="hidden sm:inline"><br /></span>
                            <span className="text-[#4A53FA]">Dealership</span> Opportunities
                        </h1>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-start sm:justify-center mt-6 sm:mt-8 gap-2 sm:gap-3 text-xs sm:text-sm mb-4 sm:mb-6 overflow-x-auto scrollbar-hide px-1">
                        <button className="flex-shrink-0 px-3 sm:px-4 py-2.5 sm:py-2 rounded-[5px] bg-white text-gray-700 border-2 border-gray-300 font-semibold hover:bg-[#4A53FA] hover:text-white hover:border-[#4A53FA] transition-all duration-200 min-w-fit whitespace-nowrap">Franchise</button>
                        <button className="flex-shrink-0 px-3 sm:px-4 py-2.5 sm:py-2 rounded-[5px] bg-white text-gray-700 border-2 border-gray-300 font-semibold hover:bg-[#4A53FA] hover:text-white hover:border-[#4A53FA] transition-all duration-200 min-w-fit whitespace-nowrap">Brand Leasing</button>
                        <button className="flex-shrink-0 px-3 sm:px-4 py-2.5 sm:py-2 rounded-[5px] bg-white text-gray-700 border-2 border-gray-300 font-semibold hover:bg-[#4A53FA] hover:text-white hover:border-[#4A53FA] transition-all duration-200 min-w-fit whitespace-nowrap">Dealer/Distributer</button>

                    </div>

                    {/* Search Bar */}
                    <Chatbotsub />

                    {/* Subtext */}
                    <p className="text-sm sm:text-md text-gray-500 mt-3 sm:mt-4 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
                        Join a dynamic platform where bold startups meet visionary investors.
                        Fuel growth, form partnerships, and shape the future—together.
                    </p>

                    {/* Logo Row */}
                    <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-3 lg:gap-4 flex-wrap px-2">
                        {(() => {
                            const logos = ["1", "2", "3", "4", "5", "6", "7", "8", "n"];
                            const totalLogos = logos.length;
                            const middleIndex = Math.floor(totalLogos / 2);
                            return logos.map((logo, i) => {
                                const distanceFromMiddle = Math.abs(i - middleIndex);
                                // Define sizes based on distance from middle - responsive
                                const sizes = {
                                    0: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20", // Middle (largest)
                                    1: "w-11 h-11 sm:w-14 sm:h-14 lg:w-18 lg:h-18", // Next to middle
                                    2: "w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16", // Second from middle
                                    3: "w-9 h-9 sm:w-10 sm:h-10 lg:w-14 lg:h-14" // Edges (smallest)
                                };
                                const sizeClass = sizes[distanceFromMiddle] || "w-9 h-9 sm:w-10 sm:h-10 lg:w-14 lg:h-14";
                                return (
                                    <div key={i} className={`${sizeClass} rounded-full bg-white shadow-md flex items-center justify-center p-2 sm:p-3 hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95`}>
                                        <img src={`/abhinay/franchise/${logo}.png`} alt={logo} className="max-w-full max-h-full object-contain" loading="lazy" />
                                    </div>
                                );
                            });
                        })()}
                    </div>


                </div>
            </div>
            <div className="w-full">
                <div className="mx-auto w-fit bg-[#13A3B533] text-center px-6 sm:px-10 lg:px-16 text-sm sm:text-base font-semibold py-2 rounded-[30px]">
                    popular listing
                </div>
            </div>
            <div className="w-full px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10 space-y-6 sm:space-y-8">

                <p className="text-center text-xl sm:text-2xl leading-relaxed">
                    Explore the top <span className="font-bold"> franchise opportunities </span> and discover the ones with<span className="hidden sm:inline"><br /></span>
                    the strongest return on investment potential
                </p>
            </div>
            <div className="w-full flex justify-center px-3 sm:px-4">
                <div className="mx-auto w-full sm:w-fit flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    {/* Categories Scrollable Bar */}
                    <div className="flex items-center gap-6 sm:gap-8 px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-full shadow border overflow-x-auto scrollbar-hide">
                        {categories.map((cat, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center justify-center text-blue-600 cursor-pointer hover:text-blue-800 transition"
                            >
                                <div className="text-xl sm:text-2xl">{cat.icon}</div>
                                <span className="text-[10px] sm:text-xs mt-1 whitespace-nowrap">{cat.name}</span>
                            </div>
                        ))}

                        {/* Arrow */}
                        <div className="ml-2 sm:ml-4 text-blue-600 text-lg sm:text-xl cursor-pointer hover:text-blue-800" aria-hidden>
                            <IoIosArrowForward />
                        </div>
                    </div>

                    {/* Add Filter Button */}
                    <button className="flex items-center gap-1 px-4 py-2 border rounded-full text-blue-600 hover:bg-blue-50 transition self-start sm:self-auto">
                        <FiFilter />
                        <span className="text-sm">Add Filter</span>
                    </button>
                </div>
            </div>
            <div className="w-full">
                <div className="mx-auto w-fit bg-[#FF6105] text-white text-center px-6 sm:px-10 lg:px-16 text-sm sm:text-base font-semibold py-2 rounded-[30px] mt-10">
                    popular listing
                </div>
            </div>
            <FcardGrid
                items={items}
                className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 pt-6 sm:pt-8 lg:pt-10 pb-0"
                gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            />
            <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 mt-16">
                <p className="font-light italic text-2xl sm:text-3xl leading-tight">
                    Top Categories of Distribution
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <div className="flex flex-col items-center gap-2">
                        <img src="/abhinay/franchise/distribution/1.jpg" alt="Food and Beverage" className="w-full rounded-[10px] object-cover" style={{ aspectRatio: '1 / 1' }} loading="lazy" />
                        <p>Food &amp; Beverage</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/abhinay/franchise/distribution/3.png" alt="Pharmaceutical" className="w-full rounded-[10px] object-cover" style={{ aspectRatio: '1 / 1' }} loading="lazy" />
                        <p>Pharmaceutical</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/abhinay/franchise/distribution/2.jpg" alt="Electronic" className="w-full rounded-[10px] object-cover" style={{ aspectRatio: '1 / 1' }} loading="lazy" />
                        <p>Electronic</p>
                    </div>
                </div>


                {/* Heading */}
                <h2 className="text-3xl font-semibold mt-16 mb-8">Explore by Industry</h2>

                {/* Industry Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {industries.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-2 p-2">
                                {/* SVG Icon */}
                                <img src={item.icon} alt={item.label} className="w-7 h-7" />
                                <span className="text-sm">{item.label}</span>
                            </div>
                            <X size={16} className="text-gray-500" />
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="grid sm:grid-cols-2 gap-6 mt-12">
                    {/* Blue Card */}
                    <div className="bg-gradient-to-r from-indigo-500 to-blue-700 text-white p-6 rounded-2xl shadow-md">
                        <h3 className="text-lg font-semibold mb-2">
                            List Your Franchise/Distributorship
                        </h3>
                        <p className="mb-4 text-sm">
                            Expand Your Reach to Potential Buyers
                        </p>
                        <button className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-100">
                            Register for free →
                        </button>
                    </div>

                    {/* Pink/Purple Card */}
                    <div className="bg-gradient-to-r from-pink-500 to-purple-700 text-white p-6 rounded-2xl shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Start Your Business</h3>
                        <p className="mb-4 text-sm">
                            Invest with Franchise or Take Distributorship
                        </p>
                        <button className="bg-white text-pink-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-100">
                            Get Started →
                        </button>
                    </div>
                </div>
                <div className="text-white bg-[url('/abhinay/franchise/hlc.svg')] bg-cover bg-center bg-no-repeat h-64 sm:h-60 lg:h-72 mt-7 rounded-2xl flex flex-col justify-between p-6 sm:p-8">


                    <p className="w-full sm:w-3/4 lg:w-1/2 text-base sm:text-lg leading-tight">
                        looking to expand your franchise or find the perfect franchise <br />opportunity ?  Franchise is your one-step stop for success We <br /> connect franchise with qualified franchise cross various industries.

                    </p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
                        How LeMiCi Can <br />
                        Help Your Business Thrive
                    </p>

                </div>
            </div>

            <div className="w-full mt-20 mb-10 flex items-center justify-center px-3 sm:px-4">
                <Svg />

            </div>
            <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 mb-20">
                <p className="text-[#4A53FA]">
                    Why you should choose LeMiCi
                </p>
                <h1 className="text-xl sm:text-2xl mt-2 leading-tight">
                    Explore franchise opportunities <br />
                    across thriving cities !
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 lg:gap-24 mt-6">
                    {cities.map((city) => (
                        <div key={city.id} className="text-center">
                            <div className="w-full aspect-square rounded-[20px] overflow-hidden">
                                <img
                                    src={city.icon}
                                    alt={city.label}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <p className="text-[#4A53FA] text-sm sm:text-base font-medium mt-2 capitalize">{city.label}</p>
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-end">
                    <button
                        className="border p-2 rounded-xl text-sm border-2 border-gray-300 font-semibold mt-2 hover:underline"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Back to top"
                    >
                        Back to top
                    </button>
                </div>
                <div className="mt-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className={`shadow p-8 sm:p-10 rounded-xl text-center font-semibold ${idx === 1 ? "bg-blue-500 text-white" : "bg-white text-blue-600"
                                    }`}
                            >
                                <p className="text-xl sm:text-2xl">{stat.value}</p>
                                <p className="text-xs sm:text-sm mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center gap-3 my-8">
                <NavLink
                    to="/abhinay/franchise/oppurtunties"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-full border shadow-sm ${isActive ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-700'}`
                    }
                    aria-label="Go to Franchise Opportunities"
                >
                    1
                </NavLink>
                <NavLink
                    to="/abhinay/franchise/details"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-full border shadow-sm ${isActive ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-700'}`
                    }
                    aria-label="Go to Franchise Details"
                >
                    2
                </NavLink>
                <NavLink
                    to="/abhinay/franchise/category"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-full border shadow-sm ${isActive ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-700'}`
                    }
                    aria-label="Go to Business Categories"
                >
                    3
                </NavLink>
            </div>

        </div>
    );
}
