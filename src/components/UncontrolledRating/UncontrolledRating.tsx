import React, { useState } from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
  defaultValue?: RatingValueType
  onChange: (value: RatingValueType) => void
};

// ! Либо так, если нет отдельного описания типа
// export const Rating = (props: { value: number }) => {

export const UncontrolledRating = (props: RatingPropsType) => {

  const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

  // Через условнный рендеринг -- т.е. {if props.value === true то }
  return (
    <div>
      <Star selected={value > 0} setValue={() => { setValue(1); props.onChange(1); }} />
      <Star selected={value > 1} setValue={() => { setValue(2); props.onChange(2); }} />
      <Star selected={value > 2} setValue={() => { setValue(3); props.onChange(3); }} />
      <Star selected={value > 3} setValue={() => { setValue(4); props.onChange(4); }} />
      <Star selected={value > 4} setValue={() => { setValue(5); props.onChange(5); }} />
    </div>
  );
};

type StartPropsType = {
  selected: boolean
  setValue: () => void
}

function Star(props: StartPropsType) {
  console.log("Star rendering");
  // Условие. Если selected == true, то отрисуй жирный star

  // return props.selected ? <span> <b>star </b> </span> : <span>star </span>
  return <span onClick={() => props.setValue()}> {props.selected ? <b>star </b> : 'star '} </span>
}
