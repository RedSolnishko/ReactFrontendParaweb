import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const PublicLayout = () => {
  return (
    <div className="public-layout">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/login">Вход</Link></li>
            <li><Link to="/uikit">UIKit</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 Мой React Проект</p>
      </footer>
    </div>
  );
};

export default PublicLayout;