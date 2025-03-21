import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import PaginationMenu from '../components/pagination/Pagination';
import PaginationIcon from "../assets/svg/pagination/chevron-left.svg?react";

import Button from '../components/button/Button';
import ButtonEdit from '../components/button/ButtonEdit';
import ButtonShare from '../components/button/ButtonShare';
import ButtonUser from '../components/button/ButtonUser';
import LinkP from '../components/link/LinkP';
import Alert from '../components/alert/Alert';
import Tag from '../components/tag/Tag';
import Tab from '../components/tab/Tab';

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
        
        <ul className='ButtonEdit' >
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
              <h2 className='text-h2'>Links</h2>
              <li><LinkP variant="default" href="#">Link</LinkP></li>
              <li><LinkP variant="default-small" href="#">Link</LinkP></li>
              <li><LinkP variant="icon" href="#">Link</LinkP></li>
              <li><LinkP variant="icon-small" href="#">Link</LinkP></li>
              <li><LinkP variant="vk" href="#">Link</LinkP></li>
        </ul>

        <ul className='Tags'>
        <h2 className='text-h2'>Tags</h2>
          <li> <Tag variant="default">Tag</Tag></li>
          <li><Tag variant="education" href="#">Воспитание</Tag></li>
          <li><Tag variant="study" href="#">Учёба</Tag></li>
          <li><Tag variant="scince" href="#">Наука</Tag></li>
          <li><Tag variant="creation" href="#">Творчество</Tag></li>
          <li><Tag variant="sport" href="#">Спорт</Tag></li>
        </ul>

        <ul className='Alerts'>
          <h2 className='text-h2'>Alerts</h2>
          <li>
            <Alert
              type='success'
              title='Успешно'
              message='Вы участвуете в мероприятии'
              onClose={() => setShowSuccess(false)}
            />
          </li>

          <li>
            <Alert
              type='error'
              title='Ошибка'
              message='Пожалуйста, попробуйте еще раз'
              onClose={() => setShowSuccess(false)}
            />
          </li>
        </ul>

        <ul className='Tab'>
          <h2 className='text-h2'>Tab</h2>
          <li> <Tab label="Home" badge={109} /> </li>
          <li>  <Tab label="Messages" badge={7} /></li>
        </ul>

        <ul className='Pagination'>
          <h2 className='text-h2'>Pagination</h2>
          <li><button  className='pagination__button'>1</button></li>
          <li><button  className='pagination__button'><PaginationIcon /></button></li>
          <li><PaginationMenu /></li>
        </ul>

        <ul className='CheckRadio'>
          <h2 className='text-h2'>CheckRadio</h2>
          <li>
            <label class="checkbox">
              <input type="checkbox" class="checkbox__input" />
              <span class="checkbox__box"></span>
            </label>
          </li>
          <li>
            <label class="radio">
              <input type="radio" name="group1" class="radio__input"  />
                <span class="radio__circle"></span>
            </label>  
          </li>
        </ul>

        <ul>
          <h2 className='text-h2'>Toggle</h2>
          <li>
          <label class="toggle">
              <input type="checkbox" class="toggle__input"  />
              <span class="toggle__slider"></span>
          </label>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default UIkit;
