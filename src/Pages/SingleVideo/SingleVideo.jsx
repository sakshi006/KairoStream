import React,{useState} from "react";
import { BsFillClockFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { AiOutlinePlus,AiOutlineCheck } from "react-icons/ai";

import { Modal } from "react-responsive-modal";
import Iframe from "react-iframe-click";
import "./SingleVideo.css";
import {
  useVideoContext,
  useWatchLater,
  useLike,
  useHistory,
  usePlaylist,
} from "../../context";

const SingleVideo = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { allVideos } = useVideoContext();
  const { videoID } = useParams();
  const { likeState, addToLikes } = useLike();
  const { watchLater, addToWatchLater } = useWatchLater();
  const { addToHistory } = useHistory();
  const {
    playlistState,
    addPlaylist,
    videoToPlayList,
  } = usePlaylist();


  

  const [modalVisible,setModalVisible] = useState(false)
  const [playlistTitle, setPLaylistTitle] = useState("");
  const [open, setOpen] = useState(false);

  const findVideo = allVideos.find((item) => item._id === videoID);
  const findItemInLike = likeState.likes.find(
    (product) => console.log(product,"product") || product._id === videoID
  );


  const findItemInWatchLater = watchLater.watchLaterArray.find(
    (product) => product._id === videoID
  );





  return (
    <div className="single-video">
      <Link className="back-link" to="/">
        <BiArrowBack style={{ marginRight: "0.3rem" }} />
        Back To Browse
      </Link>
      <Iframe
        frameBorder="0"
        width="100%"
        height="540rem"
        src={`https://www.youtube.com/embed/${videoID}`}
        onInferredClick={() => token && addToHistory(findVideo)}
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
            <div
              className="watch-later"
              onClick={() =>
                token ? addToWatchLater(findVideo) : navigate("/login")
              }
            >
              <strong>Watch Later</strong>
              <BsFillClockFill style={{ marginLeft: "0.5rem" }} />
            </div>
          )}
        </span>
        <div>
          {findItemInLike ? (
            <div
              className="liked-vide-div"
              onClick={() =>
                token ? addToLikes(findVideo) : navigate("/login")
              }
            >
              <strong> Remove From Liked Videos</strong>
              <i style={{ color: "red" }} className="fas fa-heart"></i>
            </div>
          ) : (
            <div
              className="remove-liked-video"
              onClick={() =>
                token ? addToLikes(findVideo) : navigate("/login")
              }
            >
              <strong> Add To Liked Videos</strong>
              <i className="fas fa-heart"></i>
            </div>
          )}
        </div>
        <div className="playlist-mgmt">
          <BsFileEarmarkPlus onClick={()=>setModalVisible(!modalVisible)} /> 

          {modalVisible&&(
            <div className="playlist-view">
            {playlistState.playlist.map((item) => {
              const findPlaylist = playlistState.playlist.find(
                (play) => play._id === item._id
              );
              const findVideoPlaylist = findPlaylist.videos?.find(
                (prod) => prod._id === findVideo._id
              );
              return (
                <p key={item._id}
                  onClick={() => videoToPlayList(findVideo, item)}
                >
                  {findVideoPlaylist ? (
                   <AiOutlineCheck/>
                  ) : (
                   <AiOutlinePlus/>
                  )}
                  {item.title}
                </p>
              );
            })}

            <p
              className="empty-playlist"
              onClick={() => {
                setPLaylistTitle("");
                setOpen(!open);
              }}
            >
             
              Add playlist
            </p>
          </div>
        )}
        {/*<i className="fa-solid fa-check"></i>*/}
      </div>

      <Modal open={open} onClose={() => setOpen(!open)} center>
                  <p>Add Playlist</p>
                  <input
                    className="modal__input"
                    type="text"
                    placeholder=" enter title"
                    value={playlistTitle}
                    onChange={(e) => (setPLaylistTitle(e.target.value))}
                  />
                  <button
                    className="modal__button"
                    onClick={() => {
                      addPlaylist(playlistTitle);
                      setOpen(!open);
                    }}
                  >
                    Add
                  </button>
                </Modal>
          
      </footer>
    </div>
  );
};

export default SingleVideo;
