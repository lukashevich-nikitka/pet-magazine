import React from 'react';
import Header from './main/header/header';
import UnderHeader from './main/under_header_block/under_header';
import Recommend from './main/recommend/recommend';

const Main: React.FC = function () {
  return (
    <>
      <Header />
      <main>
        <UnderHeader />
        <Recommend />
      </main>

    </>
  );
};

export default Main;
