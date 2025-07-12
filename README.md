# 🌐 Translator Chrome Extension 🔤

A modern, responsive Chrome Extension that allows users to translate selected text on any webpage into regional languages — powered by the free MyMemory Translation API.

## ✨ Features

- 🖱️ Translate any selected text instantly
- 🗣️ Supports translation to:
  - Malayalam (ml)
  - Hindi (hi)
  - Tamil (ta)
  - Kannada (kn)
  - German (de)
- 🌗 Light and Dark theme toggle with animated icon
- ⚡ Built with Vite + React + TypeScript + Chrome Extension (Manifest V3)
- 📦 Simple, fast, and privacy-respecting — no sign-in or tracking


---

## 🛠 Tech Stack

- **Frontend**: React + TypeScript
- **Build Tool**: Vite
- **API**: [MyMemory Translated API](https://mymemory.translated.net/)
- **Extension**: Chrome Extension (Manifest V3)
- **Styling**: CSS with theme variables

---

## 📦 Installation & Usage (Dev Mode)

1. Clone the repo:

```bash
git clone https://github.com/your-username/translator-extension.git
cd translator-extension

Install dependencies:

bash
Copy
Edit
npm install
Build the extension:

bash
Copy
Edit
npm run build
Set up for Chrome:

Go to chrome://extensions

Enable Developer mode

Click Load Unpacked

Select the dist/ folder

Use the extension:

Visit any website

Select some English text

Click the extension icon → choose language → see translation

🧪 API Info
API Used: https://api.mymemory.translated.net

Free plan limit: 500 characters per request

Automatically truncates longer selections

📁 Folder Structure (Post-Build)
pgsql
Copy
Edit
translator-extension/
├── public/
│   └── icons/
├── src/
│   ├── components/
│   │   └── Translate.tsx
│   └── App.tsx
├── manifest.json
├── popup.html
└── dist/
