import React from "react";

const Loader = ({ loading }) => {
  return loading ? (
    <div className="small-loader">
      <p>Loading more data...</p>
    </div>
  ) : null;
};

export default Loader;
