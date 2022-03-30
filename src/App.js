import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import {Route,Routes} from "react-router-dom"
import Home from "./Pages/Home/Home";
import Mockman from "mockman-js";
import { Login } from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import NotFound from "./Pages/NotFound";
import LikedVideo from "./Pages/LikedVideos/LikedVideo";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/signup" element={<Signup/>}  />
        <Route path="/liked" element={<LikedVideo/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="mockman" element={<Mockman/>} />
      </Routes>
    </div>
  );
}

export default App;
