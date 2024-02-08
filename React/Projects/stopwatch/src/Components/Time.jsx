import { useRef, useState } from "react";
import "./Stopwatch.css";

const Time = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="stopwatch-container">
      <h2 className="stopwatch-heading">
        Time Passed: {secondsPassed.toFixed(3)}
      </h2>
      <button className="stopwatch-button" onClick={handleStart}>
        Start
      </button>
      <button className="stopwatch-button" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
};

export default Time;
