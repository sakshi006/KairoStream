import React from "react";
import "../LikedVideos/LikedVideo.css";
import { usePlaylist } from "../../context";
import { useParams,Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { PlaylistCard } from "../../Components/PlaylistCard/PlaylistCard";

export const SinglePlaylist = () => {
  const {playlistState} = usePlaylist();
  const {playlistID} = useParams();

  const findPlaylist = playlistState.playlist.find(item=>item._id===playlistID)
  return (

    <div className="playlist-page">
     <Link className="back-link" to="/playlist">
        <BiArrowBack style={{ marginRight: "0.3rem" }} />
        Back To Playlists
      </Link>
      <div className="header-info">
      <h3>{findPlaylist.title.toUpperCase()} Playlist</h3>  {findPlaylist.videos.length ===1? <h5>1 Video</h5> :<h5>{findPlaylist.videos.length} Videos</h5>} 
      </div>
      <div className="liked-video-page">
        {playlistState.playlist.length < 1  && (
          <h3 className="empty-list">No playlist videos yet</h3>
        )}
        <div className="liked-video-list">
          {findPlaylist.videos.map((item) => (
            <PlaylistCard playlist={findPlaylist} item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

