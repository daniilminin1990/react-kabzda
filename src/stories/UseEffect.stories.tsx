import React, {useEffect, useState} from "react"

export default {
  title: 'useEffect demo',
}

// ЗАПУСКАТЬ НУЖНО iframe
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

export const SetTimeoutExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1);

  console.log('SetTimeoutExample')

  useEffect(() => {
    setTimeout(() => {
      console.log('setTimeout')
      document.title = counter.toString()
    }, 1000)
  }, [counter]);

  return <>
    Hello {counter} {fake}
    <button onClick={() => setFake(fake + 1)}>fake+</button>
    <button onClick={() => setCounter(counter + 1)}>+</button>
  </>
}

export const SetIntervalExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1);

  console.log('SetIntervalExample')

  useEffect(() => {
    setInterval(() => {
      console.log('tick: ' + counter)
      setCounter(state => state + 1)
    }, 1000)
  }, []);

  return <>
    Hello, counter: {counter} - fake: {fake}
  </>
}