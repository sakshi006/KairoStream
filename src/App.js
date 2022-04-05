import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import {
  Home,
  Login,
  Signup,
  NotFound,
  LikedVideo,
  WatchLater,
  History,
  Playlist,
} from "./Pages";
import SingleVideo from "./Pages/SingleVideo/SingleVideo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/liked" element={<LikedVideo />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path ="/playlist" element={<Playlist/>}/>
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/video/:videoID" element={<SingleVideo />} />
        <Route path="mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
