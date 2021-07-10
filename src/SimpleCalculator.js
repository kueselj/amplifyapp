import React, { Component } from "react";
import { useState } from 'react';
import calculateOneRepMax from "./CalculateOneRepMax"
import convert from "./Convert"

function SimpleCalculator() {

    const [unit, setUnit] = useState(false);

    const [weightLifted, setWeightLifted] = useState(1);
    const [repCount, setRepCount] = useState(1);

    const [oneRepMax, setOneRepMax] = useState(1);
    
    
    function toggleWeight(unit) {
        setUnit(!unit)
        
    }
    
    function updateWeightLifted(weight) {
        setWeightLifted(weight)
        setOneRepMax(calculateOneRepMax(weight, repCount))
    }

    function updateRepCount(reps) {
        setRepCount(reps)
        setOneRepMax(calculateOneRepMax(weightLifted, reps))
    }

    var thing;
    if (unit) {
        thing = "Kgs"
    }
    else if (!unit) {
        thing = "Lbs"
    }
  
    return (

        <div>
            <div class = "calculator-container">

                {/* <input type="checkbox" onChange={() => toggleWeight(unit)}/>
                
                {thing} */}
                
                <div class = "weight-container">
                    
                    <div class = "weight-count">
                        <input label = "enter" class = "weight-input"  defaultValue = "1" type="number" onChange={event => updateWeightLifted(event.target.value)}/>
                        
                    </div>
                    {/* <div>
                        <input class="weight-slider" defaultValue = "1" type="range" min="1" max="500" onChange={event => updateWeightLifted(event.target.value)}></input>  
                    </div> */}
                    <div class = "weight-label">
                        Weight Lifted (Lbs)
                    </div>
                </div>

                <div class = "rep-container">
                    
                    <div class = "rep-count">
                        {repCount}
                    </div>
                    <div>
                        <input class="rep-input" defaultValue = "0" type="range" min="0" max="20" onChange={event => updateRepCount(event.target.value)}></input>  
                    </div>
                    <div class = "rep-label">
                        Reps Performed
                    </div>
                </div>
                <div class = "orm-label">
                    One Rep Max:
                </div> 
                <div class = "orm-label-weight">
                    {oneRepMax} {thing}
                </div>  
                
            </div>
                
         </div>
    );
  }

 
export default SimpleCalculator;