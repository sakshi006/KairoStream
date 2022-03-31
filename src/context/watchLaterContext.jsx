import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { watchLaterReducer } from "../Reducer/watchLaterReducer";

const WatchLaterContext = createContext();

const useWatchLater = () => useContext(WatchLaterContext);

const WatchLaterProvider = ({ children }) => {
  let token = localStorage.getItem("token");

  const [watchLater, dispatchWatchLater] = useReducer(watchLaterReducer, {
    watchLaterArray: [],
  });

  const getWatchLaterData = async () => {
    try {
      const response = await axios.get("/api/user/watchlater", {
        headers: { authorization: token },
      });
      dispatchWatchLater({
        type: "ADD_TO_WATCH",
        payload: response.data.watchLater,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const addToWatchLater = async (video) => {
    const findIndex = watchLater.watchLaterArray.findIndex(
      (prod) => prod._id === video._id
    );
    if (findIndex === -1) {
      try {
        const response = await axios.post(
          "/api/user/watchlater",
          { video },
          {
            headers: { authorization: token },
          }
        );

        if (response.status === 200 || response.status === 201) {
          dispatchWatchLater({
            type: "ADD_TO_WATCH",
            payload: response.data.watchLater,
          });
        } else {
          console.log("error in watch later post");
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const response = await axios.delete(
          `/api/user/watchlater/${video._id}`,
          {
            headers: { authorization: token },
          }
        );
        if (response.status === 200 || response.status === 201) {
          dispatchWatchLater({
            type: "ADD_TO_WATCH",
            payload: response.data.watchLater,
          });
        } else {
          console.log("Server error, please try again later II");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getWatchLaterData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WatchLaterContext.Provider
      value={{ watchLater, dispatchWatchLater, addToWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export { useWatchLater, WatchLaterProvider };
