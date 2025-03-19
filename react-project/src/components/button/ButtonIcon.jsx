import React from "react";
import ArrowIcon from "../../assets/svg/button/chevron-right.svg?react";

const ButtonIcon = ({ className = "" }) => {
  return (
    <button  className={`button-icon  ${className}`}>
      <ArrowIcon  />
    </button>
  );
};

export default ButtonIcon;
