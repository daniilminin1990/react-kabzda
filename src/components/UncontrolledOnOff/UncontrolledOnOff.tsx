import { useState } from "react"

type PropsType = {
  // on: boolean
  onChange: (on: boolean) => void
  defaultOn?: boolean
  // switchAction: () => void
}

export function UncontrolledOnOff(props: PropsType) {

  const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

  const onStyle = {
    width: "40px",
    height: "25px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: on ? 'green' : 'white'
  }
  const offStyle = {
    width: "40px",
    height: "25px",
    border: "1px solid black",
    marginLeft: "5px",
    display: "inline-block",
    padding: "2px",
    backgroundColor: on ? 'white' : 'red'
  }
  const indicatorStyle = {
    width: "16px",
    height: "16px",
    borderRadius: "8px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "green" : 'red'
  }

  const onClicked = () => {
    setOn(true)
    props.onChange(true)
  }
  const offClicked = () => {
    setOn(false)
    props.onChange(false)
  }
  return <div>
    <div style={onStyle} onClick={onClicked}>On</div>
    <div style={offStyle} onClick={offClicked}>Off</div>
    <div style={indicatorStyle}></div>
  </div>
}