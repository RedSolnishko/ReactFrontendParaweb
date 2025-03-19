import React from "react";
import Player from "../../assets/svg/button/player.svg?react";

const ButtonVideo = ({ className = "" }) => {
  return (
    <button className={`button-video  ${className}`}>
      <Player  />
    </button>
  );
};

export default ButtonVideo;
