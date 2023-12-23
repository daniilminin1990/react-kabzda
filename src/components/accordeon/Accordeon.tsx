import React from "react";

type AccordeonPropsType = {
  titleValue: string,
  collapsed: boolean
}

const Accordeon = (props: AccordeonPropsType) => {
  // debugger;
  return (
    <>
      <AccordeonTitle title={props.titleValue} />
      {!props.collapsed && <AccordeonBody />}
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
