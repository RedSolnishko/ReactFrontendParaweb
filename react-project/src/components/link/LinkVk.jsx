import React from "react";
import Vk from "../../assets/svg/link/socials.svg?react";


const LinkVk = ({ 
  className = "",
  href = "#",
  text = "Link"
}) => {
  return (
    <a href={href} className={`link-vk__text ${className}`}>
      <div className="link-vk">
        <Vk className="link-vk"/>
        <span>{text}</span>
      </div>
    </a>
  );
};

export default LinkVk;
