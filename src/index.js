import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";
import { VideoContextProvider } from "./context/videoContext";
import { VideoFilterContextProvider } from "./context/videoFilterContext";
import { LikeProvider } from "./context/likedVideoContext";
import { WatchLaterProvider } from "./context/watchLaterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoContextProvider>
        <VideoFilterContextProvider>
          <LikeProvider>
            <WatchLaterProvider>
              <App />
            </WatchLaterProvider>
          </LikeProvider>
        </VideoFilterContextProvider>
      </VideoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
