import React from "react";
import { Link } from "react-router-dom";
import "./HistoryCard.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useHistory } from "../../context/historyContext";

const HistoryCard = ({ item }) => {
  const { removeFromHistory } = useHistory();
  return (
    <div className="cardcom background">
      <div className="card history-card">
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
        <div className="history-footer">
          <button
            onClick={() => removeFromHistory(item)}
            className="remove-from-history"
          >
            Remove From History
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
