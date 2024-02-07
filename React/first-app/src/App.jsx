import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <div className="cards">
          <Card title="Card 1" desc="Card 1 Description" />
          <Card title="Card 2" desc="Card 2 Description" />
          <Card title="Card 3" desc="Card 3 Description" />
          <Card title="Card 4" desc="Card 4 Description" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
