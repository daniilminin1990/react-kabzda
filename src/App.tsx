import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Rating } from "./components/Rating/Rating";
import Accordeon from "./components/Accordeon/Accordeon";
import OnOff from "./components/OnOff/OnOff";

function App() {
  return (
    <div>
      <h1>React app</h1>
      {/* <Accordeon titleValue={"Здарова"} />
      <Accordeon titleValue={"Мужики"} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}
      <OnOff on={true} />
      <OnOff on={false} />
      <OnOff on={true} />
    </div>
  );
}

export default App;
