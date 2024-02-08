import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Time from "./Components/Time";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://github.com/shubhamdsk" target="_blank">
          <img
            src={
              "https://imgs.search.brave.com/PT6LRgfBu5OIB4Qu5NRo-QocP0Gsf4bgHV7oj74AHmk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQy/Njc2OTkyL3Bob3Rv/L3N0b3B3YXRjaC1v/bi1kaWdpdGFsLWRp/c3BsYXkuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXhGR3U1/c1JKRFZob1RLd01V/QTNXbUpUeXpZNmY4/aTdkcVlrdWZaWVFn/cnM9"
            }
            className="logo"
            alt="Stop Watch"
            height={"400px"}
          />
        </a>
      </div>
      <h1>Stop Watch</h1>
      <div className="card">
        <Time />
      </div>
    </>
  );
}

export default App;
