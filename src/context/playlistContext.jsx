import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";

const PlaylistContext = createContext();

const usePlaylist = () => useContext(PlaylistContext);

const playlistReducer = (state, action) => {
  switch (action.type) {
    case "API_REQUEST":
      return { ...state, loading: true };
    case "ADD_TO_PLAYLIST":
      return { ...state, playlist: [...action.payload], loading:false };
    default:
      return state ;
  }
};


const PlaylistProvider = ({ children }) => {
  const token = localStorage.getItem("token");

 
  const [playlistState, dispatchPlaylist] = useReducer(playlistReducer, {
    playlist: [],
    loading: false,
  });

  const getPlaylists = async () => {
    dispatchPlaylist({ type: "API_REQUEST" });
    try {
      const response = await axios("/api/user/playlists", {
        headers: { authorization: token },
      });
      dispatchPlaylist({
        type: "ADD_TO_PLAYLIST",
        payload: response.data.playlists,
      });
    } catch (err) {
      console.error(err, "getPlaylists");
    }
  };

  const addPlaylist = async (title) => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        {
          playlist: { title: title, description: " dummy " },
        },
        { headers: { authorization: token } }
      );

      if (response.status === 200 || response.status === 201) {
        dispatchPlaylist({
          type: "ADD_TO_PLAYLIST",
          payload: response.data.playlists,
        });
      }
    } catch (err) {
      console.error(err, "addplaylist");
    }
  };

  const deletePlaylist = async (item) => {
    try {
      const response = await axios.delete(`/api/user/playlists/${item._id}`, {
        headers: { authorization: token },
      });

      if (response.status === 200 || response.status === 201) {
        dispatchPlaylist({
          type: "ADD_TO_PLAYLIST",
          payload: response.data.playlists,
        });
      }
    } catch (err) {
      console.log(err, "deleteplaylists");
    }
  };

  const videoToPlayList = async (video, playlist) => {
    dispatchPlaylist({ type: "API_REQUEST" });
   
    const currentIndex = playlist.videos.findIndex(
      (item) => item._id === video._id
    );

    if (currentIndex === -1) {
      try {
        const response = await axios.post(
          `/api/user/playlists/${playlist._id}`,
          { video },
          {
            headers: { authorization: token },
          }
        );

        if (response.status === 201 || response.status === 200) {
          let newPlaylist = [...playlistState.playlist];
          let currentIndex = newPlaylist.findIndex(
            (item) => item._id === playlist._id
          );

          newPlaylist[currentIndex] = {
            ...newPlaylist[currentIndex],
            videos: [...response.data.playlist.videos],
          };
          dispatchPlaylist({
            type: "ADD_TO_PLAYLIST",
            payload: newPlaylist,
          });
        }
      } catch (err) {
        console.error(err, "videotoplaylist");
      }
    } else {
      try {
        const response = await axios.delete(
          `/api/user/playlists/${playlist._id}/${video._id}`,
          {
            headers: { authorization: token },
          }
        );
        if (response.status === 200 || response.status === 201) {
          let newPlaylist = [...playlistState.playlist];
          let currentIndex = newPlaylist.findIndex(
            (item) => item._id === playlist._id
          );
          newPlaylist[currentIndex] = {
            ...newPlaylist[currentIndex],
            videos: [...response.data.playlist.videos],
          };
          dispatchPlaylist({
            type: "ADD_TO_PLAYLIST",
            payload: newPlaylist,
          });
        }
      } catch (error) {
        console.log(error, "videotoplaylist");
      }
    }
  };

  useEffect(() => {
    getPlaylists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PlaylistContext.Provider
      value={{
        playlistState,
        dispatchPlaylist,
        addPlaylist,
        deletePlaylist,
        videoToPlayList,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export { usePlaylist, PlaylistProvider };
