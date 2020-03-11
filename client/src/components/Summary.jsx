import React from "react";

const summary = ({ desc }) => {
  return (
    <div className="summary-popup">
      <div className="summary-info">
        <p className="summary-heading">SUMMARY</p>
        <p className="summary-desc">{desc}</p>
        <button className="summary-btn btn">Read More</button>
      </div>
    </div>
  );
};

export default summary;
