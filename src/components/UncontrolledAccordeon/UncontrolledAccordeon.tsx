import React, { useState } from "react";

type AccordeonPropsType = {
  titleValue: string
}

const UncontrolledAccordeon = (props: AccordeonPropsType) => {
  // debugger;

  const [collapsed, setCollapsed] = useState(false)


  return (
    <>
      <AccordeonTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed) }} />
      {!collapsed && <AccordeonBody />}
    </>
  );
};

type AccordeonBodyPropsType = {
  title: string
  onClick: () => void
}

function AccordeonTitle(props: AccordeonBodyPropsType) {
  // debugger;
  return <h1 onClick={() => props.onClick()}>--{props.title}--</h1>;
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
