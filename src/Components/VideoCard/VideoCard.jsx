import React from "react";
import "./VideoCard.css";
import { BsFillClockFill } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useLike,useWatchLater } from "../../context";
import { useNavigate, Link } from "react-router-dom";

const VideoCard = ({ item }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { likeState, addToLikes } = useLike();
  const { watchLater, addToWatchLater } = useWatchLater();

  const findItemInLike = likeState.likes.find(
    (product) => product._id === item._id
  );
  const findItemInWatchLater = watchLater.watchLaterArray.find(
    (product) => product._id === item._id
  );

  return (
    <div className="cardcom background">
      <div className="card">
        <Link className="single-video-link" to={`/video/${item._id}`}>
          <div className="text-over-video">
            <AiOutlinePlayCircle className="play-btn" />

            <img className="card-image-one" src={item.thumbnail} alt="card" />
          </div>
        </Link>
        <Link className="single-video-link" to={`/video/${item._id}`}>
          <article className="card-text-one">
            <figcaption>{item.title}</figcaption>
            <h5>{item.creator}</h5>
            <summary>Published on : {item.published}</summary>
          </article>
        </Link>
        <footer>
          <span className="watch-later">
            {findItemInWatchLater ? (
              <div
                className="toggle-watch-later"
                onClick={() =>
                  token ? addToWatchLater(item) : navigate("/login")
                }
              >
                <strong>Remove Video</strong>
                <BsFillClockFill style={{ marginLeft: "0.5rem" }} />
              </div>
            ) : (
              <div
                onClick={() =>
                  token ? addToWatchLater(item) : navigate("/login")
                }
              >
                <strong>Watch Later</strong>{" "}
                <BsFillClockFill style={{ marginLeft: "0.5rem" }} />
              </div>
            )}
          </span>
          <ul>
            {findItemInLike ? (
              <i
                style={{ color: "red" }}
                onClick={() => (token ? addToLikes(item) : navigate("/login"))}
                className="fas fa-heart"
              ></i>
            ) : (
              <i
                onClick={() => (token ? addToLikes(item) : navigate("/login"))}
                className="fas fa-heart"
              ></i>
            )}
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default VideoCard;
