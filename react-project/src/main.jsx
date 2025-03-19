import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style/main.scss';
import './style/global/normalize.scss';
import './style/global/reset.scss';
import './style/global/colors.scss';
import './style/global/typography.scss';
import './style/components/button.scss';
import './style/components/tag.scss';
import './style/components/tab.scss'
import './style/components/alert.scss'
import './style/components/link.scss'
import './style/components/file.scss'
import './style/components/pagination.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);