import React from "react";
import { useState } from 'react';

import "./SliderInputBox.scss"

const SliderInputBox = (props) => {

    function updateCount(reps) {
        
        setCount(reps)
        props.c(reps)
        
    }

    const [count, setCount] = useState(0);

    return (
        <div className="sib__container">
            <div className="sib__number">
                <input type="tel" className="sib__input" value = {count}  onChange={event => updateCount(event.target.value)}/>
            </div>
            <div className="sib__slider__container">
                <input type="tel" className="sib__slider" value = {count} type="range" max={props.limit} step={props.step} onChange={event => updateCount(event.target.value)}></input>
            </div>
            <div className="sib__label">
                {props.label} {props.unit}
            </div>
        </div>
    );

}

export default SliderInputBox;