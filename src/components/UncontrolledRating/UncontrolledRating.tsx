import React, { useState } from "react";

type RatingPropsType = {
};

// ! Либо так, если нет отдельного описания типа
// export const Rating = (props: { value: number }) => {

export const UncontrolledRating = (props: RatingPropsType) => {

  const [value, setValue] = useState(0)

  // Через условнный рендеринг -- т.е. {if props.value === true то }
  return (
    <div>
      <Star selected={value > 0} setValue={setValue} value={1} />
      <Star selected={value > 1} setValue={setValue} value={2} />
      <Star selected={value > 2} setValue={setValue} value={3} />
      <Star selected={value > 3} setValue={setValue} value={4} />
      <Star selected={value > 4} setValue={setValue} value={5} />
    </div>
  );
};

type StartPropsType = {
  selected: boolean
  value: 1 | 2 | 3 | 4 | 5
  setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StartPropsType) {
  console.log("Star rendering");
  // Условие. Если selected == true, то отрисуй жирный star

  // return props.selected ? <span> <b>star </b> </span> : <span>star </span>
  return <span onClick={() => props.setValue(props.value)}> {props.selected ? <b>star </b> : 'star '} </span>
}
