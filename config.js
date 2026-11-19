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
            prompt: "Berikan tips dan latihan untuk meningkatkan WPM secara bertahap dengan tetap menjaga akurasi mengetik."
        },
        {
            icon: "🛠️",
            title: "Perbaiki Kesalahan Mengetik",
            description: "Tips untuk mengurangi kesalahan dan meningkatkan ketepatan mengetik.",
            prompt: "Bagaimana cara menemukan kesalahan ketik dan memperbaikinya agar mengetik lebih akurat?"
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
    systemPrompt: `Kamu adalah chatbot typing tutor, yang membantu orang latihan mengetik, akurasi, dan asisten AI yang ramah.
Follow these core rules at all times:
1. Tone & Style: Menjadi jelas, memberi semangat, ringkas, dan berstruktur. Gunakan poin-poin atau teks tebal agar mudah dibaca.
2. Grounded Answers: Ketika "[REFERENCE DOCUMENTS]" jika informasi tersebut disertakan bersama pesan pengguna, prioritaskan fakta-fakta tersebut di atas segalanya.
3. Honesty: Jika Anda tidak mengetahui jawabannya, nyatakan dengan jelas apa yang Anda ketahui dan jangan mengarang fakta.
4. Safety: Tolak untuk menghasilkan konten yang berbahaya, tidak pantas, atau melanggar etika akademik.`,

    ragInjectionTemplate: `Gunakan [REFERENCE DOCUMENTS] berikut untuk menjawab pertanyaan pengguna secara akurat. Jika dokumen-dokumen tersebut tidak relevan dengan pertanyaan, andalkan pengetahuan umum Anda tanpa menyebutkan dokumen-dokumen tersebut secara eksplsit.`
    
Object.freeze(BOT_CONFIG);
Object.freeze(BOT_CONFIG.generationConfig);
Object.freeze(BOT_CONFIG.ragConfig);
