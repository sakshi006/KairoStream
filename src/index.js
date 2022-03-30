import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";
import { VideoContextProvider } from "./context/videoContext";
import { VideoFilterContextProvider } from "./context/videoFilterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoContextProvider>
        <VideoFilterContextProvider>
          <App />
        </VideoFilterContextProvider>
      </VideoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
