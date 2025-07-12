import { useState } from 'react';

const Translator = () => {
  const [translated, setTranslated] = useState('');
  const [language, setLanguage] = useState('ml');

  const handleTranslate = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab?.id || !tab.url) {
      console.error('Invalid tab or missing tab ID/URL');
      return;
    }

    if (
      tab.url.startsWith('chrome://') ||
      tab.url.startsWith('chrome-extension://')
    ) {
      alert(
        '⚠️ This extension cannot run on internal Chrome pages like chrome://extensions.\nPlease try it on a regular website.'
      );
      return;
    }

    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        func: () => {
          const selection = window.getSelection();
          return selection ? selection.toString() : '';
        },
      },
      async (results) => {
        const selectedText = results?.[0]?.result || '';
        if (!selectedText) return;

        try {
          const res = await fetch('https://translator-api-6igq.onrender.com/translate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text: selectedText,
              targetLang: language,
            }),
          });

          const data = await res.json();
          setTranslated(data.translatedText);
        } catch (err) {
          console.error('Translation failed:', err);
          setTranslated('⚠️ Translation error. Please try again.');
        }
      }
    );
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Choose Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="ml">Malayalam</option>
          <option value="hi">Hindi</option>
          <option value="ta">Tamil</option>
          <option value="kn">Kannada</option>
          <option value="de">German</option>
        </select>
      </div>

      <button onClick={handleTranslate} className="translate-btn">
        Translate Selected Text
      </button>

      <div style={{ marginTop: '1rem' }}>
        <label>Translation:</label>
        <div className="output-box" style={{ minHeight: '50px' }}>
          {translated || (
            <span style={{ color: 'gray' }}>No text translated yet.</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Translator;
