/**
 * ============================================================================
 * ADMIN CONFIGURATION FILE (config.js)
 * ============================================================================
 */

const BOT_CONFIG = {
    // ------------------------------------------------------------------------
    // 1. BRANDING & UI SETTINGS
    // ------------------------------------------------------------------------
    botName: "Mochi, si Kucing Latihan Mengetik",
    botSubtitle: "Powered by Google Gemini • Custom Knowledge Base",
    botAvatar: "🐱",
    userAvatar: "👩",
    welcomeHeading: "Meow, saya akan mengajarkan kalian cara mengetik",
    welcomeSubtext: "Saya Mochi, saya suka melatih orang belajar mengetik.",

    introCards: [
        {
            icon: "🖐️",
            title: "Posisi jari dan postur",
            description: "Kenalan sama home row dan duduk tegak.",
            prompt: "Jelaskan posisi jari yang benar untuk mengetik 10 jari dan postur duduk yang ideal."
        },
        {
            icon: "🎯",
            title: "Latihan Mengetik",
            description: "Teks latihan pas dengan levelmu.",
            prompt: "Buatkan latihan mengetik untuk pemula, mulai dari home row."
        },
        {
            icon: "🚀",
            title: "Naikkan WPM tanpa banyak salah ketik.",
            description: "Bagaimana cara meningkatkan kecepatan mengetik (WPM) dengan akurasi tinggi?",
            prompt: ""
        },
        {
            icon: "🛠️",
            title: "Debug & Troubleshoot",
            description: "Step-by-step assistance for solving technical problems.",
            prompt: "How should I approach debugging a program that isn't working as expected?"
        }
    ],

    // ------------------------------------------------------------------------
    // 2. SECURITY & ENDPOINT SETTINGS
    // ------------------------------------------------------------------------
    // PROXY_URL forces the app to route requests through your Netlify backend
    authMode: "PROXY_URL", 
    // Replace this with your actual Netlify function URL once deployed
    proxyEndpoint: "https://gcsandbox.netlify.app/.netlify/functions/gemini-proxy", 
    modelName: "gemini-3.5-flash-lite",

    // ------------------------------------------------------------------------
    // 3. ADVANCED GENERATION PARAMETERS
    // ------------------------------------------------------------------------
    generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
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
    // 5. SYSTEM PROMPT & GUARDRAILS
    // ------------------------------------------------------------------------
    systemPrompt: `You are Nexus, a helpful, accurate, and friendly AI assistant created for a school project.
Follow these core rules at all times:
1. Tone & Style: Be clear, encouraging, concise, and structured. Use bullet points or bold text for readability.
2. Grounded Answers: When "[REFERENCE DOCUMENTS]" are provided with the user's message, prioritize those facts above all else.
3. Honesty: If you do not know the answer, state clearly what you know and do not fabricate facts.
4. Safety: Refuse to generate harmful, inappropriate, or academic-dishonesty content.`,

    ragInjectionTemplate: `Use the following [REFERENCE DOCUMENTS] to answer the user's question accurately. If the documents are not relevant to the question, rely on your general knowledge without mentioning the documents explicitly.`
};

Object.freeze(BOT_CONFIG);
Object.freeze(BOT_CONFIG.generationConfig);
Object.freeze(BOT_CONFIG.ragConfig);
