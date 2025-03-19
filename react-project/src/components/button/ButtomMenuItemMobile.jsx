import React from "react";
import Pen from "../../assets/svg/button/pen.svg?react";
import Plus from "../../assets/svg/button/plus.svg?react";

const ButtomMenuItemMobile = ({ className = ""  }) => {
  return (
        <button className={`menuitem__mobile ${className}`} >
            <Pen className ='menuitem__mobile--icon' />
          <span className="menuitem__mobile--text">Button</span>
            <Plus className ='menuitem__mobile--icon' />
        </button>
  );
};

export default ButtomMenuItemMobile;
