import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import Accordeon from "./components/Accordeon/Accordeon";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordeon from "./components/UncontrolledAccordeon/UncontrolledAccordeon";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordeonCollapsed, setAccordeonCollapsed] = useState<boolean>(false)

  return (
    <div className="App">
      <h1>React app</h1>
      {/* <UncontrolledAccordeon titleValue={"Здарова"} /> */}
      <Accordeon titleValue={"Menu"} collapsed={accordeonCollapsed} onClick={setAccordeonCollapsed} />
      {/* <UncontrolledRating /> */}
      {/* <Rating value={ratingValue} onClick={setRatingValue} /> */}
      {/* <OnOff /> */}
    </div>
  );
}

export default App;
