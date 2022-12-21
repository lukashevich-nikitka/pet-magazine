import React from 'react';
import Header from './main/header/header';
import UnderHeader from './main/under_header_block/under_header';
import Recommend from './main/recommend/recommend';
import NewsBlock from './main/news/news_block';
import HitOfSales from './main/hit_of_sales/hit_of_sales';
import AboutBlock from './main/about_info_block/about_block';
import Footer from './main/footer/footer';

const Main: React.FC = function () {
  return (
    <>
      <Header />
      <main>
        <UnderHeader />
        <Recommend />
        <NewsBlock />
        <HitOfSales />
        <AboutBlock />
      </main>
      <Footer />
    </>
  );
};

export default Main;
