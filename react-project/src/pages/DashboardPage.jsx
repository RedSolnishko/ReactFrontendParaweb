import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
        <div className='text-content'>
            
            <h1 className='text-h1'>Заголовок страницы</h1>
            <p>Контент страницы</p>

        <section>
            <h2 className='text-h2'>Быстрые действия</h2>
            <ul>
            <li>📄 Добавить новый документ</li>
            <li>👥 Перейти в сообщество</li>
            <li>⚙️ Открыть настройки</li>
            </ul>
        </section>

        <section>
            <h2 className='text-h2'>Ccskrb</h2>
            <ol>
            <li><Link to="/dashboard/profile">Профиль</Link></li>
            <li><Link to="/dashboard/settings">Настройки</Link></li>
            </ol>
        </section>

        <section>
            <h2 className='text-h2'>Последние обновления</h2>
            <p>Нет новых уведомлений</p>
        </section>
        </div>
    </div>
  );
};

export default DashboardPage;


