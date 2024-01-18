import React, { ChangeEvent, useRef, useState } from "react";
import { action } from "@storybook/addon-actions";
// import {} from "";

export default {
  title: "input",
  // component: input,
};

export const UncontrolledInput = () => <input />;
export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value
    setValue(actualValue)
  }
  return <><input onChange={onChangeHandler} /> - {value}</>
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')

  return <><input id='inputId' /> <button onClick={() => {
    const el = document.getElementById('inputId') as HTMLInputElement
    setValue(el.value)
  }}>save</button> - actual value: {value}</>
};

export const GetValueOfUncontrolledInputByButtonPressWithREF = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return <>
    <input ref={inputRef} />
    <button onClick={save}>
      save
    </button> - actual value: {value}</>
};

export const ControlledInput = () => <input value={'it-incubator.by'} />;
