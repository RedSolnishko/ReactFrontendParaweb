import React from "react";
import { Link } from "react-router-dom";
import SeparatorIcon from "../assets/svg/dot.svg?react";
import BellIcon from "../assets/svg/bell.svg?react"; 
  
const Breadcrumbs = ({ items, separator = "icon" }) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <div className="breadcrumbs__links">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index < items.length - 1 ? (
              <Link to={item.path} className="breadcrumbs__item">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumbs__item disabled">{item.label}</span>
            )}
            {index !== items.length - 1 && (
              <span className="breadcrumbs__separator" aria-hidden="true">
                {separator === "icon" ? <SeparatorIcon /> : separator}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Удалим аватар и уведомления на мобильной версии */}
      <div className="breadcrumbs__actions">
        <button className="breadcrumbs__action-button" aria-label="Notifications">
          <BellIcon />
        </button>
        <div className="breadcrumbs__avatar">
          <img src="src/assets/pics/pelmeni.jpg" alt="pelmeni" className="breadcrumbs__avatar--img" />
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
