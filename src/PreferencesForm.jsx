import { useState } from "react";

function PreferencesForm() {
  const [color, setColor] = useState("red");
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Color: ${color}, Subscribe: ${subscribe}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={subscribe}
          onChange={(e) => setSubscribe(e.target.checked)}
        />
        Subscribe to newsletter
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default PreferencesForm;