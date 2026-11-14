/**
* ============================================================================
* LOCAL RAG KNOWLEDGE BASE (knowledge.js) — Typing Tutor
* ============================================================================
*
* Setiap dokumen punya:
*   id        : kode unik
*   title     : judul (string, atau objek per bahasa { id, en, ms, tl })
*   keywords  : kata kunci dalam SEMUA bahasa (dicocokkan dengan pertanyaan)
*   content   : isi (string, atau objek per bahasa { id, en, ms, tl })
*
* Jika `content` berupa objek, chatbot mengirim isi dalam bahasa yang sedang
* dipilih pengguna. Tambah dokumen baru dengan menyalin salah satu blok di bawah.
* ============================================================================
*/

const KNOWLEDGE_BASE = [
    {
        id: "doc-01",
        title: {
            id: "Typing Tutor Chatbot",
            en: "Typing Tutor Chatbot",
            ms: "Typing Tutor Chatbot",
            tl: "Typing Tutor Chatbot"
        },
        keywords: [
            "template", "creator", "author", "who made", "project", "architecture",
            "pembuat", "pencipta", "dibuat oleh", "siapa yang membuat", "tentang",
            "pencipta", "siapa yang mencipta", "mengenai",
            "gumawa", "sino ang gumawa", "tungkol",
            "adinda", "syaffana", "syifaa", "velda", "hilal"
        ],
        content: {
            id: `Typing Tutor ini dirancang dan dibuat oleh Adinda Asipa, Syaffana Azzahwa, Syifaa Lathiifah, Velda Vetrisa Nuraeny, dan Hilal Muhammad Yusuf. Proyek ini adalah starter kit yang bersih dan modular untuk siswa yang ingin membangun dan men-deploy asisten AI pelatih mengetik 10 jari.`,
            en: `This Typing Tutor was designed and created by Adinda Asipa, Syaffana Azzahwa, Syifaa Lathiifah, Velda Vetrisa Nuraeny, and Hilal Muhammad Yusuf. It is a clean, modular starter kit for students who want to build and deploy an AI touch-typing coach.`,
            ms: `Typing Tutor ini direka dan dibina oleh Adinda Asipa, Syaffana Azzahwa, Syifaa Lathiifah, Velda Vetrisa Nuraeny, dan Hilal Muhammad Yusuf. Ia ialah kit permulaan yang bersih dan modular untuk pelajar yang ingin membina dan melaksanakan pembantu AI jurulatih menaip 10 jari.`,
            tl: `Ang Typing Tutor na ito ay dinisenyo at ginawa nina Adinda Asipa, Syaffana Azzahwa, Syifaa Lathiifah, Velda Vetrisa Nuraeny, at Hilal Muhammad Yusuf. Isa itong malinis at modular na starter kit para sa mga estudyanteng gustong bumuo at mag-deploy ng AI coach sa touch typing.`
        }
    },
    {
        id: "doc-02",
        title: {
            id: "Keamanan API Key",
            en: "API Key Security",
            ms: "Keselamatan Kunci API",
            tl: "Seguridad ng API Key"
        },
        keywords: [
            "api key", "security", "github pages", "expose", "proxy", "safe", "netlify",
            "keamanan", "aman", "kunci api", "bocor",
            "keselamatan", "selamat", "proksi",
            "seguridad", "ligtas", "lihim"
        ],
        content: {
            id: `Chatbot ini melindungi API key dengan mengirim semua permintaan lewat proxy serverless di Netlify Functions. API key Gemini disimpan sebagai environment variable GEMINI_API_KEY di Netlify, jadi kode frontend tidak pernah memegang atau menampilkan key aslinya.`,
            en: `This chatbot protects the API key by routing every request through a serverless proxy on Netlify Functions. The Gemini key is stored as the GEMINI_API_KEY environment variable on Netlify, so the frontend code never holds or exposes the raw key.`,
            ms: `Chatbot ini melindungi kunci API dengan menghantar semua permintaan melalui proksi serverless di Netlify Functions. Kunci Gemini disimpan sebagai environment variable GEMINI_API_KEY di Netlify, jadi kod frontend tidak pernah memegang atau memaparkan kunci sebenar.`,
            tl: `Pinoprotektahan ng chatbot na ito ang API key sa pamamagitan ng pagpapadaan ng lahat ng request sa serverless proxy sa Netlify Functions. Nakaimbak ang Gemini key bilang environment variable na GEMINI_API_KEY sa Netlify, kaya hindi hawak o inilalantad ng frontend code ang totoong key.`
        }
    },
    {
        id: "doc-03",
        title: {
            id: "Posisi Jari dan Baris Tengah (Home Row)",
            en: "Finger Position and the Home Row",
            ms: "Kedudukan Jari dan Baris Tengah (Home Row)",
            tl: "Posisyon ng Daliri at Home Row"
        },
        keywords: [
            "home row", "finger", "fingers", "placement", "position", "asdf", "jkl", "bump", "thumb",
            "baris tengah", "posisi jari", "jari", "jempol", "tonjolan", "tombol f", "tombol j",
            "kedudukan jari", "ibu jari", "bonjolan", "baris tengah",
            "daliri", "posisyon", "hinlalaki", "umbok"
        ],
        content: {
            id: `Posisi jari baris tengah (home row): jari kiri di A S D F, jari kanan di J K L ;, kedua jempol di spasi. Huruf F dan J punya tonjolan kecil sebagai patokan agar jari bisa kembali ke posisi tanpa melihat keyboard. Setelah menekan tombol lain, kembalikan jari ke baris tengah.`,
            en: `Home row finger position: left fingers rest on A S D F, right fingers on J K L ;, and both thumbs on the space bar. The F and J keys have small bumps so you can find home position without looking. After reaching for another key, return your fingers to the home row.`,
            ms: `Kedudukan jari baris tengah (home row): jari kiri pada A S D F, jari kanan pada J K L ;, kedua-dua ibu jari pada bar ruang. Huruf F dan J mempunyai bonjolan kecil sebagai panduan supaya jari kembali ke kedudukan tanpa melihat papan kekunci. Selepas menekan kekunci lain, kembalikan jari ke baris tengah.`,
            tl: `Posisyon ng daliri sa home row: ang kaliwang daliri ay nasa A S D F, ang kanan ay nasa J K L ;, at parehong hinlalaki ay nasa space bar. May maliit na umbok ang F at J para mahanap mo ang home position nang hindi tumitingin sa keyboard. Pagkatapos abutin ang ibang key, ibalik ang mga daliri sa home row.`
        }
    },
    {
        id: "doc-04",
        title: {
            id: "Akurasi Lebih Penting daripada Kecepatan",
            en: "Accuracy Matters More Than Speed",
            ms: "Ketepatan Lebih Penting daripada Kelajuan",
            tl: "Mas Mahalaga ang Accuracy kaysa Bilis"
        },
        keywords: [
            "accuracy", "speed", "slow", "fast", "muscle memory", "backspace", "errors", "mistakes",
            "akurasi", "kecepatan", "pelan", "cepat", "memori otot", "hapus", "salah",
            "ketepatan", "kelajuan", "perlahan", "laju", "ingatan otot", "padam", "silap",
            "bilis", "mabilis", "mabagal", "mali", "tumpak"
        ],
        content: {
            id: `Akurasi lebih penting daripada kecepatan. Mengetik pelan tetapi benar membentuk memori otot yang tepat, dan kecepatan akan naik dengan sendirinya. Targetkan akurasi di atas 95 persen sebelum menaikkan tempo latihan. Jangan terburu-buru dan jangan sering menghapus.`,
            en: `Accuracy matters more than speed. Typing slowly but correctly builds the right muscle memory, and speed rises on its own. Aim for above 95 percent accuracy before raising your practice tempo. Do not rush, and avoid leaning on backspace.`,
            ms: `Ketepatan lebih penting daripada kelajuan. Menaip perlahan tetapi betul membina ingatan otot yang tepat, dan kelajuan akan meningkat dengan sendirinya. Sasarkan ketepatan melebihi 95 peratus sebelum menaikkan rentak latihan. Jangan tergesa-gesa dan jangan kerap memadam.`,
            tl: `Mas mahalaga ang accuracy kaysa sa bilis. Ang mabagal pero tamang pag-type ay bumubuo ng tamang muscle memory, at kusang bibilis ito. Targetin ang higit sa 95 porsiyentong accuracy bago bilisan ang practice. Huwag magmadali at iwasang laging mag-backspace.`
        }
    },
    {
        id: "doc-05",
        title: {
            id: "Cara Menghitung WPM dan Akurasi",
            en: "How WPM and Accuracy Are Calculated",
            ms: "Cara Mengira WPM dan Ketepatan",
            tl: "Paano Kinakalkula ang WPM at Accuracy"
        },
        keywords: [
            "wpm", "words per minute", "calculate", "formula", "score", "result",
            "kata per menit", "hitung", "menghitung", "rumus", "skor", "hasil",
            "perkataan seminit", "kira", "mengira", "keputusan",
            "kalkulahin", "marka", "resulta"
        ],
        content: {
            id: `Cara menghitung WPM (kata per menit): jumlah karakter yang benar dibagi 5, lalu dibagi lama mengetik dalam menit. Contoh: 300 karakter benar dalam 2 menit sama dengan (300 / 5) / 2 = 30 WPM. Satu kata standar dihitung 5 karakter, termasuk spasi. Akurasi adalah karakter benar dibagi total karakter dikali 100. Di jendela latihan aplikasi ini, WPM dan akurasi sudah dihitung otomatis.`,
            en: `How to calculate WPM (words per minute): correct characters divided by 5, then divided by the time in minutes. Example: 300 correct characters in 2 minutes is (300 / 5) / 2 = 30 WPM. One standard word counts as 5 characters, spaces included. Accuracy is correct characters divided by total characters times 100. In this app's practice window, WPM and accuracy are calculated for you automatically.`,
            ms: `Cara mengira WPM (perkataan seminit): bilangan aksara yang betul dibahagi 5, kemudian dibahagi masa dalam minit. Contoh: 300 aksara betul dalam 2 minit ialah (300 / 5) / 2 = 30 WPM. Satu perkataan piawai dikira 5 aksara termasuk ruang. Ketepatan ialah aksara betul dibahagi jumlah aksara darab 100. Dalam tetingkap latihan aplikasi ini, WPM dan ketepatan dikira secara automatik.`,
            tl: `Paano kalkulahin ang WPM (words per minute): ang tamang character na hinati sa 5, tapos hinati sa oras sa minuto. Halimbawa: 300 tamang character sa 2 minuto ay (300 / 5) / 2 = 30 WPM. Ang isang karaniwang salita ay binibilang na 5 character kasama ang espasyo. Ang accuracy ay tamang character na hinati sa kabuuang character at minultiply sa 100. Sa practice window ng app na ito, awtomatikong kinakalkula ang WPM at accuracy.`
        }
    },
    {
        id: "doc-06",
        title: {
            id: "Postur dan Ergonomi Mengetik",
            en: "Typing Posture and Ergonomics",
            ms: "Postur dan Ergonomik Menaip",
            tl: "Postura at Ergonomics sa Pag-type"
        },
        keywords: [
            "posture", "ergonomics", "wrist", "back", "shoulder", "elbow", "break", "rest", "strain", "pain",
            "postur", "ergonomi", "pergelangan", "punggung", "bahu", "siku", "istirahat", "pegal", "sakit",
            "belakang", "pergelangan tangan", "berehat", "lenguh", "kecederaan",
            "postura", "likod", "balikat", "siko", "pulso", "pahinga", "pananakit"
        ],
        content: {
            id: `Postur mengetik: punggung tegak, bahu rileks, siku sekitar 90 derajat, pergelangan tangan lurus dan tidak bertumpu keras di meja. Layar sejajar mata, jarak sekitar satu lengan. Istirahat 1 sampai 2 menit setiap 20 sampai 30 menit untuk mencegah pegal dan cedera.`,
            en: `Typing posture: back straight, shoulders relaxed, elbows near 90 degrees, wrists straight and not pressed hard on the desk. Screen at eye level, about an arm's length away. Rest 1 to 2 minutes every 20 to 30 minutes to avoid strain and injury.`,
            ms: `Postur menaip: belakang tegak, bahu santai, siku sekitar 90 darjah, pergelangan tangan lurus dan tidak ditekan pada meja. Skrin sejajar mata, kira-kira sepanjang lengan. Berehat 1 hingga 2 minit setiap 20 hingga 30 minit untuk mengelakkan lenguh dan kecederaan.`,
            tl: `Postura sa pag-type: tuwid ang likod, relaks ang balikat, mga siko na mga 90 degrees, tuwid ang pulso at hindi diinan sa mesa. Nasa antas ng mata ang screen, mga isang dipa ang layo. Magpahinga ng 1 hanggang 2 minuto kada 20 hanggang 30 minuto para maiwasan ang pananakit at pinsala.`
        }
    },
    {
        id: "doc-07",
        title: {
            id: "Rencana Latihan dan Level",
            en: "Practice Plan and Levels",
            ms: "Pelan Latihan dan Tahap",
            tl: "Plano sa Pag-practice at mga Antas"
        },
        keywords: [
            "practice plan", "schedule", "daily", "level", "beginner", "intermediate", "advanced", "numbers", "symbols", "top row", "bottom row",
            "rencana latihan", "jadwal", "setiap hari", "pemula", "menengah", "mahir", "angka", "simbol", "baris atas", "baris bawah",
            "pelan latihan", "jadual", "setiap hari", "pertengahan", "nombor", "simbol",
            "plano", "iskedyul", "araw-araw", "baguhan", "katamtaman", "mahusay", "numero", "simbolo"
        ],
        content: {
            id: `Rencana latihan mengetik: berlatih 15 sampai 20 menit setiap hari lebih efektif daripada satu sesi panjang seminggu sekali. Mulai dari baris tengah, lalu baris atas, baris bawah, angka, dan simbol. Naik ke tahap berikutnya setelah akurasi stabil di atas 95 persen. Jangan melihat keyboard saat berlatih. Di aplikasi ini ada tiga level: Pemula (huruf baris tengah dan kata pendek), Menengah (kalimat dengan huruf kapital dan tanda baca), dan Mahir (angka, simbol, dan teks campuran).`,
            en: `Typing practice plan: practising 15 to 20 minutes every day works better than one long weekly session. Start with the home row, then the top row, bottom row, numbers, and symbols. Move to the next stage once accuracy is steadily above 95 percent. Do not look at the keyboard while practising. This app has three levels: Beginner (home row letters and short words), Intermediate (sentences with capitals and punctuation), and Advanced (numbers, symbols, and mixed text).`,
            ms: `Pelan latihan menaip: berlatih 15 hingga 20 minit setiap hari lebih berkesan daripada satu sesi panjang seminggu sekali. Mulakan dengan baris tengah, kemudian baris atas, baris bawah, nombor dan simbol. Naik ke peringkat seterusnya selepas ketepatan stabil melebihi 95 peratus. Jangan melihat papan kekunci semasa berlatih. Aplikasi ini mempunyai tiga tahap: Pemula (huruf baris tengah dan perkataan pendek), Pertengahan (ayat dengan huruf besar dan tanda baca), dan Mahir (nombor, simbol dan teks campuran).`,
            tl: `Plano sa pag-practice ng typing: mas epektibo ang 15 hanggang 20 minuto kada araw kaysa isang mahabang sesyon kada linggo. Magsimula sa home row, tapos itaas na hanay, ibabang hanay, numero, at simbolo. Lumipat sa susunod na yugto kapag tuloy-tuloy na higit 95 porsiyento ang accuracy. Huwag tumingin sa keyboard habang nagpa-practice. May tatlong antas ang app na ito: Baguhan (mga letra sa home row at maiikling salita), Katamtaman (mga pangungusap na may malalaking titik at bantas), at Mahusay (numero, simbolo, at halo-halong teksto).`
        }
    },
    {
        id: "doc-08",
        title: {
            id: "Kesalahan Umum dan Teknik Mengetik",
            en: "Common Mistakes and Typing Technique",
            ms: "Kesilapan Biasa dan Teknik Menaip",
            tl: "Karaniwang Pagkakamali at Teknik sa Pag-type"
        },
        keywords: [
            "mistake", "technique", "rhythm", "shift", "look at keyboard", "two fingers", "pinky", "tips",
            "kesalahan umum", "teknik", "ritme", "melihat keyboard", "dua jari", "kelingking", "tips", "trik",
            "kesilapan", "rentak", "melihat papan kekunci", "jari kelingking", "petua",
            "pagkakamali", "ritmo", "hinliliit", "tip", "tumitingin"
        ],
        content: {
            id: `Kesalahan umum saat belajar mengetik: melihat keyboard, memakai hanya dua atau tiga jari, menekan tombol terlalu keras, dan mengetik tidak berirama. Ketik dengan ritme yang stabil, tekan Shift dengan kelingking sisi berlawanan dari huruf, dan gunakan jempol hanya untuk spasi. Kesalahan yang sering muncul sebaiknya dilatih khusus.`,
            en: `Common typing mistakes: looking at the keyboard, using only two or three fingers, pressing keys too hard, and typing with uneven rhythm. Keep a steady rhythm, press Shift with the pinky on the opposite side of the letter, and use the thumbs only for the space bar. Drill the mistakes you make most often.`,
            ms: `Kesilapan biasa semasa belajar menaip: melihat papan kekunci, menggunakan dua atau tiga jari sahaja, menekan kekunci terlalu kuat dan menaip tanpa rentak yang stabil. Taip dengan rentak tetap, tekan Shift dengan jari kelingking di sebelah bertentangan huruf, dan gunakan ibu jari hanya untuk bar ruang. Latih kesilapan yang paling kerap berlaku.`,
            tl: `Karaniwang pagkakamali sa pag-aaral mag-type: pagtingin sa keyboard, paggamit ng dalawa o tatlong daliri lang, sobrang diin sa mga key, at hindi pantay na ritmo. Panatilihin ang tuloy-tuloy na ritmo, pindutin ang Shift gamit ang hinliliit sa kabilang panig ng letra, at gamitin ang hinlalaki para lang sa space bar. I-drill ang mga pagkakamaling madalas mong magawa.`
        }
    },
    {
        id: "doc-09",
        title: {
            id: "Cara Memakai Jendela Latihan",
            en: "How to Use the Practice Window",
            ms: "Cara Menggunakan Tetingkap Latihan",
            tl: "Paano Gamitin ang Practice Window"
        },
        keywords: [
            "how to use", "practice window", "start typing", "send result", "drill", "language", "paste",
            "cara memakai", "cara pakai", "jendela latihan", "mulai ketik", "kirim hasil", "latihan", "bahasa", "tempel",
            "cara menggunakan", "tetingkap latihan", "mula menaip", "hantar keputusan", "tampal",
            "paano gamitin", "simulan", "ipadala ang resulta", "wika"
        ],
        content: {
            id: `Cara memakai jendela latihan: klik tombol "Mulai ketik" pada kartu latihan kuning yang diberikan tutor. Ketik teks target persis seperti yang tampil; waktu mulai berjalan saat huruf pertama. Huruf benar berwarna hijau dan salah berwarna merah. Menempel (paste) tidak bisa. Setelah selesai, klik "Kirim hasil ke tutor" agar tutor menilai ketikanmu. Bahasa dan level bisa diganti kapan saja dari bagian atas halaman.`,
            en: `How to use the practice window: click "Start typing" on the yellow drill card the tutor gives you. Type the target text exactly as shown; the clock starts on your first letter. Correct letters turn green and wrong ones turn red. Pasting is blocked. When you finish, click "Send result to tutor" so the tutor can assess your typing. You can change the language and level at any time from the top of the page.`,
            ms: `Cara menggunakan tetingkap latihan: klik butang "Mula menaip" pada kad latihan kuning yang diberikan tutor. Taip teks sasaran tepat seperti yang dipaparkan; masa bermula pada huruf pertama. Huruf betul bertukar hijau dan yang salah bertukar merah. Tampal (paste) tidak boleh dibuat. Selepas selesai, klik "Hantar keputusan kepada tutor" supaya tutor menilai taipan anda. Bahasa dan tahap boleh ditukar bila-bila masa di bahagian atas halaman.`,
            tl: `Paano gamitin ang practice window: i-click ang "Simulan ang pag-type" sa dilaw na drill card na ibinibigay ng tutor. I-type ang target na teksto nang eksakto sa nakikita; magsisimula ang oras sa unang letra. Nagiging berde ang tamang letra at pula ang mali. Bawal ang paste. Pagkatapos, i-click ang "Ipadala ang resulta sa tutor" para masuri ng tutor ang na-type mo. Maaari mong palitan ang wika at antas anumang oras mula sa itaas ng pahina.`
        }
    }
];

Object.freeze(KNOWLEDGE_BASE);
