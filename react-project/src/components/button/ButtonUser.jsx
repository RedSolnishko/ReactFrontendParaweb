import React from "react";
import User from '../../assets/svg/user.svg?react'

/**
 * Универсальный компонент кнопки
 * @param {string} variant - 'default' | 'contrast' | 'light' | 'little' | 'littlebg' 
 * @param {React.ReactNode} children - Текст кнопки
 * @param {object} props - Остальные пропсы (onClick, disabled и т.д.)
 */

const ButtonUser = ({
  ...props
}) => {
  return (
    <button  
    className={`button-user`}
    {...props}> 
        <div className="button-user__container"> 
            <User  />
        </div>
      
    </button>
  );
};

export default ButtonUser;
