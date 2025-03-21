import React from "react";
import EditIcon  from '../../assets/svg/edit.svg?react';
import PlusIcon  from '../../assets/svg/plus.svg?react';

/**
 * Универсальный компонент кнопки
 * @param {JSX.Element} leftIcon - Иконка слева
 * @param {JSX.Element} rightIcon - Иконка справа
 * @param {string} variant - 'primary' | 'secondary' | 'contrast'  | 'text'  | 'text--small' 
 * @param {React.ReactNode} children - Текст кнопки
 * @param {object} props - Остальные пропсы (onClick, disabled и т.д.)
 */

const Button = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button 
      className={`button button__${variant}`}
      {...props}
    >
      <EditIcon  />
      {children}
      <PlusIcon  />
    </button>
  );
};

export default Button;
