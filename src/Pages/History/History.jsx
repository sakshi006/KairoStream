import React from "react";
import HistoryCard from "../../Components/HistoryCard/HistoryCard";
import { useHistory } from "../../context/historyContext";

export const History = () => {
  const { historyState, clearHistory } = useHistory();

  return (
    <>
      <div className="header-info">
        <h3>History Videos</h3>  {historyState.history.length ===1? <h5>1 Video</h5> :<h5>{historyState.history.length} Videos</h5>} 
      </div>
      <div className="liked-video-page">
        {historyState.history.length < 1 ? (
          <h3 className="empty-list">No watched videos yet</h3>
        ) : (
          <button className="remove-from-history clear-all" onClick={clearHistory}>Clear All</button>
        )}
        <div className="liked-video-list">
          {historyState.history.map((item) => (
            <HistoryCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};
