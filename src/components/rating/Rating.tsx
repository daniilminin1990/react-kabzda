import React from "react";

type RatingPropsType = {
  value: number;
  // Либо т.к. у нас значения только от 0 до 5 то можно так:
  // value: 0 | 1 | 2 | 3 | 4 | 5
};

// ! Либо так, если нет отдельного описания типа
// export const Rating = (props: { value: number }) => {

export const Rating = (props: RatingPropsType) => {
  // Через условнный рендеринг -- т.е. {if props.value === true то }
  return (
    <div>
      <Star selected={props.value === 1} />
      <Star selected={props.value === 2} />
      <Star selected={props.value === 3} />
      <Star selected={props.value === 4} />
      <Star selected={props.value === 5} />
    </div>
  );
};

function Star(props: { selected: boolean }) {
  console.log("Star rendering");
  // Условие. Если selected == true, то отрисуй жирный star
  if (props.selected === true) {
    return (
      <span>
        <b>star </b>
      </span>
    );
  } else {
    return <span>star </span>;
  }
}
