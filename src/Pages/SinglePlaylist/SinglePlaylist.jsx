import React from "react";
import "./LikedVideo.css";
import { usePlaylist } from "../../context";
import { useParams } from "react-router-dom";
import { PlaylistCard } from "../../Components/PlaylistCard/PlaylistCard";

export const SinglePlaylist = () => {
  const {playlistState} = usePlaylist();
  const {playlistID} = useParams();

  const findPlaylist = playlistState.playlist.find(item=>item._id===playlistID)

  return (

    <>
      <div className="header-info">
      <h3>Playlist</h3>  {playlistState.playlist.length ===1? <h5>1 Video</h5> :<h5>{playlistState.playlist.length} playlists</h5>} 
      </div>
      <div className="liked-video-page">
        {playlistState.playlist.length < 1  && (
          <h3 className="empty-list">No playlist videos yet</h3>
        )}
        <div className="liked-video-list">
          {findPlaylist.videos?.map((item) => (
            <PlaylistCard playlist={findPlaylist} item={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};

