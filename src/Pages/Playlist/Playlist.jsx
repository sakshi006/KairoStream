import React, { useState } from "react";
import "./Playlist.css";
import { usePlaylist } from "../../context";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { BsFillTrashFill } from "react-icons/bs";

export const Playlist = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const { playlistState, addPlaylist, deletePlaylist } = usePlaylist();

  return (
    <div className="playlist-grid">
      <div className="playlist-header">
        <h3>All Playlists ( {playlistState.playlist.length} Playlists )</h3>
        <button
          className="btn warn"
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

      {playlistState.playlist.length < 1 && !playlistState.loading && (
        <h3 className="empty__list">You haven't created any playlist yet !</h3>
      )}

      <div className="video-listing-page">
        {playlistState.playlist.map((item) => {
          return (
            <div key={item._id} id="playlist-card" className="card ">
              <Link className="playlist-link" to={`${item._id}`}>
                <h3>{item.title.toUpperCase()}</h3>
              
              </Link>
              <BsFillTrashFill className="playlist-icon" onClick={() => deletePlaylist(item)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
