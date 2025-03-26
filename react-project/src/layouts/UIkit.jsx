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
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'; 
import Dropdown from '../components/dropdown/DropDown';
import Switcher from '../components/switcher/Switcher';
import ImagePlaceholder from '../components/image-placeholder/ImagePlaceholder';

import VkIcon from '../assets/svg/vk.svg?react';
import Telergram from '../assets/svg/telegram.svg?react';
import LinkIcon  from  '../assets/svg/socials.svg?react';

import EventCard from '../components/card/EventCard';
import CommunityCard from '../components/card/CommunityCard';
import DocumentCard from '../components/card/DocumentCard';
import ProductCard from '../components/card/ProductCard';
import PartnerCard from '../components/card/PartnerCard';
import LevelCard from '../components/card/levelCard';

const text = [
  { id: 1, label: "Вариант 1" },
  { id: 2, label: "Вариант 2" },
  { id: 3, label: "Вариант 3" },
];

const check = [
  { id: 1, label: "Вариант 1", checked: false},
  { id: 2, label: "Вариант 2", checked: false},
  { id: 3, label: "Вариант 3", checked: false},
];

const icon = [
  { id: 1, label: "VK", icon: <VkIcon />},
  { id: 2, label: "Telergram", icon: <Telergram />},
  { id: 3, label: "Скопировать ссылку", icon: <LinkIcon /> },
];

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
              <input type="checkbox" class="checkbox__input"/>
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

        <ul className='Dropdown'>
          <h2 className='text-h2'>Dropdown</h2>
          <li> <Dropdown type="text" options={text} /> </li>
          <li> <Dropdown type="checkbox" options={check} /> </li>
          <li> <Dropdown type="icon" options={icon} /></li>
        </ul>

        <ul className='Breadcrumbs'>
          <h2 className='text-h2'>Breadcrumbs</h2>
          <li>
          <Breadcrumbs 
            items={[
              { label: "Главная", path: "/" },
              { label: "Мероприятия", path: "/events" },
              { 
                label: "VII Открытый отборочный чемпионат ФГАОУ ВО ГУАП по стандартам Агентства развития профессий и навыков", 
                path: "/events/championship" 
              }
            ]}
            disabledItems={[2]} // Индекс последнего элемента (необязательно)
              />
          </li>
        </ul>

        <ul className='Switcher'>
          <h2 className='text-h2'>Switcher</h2>
          <li>
              <Switcher/>
          </li>
        </ul>

        <ul className='ImagePlaceholder'>
          <h2 className='text-h2'>ImagePlaceholder</h2>
          <li><ImagePlaceholder variant="rating-card" img="src\assets\pics\pelmeni.jpg"/></li>
          <li> <ImagePlaceholder variant="profile"/> </li>
          <li> <ImagePlaceholder variant="menu"/> </li>
          <li> <ImagePlaceholder variant="rating-list"/> </li>

        </ul>

        <ul className='Card'>
          <h2 className='text-h2'>EventCard</h2>
          <li>
            <EventCard
              title="Название мероприятия"
              date="30 ноя"
              time="12:00 - 17:00"
              location="ГУАП, Ленсовета 14, актовый зал"
              attendees={500}
              timeUntil="Через 2 часа"
              timeUntilVariant="soon" // Событие скоро — красный текст
              image="src/assets/pics/pic1.jpg"
              category="Творчество"
              categoryVariant="creation"
              rating={100}
            />
          </li>
          
          <li>
            <CommunityCard
              title="Название сообщества"
              category="Творчество"
              categoryVariant="creation"
              image="src/assets/pics/pic2.jpg"
              profileImage="src/assets/pics/pelmeni.jpg" // Передаём изображение для аватара
              responsible="Константинопольский Константин Константинович"
              responsibleRole="Ответственный"
            />
          </li>

          <li>
            <DocumentCard 
              title="Headline"
              fileType="PDF"
              fileSize="99.9 KB"
              onDownload={() => alert("Скачивание файла")}
            />
          </li>

          <li>
            <ProductCard
              image="src\assets\pics\prize.jpg"
              price={100}
              title="Наименование приза"
              onClaim={() => alert("Приз получен!")}
            />
          </li>

          <li>
          <PartnerCard
            logo="src\assets\pics\prize.jpg"
            name="Название партнёра"
            link="https://link.ru"
            contact="Константинопольский Константин Константинович"
            phone="+7 (812) 710-64-82"
            email="wsr@guap.ru"
            socials={{
              vk: "#",
              telegram: "#"
            }}
          />
          </li>

          <li>
          <LevelCard name="Уровень 1" icon="src\assets\pics\image.svg" completed={true} cost={100} />
          </li>
        </ul>
      </main>
    </div>
  );
};

export default UIkit;