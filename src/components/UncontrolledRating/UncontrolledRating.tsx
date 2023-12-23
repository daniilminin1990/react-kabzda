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
      <Star selected={value > 0} /> <button onClick={() => { setValue(1) }}>1</button>
      <Star selected={value > 1} /> <button onClick={() => { setValue(2) }}>2</button>
      <Star selected={value > 2} /> <button onClick={() => { setValue(3) }}>3</button>
      <Star selected={value > 3} /> <button onClick={() => { setValue(4) }}>4</button>
      <Star selected={value > 4} /> <button onClick={() => { setValue(5) }}>5</button>
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
