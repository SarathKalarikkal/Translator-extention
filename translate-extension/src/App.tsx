import { useEffect, useState } from 'react';
import './App.css';
import Translator from './components/Translate';
import Settings from './components/Settings';



const TABS = {
  TRANSLATE: 'Translate',
  SETTINGS: 'Settings',
};

function App() {
  const [activeTab, setActiveTab] = useState(TABS.TRANSLATE);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="container">
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)' }}>
        {Object.values(TABS).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '1rem' }}>
        {activeTab === TABS.TRANSLATE && <Translator />}
        {activeTab === TABS.SETTINGS && <Settings isDark={isDark} setIsDark={setIsDark} />}
      </div>
    </div>
  );
}

export default App;
