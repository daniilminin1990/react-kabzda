import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Rating } from "./components/rating/Rating";
import Accordeon from "./components/accordeon/Accordeon";

function App() {
  return (
    <div>
      <h1>React app</h1>
      <Rating value={2} />
      <Accordeon titleValue={"Здарова"} />
      <Accordeon titleValue={"Мужики"} />
    </div>
  );
}

export default App;
