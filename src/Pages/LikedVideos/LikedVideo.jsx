import React from "react";
import "./LikedVideo.css";
import VideoCard from "../../Components/VideoCard/VideoCard";
import { useLike } from "../../context/likedVideoContext";

const LikedVideo = () => {
  const { likeState } = useLike();
  return (
    <>
      <div className="header-info">
        <h3>Liked Videos ( {likeState.likes.length} Videos )</h3>
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

export default LikedVideo;
