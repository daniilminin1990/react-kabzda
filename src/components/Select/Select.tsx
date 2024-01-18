import React from "react";

type ItemPropsType = {
  title: string,
  value: any
}

type SelectPropsType = {
  value: any
  items: ItemPropsType[]
  onChange: (value: any) => void
};

export const Select = (props: SelectPropsType) => {
  return (
    <div>
      {/* 
      Это div, в которой будет отображаться текущее Value 
      И если кликаем по div, то должен раскукоживаться список вложенных items, по которому если кликнем, то заменится текущее value на то, по которому кликнули
      НЕ НУЖНО КОНТРОЛЛИРОВАТЬ ЭТОТ АККОРДЕОН, его раскукоживание и скукоживание, т.е. boolean (collapsed) передавать от родителя не надо
      Стилизацию взять из MUI componenst = select
      */}
      <div>{ }</div>
      {/* {props.map(i => <div>{i.title}</div>)} */}
    </div>
  );
};