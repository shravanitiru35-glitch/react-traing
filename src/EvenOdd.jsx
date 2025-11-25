import { useState } from "react";

function EvenOdd() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h2>Number: {number}</h2>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <p>{number % 2 === 0 ? "Even" : "Odd"}</p>
    </>
  );
}

export default EvenOdd;