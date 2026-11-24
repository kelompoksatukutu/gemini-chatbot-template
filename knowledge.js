/**
 * ============================================================================
 * LOCAL RAG KNOWLEDGE BASE (knowledge.js)
 * =========================================================================
 */

const KNOWLEDGE_BASE = [
    {
        id: "doc-01",
        title: "Mochi, si Kucing Latihan Mengetik",
        keywords: ["mochi" ,"kucing" ,"siapa" ,"syifaa" ,"syaffana" ,"dinda" ,"velda" ,"hilal" ,"pelatih" ,"tentang" ,"chatbot" ,"tutor" ,"typing" ,"belajar mengetik"],
        content: `Mochi adalah kucing pelatih mengetik yang ramah dan sabar. Tugas mochi adalah membantu pengguna belajar mengetik dengan benar: teknik 10 jari, akurasi, ritme, dan postur duduk. Mochi memberi teks latihan sesuai level, memeriksa hasil ketikan, lalu memberi semangat dan saran perbaikan. Mochi mengutamakan kecepatan lebih dulu, kecepatan menyusul.`
    },
    {
        id: "doc-02",
        title: "Cara Berlatih Bersama Mochi",
        keywords: ["cara" ,"mulai" ,"latihan" ,"pakai" ,"gunakan" ,"langkah" ,"alur" ,"coba" ,"ketik ulang" , "hasil"],
        content: `Langkah berlatih: (1) Pilih level: pemula, menengah , atau mahir. (2) Minta mochi memberi teks latihan, lalu ketik ulang teks itu dengan teliti. (3) Tempel hasil ketikanmu ke chat dan sebutkan waktu yang di pakai jika ingin di hitung WPM-nya. (4) Mochi akan menunjukan kesalahan, menghitung akurasi, dan memberi satu saran perbaikan. (5) Ulangi sampai akurasi minimal 95%, lalu naik ke level berikutnya.`
    },
        {
        id: "doc-03",
        title: "Posisi Jari Home Row",
        keywords: ["home row" ,"posisi jari" ,"jari" ,"asdf" ,"jkl" ,"dasar" ,"pemula" ,"mulai" ,"tangan"],
        content: `Home row adalah baris tengah keyboard tempat jari beristirahat. Tangan kiri: A (kelingking), S (manis), D (tengah), F (telunjuk). Tangan kanan: J (telunujuk), K (tengah), L(manis), ; (kelingking). Kedua jempol berada di spasi. Huruf F dan J biasanya punya tonjolan kecil sebagai penanda agar jari bisa kembali ke posisi tanpa melihat. Setelah menekan tombol lain, selalu kembali jari ke home row.`
    },
        {
        id: "doc-04",
        title: "Pembagian Tugas Jari Pada keyboard",
        keywords: ["jari mana", "pembagian", "top row", "bottom row", "qwerty", "huruf", "tombol", "10 jari", "sepuluh jari", "touch typing"],
        content: `Touch typing berarti mengetik 10 jari tanpa melihat keyboard. Baris atas (QWERTYUIOP) dan bawah (ZXCVBNM) di jangkau dengan menggerakan jari dari home row lalu kembali. Telunjuk memegang dua kolom (kiri : R, F, V, dan T, G, B; kanan: Y, H, N dan U, J, M). Keliking memegang Shift, Enter, dan tombol di tepi. Gunakan Shift di sisi berlawan dengan huruf yang dikapitalkan.`
     },
        {
        id: "doc-05",
        title: "Postur dan Ergonomi",
        keywords: ["postur", "duduk", "ergonomi", "pegal", "sakit", "pergelangan", "punggung", "mata", "posisi", "nyaman", "cedera"],
        content: `Duduk tegak dengan punggung bersandar, kaki rata di lantai. Siku membentuk sudut 90 derajat. Pergelangan tangan lurus dan melayang ringan, jangan menekan tepi meja. Layar sejajar atau sedikit di bawah mata dengan jarak sekitar satu lengan. Istirahat 1-2 menit, regangkan jari dan bahu. Jika nyeri terus menerus, hentikan latihan dan konsultasikan ke tenaga kesehatan.`
        
     },  
        {
        id: "doc-06",
        title: "Akurasi Lebih Penting dari Kecepatan",
        keywords: ["akurasi", "kecepatan", "cepat", "lambat", "salah", "typo", "kesalahan", "teliti", "benar", "presisi"],
        content: `Kecepatan adalah hasil dari akurasi yang konsisten. Mengetik cepat dengan banyak salah justru memperbaiki. Targetkan akurasi minimal 95% sebelum menaiki kecepatan. jika banyak salah, turunkan tempo sampai ketikan terasa bersih. Jangan terlalu sering menekan Backspace pada latihan; coba tetap lanjut lalu evaluasi kesalahan di akhir.`
    
    },
        {
        id: "doc-07",
        title: "Cara menghitung WPM dan Akurasi",
        keywords: ["wpm", "hitung", "kecepatan mengetik", "kata permenit", "rumus", "skor", "hasil", "cek", "nilai", "persen", "akurasi"],
        content: `WPM (words per minute) = (jumlah karakter yang diketik / 5 ) / waktu dalam menit. Satu 'kata' standar dihitung 5 karakter termasuk spasi. Akurasi = (karakter benar / total karakter) x 100%. Contoh: 300 karakter dalam 2 menit = (300/5)/2 = 30 WPM. patokan kasar: pemula 15-25 WPM, menengah 30-50 WPM, mahir 60 WPM ke atas.`

    },
        {
        id: "doc-08",
        title: "Rencana Latihan Bertahap",
        keywords: ["latihan", "rencana", "jadwal", "level", "tahap", "belajar", "program", "rutin", "target", "mingguan"],
        content: `Tahap 1: home row saja (asdf jkl ;) sampai nyaman tanpa melihat. Tahap 2: tambah baris atas (e, r, u, i, 0) dan baris bawah. Tahap 3: kata dan kalimat pendek dengan tanda baca dasar. Tahap 4: huruf kapital dan angka. Tahap 5: paragraf panjang dan simbol. Latihan 10-15 menit setiap hari; kosisten lebih efektik dari pada sekali lama. Naik tahap jika akurasi sudah 95% atau lebih.`

     },
        {
        id: "doc-09",
        title: "Ritme dan Kebiasaan Menetik yang Baik",
        keywords: ["ritme", "irama", "kebiasaan", "tips", "lihat kyboard", "melihat", "kosisten", "rileks", "tegang"],
        content: `Ketik dengan ritme stabil, kembali ke F dan J dengan meraba tonjolanya. Rileks, jangan mengetik terlalu keras. baca kata berikutnya sedikit lebih awal dari yang sedang diketik. Hindari kebiasaan satu atau dua jari karena membatasi kecepatan jangaka panjang.`

     },
        {
        id: "doc-10",
        title: "Masalah Umum dan Solusinya",
        keywords: ["masalah", "sulit", "susah", "kesulitan", "tertukar", "kelingking", "lemah", "jari lemah", "bosan", "macet", "plateau", "stagnan"],
        content: `Kelingking lemah : lakukan latihan khusus huruf A, Q, Z, P, dengan pelan. Huruf seing tertukar (misal 'ie' dan 'ei' ): ketik pasang itu berulah secara lambat. progres macet (plateau): ganti jenis teks, latih kata kata yang sering salah, dan istirahat cukup. Bosan: ganti materi, misalnya lirik, kutipan, atau cerita pendek buatan sediri.`

     },
        {
        id: "doc-11",
        title: "Tanda Baca, Kapital, dan Angka",
        keywords: ["tanda baca", "koma", "titik", "kapital", "huruf besar", "shift", "angka", "simbol", "karakter khusus", "enter", "spasi"],
        content: `Koma dan titik dijangkau jari tengah dan tangan kanan. Spasi ditekan dengan jempol. Untuk huruf kapital, tahan Shift dengan kelingking sisi berlawanan. Angka di baris atas dijangkau dengan menggerakan jari dari home row ke atas, lalu kembali. Latihan angka dan simbol secara terpisah dalam sesi pendek sebleum dicampur ke dalam kalimat.`

     },
        {
        id: "doc-12",
        title: "Memilih Teks Ltihan Sesuai Level",
        keywords: ["teks latihan", "contoh", "kalimat", "kata", "paragraf", "bahan", "materi", "soal", "kasih", "berkaitan"],
        content: `Pemula: 'asdf jkl; fall dad ask sad lad'. Menengah: 'kucing kecil itu tidur di atas bantal'. Mahir: 'paragraf dengan koma, titik, angka, dan huruf kapital'. Pilih teks yang bermakna dan tidak terlalu sulit; ulangi teks yang sama 2-3 kali sampai akurasi naik sebelum ganti teks.`
         }
    ];

     Object.freeze(KNOWLEDGE_BASE);
