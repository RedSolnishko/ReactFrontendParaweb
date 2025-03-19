import React from "react";
import ArrowIcon from "../../assets/svg/button/chevron-right.svg?react";


const ButtonIconPurpule = ({ className = "" }) => {
  return (
    <button className={`button-icon-1  ${className}`}>
      <ArrowIcon  />
    </button>
  );
};

export default ButtonIconPurpule;
