import React from 'react';
import '../../../styles/main/hit_of_sales/hit_of_sales.scss';
import ProductCard from '../../common_components/product_card';

const HitOfSales: React.FC = function () {
  return (
    <div className="hit-of-sales-container">
      <div className="title-area">
        <h2>Хиты Продаж</h2>
        <button type="submit">Смотреть все</button>
      </div>
      <div className="card-wrapper">
        {[1, 2, 3, 4].map(() => <ProductCard />)}
      </div>
    </div>
  );
};

export default HitOfSales;
