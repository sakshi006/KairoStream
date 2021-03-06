import React from "react";
import "./LikedVideo.css";
import VideoCard from "../../Components/VideoCard/VideoCard";
import { useLike } from "../../context/likedVideoContext";

export const LikedVideo = () => {
  const { likeState } = useLike();
  return (
    <>
      <div className="header-info">
      <h3>Liked Videos</h3>  {likeState.likes.length ===1? <h5>1 Video</h5> :<h5>{likeState.likes.length} Videos</h5>} 
      </div>
      <div className="liked-video-page">
        {likeState.likes.length < 1 && !likeState.loading && (
          <h3 className="empty-list">No liked videos yet</h3>
        )}
        <div className="liked-video-list">
          {likeState.likes.map((item) => (
            <VideoCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};

