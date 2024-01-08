import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import { Accordeon } from "./components/Accordeon/Accordeon";
import { OnOff } from "./components/OnOff/OnOff";
import UncontrolledAccordeon from "./components/UncontrolledAccordeon/UncontrolledAccordeon";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordeonCollapsed, setAccordeonCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false)

  return (
    <div className="App">
      <h1>React app</h1>
      {/* <UncontrolledAccordeon titleValue={"Здарова"} /> */}
      {/* <Accordeon titleValue={"Menu"} collapsed={accordeonCollapsed} onClick={() => setAccordeonCollapsed(!accordeonCollapsed)} /> */}
      {/* <UncontrolledRating /> */}
      {/* <Rating value={ratingValue} onClick={setRatingValue} /> */}
      {/* <OnOff on={switchOn} onChange={setSwitchOn} /> */}
      {/* В неконтроллируемом мы будем использовать хук, для того, чтобы отобразить переменную switchOn. 
      Когда пробросим функцию, мы свяжем ее с локальным стейтом неконтроллируемого компонента ,чтобы они дублировались, так мы сможем видеть значение */}
      <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
    </div>
  );
}

export default App;
