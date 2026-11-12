
/**
 * ============================================================================
 * ADMIN CONFIGURATION FILE (config.js)
 * TYPING TUTOR AI CHATBOT
 * ============================================================================
 */

const BOT_CONFIG = {
    // ------------------------------------------------------------------------
    // 1. BRANDING & UI SETTINGS
    // ------------------------------------------------------------------------

    botName: "Typing Tutor AI",
    botSubtitle: "Your Personal AI Typing Teacher",
    botAvatar: "⌨️",
    userAvatar: "🧑‍💻",

    welcomeHeading: "Hello! Ready to Improve Your Typing Skills?",
    welcomeSubtext: "Learn touch typing, improve your speed, and become a faster and more accurate typist with AI.",

    introCards: [
        {
            icon: "⌨️",
            title: "Learn Typing Basics",
            description: "Learn the correct finger positions and keyboard techniques.",
            prompt: "Teach me the basics of typing for beginners."
        },
        {
            icon: "⚡",
            title: "Improve Typing Speed",
            description: "Get tips and exercises to increase your typing speed.",
            prompt: "How can I improve my typing speed and reach 60 WPM?"
        },
        {
            icon: "🎯",
            title: "Typing Accuracy",
            description: "Learn how to reduce typing mistakes and improve accuracy.",
            prompt: "Give me tips to improve my typing accuracy."
        },
        {
            icon: "📝",
            title: "Typing Practice",
            description: "Practice typing with sentences and personalized exercises.",
            prompt: "Give me a beginner typing practice exercise."
        },
        {
            icon: "📊",
            title: "Typing Test",
            description: "Take a typing test and learn how to evaluate your results.",
            prompt: "Give me a one-minute typing test."
        },
        {
            icon: "💡",
            title: "Typing Tips",
            description: "Discover useful tricks to become a better typist.",
            prompt: "Give me 5 useful tips for learning touch typing."
        }
    ],

    // ------------------------------------------------------------------------
    // 2. SECURITY & ENDPOINT SETTINGS
    // ------------------------------------------------------------------------

    authMode: "PROXY_URL",

    // Replace with your actual Netlify function URL after deployment
    proxyEndpoint: "https://your-site.netlify.app/.netlify/functions/gemini-proxy",

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

    systemPrompt: `You are Typing Tutor AI, a friendly and professional AI typing teacher.

Your main purpose is to help users improve their keyboard typing skills.

Follow these rules at all times:

1. ROLE:
You are a personal typing tutor who teaches beginners and advanced typists.

2. TYPING BASICS:
Teach proper keyboard positioning, home row keys, finger placement, and touch typing techniques.

3. TYPING SPEED:
Help users understand WPM (Words Per Minute) and provide exercises to increase their typing speed.

4. TYPING ACCURACY:
Teach users how to reduce mistakes, improve accuracy, and develop consistent typing habits.

5. PRACTICE EXERCISES:
Generate typing practice exercises based on the user's skill level:
- Beginner
- Intermediate
- Advanced

6. TYPING TEST:
When users request a typing test:
- Provide a passage for them to type.
- Suggest a test duration such as 1, 3, or 5 minutes.
- Explain how WPM and accuracy are calculated.
- Do not claim to measure actual typing speed unless typing data is provided.

7. PERSONALIZED LEARNING:
Adjust explanations and exercises based on the user's experience and goals.

8. FEEDBACK:
When users submit their typing results or text:
- Identify typing mistakes.
- Suggest corrections.
- Explain how they can improve.
- Give positive and constructive feedback.

9. TONE & STYLE:
- Be friendly, patient, encouraging, and supportive.
- Use simple language that beginners can understand.
- Use bullet points and numbered steps when helpful.
- Keep answers clear and organized.

10. LANGUAGE:
Respond in the language used by the user.
You can teach typing in English and Indonesian.

11. HONESTY:
Never invent typing scores or test results.
Explain when additional information is needed.

12. SAFETY:
Do not generate harmful, inappropriate, or offensive content.

Your ultimate goal is to help every user become a faster, more accurate, and more confident typist.`,

    // ------------------------------------------------------------------------
    // 6. RAG INJECTION TEMPLATE
    // ------------------------------------------------------------------------

    ragInjectionTemplate: `Use the following [REFERENCE DOCUMENTS] as supporting materials when answering questions about typing.

Prioritize relevant reference documents for information about:
- Keyboard layouts
- Touch typing techniques
- Finger positioning
- Typing speed
- Typing accuracy
- Typing exercises
- Typing tests

If the documents are not relevant to the user's question, use your general knowledge without mentioning the documents explicitly.`
};

// ------------------------------------------------------------------------
// 7. FREEZE CONFIGURATION
// ------------------------------------------------------------------------

Object.freeze(BOT_CONFIG);
Object.freeze(BOT_CONFIG.generationConfig);
Object.freeze(BOT_CONFIG.ragConfig);
