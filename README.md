# 🔡 English Helper - Chrome Extension

Belajar bahasa Inggris secara interaktif langsung di browser!
Ekstensi ini akan **membacakan kata kerja (verbs)** saat Anda mengarahkan kursor ke kata tersebut. Cocok untuk pembelajaran mandiri dan mendukung **mode offline**!

![icon](icon.png)

## ✨ Fitur Utama

* 🔊 Membaca kata kerja dalam bahasa Inggris saat disorot
* 📆 Bekerja secara **offline** menggunakan file `verbs.json`
* 🎨 Desain popup sederhana & ringan
* ⚙️ Didukung oleh Web Speech API (`SpeechSynthesis`)

## 📁 Struktur File

```
english-helper-extension/
├── manifest.json           # File manifest ekstensi Chrome (v3)
├── content.js              # Script utama untuk highlight dan suara
├── background.js           # (Opsional) Service worker
├── popup.html              # Popup sederhana (jika dibutuhkan)
├── style.css               # Styling tambahan
├── verbs.json              # Data kata kerja (lokal, offline)
└── icon.png                # Ikon ekstensi
```

## 🔧 Instalasi Lokal (Development Mode)

1. Buka `chrome://extensions` di Google Chrome
2. Aktifkan **Developer Mode**
3. Klik **"Load unpacked"**
4. Arahkan ke folder `english-helper-extension/`

Ekstensi akan langsung aktif di Chrome!

## 🧠 Cara Kerja

1. File `verbs.json` berisi daftar kata kerja dalam bahasa Inggris
2. Saat pengguna mengarahkan mouse ke teks di halaman:

   * `content.js` membaca teks dari elemen yang disorot
   * Jika teks cocok dengan kata dalam `verbs.json`, maka:
   * API `SpeechSynthesis` membacakan kata tersebut

## 📆 Contoh `verbs.json`

```json
{
  "run": "run",
  "walk": "walk",
  "eat": "eat",
  "write": "write",
  "read": "read",
  "speak": "speak"
}
```

> Kamu bisa menambahkan lebih banyak kata sesuai kebutuhan.

## 🔊 Fitur Suara

Menggunakan **Web Speech API** bawaan browser:

```js
const utterance = new SpeechSynthesisUtterance("read");
utterance.lang = "en-US";
speechSynthesis.speak(utterance);
```

## 👨‍💻 Creator

Made with ❤️ by [Muhammad Ikhwan Fathulloh](https://github.com/Muhammad-Ikhwan-Fathulloh)
📧 Contact: [muhammadikhwanfathulloh17@gmail.com](mailto:muhammadikhwanfathulloh17@gmail.com)

---

## 📤 Publikasi ke Chrome Web Store (opsional)

1. Zip seluruh isi folder `english-helper-extension`
2. Login ke [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
3. Upload zip dan ikuti proses submit

## 📜 Lisensi

MIT License – silakan gunakan, modifikasi, dan distribusikan dengan bebas.