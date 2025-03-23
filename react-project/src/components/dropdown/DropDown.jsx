import React, { useState, useEffect } from "react";

const Dropdown = ({ type, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(options);

  useEffect(() => {
    setSelectedOptions(options);
  }, [options]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (id) => {
    setSelectedOptions((prev) =>
      prev.map((opt) =>
        opt.id === id ? { ...opt, checked: !opt.checked } : opt
      )
    );
  };

  return (
    <div className="dropdown">
      <button 
        className="dropdown__toggle" 
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        Drop down
      </button>
      {isOpen && (
        <ul className="dropdown__menu" role="menu">
          {selectedOptions.map((option) => (
            <li 
              key={option.id} 
              className={`dropdown__item ${type === "icon" ? "dropdown__item--icon" : ""}`} 
              role="menuitem"
            >
              {type === "checkbox" && (
                <label className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox__input"
                    checked={option.checked || false}
                    onChange={() => handleCheckboxChange(option.id)}
                  />
                  <span className="checkbox__box"></span>
                  {option.label}
                </label>
              )}
              {type === "icon" && (
                <span className="dropdown__icon">
                  {option.icon} 
                  <span className="dropdown__icon-text">{option.label}</span>
                </span>
              )}
              {type === "text" && <span>{option.label}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;