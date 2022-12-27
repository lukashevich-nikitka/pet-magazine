import React from 'react';
import HeaderBigSceen from './header_big_screen';
import HeaderSmallSceen from './header_small_screen';

const HeaderController: React.FC = function () {
  if (window.innerWidth >= 1500) {
    return (
      <HeaderBigSceen />
    );
  }
  return (
    <HeaderSmallSceen />
  );
};

export default HeaderController;
