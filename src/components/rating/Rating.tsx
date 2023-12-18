import React from "react";

type RatingPropsType = {
  value: number;
  // Либо т.к. у нас значения только от 0 до 5 то можно так:
  // value: 0 | 1 | 2 | 3 | 4 | 5
};

// ! Либо так, если нет отдельного описания типа
// export const Rating = (props: { value: number }) => {

export const Rating = (props: RatingPropsType) => {
  if (props.value === 1) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 2) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 3) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 4) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 5) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
      </div>
    );
  }

  return (
    <div>
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
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
