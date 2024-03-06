import React, {useEffect, useState} from "react"

export default {
  title: 'useEffect/ Simple Example',
}

export const SimpleExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1);

  console.log('SimpleExample')

  // Без зависимостей -- при каждом ререндере
  useEffect(() => {
    console.log('useEffect')
    //! side Effects:
    // api.getUsers().then('') -- запрос на сервер
    // setInterval // асинхронная операция
    // indexedDBD // обращение в БД
    // document.getElementId // изменение в DOM
    // document.title = 'User'

  });

  // С пустыми зависимостями -- 1 раз при первичном рендере
  useEffect(() => {
    console.log('useEffect')
  }, []);

  // С зависимостями от counter
  useEffect(() => {
    console.log('useEffect')
  }, [counter]);

  return <>
    Hello {counter}
    <button onClick={() => setFake(fake + 1)}>fake+</button>
    <button onClick={() => setCounter(counter + 1)}>+</button>
  </>
}