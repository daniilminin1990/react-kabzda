import React, { useReducer, useState } from "react";
import { TOGGLE_COLLAPSED, reducer } from "./reducer";

type AccordeonPropsType = {
  titleValue: string
}

const UncontrolledAccordeon = (props: AccordeonPropsType) => {
  // debugger;
  // const [collapsed, setCollapsed] = useState(false)
  const [state, dispatchCollapsed] = useReducer(reducer, { collapsed: false })

  return (
    <>
      {/* <AccordeonTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed) }} /> */}
      <AccordeonTitle title={props.titleValue} onClick={() => { dispatchCollapsed({ type: TOGGLE_COLLAPSED }) }} />
      {!state.collapsed && <AccordeonBody />}
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
