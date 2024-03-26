import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    setCards(data);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card">
              <h1>{capitalizeFirstLetter(card.title)}</h1>
              <p>{card.body}</p>
              <span>
                <b>UserId:</b> {card.userId}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
