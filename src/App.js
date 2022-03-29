import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home/>}  /> */}
      </Routes>
      <h1>Hllo</h1>
    </div>
  );
}

export default App;
