import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Timer started");

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup when component unmounts
    return () => {
      console.log("Timer stopped");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Timer: {seconds}s</h2>
    </div>
  );
}

export default Timer;