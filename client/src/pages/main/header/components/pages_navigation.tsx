import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../../styles/main/header/components/pages_navigation.scss';

const PagesNavigation: React.FC = function () {
  return (
    <nav>
      <ul className="pages-nav-list">
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/cats">Кошки</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Собаки</NavLink>
        </li>
        <li>
          <NavLink to="/other">Другие питомцы</NavLink>
        </li>
        <li>
          <NavLink to="/pharmacy">Ветаптека</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PagesNavigation;
