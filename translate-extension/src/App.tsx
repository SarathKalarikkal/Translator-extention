import { useEffect, useState } from "react";
import "./App.css";
import Translator from "./components/Translate";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="container">
      <div className="box-inner">
        <h2>Translator</h2>

        <button
          onClick={() => setIsDark((prev) => !prev)}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          <span
            style={{
              transform: isDark ? "rotate(0deg)" : "rotate(180deg)",
            }}
          >
            {isDark ? "🌙" : "☀️"}
          </span>
        </button>
      </div>

      <div className="translator-wrapper">
        <Translator />
      </div>
    </div>
  );
}

export default App;
