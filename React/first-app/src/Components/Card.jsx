import React from "react";
import "./Card.css";
const Card = ({ title, desc }) => {
  return (
    <div>
      <div className="card" style={{ overflow: "hidden" }}>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yNBuTsEvqn22JZYvd5CpJwHaEK%26pid%3DApi&f=1&ipt=2c06412da756bf20c3b3734c498f4a0b54afef1e89b7afc5176a9b91d338617d&ipo=images"
          alt="Coding"
          width="333"
          style={{ border: "2px solid black" }}
        />
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
