import React, { useState } from "react";

type AccordeonPropsType = {
  titleValue: string
}

const UncontrolledAccordeon = (props: AccordeonPropsType) => {
  // debugger;

  const [collaps, setCollaps] = useState(false)

  const collapsed = false;

  return (
    <>
      <AccordeonTitle title={props.titleValue} />
      <button onClick={() => { setCollaps(collaps) }}>TOGGLE</button>
      {collaps && <AccordeonBody />}
    </>
  );
};

type AccordeonBodyPropsType = {
  title: string
}

function AccordeonTitle(props: AccordeonBodyPropsType) {
  // debugger;
  return <h1>--{props.title}--</h1>;
}

function AccordeonBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

export default UncontrolledAccordeon;
