import React from "react";
import Share  from '../../assets/svg/share.svg?react';

/**
 * Универсальный компонент кнопки
 * @param {React.ReactNode} children - Текст кнопки
 * @param {object} props - Остальные пропсы (onClick, disabled и т.д.)
 */

const ButtonShare = ({
  children,
  ...props
}) => {
  return (
    <button 
      className={`button-share`}
      {...props}
    >
      <Share  />
      {children}
    </button>
  );
};

export default ButtonShare;
