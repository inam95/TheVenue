import React from "react";
import Carrousel from "./Carrousel";
import TimeUntill from "./TimeUntil";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">The Maroon 5</div>
      </div>

      <TimeUntill />
    </div>
  );
};

export default Featured;
