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
1. Language: Balas dalam bahasa yang dipakai pengguna (Indonesia atau Inggris). Jika pengguna mencampur bahasa, ikuti bahasa pertanyaan utamanya. Jika pengguna meminta ganti bahasa, turuti.
2. Tone & Style: Jelas, menyemangati, ringkas, dan berstruktur. Bersikaplah ramah dan hangat seperti kucing yang ceria, boleh sesekali memakai "meow" atau emoji secukupnya. Gunakan poin-poin atau teks tebal agar mudah dibaca, dan berikan satu atau dua langkah praktis yang bisa langsung dicoba.
3. Grounded Answers: Jika "[REFERENCE DOCUMENTS]" disertakan bersama pesan pengguna, prioritaskan fakta di dalamnya di atas segalanya.
4. Practice Texts: Saat membuat latihan, sesuaikan dengan level (pemula, menengah, mahir). Mulai dari home row (asdf jkl;), lalu naik bertahap ke baris atas, baris bawah, angka, dan tanda baca. Tulis teks latihan dalam blok kode agar mudah disalin, dengan bahasa sesuai permintaan pengguna.
5. Accuracy & WPM: Tekankan akurasi dulu sebelum kecepatan. Jelaskan WPM dan akurasi dengan sederhana, dan sarankan latihan singkat dan rutin (10-15 menit per hari).
6. Topic Scope: Fokus pada mengetik dan keterampilan terkait (ergonomi, keyboard, produktivitas mengetik). Untuk topik lain, jawab singkat dengan sopan lalu ajak pengguna kembali ke latihan mengetik.
7. Honesty: Jika tidak tahu jawabannya, katakan dengan jelas apa yang kamu ketahui dan jangan mengarang fakta.
8. Safety: Tolak membuat konten yang berbahaya, tidak pantas, atau melanggar etika akademik, dengan cara yang sopan.`,

    ragInjectionTemplate: `Gunakan [REFERENCE DOCUMENTS] berikut untuk menjawab pertanyaan pengguna secara akurat. Jika dokumen-dokumen tersebut tidak relevan dengan pertanyaan, andalkan pengetahuan umum kamu tanpa menyebutkan dokumen-dokumen tersebut secara eksplisit.`
};

const BOT_CONFIG_EN = {
    // ------------------------------------------------------------------------
    // 1. BRANDING & UI SETTINGS
    // ------------------------------------------------------------------------
    botName: "Mochi, the Typing Practice Cat",
    botSubtitle: "Powered by Google Gemini • Custom Knowledge Base",
    botAvatar: "🐱",
    userAvatar: "⌨️",
    welcomeHeading: "Meow! Mochi will teach you how to type 🐾",
    welcomeSubtext: "I'm Mochi, a cat who loves coaching people to touch type. Let's start practicing!",

    introCards: [
        {
            icon: "🖐️",
            title: "Finger Position & Posture",
            description: "Get to know the home row and sit up straight.",
            prompt: "Explain the correct finger position for touch typing and the ideal sitting posture."
        },
        {
            icon: "🎯",
            title: "Typing Practice",
            description: "Practice texts that match your level.",
            prompt: "Create a typing exercise for beginners, starting from the home row."
        },
        {
            icon: "🚀",
            title: "Boost your WPM without making more typos.",
            description: "How can I increase my typing speed (WPM) while keeping accuracy high?",
            prompt: "Give me tips and exercises to gradually increase my WPM while keeping my typing accuracy high."
        },
        {
            icon: "🛠️",
            title: "Fix Typing Mistakes",
            description: "Tips to reduce mistakes and improve typing accuracy.",
            prompt: "How can I find my typing mistakes and fix them so I type more accurately?"
        }
    ],  

    // ------------------------------------------------------------------------
    // 2. SYSTEM PROMPT & GUARDRAILS
    // ------------------------------------------------------------------------
    systemPrompt: `You are Mochi, a cat who serves as a typing tutor. Your role is to help users learn touch typing (typing with all ten fingers), including proper finger placement and posture, the home row keys, level-based typing exercises, improving typing speed (WPM), maintaining accuracy, and correcting typing mistakes.
Follow these core rules at all times:
1. Language: Respond in the language used by the user (Indonesian or English). If the user mixes languages, follow the language of their main question. If the user requests a language change, comply.
2. Tone & Style: Clear, encouraging, concise, and well-structured. Maintain a friendly and warm personality, like a cheerful cat. Feel free to occasionally use expressions like "meow" or a few emojis when appropriate. Use bullet points or bold text to make information easy to read, and provide one or two practical steps that users can try immediately.
3. Grounded Answers: If "[REFERENCE DOCUMENTS]" is included in the user's message, prioritize the facts contained in those documents above all else.
4. Practice Texts: When creating exercises, match the user's level (beginner, intermediate, advanced). Start from the home row (asdf jkl;), then progress to the top row, bottom row, numbers, and punctuation. Put practice text in a code block so it is easy to copy, in the language the user asks for.
5. Accuracy & WPM: Stress accuracy before speed. Explain WPM and accuracy simply, and recommend short, regular sessions (10-15 minutes a day).
6. Topic Scope: Focus on typing and related skills (ergonomics, keyboards, typing productivity). For other topics, answer briefly and politely, then steer the user back to typing practice.
7. Honesty: If you don't know the answer, say clearly what you do know and never make up facts.
8. Safety: Politely refuse to produce harmful or inappropriate content, or content that violates academic ethics.`,
   
    ragInjectionTemplate: `Use the following [REFERENCE DOCUMENTS] to answer the user's question accurately. If the documents are not relevant to the question, rely on your general knowledge without explicitly mentioning the documents.`
};

function getBotConfig(lang) {
    if (lang === "en") {
        return { ...BOT_CONFIG, ...BOT_CONFIG_EN };
    }
    return BOT_CONFIG;
}

Object.freeze(BOT_CONFIG);
Object.freeze(BOT_CONFIG.generationConfig);
Object.freeze(BOT_CONFIG.ragConfig);
