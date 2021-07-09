import React, { Component } from "react";
import { useState } from 'react';
import calculateOneRepMax from "./CalculateOneRepMax"

function SimpleCalculator() {

    const [oneRepMax, setOneRepMax] = useState(1);
    const [unit, setUnit] = useState(false);
    const [weightLifted, setWeightLifted] = useState(1);
    const [repCount, setRepCount] = useState(1);
    
    
    
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

        
        <div class = "calculator-container">

            <input type="checkbox" onChange={() => setUnit(!unit)}/>
            
            {thing}
            <div class = "orm-label">
                One Rep Max: {oneRepMax} {thing}
            </div>
            <div class = "weight-container">
                
                <div class = "weight-count">
                    {weightLifted}
                </div>
                <div>
                    <input class="weight-input" defaultValue = "1" type="range" min="1" max="500" onChange={event => updateWeightLifted(event.target.value)}></input>  
                </div>
                <div class = "weight-label">
                    Weight Lifted
                </div>
            </div>

            <div class = "rep-container">
                
                <div class = "rep-count">
                    {repCount}
                </div>
                <div>
                    <input class="rep-input" defaultValue = "1" type="range" min="1" max="20" onChange={event => updateRepCount(event.target.value)}></input>  
                </div>
                <div class = "rep-label">
                    Reps Performed
                </div>
            </div>  
         </div>
    );
  }

 
export default SimpleCalculator;