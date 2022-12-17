import React from 'react';
import Header from './main/header/header';
import UnderHeader from './main/under_header_block/under_header';
import Recommend from './main/recommend/recommend';
import NewsBlock from './main/news/news_block';

const Main: React.FC = function () {
  return (
    <>
      <Header />
      <main>
        <UnderHeader />
        <Recommend />
        <NewsBlock />
      </main>

    </>
  );
};

export default Main;
