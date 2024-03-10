import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setShowbtn] = useState(false);

  const [todos, setTodos] = useState([
    { id: 1, title: "Todo-1", desc: "I'm a first todo" },
    { id: 2, title: "Todo-2", desc: "I'm a second todo" },
    { id: 3, title: "Todo-3", desc: "I'm a third todo" },
  ]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showbtn && <button>I'm a button</button>} */}
      {showbtn ? (
        <button>I'm a true button</button>
      ) : (
        <button>I'm a false button</button>
      )}
      <div className="card">
        <button onClick={() => setShowbtn(!showbtn)}>Toggle</button>
      </div>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="m-4 border border-1 border-purple-400">
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        );
      })}
    </>
  );
}

export default App;
