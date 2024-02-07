import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <p>The Count : {count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Update Me
        </button>
      </div>
    </>
  );
}

export default App;
