import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import {Route,Routes} from "react-router-dom"
import Home from "./Pages/Home/Home";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="mockman" element={<Mockman/>} />
      </Routes>
    </div>
  );
}

export default App;
