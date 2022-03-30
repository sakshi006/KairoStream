import React from 'react'
import "./Videolisting.css"

import VideoCard from '../../Components/VideoCard/VideoCard'

const Videolisting = () => {
  return (
    <div className='video-listing-page'>  <VideoCard/>
    <VideoCard/>
    <VideoCard/>
    <VideoCard/></div>
  )
}

export default Videolisting