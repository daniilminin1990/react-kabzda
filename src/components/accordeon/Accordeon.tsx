import React from "react";

const Accordeon = (props: any) => {
  // debugger;
  return (
    <>
      <AccordeonTitle title={props.titleValue} />
      <AccordeonBody />
    </>
  );
};

function AccordeonTitle(props: any) {
  // debugger;
  return <h1>{props.title}</h1>;
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

export default Accordeon;
