import React from 'react';
import PagesNavigation from './components/pages_navigation';
import BuyerNavigation from './components/buyer_navigation';
import InfoNavigation from './components/info_navigation';
import '../../../styles/main/header/header.scss';

const HeaderBigSceen: React.FC = function () {
  return (
    <header className="header-container">
      <PagesNavigation />
      <div className="paws-header" />
      <div className="info-byuer-navigation">
        <InfoNavigation />
        <BuyerNavigation />
      </div>
    </header>
  );
};

export default HeaderBigSceen;
