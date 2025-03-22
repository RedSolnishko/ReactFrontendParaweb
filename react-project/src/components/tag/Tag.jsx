import React from "react";
import PropTypes from "prop-types";

/**
 * Компонент тега с разными вариантами (цветовая схема, стили и т.д.),
 * оформленный в виде ссылки <a>.
 *
 * @param {string} variant - 'default' | 'education' | 'study' | 'scince' | 'creation' | 'sport'
 * @param {string} href - URL, куда ведет тег. По умолчанию "#".
 * @param {string} children - Текст внутри тега
 * @param {object} props - Остальные пропсы (onClick и т.д.)
 */
const Tag = ({ variant = "default", href = "#", children, ...props }) => {
  return (
    <a
      href={href}
      className={`tag tag--${variant}`}
      {...props}
    >
      {children}
    </a>
  );
};

Tag.propTypes = {
  variant: PropTypes.oneOf([
    "default",
    "education",
    "study",
    "scince",
    "creation",
    "sport",
  ]),
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Tag;
