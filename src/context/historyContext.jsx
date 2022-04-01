import axios from "axios";
import { useEffect,createContext, useContext, useReducer } from "react";
import { historyReducer } from "../Reducer/historyReducer";

const HistoryContext = createContext();

const useHistory = () => useContext(HistoryContext);

const HistoryProvider = ({ children }) => {
  const token = localStorage.getItem("token");

  const [historyState, historyDispatch] = useReducer(historyReducer, {
    history: [],
  });

  const getHistoryData = async () => {
    try {
      const historyData = await axios.get("/api/user/history", {
        headers: { authorization: token },
      });
      historyDispatch({
        type: "ADD_TO_HISTORY",
        payload: historyData.data.history,
      });
    } catch (err) {
      console.error(err,"getHistoryData");
    }
  };

  const addToHistory = async (video) => {
    try {
      const historyResponse = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: { authorization: token },
        }
      );

      if (historyResponse.status === 200 || historyResponse.status === 201) {
        historyDispatch({
          type: "ADD_TO_HISTORY",
          payload: historyResponse.data.history,
        });
      } else {
        console.log("error in history");
      }
    } catch (err) {
      console.log(err,"addToHistory");
    }
  };

  const removeFromHistory = async (video) => {
    try {
      const historyResponse = await axios.delete(
        `/api/user/history/${video._id}`,
        { headers: { authorization: token } }
      );

      if (historyResponse.status === 200 || historyResponse.status === 201) {
        historyDispatch({
          type: "REMOVE_FROM_HISTORY",
          payload: historyResponse.data.history,
        });
      }
    } catch (err) {
      console.err(err,"removeFromHistory");
    }
  };

  const clearHistory = async () => {
    try {
      const response = await axios.delete("/api/user/history/all", {
        headers: { authorization: token },
      });
      if (response.status === 200 || response.status === 201) {
        historyDispatch({
          type: "CLEAR_HISTORY",
          payload: response.data.history,
        });
      }
    } catch (err) {
      console.error(err,"clearHistory");
    }
  };

  useEffect(() => {
    getHistoryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HistoryContext.Provider
      value={{
        historyState,
        historyDispatch,
        addToHistory,
        removeFromHistory,
        clearHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export { useHistory, HistoryProvider };
