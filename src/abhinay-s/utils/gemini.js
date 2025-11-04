import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// System prompt to guide the chatbot's behavior
const SYSTEM_PROMPT = `You are Lemici AI, an intelligent assistant for Lemici - a comprehensive business platform specializing in franchise opportunities, startup support, B2B partnerships, investment connections, and government schemes.

Your role is to help users:
- Find franchise opportunities (food, distribution, single-brand, etc.)
- Get startup support and connect with investors
- Explore B2B partnership opportunities
- Learn about government schemes and compliance
- Access market research and consulting services
- Get training and mentorship resources

When answering:
- Be conversational, helpful, and concise
- Provide specific recommendations based on user requirements (location, budget, ROI, category)
- Reference Lemici's offerings when relevant
- If you don't have specific data, provide general guidance and suggest contacting Lemici for detailed information
- For franchise recommendations, consider factors like investment amount, expected ROI, location suitability, and business category

Keep responses focused and actionable.`;

/**
 * Generate a conversational response using Gemini AI
 * @param {string} query - The user's input query
 * @param {Array} conversationHistory - Array of {role: 'user'|'model', parts: [{text: string}]}
 * @returns {Promise<string>} The AI-generated response
 */
export async function generateResponse(query, conversationHistory = []) {
  try {
    // Check if API key is configured
    if (!import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY === 'your_gemini_api_key_here') {
      return 'Please configure your Gemini API key in the .env file. Get your API key from https://aistudio.google.com/app/apikey';
    }

    // Use Gemini 1.5 Flash for fast, efficient responses
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_PROMPT
    });

    // Build chat history for context
    const history = conversationHistory.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));

    // Start chat with history
    const chat = model.startChat({
      history: history,
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        topK: 40,
        maxOutputTokens: 1024,
      },
    });

    // Send the query and get response
    const result = await chat.sendMessage(query);
    const response = await result.response;
    const text = response.text();

    return text;

  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Provide user-friendly error messages
    if (error.message?.includes('API key')) {
      return 'Invalid API key. Please check your Gemini API key configuration.';
    } else if (error.message?.includes('quota')) {
      return 'API quota exceeded. Please try again later.';
    } else if (error.message?.includes('SAFETY')) {
      return 'I apologize, but I cannot respond to that query due to safety guidelines. Please rephrase your question.';
    } else {
      return 'Sorry, I encountered an error processing your request. Please try again.';
    }
  }
}

/**
 * Stream a conversational response using Gemini AI
 * @param {string} query - The user's input query
 * @param {Array} conversationHistory - Array of {role: 'user'|'model', parts: [{text: string}]}
 * @param {Function} onChunk - Callback function to handle each text chunk
 * @returns {Promise<string>} The complete AI-generated response
 */
export async function streamResponse(query, conversationHistory = [], onChunk) {
  try {
    if (!import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY === 'your_gemini_api_key_here') {
      const errorMsg = 'Please configure your Gemini API key in the .env file.';
      onChunk?.(errorMsg);
      return errorMsg;
    }

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_PROMPT
    });

    const history = conversationHistory.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));

    const chat = model.startChat({
      history: history,
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        topK: 40,
        maxOutputTokens: 1024,
      },
    });

    const result = await chat.sendMessageStream(query);
    let fullText = '';

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      fullText += chunkText;
      onChunk?.(chunkText);
    }

    return fullText;

  } catch (error) {
    console.error('Gemini API Error:', error);
    const errorMsg = 'Sorry, I encountered an error. Please try again.';
    onChunk?.(errorMsg);
    return errorMsg;
  }
}
