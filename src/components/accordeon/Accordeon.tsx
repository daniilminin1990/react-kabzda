import React from "react";

type ItemPropsType = {
  title: string,
  value: any
}

type AccordeonPropsType = {
  titleValue: string,
  collapsed: boolean,
  onTitleClick: () => void
  items: ItemPropsType[]
  onClick: (value: any) => void
}

export const Accordeon = (props: AccordeonPropsType) => {
  // debugger;
  return (
    <>
      <AccordeonTitle title={props.titleValue} onTitleClick={props.onTitleClick} />
      {!props.collapsed && <AccordeonBody items={props.items} onClick={props.onClick} />}
    </>
  );
};

type AccordeonTilePropsType = {
  onTitleClick: () => void
  title: string
}

function AccordeonTitle(props: AccordeonTilePropsType) {
  // debugger;
  return <h1 onClick={props.onTitleClick}>{props.title}</h1>;
}

type AccordeonBodyPropsType = {
  items: ItemPropsType[]
  onClick: (value: any) => void
}

function AccordeonBody(props: AccordeonBodyPropsType) {
  return (
    <ul>
      {/* Сообщаем через onClick родителю кто был кликнут */}
      {props.items.map((i, id) => <li onClick={() => { props.onClick(i.value) }} key={id}>{i.title}</li>)}
    </ul>
  );
}

