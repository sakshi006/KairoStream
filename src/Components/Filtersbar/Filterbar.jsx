import React from "react";
import { useVideoFilterContext } from "../../context/videoFilterContext";
import "./Filterbar.css";

const Filterbar = () => {
  const { videoState:{latest}, videoStateDispatch} = useVideoFilterContext();
 

  return (
    <div className="filter-bar">
      <div className="filter-bar-left">
        <button className="filter-bar-btn" onClick={()=>videoStateDispatch({type:"ALL"})}>All</button>
        <button className="filter-bar-btn" onClick={()=>videoStateDispatch({type:"BASKETBALL"})}>Basketball</button>
        <button className="filter-bar-btn" onClick={()=>videoStateDispatch({type:"CRICKET"})}>Cricket</button>
        <button className="filter-bar-btn" onClick={()=>videoStateDispatch({type:"BADMINTON"})}>Badminton</button>
        <button className="filter-bar-btn" onClick={()=>videoStateDispatch({type:"FOOTBALL"})}>Football</button>
      </div>
      <div className="filter-bar-right">
        <input type="checkbox" id="latest" name="latest" value="latest" checked={latest} onChange={()=>videoStateDispatch({type:"LATEST"})} />
        <label htmlFor="latest">Latest Videos</label>
      </div>
    </div>
  );
};

export default Filterbar;
