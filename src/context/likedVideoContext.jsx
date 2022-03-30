import axios from "axios";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { likeReducer } from "../Reducer/likeReducer";

const LikeContext = createContext();

const useLike = () => useContext(LikeContext);

const LikeProvider = ({ children }) => {
    
    let token = localStorage.getItem('token')

  const [likeState, likeDispatch] = useReducer(likeReducer, {
    likes: [],
    loading : false
  });

  const getLikeData = async () => {
    likeDispatch({ type: "API_REQUEST" });
    try {
      const response = await axios.get("/api/user/likes", {
        headers: { authorization: token },
      });
      likeDispatch({ type: "ADD_TO_LIKES", payload: response.data.likes });
    } catch (error) {
      console.log(error);
      likeDispatch({ type: "ERROR_HANDLE" });
    }
  };

  const addToLikes = async (video) => {
    likeDispatch({ type: "API_REQUEST" });
    const findIndex = likeState.likes.findIndex(
      (prod) => prod._id === video._id
    );
    if (findIndex === -1) {
      try {
        const response = await axios.post(
          "/api/user/likes",
          { video },
          {
            headers: { authorization: token },
          }
        );
        if (response.status === 200 || response.status === 201) {
            likeDispatch({ type: "ADD_TO_LIKES", payload: response.data.likes });
       
        } else {
          console.log("Server error, please try again later I");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios.delete(`/api/user/likes/${video._id}`, {
          headers: { authorization: token },
        });
        if (res.status === 200 || res.status === 201) {
          likeDispatch({ type: "ADD_TO_LIKES", payload: res.data.likes });
       
        } else {
          console.log("Server error, please try again later II");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getLikeData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <LikeContext.Provider value={{ likeState, likeDispatch, addToLikes }}>
        {children}
      </LikeContext.Provider>
    </div>
  );
};


export { LikeProvider, useLike };