import React from "react";
import Arrowdown from "../../assets/svg/button/icon-right.svg?react";

const ButtonMenuItem = ({ className = ""  }) => {
  return (
        <button className={`menuitem ${className}`} >
          <span className="menuitem__text">Menu-item</span>
              <Arrowdown className ='menuitem__icon' />
        </button>
  );
};

export default ButtonMenuItem;
