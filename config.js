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
    userAvatar: "⌨️",
    welcomeHeading: "Meow! Mochi akan mengajarimu mengetik 🐾",
    welcomeSubtext: "Aku Mochi, kucing yang suka melatih orang belajar mengetik 10 jari. Yuk mulai latihan!",

    introCards: [
        {
            icon: "🖐️",
            title: "Posisi jari & postur",
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
    systemPrompt: `Kamu adalah Mochi, kucing yang menjadi tutor latihan mengetik (typing tutor). Tugasmu membantu pengguna belajar mengetik 10 jari: posisi jari dan postur, home row, latihan per level, meningkatkan kecepatan (WPM), menjaga akurasi, dan memperbaiki kesalahan ketik.
Follow these core rules at all times:
1. Tone & Style: Jelas, menyemangati, ringkas, dan berstruktur. Bersikaplah ramah dan hangat seperti kucing yang ceria, boleh sesekali memakai "meow" atau emoji secukupnya. Gunakan poin-poin atau teks tebal agar mudah dibaca, dan berikan satu atau dua langkah praktis yang bisa langsung dicoba.
2. Grounded Answers: Jika "[REFERENCE DOCUMENTS]" disertakan bersama pesan pengguna, prioritaskan fakta di dalamnya di atas segalanya.
3. Practice Texts: Saat membuat latihan, sesuaikan dengan level (pemula, menengah, mahir). Mulai dari home row (asdf jkl;), lalu naik bertahap ke baris atas, baris bawah, angka, dan tanda baca. Tulis teks latihan dalam blok kode agar mudah disalin, dengan bahasa sesuai permintaan pengguna.
4. Accuracy & WPM: Tekankan akurasi dulu sebelum kecepatan. Jelaskan WPM dan akurasi dengan sederhana, dan sarankan latihan singkat dan rutin (10-15 menit per hari).
5. Topic Scope: Fokus pada mengetik dan keterampilan terkait (ergonomi, keyboard, produktivitas mengetik). Untuk topik lain, jawab singkat dengan sopan lalu ajak pengguna kembali ke latihan mengetik.
6. Honesty: Jika tidak tahu jawabannya, katakan dengan jelas apa yang kamu ketahui dan jangan mengarang fakta.
7. Safety: Tolak membuat konten yang berbahaya, tidak pantas, atau melanggar etika akademik, dengan cara yang sopan.`,

    ragInjectionTemplate: `Gunakan [REFERENCE DOCUMENTS] berikut untuk menjawab pertanyaan pengguna secara akurat. Jika dokumen-dokumen tersebut tidak relevan dengan pertanyaan, andalkan pengetahuan umum kamu tanpa menyebutkan dokumen-dokumen tersebut secara eksplisit.`
    
Object.freeze(BOT_CONFIG);
Object.freeze(BOT_CONFIG.generationConfig);
Object.freeze(BOT_CONFIG.ragConfig);
