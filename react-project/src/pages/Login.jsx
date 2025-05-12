import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

import Button from '../components/Button';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

  const handleLogin = () => {
        login();               // Мокаем вход
        navigate('/dashboard'); // Перенаправляем в личный кабинет
    };

  return (
    <div>
      <h1 className='text-h1'>Вход</h1>
        <Button variant="primary"
            onClick={handleLogin}>
            Войти как demo-user
        </Button>

    </div>
  );
};

export default Login;
