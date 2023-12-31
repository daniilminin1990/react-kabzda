import { useState } from "react"

type PropsType = {
  on: boolean
  onChange: (on: boolean) => void
  // switchAction: () => void
}

export function OnOff(props: PropsType) {

  const onStyle = {
    width: "40px",
    height: "25px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: props.on ? 'green' : 'white'
  }
  const offStyle = {
    width: "40px",
    height: "25px",
    border: "1px solid black",
    marginLeft: "5px",
    display: "inline-block",
    padding: "2px",
    backgroundColor: props.on ? 'white' : 'red'
  }
  const indicatorStyle = {
    width: "16px",
    height: "16px",
    borderRadius: "8px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: props.on ? "green" : 'red'
  }

  return <div>
    <div style={onStyle} onClick={() => { props.onChange(true) }}>On</div>
    <div style={offStyle} onClick={() => { props.onChange(false) }}>Off</div>
    <div style={indicatorStyle}></div>
  </div>
}
