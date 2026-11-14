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

    botName: "Typing Tutor Chatbot",
    botSubtitle: "Powered by Google Gemini • Custom Knowledge Base",

    botAvatar: "⌨️",
    userAvatar: "🧑‍💻",

    welcomeHeading: "Halo! Siap berlatih mengetik?",
    welcomeSubtext: "Tanyakan teknik mengetik 10 jari, latihan, atau cara meningkatkan kecepatan dan akurasi.",

    introCards: [
        {
            icon: "🖐️",
            title: "Posisi Jari & Postur",
            description: "Pelajari home row dan posisi tangan yang benar.",
            prompt: "Jelaskan posisi jari yang benar untuk mengetik 10 jari dan postur duduk yang ideal."
        },
        {
            icon: "🎯",
            title: "Latihan Mengetik",
            description: "Dapatkan teks latihan sesuai level kamu.",
            prompt: "Buatkan latihan mengetik untuk pemula, mulai dari home row (asdf jkl;)."
        },
        {
            icon: "🚀",
            title: "Tingkatkan Kecepatan",
            description: "Tips menaikkan WPM tanpa mengorbankan akurasi.",
            prompt: "Bagaimana cara meningkatkan kecepatan mengetik (WPM) dengan akurasi tinggi?"
        },
        {
            icon: "🛠️",
            title: "Atasi Kesalahan",
            description: "Kenali dan perbaiki kebiasaan mengetik yang salah.",
            prompt: "Saya sering salah ketik dan melihat keyboard. Bagaimana cara memperbaikinya?"
        }
    ],

    // ------------------------------------------------------------------------
    // 2. SECURITY & API SETTINGS
    // ------------------------------------------------------------------------

    // Jangan pernah menaruh API key di file ini. Gunakan proxy (server-side).
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
        // gemini-2.5-flash memakai "thinking tokens" yang ikut dihitung,
        // jadi 1024 bisa membuat jawaban terpotong. 2048 lebih aman.
        maxOutputTokens: 2048
    },

    // ------------------------------------------------------------------------
    // 4. CONVERSATION MEMORY & RAG SETTINGS
    // ------------------------------------------------------------------------

    // Jumlah pesan terakhir yang dikirim sebagai konteks.
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
You are Nexus, a friendly and patient typing tutor chatbot.

Your purpose is to help students learn touch typing (10-finger typing),
improve their speed (WPM) and accuracy, and build good typing habits.

Follow these rules:

1. LANGUAGE:
   Respond in the same language used by the user.
   Supported languages: Indonesian, English, Malay, and Tagalog.

2. TONE:
   Be friendly, polite, clear, and encouraging.
   Celebrate progress and explain things in simple language.

3. TYPING EXPERTISE:
   Teach correct finger placement (home row: ASDF JKL;), posture,
   rhythm, and accuracy before speed.
   Give practice texts suited to the learner's level
   (beginner, intermediate, advanced) when asked.
   Suggest short, regular practice sessions (10-20 minutes a day).
   Mention ergonomics (wrist position, breaks) when relevant.

4. ACCURACY:
   Always provide accurate information.
   Never invent facts, statistics, references, or sources.
   If you are unsure, say so.

5. KNOWLEDGE BASE:
   When [REFERENCE DOCUMENTS] are provided,
   prioritize information from those documents.
   Do not contradict them.

6. EDUCATION:
   Help students understand why a technique works,
   not just what to do.

7. FORMATTING:
   Use short headings, bullet points, and practice text blocks
   when they improve readability. Keep answers concise.

8. SCOPE:
   Stay focused on typing and keyboard skills. If asked about
   unrelated topics, answer briefly and guide the user back to
   typing practice.

9. SAFETY:
   Do not assist with harmful or dangerous activities.
   Do not generate inappropriate content.

10. CONVERSATION:
    Remember the context of the current conversation.

11. HONESTY:
    Do not claim to have accessed files, websites, or databases
    unless they were actually provided. You cannot measure the
    user's real typing speed unless they report their results.
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
  your general knowledge about typing.
- Do not mention internal documents unnecessarily.
`
};

// ------------------------------------------------------------------------
// 7. VALIDATION
// ------------------------------------------------------------------------

(function validateConfig(cfg) {
    const errors = [];

    if (!cfg.botName) errors.push("botName kosong.");
    if (cfg.authMode !== "PROXY_URL") errors.push('authMode harus "PROXY_URL".');
    if (!/^https:\/\//.test(cfg.proxyEndpoint)) {
        errors.push("proxyEndpoint harus berupa URL https.");
    }
    if (/your-site\.netlify\.app/.test(cfg.proxyEndpoint)) {
        console.warn("[config] proxyEndpoint masih placeholder. Ganti dengan URL Netlify kamu.");
    }
    if (!cfg.modelName) errors.push("modelName kosong.");
    if (!Number.isInteger(cfg.contextWindowLimit) || cfg.contextWindowLimit < 1) {
        errors.push("contextWindowLimit harus bilangan bulat >= 1.");
    }
    if (cfg.ragConfig.minRelevanceScore < 0 || cfg.ragConfig.minRelevanceScore > 1) {
        errors.push("minRelevanceScore harus antara 0 dan 1.");
    }

    if (errors.length) {
        throw new Error("Konfigurasi tidak valid:\n- " + errors.join("\n- "));
    }
})(BOT_CONFIG);

// ------------------------------------------------------------------------
// 8. FREEZE CONFIGURATION (deep freeze)
// ------------------------------------------------------------------------

function deepFreeze(obj) {
    Object.values(obj).forEach((value) => {
        if (value && typeof value === "object") deepFreeze(value);
    });
    return Object.freeze(obj);
}

deepFreeze(BOT_CONFIG);

// Dukungan Node.js (opsional); di browser BOT_CONFIG tersedia sebagai variabel global.
if (typeof module !== "undefined" && module.exports) {
    module.exports = BOT_CONFIG;
}
