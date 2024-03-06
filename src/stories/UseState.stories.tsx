import React, { useState } from "react"

export default {
  title: 'useState demo',
}

const generateData = () => {
  // представим что тут сложные вычисления
  console.log('genData')
  return 123456
}

export const Example1 = () => {
  console.log('Example1')
  // const [counter, setCounter] = useState(0);
  // counst initValue = useMemo(generateData, [])
  // Вместо инициализационного state, в данном случае 0, можем использовать функцию извне generateData без вызова. useState сам ее вызовет

  const [counter, setCounter] = useState(generateData);

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    {counter}
  </>
}