import React from "react";
import Tag from "../tag/Tag";
import ImagePlaceholder from "../image-placeholder/ImagePlaceholder";

/**
 * Компонент карточки сообщества
 * @param {string} title - Заголовок карточки
 * @param {string} category - Категория сообщества
 * @param {string} categoryVariant - Вариант оформления категории (по умолчанию "default")
 * @param {string} responsible - ФИО ответственного лица
 * @param {string} responsibleRole - Роль ответственного лица
 * @param {string} image - URL изображения сообщества
 * @param {string} profileImage - Кастомное изображение профиля ответственного
 */
const CommunityCard = ({
  title,
  category,
  categoryVariant = "default",
  responsible,
  responsibleRole,
  image,
  profileImage, // Кастомное изображение
}) => {
  return (
    <div className="community-card">
      {/* Блок с изображением сообщества */}
      <div className="community-card__image-wrapper">
        <img src={image} alt={title} className="community-card__image" />
      </div>

      {/* Основной контент карточки */}
      <div className="community-card__content">
        {/* Категория сообщества */}
        <div className="community-card__tag-wrapper">
          <Tag variant={categoryVariant}>{category}</Tag>
        </div>

        {/* Заголовок сообщества */}
        <h4 className="community-card__title text-h4">{title}</h4>

        {/* Блок с информацией об ответственном лице */}
        <div className="community-card__responsible">
          {/* Аватар ответственного (может быть кастомным изображением) */}
          <ImagePlaceholder 
            variant="rating-list" 
            className="community-card__avatar" 
            img={profileImage} // Передаём путь к изображению
          />
          <div>
            {/* Отображение ФИО ответственного, разделение на строки при необходимости */}
            <p className="community-card__name">
              {responsible.split(" ").slice(0, 2).join(" ")}
              {responsible.split(" ")[2] ? <br /> : ""}
              {responsible.split(" ")[2] || ""}
            </p>
            {/* Роль ответственного */}
            <p className="community-card__role">{responsibleRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
