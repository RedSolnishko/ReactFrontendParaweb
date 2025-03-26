import React from "react";
import Tag from "../tag/Tag";

import ClockIcon from "../../assets/svg/clock.svg?react";
import LocationIcon from "../../assets/svg/location.svg?react";
import GroupIcon from "../../assets/svg/group.svg?react";
import AlarmIcon from "../../assets/svg/alarm.svg?react";
import CoinIcon from "../../assets/svg/coin.svg?react";

/**
 * Компонент карточки события
 * @param {string} title - Заголовок события
 * @param {string} date - Дата события в формате "день месяц"
 * @param {string} time - Время события
 * @param {string} location - Местоположение события
 * @param {number} attendees - Количество участников
 * @param {string} timeUntil - Время до события
 * @param {string} timeUntilVariant - Вариант отображения времени до события (например, "soon" для срочности)
 * @param {string} image - Путь к изображению события
 * @param {string} category - Категория события
 * @param {string} categoryVariant - Вариант отображения категории
 * @param {number} rating - Рейтинг события
 */
const EventCard = ({
    title,
    date,
    time,
    location,
    attendees,
    timeUntil,
    timeUntilVariant = "default", 
    image,
    category,
    categoryVariant = "default",
    rating,
  }) => {
    const [day, month] = date.split(" ");
  
    return (
      <div className="event-card">
        {/* Обертка для изображения события */}
        <div className="event-card__image-wrapper">
          {/* Изображение события */}
          <img src={image} alt={title} className="event-card__image" />
          
          {/* Блок с датой события */}
          <div className="event-card__date">
            <h2 className="text-h2">{day}</h2>
            <span className="event-card__month">{month}</span>
          </div>
        </div>
  
        <div className="event-card__content">
          {/* Блок с информацией о событии */}
          <div className="event-card__info">
            {/* Отображение категории события с тегом */}
            <Tag variant={categoryVariant}>{category}</Tag>

            {/* Отображение рейтинга события */}
            <div className="event-card__rating">
              <CoinIcon className="event-card__icon" />
              {rating}
            </div>

            {/* Время до события (с возможным изменением стиля для срочных событий) */}
            <div
              className={`event-card__time-until ${
                timeUntilVariant === "soon" ? "event-card__time-until--soon" : ""
              }`}
            >
              <AlarmIcon className="event-card__icon" />
              {timeUntil}
            </div>
          </div>

          {/* Заголовок события */}
          <h4 className="event-card__title text-h4">{title}</h4>
          
          {/* Блок с деталями события */}
          <div className="event-card__details">
            {/* Время события */}
            <p className="event-card__time">
              <ClockIcon className="event-card__icon" />
              {time}
            </p>
            {/* Местоположение события */}
            <p className="event-card__location">
              <LocationIcon className="event-card__icon" />
              {location}
            </p>
            {/* Количество участников */}
            <p className="event-card__attendees">
              <GroupIcon className="event-card__icon" />
              {attendees} человек
            </p>
          </div>
        </div>
      </div>
    );
  };
  
export default EventCard;
