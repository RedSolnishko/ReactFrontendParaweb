import React from "react";
import VkIcon from "../../assets/svg/vk.svg?react";
import TelegramIcon from "../../assets/svg/telegram.svg?react";
import DefaultLogo from "../../assets/pics/default-logo.png"; // Заглушка для логотипа

/**
 * Компонент карточки партнера
 * @param {string} logo - Логотип партнера (если нет, используется заглушка)
 * @param {string} name - Название партнера
 * @param {string} link - Ссылка на сайт партнера
 * @param {string} contact - Контактное лицо партнера
 * @param {string} phone - Телефон партнера
 * @param {string} email - Электронная почта партнера
 * @param {object} socials - Объект с социальными ссылками (например, vk и telegram)
 */
const PartnerCard = ({ logo, name, link, contact, phone, email, socials }) => {
  return (
    <div className="partner-card">
      {/* Заголовок с логотипом партнера */}
      <div className="partner-card__header">
        {/* Логотип партнера, если его нет — используется заглушка */}
        <img
          src={logo || DefaultLogo}
          alt={name}
          className="partner-card__logo"
        />
      </div>

      <div className="partner-card__info">
        {/* Название партнера */}
        <h4 className="partner-card__name text-h4">{name}</h4>
        {/* Ссылка на сайт партнера */}
        <a href={link} className="partner-card__link" target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </div>

      <div className="partner-card__content">
        {/* Блок с контактным лицом */}
        <div className="partner-card__section">
          <span className="partner-card__label">Контактное лицо</span>
          <p className="partner-card__text">{contact}</p>
        </div>

        {/* Блок с телефоном */}
        <div className="partner-card__section">
          <span className="partner-card__label">Телефон</span>
          <p className="partner-card__text">{phone}</p>
        </div>

        {/* Блок с электронной почтой */}
        <div className="partner-card__section">
          <span className="partner-card__label">Электронная почта</span>
          <p className="partner-card__text">{email}</p>
        </div>
      </div>

      {/* Блок с социальными иконками */}
      <div className="partner-card__socials">
        {socials.vk && (
          <a href={socials.vk} target="_blank" rel="noopener noreferrer" className="partner-card__social-icon">
            <VkIcon />
          </a>
        )}
        {socials.telegram && (
          <a href={socials.telegram} target="_blank" rel="noopener noreferrer" className="partner-card__social-icon">
            <TelegramIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default PartnerCard;
