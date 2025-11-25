import { useState } from "react";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>

      {isVisible && <p>This is a secret message 👀</p>}
    </div>
  );
}

export default ToggleText;