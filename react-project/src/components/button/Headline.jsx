import React from "react";
import ArrowAnimation from "../../assets/svg/button/arrow-down-right.svg?react";

const Headline = ({ className = "",  }) => {
  return (
    <button   className={`headline ${className}`} >
      <span className="headline__text">Headline</span>
        <div className="headline__container">
        < ArrowAnimation className="headline__container--icon" />
        </div>
    </button>
  );
};

export default Headline;