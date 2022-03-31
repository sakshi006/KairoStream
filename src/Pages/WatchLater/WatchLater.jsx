import React from 'react'
import VideoCard from '../../Components/VideoCard/VideoCard';
import { useWatchLater } from '../../context/watchLaterContext';

const WatchLater = () => {
    const { watchLater } = useWatchLater();

  return (
    <div className="liked-video-page">
      <div className="header-info">
        <h3>( {watchLater.watchLaterArray.length} Videos in Watch Later )</h3>
      </div>
     
      {watchLater.watchLaterArray.length < 1  && (
        <h3 className="empty-list">No videos yet</h3>
      )}
      <div className="liked-video-list">
        {watchLater.watchLaterArray.map((item) => (
            <VideoCard item = {item} key={item._id}/>
        ))}
      </div>
    </div>
  );
  
}

export default WatchLater