import SliderInputBox from "../../Components/SliderInputBox/SliderInputBox";

import { useState } from 'react';
import "./Home.scss"
import calculateOneRepMax from "../../Calculator/CalculateOneRepMax";
import { Link } from "react-router-dom"

const Home = () => {

    const [unit, setUnit] = useState('(Lbs)');
    const [weightLifted, setWeightLifted] = useState(0);
    const [repCount, setRepCount] = useState(1);
    const [oneRepMax, setOneRepMax] = useState(1);

    function updateWeightLifted(weight) {
        setWeightLifted(weight)
        setOneRepMax(calculateOneRepMax(weight, repCount))
    }

    function updateRepCount(reps) {
        setRepCount(reps)
        setOneRepMax(calculateOneRepMax(weightLifted, reps))
    }

    return (
        <div>
        <div className="home__container">
            <div className="home__title">
                BenchCalculator.com
            </div>
            <div className="main__section__container">
                <div className="calculator__container">
                    <div className="units_container">
                        <label className="weight__type__container">
                            <input className="rad" type="radio" name="radio" checked={unit == "(Lbs)"} onChange={() => setUnit("(Lbs)")} />
                            Lbs
                        </label>
                        <label className="weight__type__container">
                            <input className="rad" type="radio" color="#000000" name="radio" value="Kgs" onChange={() => setUnit("(Kgs)")} />
                            Kgs
                        </label>
                    </div>
                    <SliderInputBox label="Weight Lifted" default="0" limit="750" step="5" min="0" unit={unit} c={weight => updateWeightLifted(weight)} />
                    <SliderInputBox label="Reps Performed" default="1" limit="20" step="1" min="1" c={rep => updateRepCount(rep)} />
                    <div className="orm__container">
                        <div className="orm__number">
                            {oneRepMax}
                        </div>
                        <div className="orm__label">
                            Estimated One-Rep-Max
                        </div>
                    </div>
                    <div className="advanced__link">
                        <Link to="/AdvancedCalculator">Try Out The Advanced Calculator</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="warning__wrapper">
            <div className="warning">
                <div className="warning__text">
                    WARNING: This is just and estimate and may not be true to your actual One-Rep-Max. Always Bench with cation. Use a spotter, especially when attempting heavy loads.
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home