import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../../styles/main/header/components/info_navigation.scss';

const InfoNavigation: React.FC = function () {
  return (
    <nav>
      <ul className="info-nav-list">
        <li>
          <NavLink to="/shops">Наши магазины</NavLink>
        </li>
        <li>
          <NavLink to="/info">Инфо</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default InfoNavigation;
