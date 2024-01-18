import React, { ChangeEvent, HTMLInputTypeAttribute, useRef, useState } from "react";
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

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <input value={parentValue} onChange={onChangeHandler} />
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }
  return <input type="checkbox" checked={parentValue} onChange={onChangeHandler} />
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>('1')
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <select value={parentValue} onChange={onChangeHandler} >
    <option>none</option>
    <option value={'1'}>Minsk</option>
    <option value={'2'}>Moscow</option>
    <option value={'3'}>Astana</option>
  </select>
}




export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'} />;
