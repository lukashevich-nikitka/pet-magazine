import React from 'react';
import BurgerMenu from './components/burger_menu';
import BuyerNavigation from './components/buyer_navigation';
import '../../../styles/main/header/header.scss';

const HeaderSmallSceen: React.FC = function () {
  return (
    <header className="header-container">
      <BurgerMenu />
      <div className="paws-header" />
      <div className="info-byuer-navigation">
        <BuyerNavigation />
      </div>
    </header>
  );
};

export default HeaderSmallSceen;
