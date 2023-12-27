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

  return (
    <div className="App">
      <h1>React app</h1>
      <Rating value={ratingValue} onClick={setRatingValue} />
      {/* <UncontrolledAccordeon titleValue={"Здарова"} /> */}
      {/* <Accordeon titleValue={"Menu"} collapsed={false} /> */}
      {/* <UncontrolledRating /> */}
      {/* <OnOff /> */}
    </div>
  );
}

export default App;
