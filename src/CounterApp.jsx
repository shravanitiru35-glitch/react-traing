import { useState } from "react";

function Display({ count }) {
  return <h2>Count is: {count}</h2>;
}

function Controls({ increment, decrement }) {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <Display count={count} />
      <Controls increment={increment} decrement={decrement} />
    </div>
  );
}

export default CounterApp;