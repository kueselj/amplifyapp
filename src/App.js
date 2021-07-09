import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import SimpleCalculator from "./SimpleCalculator";

import HowItWorks from "./HowItWorks";




class App extends Component {
  render() {
    return (
      <HashRouter>
          <div>
            
            <ul className="header">
              BenchCalculator.com
              {/* <li><NavLink class = "navbar" exact to="/">Calculator</NavLink></li>
              
              <li><NavLink to="/HowItWorks">How It Works</NavLink></li> */}
            </ul>
            
            <div className="content">
              <Route exact path="/" component={SimpleCalculator}/>
              
              <Route path="/HowItWorks" component={HowItWorks}/>
            </div>
            
          </div>
        </HashRouter>
    );
  }
}

export default App;
