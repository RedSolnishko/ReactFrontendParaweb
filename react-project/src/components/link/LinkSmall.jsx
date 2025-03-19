import React from "react";
import LinkIcon from "../../assets/svg/link/link.svg?react";


const LinkSmall = ({ 
  className = "",
  href = "#",
  text = "Link"
}) => {
  return (
    <a href={href} className={`link-small__text ${className}`}>
      <div className="link-small">
        <LinkIcon className="link-small__icon"/>
        <span>{text}</span>
      </div>
    </a>
  );
};

export default LinkSmall;
