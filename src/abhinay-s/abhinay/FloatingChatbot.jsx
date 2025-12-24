import React, { useState, useRef, useEffect, useCallback } from "react";
import  {useChatbot}  from './ChatbotContext';
import { Toaster, toast } from "react-hot-toast";
import {
  X,
  Search,
  Loader2,
  TrendingUp,
  Building,
  Users,
  MapPin,
  Star,
} from "lucide-react";

const backendUrl = "https://ai-overview-backend.onrender.com";
const claudeApi = import.meta.env.VITE_claudeApi;
const tavilyApi = import.meta.env.VITE_tavilyApi;

const prompt = `Please analyze the following query and respond with a JSON structure containing UI components.

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

User Query:`;

// Component Renderers for structured responses

const ComponentRenderer = ({ data, onQueryClick }) => {
  if (!data || !data.type) return null;

  switch (data.type) {
    case "summary_cards":
      return <SummaryCards data={data} />;
    case "recommendation_list":
      return <RecommendationList data={data} />;
    case "market_analysis":
      return <MarketAnalysis data={data} />;
    case "location_options":
      return <LocationOptions data={data} />;
    case "evaluation_table":
      return <EvaluationTable data={data} />;
    case "related_queries":
      return <RelatedQueries data={data} onQueryClick={onQueryClick} />;
    case "text":
      return <TextContent data={data} />;
    default:
      return null;
  }
};

const SummaryCards = ({ data }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold text-gray-800 mb-2">{data.title}</h2>
    {data.subtitle && (
      <p className="text-gray-600 text-sm mb-4">{data.subtitle}</p>
    )}
    <div className="grid grid-cols-2 gap-4">
      {data.cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            {card.icon === "trending" && (
              <TrendingUp className="w-5 h-5 text-indigo-600" />
            )}
            {card.icon === "money" && <span className="text-xl">₹</span>}
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
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3 hover:shadow-md transition-shadow"
        >
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
        <span
          key={idx}
          className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm flex items-center gap-2"
        >
          {tag.icon === "users" && <Users className="w-4 h-4" />}
          {tag.icon === "trending" && <TrendingUp className="w-4 h-4" />}
          {tag.icon === "building" && <Building className="w-4 h-4" />}
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
    {data.subtitle && (
      <p className="text-gray-600 text-sm mb-4">{data.subtitle}</p>
    )}
    <div className="space-y-3">
      {data.locations.map((loc, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3"
        >
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">{loc.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{loc.description}</p>
            {loc.rent && (
              <p className="text-xs text-gray-500 mt-1">Rent: {loc.rent}</p>
            )}
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
              <th
                key={idx}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
              >
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
      <h3 className="text-sm font-semibold text-gray-600 mb-3">
        {data.title || "Related Queries"}
      </h3>
      <div className="space-y-2">
        {data.queries.map((query, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleClick(query)}
            className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-300 rounded-lg text-sm text-gray-700 transition-all flex items-center justify-between group cursor-pointer shadow-sm hover:shadow-md"
          >
            <span className="font-medium">{query}</span>
            <span className="text-gray-400 group-hover:text-indigo-600 transition-colors text-lg">
              →
            </span>
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

/**
 * ChatbotSub - Reusable AI Chatbot Component
 *
 * @param {Object} props
 * @param {string} props.placeholder - Custom placeholder text for the input
 * @param {string} props.context - Context/domain for the chatbot (e.g., 'franchise', 'investment', 'products')
 * @param {Array} props.quickActions - Array of quick action buttons {icon: string, label: string, action: function}
 */
const FloatingChatbot = ({
  placeholder = "Ask me anything...",
  context = "general",
  quickActions = [],
}) => {
  const { setShowChatbot } = useChatbot();
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

  // Initialize SpeechRecognition
  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeechSupported(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-IN";
      recognition.continuous = false;
      recognition.interimResults = true;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = (event) => {
        setIsListening(false);
        const msg =
          event.error === "not-allowed"
            ? "Microphone permission denied. Please allow access in your browser settings."
            : event.error === "no-speech"
            ? "Didn't catch that. Try speaking again."
            : "Voice input error. Please try again.";
        toast.error(msg);
      };

      recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        const text = transcript.trim();
        if (text) setQuery(text);
      };

      recognitionRef.current = recognition;
    } catch (e) {
      setSpeechSupported(false);
      console.error("SpeechRecognition setup failed:", e);
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
      } catch {}
    };
  }, []);

  const toggleListening = useCallback(() => {
    const recognition = recognitionRef.current;
    if (!recognition) {
      toast("Voice input is not supported in this browser.");
      return;
    }
    try {
      if (isListening) {
        recognition.stop();
      } else {
        recognition.start();
      }
    } catch (e) {
      console.debug("Speech start/stop error:", e);
    }
  }, [isListening]);

  // Auto-scroll to latest message
  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].role === "assistant"
    ) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Auto-scroll modal content
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
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const parseStructuredResponse = (responseText) => {
    try {
      let cleanedText = responseText
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      const parsed = JSON.parse(cleanedText);
      return parsed;
    } catch (e) {
      console.error("Failed to parse JSON:", e);
      return {
        components: [
          {
            type: "text",
            content: responseText,
          },
        ],
      };
    }
  };

  const performWebSearch = async (query) => {
    if (!tavilyApiKey) {
      return {
        error: "Tavily API key not provided",
        results: [],
      };
    }

    try {
      const response = await fetch(`${backendUrl}/api/tavily`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: tavilyApiKey,
          query: query,
          search_depth: "basic",
          include_answer: true,
          include_raw_content: false,
          max_results: 5,
        }),
      });

      if (!response.ok) {
        throw new Error(`Tavily API error: ${response.status}`);
      }

      const data = await response.json();

      return {
        answer: data.answer || "",
        results:
          data.results?.map((result) => ({
            title: result.title,
            url: result.url,
            content: result.content,
            score: result.score,
          })) || [],
      };
    } catch (error) {
      console.error("Tavily search error:", error);
      return {
        error: error.message,
        results: [],
      };
    }
  };

  const callClaudeAPI = async (userMessage) => {
    if (!apiKey) {
      toast.error("Claude API key not configured");
      return;
    }

    if (!tavilyApiKey) {
      toast.error("Tavily API key not configured");
      return;
    }

    const conversationHistory = messages.map((msg) => ({
      role: msg.role,
      content:
        typeof msg.content === "string"
          ? msg.content
          : JSON.stringify(msg.content),
    }));

    const contextualInstruction =
      context !== "general"
        ? `Context: This query is related to ${context}. Please tailor your response accordingly.\n\n`
        : "";
    // respective pages for prompts
    const instructionPrompt = `${contextualInstruction} ${prompt} ${userMessage}`;

    conversationHistory.push({
      role: "user",
      content: instructionPrompt,
    });

    try {
      const response = await fetch(`${backendUrl}/api/claude`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiKey: apiKey,
          data: {
            model: "claude-sonnet-4-20250514",
            max_tokens: 4096,
            tools: [
              {
                name: "web_search",
                description: "Search the web for current information",
                input_schema: {
                  type: "object",
                  properties: {
                    query: {
                      type: "string",
                      description: "The search query",
                    },
                  },
                  required: ["query"],
                },
              },
            ],
            messages: conversationHistory,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "API request failed");
      }

      const data = await response.json();

      if (data.stop_reason === "tool_use") {
        const toolUse = data.content.find((block) => block.type === "tool_use");

        if (toolUse && toolUse.name === "web_search") {
          const searchQuery = toolUse.input.query;
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: `🔍 Searching: "${searchQuery}"...`,
              isSearching: true,
            },
          ]);

          const searchResults = await performWebSearch(searchQuery);

          conversationHistory.push({
            role: "assistant",
            content: data.content,
          });

          conversationHistory.push({
            role: "user",
            content: [
              {
                type: "tool_result",
                tool_use_id: toolUse.id,
                content: JSON.stringify(searchResults),
              },
            ],
          });

          conversationHistory.push({
            role: "user",
            content:
              "Now please format the search results above into the JSON component structure I requested earlier. Remember to return ONLY valid JSON with the components array.",
          });

          const finalResponse = await fetch(`${backendUrl}/api/claude`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              apiKey: apiKey,
              data: {
                model: "claude-sonnet-4-20250514",
                max_tokens: 4096,
                messages: conversationHistory,
              },
            }),
          });

          const finalData = await finalResponse.json();
          const textBlock = finalData.content?.find(
            (block) => block.type === "text"
          );

          if (!textBlock || !textBlock.text) {
            setMessages((prev) => {
              const filtered = prev.filter((msg) => !msg.isSearching);
              return [
                ...filtered,
                {
                  role: "assistant",
                  content:
                    "I found information but had trouble formatting it. Please try again.",
                  isError: true,
                },
              ];
            });
            return;
          }

          const assistantMessage = textBlock.text;

          setMessages((prev) => {
            const filtered = prev.filter((msg) => !msg.isSearching);
            return [
              ...filtered,
              {
                role: "assistant",
                content: parseStructuredResponse(assistantMessage),
                hadSearch: true,
                searchQuery: searchQuery,
                isStructured: true,
              },
            ];
          });
        }
      } else {
        const assistantMessage =
          data.content.find((block) => block.type === "text")?.text ||
          "Sorry, I could not generate a response.";

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: parseStructuredResponse(assistantMessage),
            isStructured: true,
          },
        ]);
      }
    } catch (error) {
      console.error("Error calling Claude API:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Error: ${error.message}. Please check your API keys and try again.`,
          isError: true,
        },
      ]);
    }
  };

  const handleRelatedQueryClick = async (query) => {
    if (isGenerating) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: query,
      },
    ]);

    setIsGenerating(true);
    await callClaudeAPI(query);
    setIsGenerating(false);
  };

  const handleSubmit = async () => {
    console.log(context);
    const q = query.trim();
    if (!q || isGenerating) return;

    setQuery("");
    setShowModal(true);
    setIsGenerating(true);

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: q,
      },
    ]);

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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <>
    <style jsx>{`
                        @keyframes slide-up {
                            from {
                                transform: translateY(100%);
                                opacity: 0;
                            }
                            to {
                                transform: translateY(0);
                                opacity: 1;
                            }
                        }
                        .animate-slide-up {
                            animation: slide-up 0.3s ease-out;
                        }
                    `}</style>
      <div className="fixed inset-10 z-50 flex items-end justify-center pointer-events-none">
        <div className="pointer-events-auto bg-white rounded-t-3xl shadow-3xl w-full max-w-2xl mb-0 animate-slide-up relative">
          {/* Close Button - Positioned to the right */}
          <button
            onClick={() => setShowChatbot(false)}
            className="absolute -right-12 top-6 p-2 bg-white hover:bg-gray-100 rounded-full transition-colors shadow-lg"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Chatbot Content */}

          {/* Input Container */}
          <div
            className="
            flex items-center gap-2
            border-2 border-gray-200 rounded-xl
            px-4 py-3
            bg-white
            shadow-[0_0_12px_#6D3E93]/40
            hover:shadow-[0_0_16px_#6D3E93]/60
            transition-all duration-300
          "
          >
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isGenerating}
              placeholder="Ask me anything..."
              className="flex-1 outline-none bg-transparent text-gray-800 placeholder-gray-400"
            />

            {/* Microphone Button */}
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
              className={`rounded-md p-1 transition-colors ${
                isListening ? "bg-red-100" : "bg-transparent"
              } ${
                !speechSupported
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

            {/* Send Button */}
            <button
              onClick={handleSubmit}
              disabled={isGenerating || !query.trim()}
              aria-label="Submit query"
              className="hover:scale-110 transition-transform"
            >
              <div className="w-6 h-6 bg-white rounded-sm opacity-90 flex items-center justify-center cursor-pointer">
                <img src="abhinay/HomePageImages/cube.png" alt="send" />
              </div>
            </button>
          </div>
        </div>
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
                    {message.role === "user" ? (
                      <div className="flex justify-end mb-4">
                        <div className="max-w-[80%] bg-indigo-600 text-white rounded-lg p-4">
                          <p className="whitespace-pre-wrap">
                            {message.content}
                          </p>
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
                            <span className="text-gray-700">
                              {message.content}
                            </span>
                          </div>
                        ) : message.isError ? (
                          <p className="text-red-600">{message.content}</p>
                        ) : message.isStructured &&
                          message.content.components ? (
                          <div className="space-y-6">
                            {message.content.components.map(
                              (component, idx) => (
                                <ComponentRenderer
                                  key={idx}
                                  data={component}
                                  onQueryClick={handleRelatedQueryClick}
                                />
                              )
                            )}
                          </div>
                        ) : (
                          <p className="text-gray-700 whitespace-pre-wrap">
                            {message.content}
                          </p>
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

                    {/* Search Controls - Same as above */}
                    <div className="flex items-center justify-between mb-1">
                      {quickActions.length > 0 ? (
                        <div className="flex items-center space-x-2">
                          {quickActions.map((action, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center gap-1 ${
                                action.bgClass || "bg-gray-100"
                              } p-1 rounded-[8px]`}
                            >
                              {action.icons?.map((icon, iconIdx) => (
                                <img
                                  key={iconIdx}
                                  onClick={() =>
                                    action.onClick
                                      ? action.onClick(icon.label)
                                      : quickGo(icon.label)
                                  }
                                  className="hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer"
                                  src={icon.src}
                                  alt={icon.alt}
                                />
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center gap-1 bg-[#FF61054D] p-1 rounded-[8px]">
                            <img
                              onClick={() => quickGo("show offerings")}
                              className="hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer"
                              src="/abhinay/images/a.svg"
                              alt="Icon A"
                            />
                            <img
                              onClick={() => quickGo("pricing plans")}
                              className="hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer"
                              src="/abhinay/images/b.svg"
                              alt="Icon B"
                            />
                          </div>
                          <div className="flex items-center gap-1 bg-[#13A3B54D] p-1 rounded-[8px]">
                            <img
                              onClick={() => quickGo("startups zone")}
                              className="hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer"
                              src="/abhinay/images/c.svg"
                              alt="Icon C"
                            />
                            <img
                              onClick={() => quickGo("Investor page")}
                              className="hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer"
                              src="/abhinay/images/d.svg"
                              alt="Icon D"
                            />
                          </div>
                          <div className="flex items-center gap-1 bg-[#6D3E934D] py-1 px-2 rounded-[8px]">
                            <img
                              onClick={() => quickGo("franchise opportunities")}
                              className="hover:bg-white rounded-[8px] p-1 transition-colors cursor-pointer"
                              src="/abhinay/images/e.svg"
                              alt="Icon E"
                            />
                          </div>
                        </div>
                      )}

                      {/* Search Button */}
                      <div className="text-white p-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                        <button
                          onClick={toggleListening}
                          disabled={!speechSupported || isGenerating}
                          title={
                            speechSupported
                              ? isListening
                                ? "Listening… click to stop"
                                : "Speak your query"
                              : "Voice input not supported"
                          }
                          className={`rounded-md p-1 transition-colors ${
                            isListening ? "bg-red-100" : "bg-transparent"
                          } ${
                            !speechSupported || isGenerating
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
                          disabled={isGenerating || !query.trim()}
                          aria-label="Submit query"
                        >
                          <div
                            className={`w-6 h-6 bg-white rounded-sm opacity-90 flex items-center justify-center ${
                              isGenerating || !query.trim()
                                ? "cursor-not-allowed opacity-50"
                                : "cursor-pointer"
                            }`}
                          >
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
  );
};

export default FloatingChatbot;
