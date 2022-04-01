import React from "react";
import { BsFillClockFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { useParams, useNavigate, Link } from "react-router-dom";
import Iframe from "react-iframe-click";
import "./SingleVideo.css";
import {useVideoContext,useWatchLater,useLike,useHistory} from "../../context"

const SingleVideo = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // context imports 
  const { video } = useVideoContext();
  const { videoID } = useParams();
  const { likeState, addToLikes } = useLike();
  const { watchLater, addToWatchLater } = useWatchLater();
  const { addToHistory } = useHistory();

  const findVideo = video.find((item) => item._id === videoID);
  const findItemInLike = likeState.likes.find(
    (product) => product._id === videoID
  );
  const findItemInWatchLater = watchLater.watchLaterArray.find(
    (product) => product._id === videoID
  );


  return (
    <div className="single-video">
      <Link className="back-link" to="/"><BiArrowBack style={{marginRight:"0.3rem"}}/>Back To Browse</Link>
      <Iframe
        frameBorder="0"
        width="100%"
        height="540rem"
        src={`https://www.youtube.com/embed/${findVideo._id}`}
        onInferredClick={() => (token && addToHistory(findVideo))}
      ></Iframe>
      <footer>
        <span className="watch-later">
          {findItemInWatchLater ? (
            <div
              className="toggle-watch-later"
              onClick={() =>
                token ? addToWatchLater(findVideo) : navigate("/login")
              }
            >
              <strong>Remove Video</strong>
              <BsFillClockFill style={{ marginLeft: "0.5rem" }} />
            </div>
          ) : (
            <div  className="watch-later"
              onClick={() =>
                token ? addToWatchLater(findVideo) : navigate("/login")
              }
            >
              <strong>Watch Later</strong>
              <BsFillClockFill style={{ marginLeft: "0.5rem" }} />
            </div>
          )}
        </span>
        <ul>
          {findItemInLike ? (
            <div className="liked-vide-div"  onClick={() =>
              token ? addToLikes(findVideo) : navigate("/login")
            }>
           <strong> Remove From Liked Videos</strong>
              <i
                style={{ color: "red" }}
              
                className="fas fa-heart"
              ></i>
            </div>
          ) : (
              <div className="remove-liked-video"  onClick={() =>
                token ? addToLikes(findVideo) : navigate("/login")
              } >
             <strong> Add To Liked Videos</strong>
              <i
             
              className="fas fa-heart"
            ></i>
              </div>
            
          )}
        </ul>
      </footer>
    </div>
  );
};

export default SingleVideo;
