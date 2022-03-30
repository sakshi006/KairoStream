import React from "react";
import "./VideoCard.css";
import { BsFillClockFill } from "react-icons/bs";

const VideoCard = ({item}) => {
  return (
    <div className="cardcom background">
      <div className="card">
        <img
          className="card-image-one"
          src={item.thumbnail}
          alt="card"
        />
        <article className="card-text-one">
          <figcaption>{item.title}</figcaption>
          <h5>{item.creator}</h5>
          <summary>Published on : {item.published}</summary>
        </article>
        <footer>
          <span className="watch-later">
            Watch Later <BsFillClockFill style={{ marginLeft: "0.5rem" }} />
          </span>
          <ul>
            <i className="fas fa-heart"></i>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default VideoCard;
