import React from "react";
import BookmarkIcon from "../../assets/svg/button/bookmark.svg?react";

const ButtonBookmark = ({ className = "" }) => {
  return (
    <button className={`button-bookmark ${className}`}>
      <BookmarkIcon  />
    </button>
  );
};

export default ButtonBookmark;
