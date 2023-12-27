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
    <div className="App">
      <h1>React app</h1>
      <UncontrolledAccordeon titleValue={"Здарова"} />
      <Accordeon titleValue={"Menu"} collapsed={false} />
      <UncontrolledRating />
      {/* <Rating value={3} /> */}
      <OnOff />
    </div>
  );
}

export default App;
