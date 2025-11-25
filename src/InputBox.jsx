import { useState } from "react";

function InputBox() {
  const [text, setText] = useState("");

  return (
    <>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </>
  );
}

export default InputBox;