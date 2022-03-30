import { useContext, createContext, useReducer } from "react";
import { filterReducer } from "../Reducer/filterReducer";

const VideoFilterContext = createContext();

const useVideoFilterContext = () => useContext(VideoFilterContext);

const VideoFilterContextProvider = ({ children }) => {

  const [videoState, videoStateDispatch] = useReducer(filterReducer, {
    category: {
      all: true,
      basketball: false,
      badminton: false,
      football: false,
      cricket: false,
    },
    latest: false,
  });

  return (
    <VideoFilterContext.Provider value={{ videoState, videoStateDispatch }}>
      {children}
    </VideoFilterContext.Provider>
  );
};

export { useVideoFilterContext, VideoFilterContextProvider };