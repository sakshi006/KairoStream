import React from 'react'
import "./Videolisting.css"
import { useVideoFilterContext } from "../../context/videoFilterContext";
import{filterVideosByTag} from "../../Utils/videoFilter"
import { latestVideoFunction } from '../../Utils/latestVideo';

import VideoCard from '../../Components/VideoCard/VideoCard'
import { useVideoContext } from '../../context/videoContext'

const Videolisting = () => {
  const {videoState:{category,latest}} = useVideoFilterContext();
  
  const {video} = useVideoContext()

  const filteredVideoss = filterVideosByTag(video,category)
  const latestVideos = latestVideoFunction(filteredVideoss,latest)


  return (
    <div className='video-listing-page'>  
    {latestVideos.map((item)=>{
      return(
        <VideoCard key={item._id} item={item} />
      )
    })}
    </div>
  )
}

export default Videolisting