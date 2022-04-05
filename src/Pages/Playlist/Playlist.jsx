import React,{ useState }  from "react";
import "../LikedVideos/LikedVideo.css";
import { usePlaylist } from "../../context";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export const Playlist = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const { playlistState, addPlaylist, deletePlaylist } = usePlaylist();
  

  return (
    <div className="video__grid">
    <div className="video__search watched__video">
      <h3>All Playlists ( {playlistState.playlist.length} Playlists )</h3>
      <button
        onClick={() => {
          setTitle("");
          setOpen(!open);
        }}
      >
        Add Playlist
      </button>
      <Modal open={open} onClose={() => setOpen(!open)} center>
        <p>Add Playlist</p>
        <input
          className="modal__input"
          type="text"
          placeholder=" enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="modal__button"
          onClick={() => {
            addPlaylist(title);
            setOpen(!open);
          }}
        >
          Add
        </button>
      </Modal>
    </div>

    {playlistState.playlist.length < 1 &&  (
      <h3 className="empty__list">You haven't created any playlist yet !</h3>
    )}

    <div className="video__list">
      {playlistState.playlist.map((item) => (
        <div className="playlist__container">
          <Link to={`${item._id}`}>
            <h3>{item.title}</h3>
          </Link>
          <i
            className="fa-solid fa-trash-can"
            onClick={() => deletePlaylist(item)}
          ></i>
        </div>
      ))}
    </div>
  </div>

  );
};

