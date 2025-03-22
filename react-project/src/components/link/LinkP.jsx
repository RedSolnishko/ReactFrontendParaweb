import React from "react";
import PropTypes from "prop-types";
import LinkIcon  from "../../assets/svg/link.svg?react"; // SVG иконка ссылки
import VkIcon  from "../../assets/svg/vk.svg?react"; // SVG иконка VK


/**
 * Универсальный компонент ссылки
 * @param {string} variant - Тип ссылки ('default', 'default-small', 'icon', 'icon-small', 'vk')
 * @param {string} href - URL ссылки
 * @param {string} children - Текст ссылки
 * @param {object} props - Дополнительные пропсы
 */
const LinkP = ({ variant = "default", href, children, ...props }) => {
  return (
    <a
      href={href}
      className={`link link--${variant}`}
      {...props}
    >
      {(variant === "icon" || variant === "icon-small") && (
        <LinkIcon className="link__icon" />
      )}
      {variant === "vk" && <VkIcon className="link__icon vk-icon" />}
      <span className="link__text">{children}</span>
    </a>
  );
};

// Пропсы с типами данных
LinkP.propTypes = {
  variant: PropTypes.oneOf(["default", "default-small", "icon", "icon-small", "vk"]),
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkP;
