import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdvancedCalculator from "./Pages/AdvancedCalculator/AdvancedCalculator";

import Home from "./Pages/Home/Home"


function App() {
  return (
    <div className = "component_wrapper">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/AdvancedCalculator" element={<AdvancedCalculator />}/>
      </Routes>
    </Router>
    <div className="extra">

    </div>
    </div>
  );
}

export default App;
