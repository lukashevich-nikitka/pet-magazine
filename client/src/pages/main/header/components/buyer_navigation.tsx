import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../../styles/main/header/components/buyer_navigation.scss';

const BuyerNavigation: React.FC = function () {
  return (
    <nav>
      <ul className="buyer-nav-list">
        <li>
          <NavLink to="/favourites"><div className="favourites-icon" /></NavLink>
        </li>
        <li>
          <NavLink to="/search"><div className="search-icon" /></NavLink>
        </li>
        <li>
          <NavLink to="/login"><div className="user-icon" /></NavLink>
        </li>
        <li>
          <NavLink to="/basket"><div className="basket-icon" /></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BuyerNavigation;
