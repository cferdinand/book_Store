import React from "react";

const summary = ({ desc }) => {
  return (
    <div className="summary-popup">
      <h5 className="summary-heading">Summary</h5>
      <p>{desc}</p>
      <button>Read More</button>
    </div>
  );
};

export default summary;
