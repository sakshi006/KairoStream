import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const VideoContext = createContext();

const useVideoContext = () => useContext(VideoContext);

const VideoContextProvider = ({ children }) => {
  const [allVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/videos");
        setAllVideos(response.data.videos);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ allVideos, loading }}>
      {children}
    </VideoContext.Provider>
  );
};

export { useVideoContext, VideoContextProvider };
