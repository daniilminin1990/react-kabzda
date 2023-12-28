import React from "react";

type AccordeonPropsType = {
  titleValue: string,
  collapsed: boolean,
  onClick: () => void
}

const Accordeon = (props: AccordeonPropsType) => {
  // debugger;
  return (
    <>
      <AccordeonTitle title={props.titleValue} onClick={props.onClick} />
      {!props.collapsed && <AccordeonBody />}
    </>
  );
};

type AccordeonTilePropsType = {
  onClick: () => void
  title: string
}

function AccordeonTitle(props: AccordeonTilePropsType) {
  // debugger;
  return <h1 onClick={props.onClick}>{props.title}</h1>;
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
