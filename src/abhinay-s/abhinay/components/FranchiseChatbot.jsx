import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Loader2, Search, AlertCircle, TrendingUp, MapPin, Users, Building, Clock, Star } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
const backendUrl = "https://cuddly-fiesta-wr76xgjx5qwj2jrr-3001.app.github.dev";
const claudeApi = import.meta.env.VITE_claudeApi;
const tavilyApi = import.meta.env.VITE_tavilyApi;
// Dynamic Component Renderers
const ComponentRenderer = ({ data, onQueryClick }) => {
  if (!data || !data.type) return null;

  // Debug log
  if (data.type === 'related_queries') {
    console.log('Rendering RelatedQueries with onQueryClick:', !!onQueryClick);
  }

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
    console.log('Query clicked:', query);
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
            style={{ cursor: 'pointer' }}
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

// Chatbot Input Component (adapted from Chatbotsub)
const ChatbotInput = ({ onSubmit, isLoading }) => {
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize SpeechRecognition
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

  const handleSubmit = () => {
    const q = query.trim();
    if (!q || isLoading) return;
    onSubmit(q);
    setQuery("");
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <div className="max-w-4xl mx-auto p-4">
        <div className="border-2 rounded-[20px] border-gray-300 bg-white shadow-sm">
          <div className="relative rounded-3xl pt-6 pl-3">
            <div className="flex items-center space-x-3 mt-1 mb-9 ml-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none text-base"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />
            </div>

            {/* Search Controls */}
            <div className="flex items-center justify-between mb-1 px-2">
              <div className="flex items-center space-x-2">
                <div className='flex items-center gap-1 bg-[#FF61054D] p-1 rounded-[8px]'>
                  <img onClick={() => quickGo('Suggest a biryani franchise for Govindapuram')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/a.svg" alt="Quick 1" />
                  <img onClick={() => quickGo('Best franchise opportunities under 10 lakhs')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/b.svg" alt="Quick 2" />
                </div>
                <div className='flex items-center gap-1 bg-[#13A3B54D] p-1 rounded-[8px]'>
                  <img onClick={() => quickGo('High ROI franchise in Delhi NCR')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/c.svg" alt="Quick 3" />
                  <img onClick={() => quickGo('Food franchise opportunities')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/d.svg" alt="Quick 4" />
                </div>
                <div className='flex items-center gap-1 bg-[#6D3E934D] py-1 px-2 rounded-[8px]'>
                  <img onClick={() => quickGo('franchise opportunities')} className='hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer' src="/abhinay/images/e.svg" alt="Quick 5" />
                </div>
              </div>

              {/* Voice & Submit Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleListening}
                  disabled={!speechSupported || isLoading}
                  title={speechSupported ? (isListening ? 'Listening… click to stop' : 'Speak your query') : 'Voice input not supported'}
                  className={`rounded-md p-1 transition-colors ${isListening ? 'bg-red-100' : 'bg-transparent'
                    } ${!speechSupported || isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 19V16.5455M7 16.5455C5.4087 16.5455 3.88258 15.8558 2.75736 14.6283C1.63214 13.4008 1 11.736 1 10M7 16.5455C8.5913 16.5455 10.1174 15.8558 11.2426 14.6283C12.3679 13.4008 13 11.736 13 10M7 14.0909C4.9375 14.0909 3.25 12.3138 3.25 10.1407V4.95018C3.25 2.77709 4.9375 1 7 1C9.0625 1 10.75 2.77709 10.75 4.95018V10.1407C10.75 12.3138 9.0625 14.0909 7 14.0909Z" stroke={isListening ? '#ef4444' : 'black'} strokeOpacity={isListening ? '0.8' : '0.3'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button onClick={handleSubmit} disabled={isLoading || !query.trim()} aria-label="Submit query">
                  <div className={`w-6 h-6 bg-indigo-600 rounded-sm flex items-center justify-center ${isLoading || !query.trim() ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-indigo-700'}`}>
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 text-white" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Main Component
export default function FranchiseChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey] = useState(claudeApi);
  const [tavilyApiKey] = useState(tavilyApi);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callClaudeAPI = async (userMessage) => {
    if (!apiKey) {
      alert('Please enter your Claude API key first');
      return;
    }
    
    if (!tavilyApiKey) {
      alert('Please enter your Tavily API key first');
      return;
    }

    const conversationHistory = messages.map(msg => ({
      role: msg.role,
      content: typeof msg.content === 'string' ? msg.content : JSON.stringify(msg.content)
    }));

    // SIMPLIFIED SYSTEM INSTRUCTION - embedded in first user message
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
      console.log('Sending request to Claude...');
      console.log('Messages count:', conversationHistory.length);

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
      console.log('First response:', data);
      
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
          console.log('Search results:', searchResults);
          
          // Add assistant's tool use request
          conversationHistory.push({
            role: 'assistant',
            content: data.content  // This is already an array from Claude
          });

          // Add tool results
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

          // Add explicit instruction for Claude to now format the results
          conversationHistory.push({
            role: 'user',
            content: 'Now please format the search results above into the JSON component structure I requested earlier. Remember to return ONLY valid JSON with the components array.'
          });

          console.log('Sending second request with search results...');
          console.log('Messages count:', conversationHistory.length);

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
          
          console.log('========================================');
          console.log('FULL FINAL RESPONSE FROM CLAUDE:');
          console.log(JSON.stringify(finalData, null, 2));
          console.log('========================================');

          console.log('Content array:', finalData.content);
          console.log('Content length:', finalData.content?.length);

          if (finalData.content && finalData.content.length > 0) {
            finalData.content.forEach((block, index) => {
              console.log(`Content block ${index}:`, block.type);
              if (block.type === 'text') {
                console.log(`Text content (first 500 chars):`, block.text.substring(0, 500));
              }
            });
          }

          const textBlock = finalData.content?.find(block => block.type === 'text');
          
          if (!textBlock || !textBlock.text) {
            console.error('No text block found in response!');
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
          console.log('Extracted assistant message length:', assistantMessage.length);

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
  const parseStructuredResponse = (responseText) => {
    console.log('Raw response from Claude:', responseText);
    
    try {
      // Remove markdown code blocks if present
      let cleanedText = responseText
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim();
      
      console.log('Cleaned response:', cleanedText);
      
      const parsed = JSON.parse(cleanedText);
      console.log('Successfully parsed JSON:', parsed);
      return parsed;
    } catch (e) {
      console.error('Failed to parse JSON:', e);
      console.error('Problematic text:', responseText);
      
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

  const handleSubmit = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, {
      role: 'user',
      content: userMessage
    }]);

    setIsLoading(true);
    await callClaudeAPI(userMessage);
    setIsLoading(false);
  };

  const handleChatbotSubmit = async (userMessage) => {
    if (!userMessage || isLoading) return;
    
    setMessages(prev => [...prev, {
      role: 'user',
      content: userMessage
    }]);

    setIsLoading(true);
    await callClaudeAPI(userMessage);
    setIsLoading(false);
  };

  const handleRelatedQueryClick = async (query) => {
    console.log('handleRelatedQueryClick called with:', query);
    
    if (isLoading) {
      console.log('Already loading, skipping...');
      return;
    }

    console.log('Adding query to messages...');
    
    // Add the query as a user message
    setMessages(prev => [...prev, {
      role: 'user',
      content: query
    }]);

    // Process the query
    console.log('Starting API call...');
    setIsLoading(true);
    await callClaudeAPI(query);
    setIsLoading(false);
    console.log('API call completed');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">AI Search Assistant</h1>
              <p className="text-xs text-gray-500">Ask me anything, I'll search and analyze for you</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Welcome to AI Search Assistant
              </h2>
              <p className="text-gray-500 mb-6">
                Ask me anything and I'll search the web and present the information beautifully
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                <button
                  onClick={() => setInput('Suggest a biryani franchise for Govindapuram area in Ghaziabad which gives minimum 20% ROI with investment of maximum 7-8 lakhs')}
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all text-left"
                >
                  <p className="text-sm font-medium text-gray-700">Biryani Franchise</p>
                  <p className="text-xs text-gray-500 mt-1">Get franchise recommendations with ROI analysis</p>
                </button>
                <button
                  onClick={() => setInput('Help me evaluate the best location in Govindapuram for a biryani outlet')}
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all text-left"
                >
                  <p className="text-sm font-medium text-gray-700">Location Analysis</p>
                  <p className="text-xs text-gray-500 mt-1">Find the best location for your business</p>
                </button>
              </div>
            </div>
          )}

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

          {isLoading && (
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

      <ChatbotInput onSubmit={handleChatbotSubmit} isLoading={isLoading} />
    </div>
  );
}