/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../../styles/main/header/components/burger_menu.scss';

const BurgerMenu: React.FC = function () {
  const [burgerState, setBurgerState] = useState<string>('close');
  const changeBurgerState: () => void = function () {
    (burgerState === 'close') ? setBurgerState('open') : setBurgerState('close');
  };
  return (
    <nav className={`burger-menu-${burgerState}`} onClick={changeBurgerState}>
      <div className={`burger-icon-${burgerState}`} role="button" tabIndex={0} onClick={changeBurgerState}>
        <div className="first-line" />
        <div className="second-line" />
        <div className="third-line" />
      </div>
      <div className="burger-menu-list">
        <ul className="burger-nav-list">
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
          <li>
            <NavLink to="/shops">Наши магазины</NavLink>
          </li>
          <li>
            <NavLink to="/info">Инфо</NavLink>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default BurgerMenu;
