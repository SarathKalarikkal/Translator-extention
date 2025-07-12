const Settings = ({ isDark, setIsDark }:any) => {
  return (
    <div>
      <h4 style={{ marginBottom: '1rem' }}>Preferences</h4>
      <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default Settings;
