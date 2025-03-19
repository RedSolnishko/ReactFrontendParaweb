import React from "react";
import LinkIcon from "../../assets/svg/link/link.svg?react";


const LinkBig = ({ 
  className = "",
  href = "#",
  text = "Link"
}) => {
  return (
    <a href={href} className={`link__text ${className}`}>
      <div className="link">
        <LinkIcon className="link__icon"/>
        <span>{text}</span>
      </div>
    </a>
  );
};

export default LinkBig;
