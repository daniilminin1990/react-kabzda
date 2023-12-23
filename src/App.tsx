import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Rating } from "./components/Rating/Rating";
import Accordeon from "./components/Accordeon/Accordeon";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordeon from "./components/UncontrolledAccordeon/UncontrolledAccordeon";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";

function App() {
  return (
    <div>
      <h1>React app</h1>
      <UncontrolledAccordeon titleValue={"Здарова"} />
      <UncontrolledAccordeon titleValue={"Мужики"} />
      <UncontrolledRating value={2} />
      {/* 
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}
      <OnOff />
    </div>
  );
}

export default App;
