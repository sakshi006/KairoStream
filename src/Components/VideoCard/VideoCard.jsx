import React from "react";
import "./VideoCard.css";
import { BsFillClockFill } from "react-icons/bs";

const VideoCard = () => {
  return (
    <div className="cardcom background">
      <div className="card">
        <img
          className="card-image-one"
          src="https://media.istockphoto.com/photos/two-professional-basketball-players-fight-fo-a-ball-picture-id1143056382?b=1&k=20&m=1143056382&s=170667a&w=0&h=cF0Db2CC75ERHZ3DcEcV9l0Y2IyEZdxejoX3x5kaKyo="
          alt="card"
        />
        <article className="card-text-one">
          <figcaption>8 times stephen curry shocked the world</figcaption>
          <h5>Supplier name</h5>
          <summary>Published on : 20 march 2202</summary>
        </article>
        <footer>
          <span className="watch-later">
            Watch Later <BsFillClockFill style={{marginLeft:"0.5rem"}} />
          </span>
          <ul>
            <i className="fas fa-heart"></i>
            <i className="fas fa-share-alt"></i>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default VideoCard;
