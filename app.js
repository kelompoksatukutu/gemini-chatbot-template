<!DOCTYPE html>
<html lang="id" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>Typing Tutor</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="app-container">

        <!-- Header -->
        <header class="chat-header">
            <div class="brand-info">
                <div class="bot-avatar" id="header-avatar" aria-hidden="true"></div>
                <div>
                    <h1 class="bot-title" id="header-title"></h1>
                    <div class="bot-subtitle" id="header-subtitle"></div>
                </div>
            </div>
            <div class="header-actions">
                <button type="button" class="icon-btn" id="btn-export-chat" title="Ekspor percakapan" aria-label="Ekspor percakapan">💾</button>
                <button type="button" class="icon-btn" id="btn-clear-chat" title="Hapus percakapan" aria-label="Hapus percakapan">🗑️</button>
                <button type="button" class="icon-btn" id="btn-theme-toggle" title="Ganti tema" aria-label="Ganti tema">
                    <span id="theme-icon">☀️</span>
                </button>
            </div>
        </header>

        <!-- Area chat -->
        <main class="chat-viewport" id="chat-viewport">
            <section class="welcome-screen" id="welcome-screen">
                <div class="welcome-hero">
                    <div class="hero-avatar" id="hero-avatar" aria-hidden="true"></div>
                    <h2 id="welcome-heading"></h2>
                    <p id="welcome-subtext"></p>
                </div>
                <div class="intro-cards-grid" id="intro-cards-grid"></div>
            </section>

            <div class="messages-container" id="messages-container" aria-live="polite"></div>
        </main>

        <!-- Input -->
        <footer class="chat-footer">
            <form id="chat-form" autocomplete="off">
                <div class="input-wrapper">
                    <textarea id="user-input" rows="1" placeholder="Tulis pesan atau tanya soal latihan mengetik..." aria-label="Pesan Anda"></textarea>
                    <button type="submit" class="send-btn" id="btn-send" aria-label="Kirim pesan">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </form>
            <div class="footer-credits">
                <span>Enter untuk kirim, Shift+Enter untuk baris baru.</span>
                <span>Dibuat dengan <strong>Typing Tutor Bot</strong></span>
            </div>
        </footer>
    </div>

    <!-- Urutan penting: config dulu, lalu (opsional) knowledge base, terakhir app.js -->
    <script src="config.js"></script>
    <!-- <script src="knowledge.js"></script> -->
    <script src="app.js"></script>
</body>
</html>
