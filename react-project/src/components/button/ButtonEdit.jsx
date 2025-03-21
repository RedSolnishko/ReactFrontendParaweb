import React from "react";
import EditIcon from '../../assets/svg/edit.svg?react'

/**
 * Универсальный компонент кнопки
 * @param {string} variant - 'default' | 'contrast' | 'light' | 'little' | 'littlebg' 
 * @param {React.ReactNode} children - Текст кнопки
 * @param {object} props - Остальные пропсы (onClick, disabled и т.д.)
 */

const ButtonEdit = ({
  variant = 'default',
  ...props
}) => {
  return (
    <button  
    className={`button-edit  button-edit__${variant}`}
    {...props}>
      <EditIcon  />
    </button>
  );
};

export default ButtonEdit;
