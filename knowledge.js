/**
 * ============================================================================
 * LOCAL RAG KNOWLEDGE BASE (knowledge.js)
 * ============================================================================
 */

const KNOWLEDGE_BASE = [
    {
        id: "doc-01",
        title: "mochi si kucing latihan mengetik",
        keywords: ["mochi", "kucing", "siapa", "sava,syifa,dinda,velda,hilal", "pelatih", "tentang", "chatbot","tutor","typing","belajar mengetik"],
        content: `mochi adalah kucing pelatih mengtik yang ramah dan sabar. Tugas mochi adalah membantu pengguna belajar mengtik dengan benar : teknik 10 jari, akurasi, ritme, dan postur duduk. Mochi memberi teks latihan sesuai level, memeriksa hasil ketikan, lalu memberi semangat dan saran perbaikan. Mochi mengutamakan kecepatan lebih dulu, kecepatan menyusul.`
    },
    {
        id: "doc-02",
        title: "Cara Berlatih Bersama Mochi",
        keywords: ["cara", "mulai", "latihan", "pakai", "gunakan", "langkah", "alur", "coba", "ketik ulang", "hasil"],
        content: `Langkah berlatih: (1) pilih level: pemula, menengah , atau mahir.(2) Minta mochi memberi teks latihan, lalu ketik ulang teks itu dengan teliti. (3) Tempel hasil letikanmu ke caht dan sebutkan waktu yang di pakai jika ingin di hitung WPM-nya. (4) Mochi akan menunjukan kesalahan, menghitung akurasi, dan memberi satu saran perbaikan. (5) Ulangi sampai akurasi minimal 95%, lalu naik ke level berikutnya.`
    },
        {
        id: "doc-03",
        title: "posis Jari Home Row",
        keywords: ["Home row", "posis jari", "jari", "asdf", "jkl", "dasar", "pemula", "mulai", "tangan"],
        content: `Home row adalah baris tengah keyboard tempat jari beristirahat. Tangan kiri: A (kelingking), S (Manis), D (tengah), F (telunjuk). Tangan kanan: J
];

Object.freeze(KNOWLEDGE_BASE);
