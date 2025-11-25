import { useState } from "react";

function ColorBox() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div 
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: color,
        }}
      ></div>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
    </>
  );
}

export default ColorBox;