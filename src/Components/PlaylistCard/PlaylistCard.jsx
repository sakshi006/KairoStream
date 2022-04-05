import React from 'react'
import { usePlaylist } from '../../context'
import { Link } from "react-router-dom";

export const PlaylistCard = ({item,playlist}) => {
    const {videoToPlayList} = usePlaylist();
  return (
    <div className="video__card">
      <Link to={`/videos/${item._id}`}>
        <div className="video__img">
          <img
            src=""
            alt="thumbnail_img"
          />
        </div>
      </Link>
      <div className="video__info">
        <Link to={`/videos/${item._id}`}>
          <h5>
            {item.title.length < 25
              ? item.title
              : item.title.substring(0, 25) + "..."}
          </h5>
          <p>category - {item.category}</p>
        </Link>
        <div className="info__one">
         
            <i
              className="fa-solid fa-trash-can"
              onClick={() => videoToPlayList(item, playlist)}
            ></i>
          
        </div>
      </div>
    </div>
  )
}
