import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";
import {
  VideoContextProvider,
  HistoryProvider,
  VideoFilterContextProvider,
  LikeProvider,
  WatchLaterProvider,
  PlaylistProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoContextProvider>
        <HistoryProvider>
          <PlaylistProvider>
            <VideoFilterContextProvider>
              <LikeProvider>
                <WatchLaterProvider>
                  <App />
                </WatchLaterProvider>
              </LikeProvider>
            </VideoFilterContextProvider>
          </PlaylistProvider>
        </HistoryProvider>
      </VideoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
