import React from "react";

type AccordeonPropsType = {
  titleValue: string,
  collapsed: boolean,
  onClick: (collapsed: boolean) => void
}

const Accordeon = (props: AccordeonPropsType) => {
  // debugger;
  return (
    <>
      <AccordeonTitle title={props.titleValue} onClick={props.collapsed} collapsed={false} />
      {!props.collapsed && <AccordeonBody />}
    </>
  );
};

type AccordeonTilePropsType = {
  onClick: (collapsed: boolean) => void
  title: string
  collapsed: boolean,
}

function AccordeonTitle(props: AccordeonTilePropsType) {
  // debugger;
  return <h1 onClick={() => props.onClick(props.collapsed)}>{props.title}</h1>;
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
