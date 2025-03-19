import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import ButtonBookmark from '../components/button/ButtonBookmark';
import ButtonIcon from '../components/button/ButtonIcon';
import ButtonIconPurpule from '../components/button/ButtonIconPurpule';
import ButtonVideo from '../components/button/ButtonVideo';
import AlertSuccess from '../components/alert/AlertSuccess';
import AlertError from '../components/alert/AlertError';
import Headline from '../components/button/Headline';
import ButtonMenuItem from '../components/button/ButtomMenuItem';
import ButtonArrow from '../components/button/ButtonArrow';
import ButtomMenuItemMobile from '../components/button/ButtomMenuItemMobile';
import LinkSmall from '../components/link/LinkSmall';
import LinkBig from '../components/link/Link';
import LinkVk from '../components/link/LinkVk';
import File from '../components/File/File';
import PaginationMenu from '../components/pagination/Pagination';

import PaginationIcon from "../assets/svg/pagination/chevron-left.svg?react";


const UIkit = () => {
  return (
    <div className="public-layout">
      <header>
        <nav>
        </nav>
      </header>
      <main className="container">
            
          <ul className='Buttons'>
            <h1>Buttons</h1>
            <li><button className='button-main'>Button</button></li>
            <li><button className='button-secondary'>Button</button></li>
            <li><button className='button-contrast'>Button</button></li>
            <li> <ButtonBookmark /></li>
            <li> <ButtonIcon /></li>
            <li> <ButtonIconPurpule /></li>
            <li> <ButtonVideo /></li>
            <li><Headline /></li>
            <li><ButtonMenuItem /></li>
            <li><ButtonArrow /></li>
            <li><ButtomMenuItemMobile /></li>
          </ul>

          <ul className='Links'>
            <h1>Links</h1>
            <li><LinkSmall /></li>
            <li><LinkBig /></li>
            <li> <a className='link-whitout-svg' href="#">Link</a></li>
            <li> <a className='link-whitout-svg-big' href="#">Link</a></li>
            <li><LinkVk /></li>
          </ul>

          <ul>
          <li><File /></li>
          </ul>

          <ul>
            <li><button className='educational-materials'>Tag</button></li>
            <li><button className='event'>Tag </button></li>
            <li><button className='education'>Воспитание</button></li>
            <li><button className='study'>Учеба</button></li>
            <li><button className='scince'>Наука</button></li>
            <li><button className='creation'>Творчество</button></li>
            <li><button className='sport'>Спорт</button></li>
          </ul>

          <ul>
            <li><button  className='pagination__button'>1</button></li>
            <li><button  className='pagination__button'><PaginationIcon /></button></li>
            <li><PaginationMenu /></li>
          </ul>

        <button className='tab'>Tab</button>

          <ul className='Alerts'>
            <li> <AlertSuccess /></li>
            <li> <AlertError /></li>
          </ul>

          
      </main>

    </div>
  );
};

export default UIkit;