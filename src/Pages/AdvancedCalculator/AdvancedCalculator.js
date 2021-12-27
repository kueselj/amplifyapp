import SliderInputBox from "../../Components/SliderInputBox/SliderInputBox";

import React from "react";
import { useState } from 'react';
import "./AdvancedCalculator.scss"
import calculateOneRepMax from "../../Calculator/CalculateOneRepMax";
import calculateWeightGivenReps from "../../Calculator/CalculateWeightGivenReps";

import {Link} from "react-router-dom"


const AdvancedCalculator = () => {

    const [unit, setUnit] = useState('(Lbs)');
    const [weightLifted, setWeightLifted] = useState(0);
    const [repCount, setRepCount] = useState(1);
    const [desiredReps, setDesiredReps] = useState(1);

    const [output, setOutput] = useState(1);


    function updateWeightLifted(weight) {
        setWeightLifted(weight)
        setOutput(calculateWeightGivenReps(weight, repCount, desiredReps))
    }

    function updateRepCount(reps) {
        setRepCount(reps)
        setOutput(calculateWeightGivenReps(weightLifted, reps, desiredReps))
    }

    function updateDesiredReps(desiredReps) {
        setDesiredReps(desiredReps)
        setOutput(calculateWeightGivenReps(weightLifted, repCount, desiredReps))
    }

    return (
        <div className = "home__container">
            <div className="home__title">
                BenchCalculator.com
            </div>
            <div className="main__section__container">
                <div className="calculator__container">  
                    <div className="units_container">
                        <label className="weight__type__container">
                            <input className="rad" type="radio" name="radio" checked={unit == "(Lbs)"} onChange={() => setUnit("(Lbs)")}/>
                            Lbs
                        </label>
                        <label className="weight__type__container">
                            <input className="rad" type="radio" color="#000000" name="radio" value = "Kgs" onChange={() => setUnit("(Kgs)")}/>
                            Kgs
                        </label>
                    </div>
                    <SliderInputBox label="Weight Lifted" default="0" min = "0" limit="750" step="5" unit={unit} c={weight => updateWeightLifted(weight)} />
                    <SliderInputBox label="Reps Performed" default="1" min="1" limit="20" step="1" c={rep => updateRepCount(rep)} />
                    <SliderInputBox label="Reps Desired" default="1" min="1" limit="20" step="1" c={desiredReps => updateDesiredReps(desiredReps)} />
                    <div className="orm__container">
                        <div className="orm__number">
                            {output}
                        </div>
                        <div className="orm__label">
                            For {desiredReps} Rep(s) You can Do {output} {unit}
                        </div>
                    </div>
                    <div className = "simple__link">
                        <Link to="/">Back to One-Rep-Max Calculator</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvancedCalculator;