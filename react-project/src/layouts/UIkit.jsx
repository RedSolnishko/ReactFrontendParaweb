import React from 'react';
import { Outlet, Link } from 'react-router-dom';


import AlertSuccess from '../components/alert/AlertSuccess';
import AlertError from '../components/alert/AlertError';

import LinkSmall from '../components/link/LinkSmall';
import LinkBig from '../components/link/Link';
import LinkVk from '../components/link/LinkVk';
import File from '../components/File/File';
import PaginationMenu from '../components/pagination/Pagination';
import PaginationIcon from "../assets/svg/pagination/chevron-left.svg?react";

import Button from '../components/button/Button';
import ButtonEdit from '../components/button/ButtonEdit';
import ButtonShare from '../components/button/ButtonShare';
import ButtonUser from '../components/button/ButtonUser';


const UIkit = () => {
  return (
    <div className="public-layout">
      <header>
        <nav>
          {/* ... */}
        </nav>
      </header>
      <main className="container">
        <ul className='Buttons'>
          <h2 className='text-h2'> Button</h2>
          <li>
            <Button 
              variant="primary" 
              onClick={() => alert('Primary Button clicked!')}
            >
              Button
            </Button>
          </li>
          <li>
            <Button 
              variant="secondary" 
              onClick={() => alert('Secondary Button clicked!')}
            >
              Button
            </Button>
          </li>
          <li>
            <Button 
              variant="contrast" 
              onClick={() => alert('Contrast Button clicked!')}
            >
              Button
            </Button>
          </li>
          <li>
            <Button 
              variant="text" 
              onClick={() => alert('Primary Button clicked!')}
            >
              Button
            </Button>
          </li>
          <li>
            <Button 
              variant="text--small" 
              onClick={() => alert('Primary Button clicked!')}
            >
              Button
            </Button>
          </li>

          <li>
            <ButtonShare 
              onClick={() => alert('Primary Button clicked!')}
            >
              Button
            </ButtonShare>
          </li>

          <li>
            <ButtonUser 
              onClick={() => alert('Primary Button clicked!')}
            >
            </ButtonUser>
          </li>
          
        </ul>

            <ul>
                <h2 className='text-h2'> ButtonEdit</h2>
            <li>
          <ButtonEdit 
              variant="littlebg" 
              onClick={() => alert('default Button clicked!')}
            >
            </ButtonEdit>
          </li>
          <li>
          <ButtonEdit 
              variant="little" 
              onClick={() => alert('default Button clicked!')}
            >
            </ButtonEdit>
          </li>

          <li>
          <ButtonEdit 
              variant="light" 
              onClick={() => alert('default Button clicked!')}
            >
            </ButtonEdit>
          </li>
          <li>
          <ButtonEdit 
              variant="contrast" 
              onClick={() => alert('default Button clicked!')}
            >
            </ButtonEdit>
          </li>
          <li>
          <ButtonEdit 
              variant="default" 
              onClick={() => alert('default Button clicked!')}
            >
            </ButtonEdit>
          </li>
            </ul>

        <ul className='Links'>
          <h1>Links</h1>
          <li><LinkSmall /></li>
          <li><LinkBig /></li>
          <li> <a className='link-whitout-svg' href='#'>Link</a></li>
          <li> <a className='link-whitout-svg-big' href='#'>Link</a></li>
          <li><LinkVk /></li>
        </ul>

        <ul>
          <li><File /></li>
        </ul>

        <ul>
          <li><button  className='educational-materials'>Tag</button></li>
          <li><button  className='event'>Tag </button></li>
          <li><button  className='education'>Воспитание</button></li>
          <li><button  className='study'>Учеба</button></li>
          <li><button  className='scince'>Наука</button></li>
          <li><button  className='creation'>Творчество</button></li>
          <li><button  className='sport'>Спорт</button></li>
        </ul>

        <ul>
          <li><button  className='pagination__button'>1</button></li>
          <li><button  className='pagination__button'><PaginationIcon /></button></li>
          <li><PaginationMenu /></li>
        </ul>

        <button className='tab'>Tab</button>

        <ul className='Alerts'>
          <li><AlertSuccess /></li>
          <li><AlertError /></li>
        </ul>
      </main>
    </div>
  );
};

export default UIkit;
