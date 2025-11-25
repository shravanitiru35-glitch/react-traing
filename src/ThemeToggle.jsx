import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const boxStyle = {
    padding: "20px",
    marginTop: "20px",
    borderRadius: "10px",
    backgroundColor: dark ? "#222" : "#eee",
    color: dark ? "white" : "black",
  };

  return (
    <div style={boxStyle}>
      <h2>{dark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;