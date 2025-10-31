import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
let genAI = null;
let model = null;

function getModel() {
  if (!API_KEY) return null;
  if (!genAI) genAI = new GoogleGenerativeAI(API_KEY);
  if (!model) model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  return model;
}



// Builds a focused prompt for franchise suggestions with comprehensive market analysis.
function buildPrompt(userQuery) {
  return `You are an expert franchise consultant and business analyst specializing in the Indian market. Provide detailed, data-driven franchise recommendations.

User Query: ${userQuery}

Generate a comprehensive franchise recommendation report with the following structure:

1. **Title Section**: Create an engaging title based on the query (e.g., "Top Biryani Franchise Options for [Location]")

2. **Executive Summary**: 2-3 sentences highlighting key insights about the market, demand, and ROI potential specific to the location/category.

3. **Quick Metrics Dashboard**: Provide a table with:
   - Investment Range
   - Expected ROI %
   - Payback Period
   - Success Rate
   - Key location-specific notes

4. **Recommended Franchises** (3-5 options):
   For each franchise include:
   - Name
   - Investment amount
   - Expected ROI %
   - Detailed "Why" (location fit, demand, unique selling points)
   - Payback period
   - Key success factors

5. **Location Analysis** (if location mentioned):
   - Population density
   - Competition level
   - Rent/cost estimates
   - Delivery/foot traffic patterns
   - Peak business hours
   - Market size and growth

6. **Investment Breakdown**:
   Create a markdown table AND also provide data in this format for charts:
   \`\`\`chartdata-investment
   Franchise Fee,2.5
   Equipment,2.0
   Setup,1.5
   Working Capital,1.5
   Marketing,0.5
   \`\`\`
   - Franchise fee
   - Equipment costs
   - Setup/interior costs
   - Working capital
   - Marketing budget
   - Total investment

7. **Financial Projections** (6-12 months):
   Include a table AND provide data for revenue/cost chart:
   \`\`\`chartdata-projections
   Month 1,Revenue,2.5,Costs,2.0
   Month 3,Revenue,3.5,Costs,2.3
   Month 6,Revenue,4.5,Costs,2.8
   Month 9,Revenue,5.0,Costs,3.0
   Month 12,Revenue,5.5,Costs,3.2
   \`\`\`
   - Expected monthly revenue
   - Cost breakdown (COGS, rent, staff, utilities)
   - Projected profit margins
   - Monthly profit estimates

8. **ROI Comparison Chart** (if multiple franchises):
   \`\`\`chartdata-roi
   Biryani Blues,25
   The Biryani Zone,22
   Haan D Biryani,24
   Other Options,18
   \`\`\`

9. **FAQs**: 3-4 common questions about:
   - ROI validation
   - Required permits/licenses
   - Location selection strategy
   - Support from franchisor

10. **Related Queries**: 3-4 suggested follow-up questions

11. **Disclaimer**: Note that figures are estimates based on market data

IMPORTANT FORMATTING RULES:
- Use markdown formatting with headers (###, ####)
- Include tables using markdown table syntax
- Add bullet points and numbered lists
- Use **bold** for emphasis on key metrics
- Include emojis where appropriate (📊, 💰, 📈, 🎯, etc.)
- Be specific with numbers and ranges
- Reference real Indian cities, population data, and market trends
- Use Indian currency (₹ Lakhs/Crores)
- Include realistic timelines and metrics
- Include chartdata code blocks for Investment Breakdown, Financial Projections, and ROI Comparison

Make the response detailed (800-1200 words), professional, and actionable. Use current 2025 market data and trends.`;
}

export async function generateFranchiseAdvice(userQuery) {
  const trimmed = String(userQuery || "").trim();
  if (!trimmed) return { formattedText: "Please provide a query about franchise opportunities." };

  const m = getModel();

  // Fallback when API key is missing (dev mode)
  if (!m) {
    return {
      formattedText: `### 🔑 API Key Required

**To enable AI-powered franchise recommendations:**
1. Visit https://aistudio.google.com/app/apikey
2. Generate your free Gemini API key
3. Add it to your .env file as VITE_GEMINI_API_KEY
4. Restart your development server

**Sample Response Preview:**
Once configured, you'll get detailed franchise recommendations including:
- 📊 Market analysis for your location
- 💰 Investment breakdowns
- 📈 ROI projections
- 🎯 Top franchise suggestions
- 📍 Location-specific insights

*Current query: "${trimmed}"*`
    };
  }

  try {
    const prompt = buildPrompt(trimmed);
    const result = await m.generateContent(prompt);
    const text = await result.response.text();

    // Return the formatted markdown text directly
    return {
      formattedText: text.trim()
    };
  } catch (err) {
    console.error("AI error:", err);

    // Provide helpful error messages
    if (err.message?.includes('API key')) {
      return {
        formattedText: `### ⚠️ API Key Error

Your Gemini API key may be invalid or missing. Please check:
1. The key in your .env file is correct
2. The key starts with "AIzaSy..."
3. You've restarted your development server

Get a new API key at: https://aistudio.google.com/app/apikey`
      };
    } else if (err.message?.includes('quota')) {
      return {
        formattedText: `### 📊 API Quota Exceeded

You've reached your API usage limit. Please:
- Wait a few minutes and try again
- Check your quota at: https://aistudio.google.com/
- Consider upgrading for higher limits

*Your query: "${trimmed}"*`
      };
    } else {
      return {
        formattedText: `### ❌ Error Processing Request

Sorry, I encountered an error while generating your franchise recommendations.

**Your Query:** ${trimmed}

**What to try:**
- Rephrase your query
- Check your internet connection
- Verify API key configuration
- Contact support if the issue persists

Error: ${err.message || 'Unknown error'}`
      };
    }
  }
}

// Streaming version for real-time responses
export async function streamFranchiseAdvice(userQuery, onChunk) {
  const trimmed = String(userQuery || "").trim();
  if (!trimmed) {
    const msg = "Please provide a query about franchise opportunities.";
    onChunk?.(msg);
    return msg;
  }

  const m = getModel();

  // Fallback when API key is missing
  if (!m) {
    const msg = `### 🔑 API Key Required

**To enable AI-powered franchise recommendations:**
1. Visit https://aistudio.google.com/app/apikey
2. Generate your free Gemini API key
3. Add it to your .env file as VITE_GEMINI_API_KEY
4. Restart your development server

*Current query: "${trimmed}"*`;
    onChunk?.(msg);
    return msg;
  }

  try {
    const prompt = buildPrompt(trimmed);
    const result = await m.generateContentStream(prompt);
    let fullText = '';

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      fullText += chunkText;
      onChunk?.(chunkText);
    }

    return fullText.trim();
  } catch (err) {
    console.error("AI streaming error:", err);
    
    const errorMsg = `### ❌ Error Processing Request

Sorry, I encountered an error while generating your franchise recommendations.

**Your Query:** ${trimmed}

Error: ${err.message || 'Unknown error'}`;
    
    onChunk?.(errorMsg);
    return errorMsg;
  }
}

export function formatAdviceToMarkdown(advice) {
  if (!advice) return "";
  const { summary, suggestions = [], disclaimer } = advice;
  let md = "";
  if (summary) md += `\n${summary}\n`;
  if (suggestions.length) {
    md += "\nSuggestions:\n";
    for (const s of suggestions) {
      md += `\n- ${s.name} — ${s.category}\n  • Investment: ${s.estimatedInvestment}\n  • ROI: ${s.estROI}\n  • Why: ${s.why}\n  • ${s.cta}\n`;
    }
  }
  if (disclaimer) md += `\n${disclaimer}\n`;
  return md.trim();
}
