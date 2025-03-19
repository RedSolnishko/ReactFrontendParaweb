import React from "react";
import ArrowLeft from "../../assets/svg/button/arrow-down-right.svg?react";

const ButtonArrow = ({ className = "" }) => {
  return (
    <button className={`button-arrows ${className}`} >
      <ArrowLeft />
      Button
      <ArrowLeft/>
    </button>
  );
};

export default ButtonArrow;
