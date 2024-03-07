// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type Props = {
    mode?: "analog" | 'digital'
};

export const get2DigitsString = (number:number) => number < 10 ? `0${number}` : number
export const Clock: React.FC = (props: Props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const tickId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(tickId)
        }
    }, []);

    let view
    switch (props.mode){
        case 'analog':{
            view = <AnalogClockView date={date}/>
            break
        }
        case 'digital': {
            view = <DigitalClockView date={date}/>
        }
    }

    return (
        <div>
            {view}
        </div>
    );
};

export type ClockViewPropsType = {
    date: Date
}

