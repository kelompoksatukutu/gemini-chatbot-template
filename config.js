
/**
 * ============================================================================
 * ADMIN CONFIGURATION FILE (config.js)
 * Typing Tutor Chatbot - Nexus AI
 * ============================================================================
 */

const BOT_CONFIG = {

    // ------------------------------------------------------------------------
    // 1. BRANDING & UI SETTINGS
    // ------------------------------------------------------------------------

    botName: "Tyeping tutor chatbot",
    botSubtitle: "Powered by Google Gemini • Custom Knowledge Base",

    botAvatar: "⌨️",
    userAvatar: "🧑‍💻",

    welcomeHeading: "Hello! How can I help you today?",
    welcomeSubtext: "Ask me anything. I'm ready to help you!",

    introCards: [
        {
            icon: "📚",
            title: "Explain a Concept",
            description: "Break down complex topics into simple terms.",
            prompt: "Can you explain how artificial intelligence works in simple terms?"
        },
        {
            icon: "⚡",
            title: "Check Knowledge Base",
            description: "Ask questions about internal documents.",
            prompt: "What information do you have in your knowledge base?"
        },
        {
            icon: "💡",
            title: "Brainstorm Ideas",
            description: "Generate creative ideas and project outlines.",
            prompt: "Give me 3 creative science fair project ideas involving robotics."
        },
        {
            icon: "🛠️",
            title: "Debug & Troubleshoot",
            description: "Get step-by-step technical assistance.",
            prompt: "Help me debug a program that isn't working correctly."
        }
    ],

    // ------------------------------------------------------------------------
    // 2. SECURITY & API SETTINGS
    // ------------------------------------------------------------------------

    authMode: "PROXY_URL",

    // Ganti dengan URL Netlify milik kamu setelah deploy.
    proxyEndpoint: "https://your-site.netlify.app/.netlify/functions/gemini-proxy",

    // Pastikan model ini tersedia pada Gemini API yang kamu gunakan.
    modelName: "gemini-2.5-flash",

    // ------------------------------------------------------------------------
    // 3. GENERATION SETTINGS
    // ------------------------------------------------------------------------

    generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024
    },

    // ------------------------------------------------------------------------
    // 4. CONVERSATION MEMORY & RAG SETTINGS
    // ------------------------------------------------------------------------

    contextWindowLimit: 10,

    ragConfig: {
        enabled: true,
        topKChunks: 2,
        minRelevanceScore: 0.12
    },

    // ------------------------------------------------------------------------
    // 5. SYSTEM PROMPT & AI INSTRUCTIONS
    // ------------------------------------------------------------------------

    systemPrompt: `
You are Nexus, a helpful, intelligent, accurate, and friendly AI assistant.

Your purpose is to help students learn, understand concepts, and solve problems.

Follow these rules:

1. LANGUAGE:
   Respond in the same language used by the user.
   Support Indonesian and English.

2. TONE:
   Be friendly, polite, clear, and encouraging.
   Explain complicated topics in simple language.

3. ACCURACY:
   Always provide accurate information.
   Never invent facts, references, or sources.
   If you are unsure, explain your uncertainty.

4. KNOWLEDGE BASE:
   When [REFERENCE DOCUMENTS] are provided,
   prioritize information from those documents.
   Do not invent information that contradicts them.

5. EDUCATION:
   Help students understand concepts instead of
   simply giving answers without explanations.

6. FORMATTING:
   Use headings, bullet points, and examples
   when they improve readability.

7. SAFETY:
   Do not assist with harmful or dangerous activities.
   Do not generate inappropriate content.

8. CONVERSATION:
   Remember the context of the current conversation.
   Give relevant answers based on previous messages.

9. HONESTY:
   Do not claim to have accessed files, websites,
   or databases unless they were actually provided.
`,

    // ------------------------------------------------------------------------
    // 6. RAG INJECTION TEMPLATE
    // ------------------------------------------------------------------------

    ragInjectionTemplate: `
Use the following [REFERENCE DOCUMENTS] to answer
the user's question accurately.

Instructions:
- Prioritize relevant reference documents.
- Do not invent information.
- If the documents are irrelevant, answer using
  your general knowledge.
- Do not mention internal documents unnecessarily.
`
};

// ------------------------------------------------------------------------
// 7. FREEZE CONFIGURATION
// ------------------------------------------------------------------------

Object.freeze(BOT_CONFIG.introCards);
Object.freeze(BOT_CONFIG.generationConfig);
Object.freeze(BOT_CONFIG.ragConfig);
Object.freeze(BOT_CONFIG);


        

    
    
