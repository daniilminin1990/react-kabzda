import React, { useState } from "react"
import {Clock} from "../components/Clock/Clock";

export default {
    title: 'Clock demo',
    component: Clock
}

export const BaseAnalogExample = () => {
    console.log('BaseExample')
    return <Clock mode={'analog'}/>
}
export const BaseDigitalExample = () => {
    console.log('BaseExample')
    return <Clock mode={'digital'}/>
}