import React from 'react';
import '../../../styles/main/recommend/recommend.scss';
import ProductCard from './components/product_card';

const Recommend: React.FC = function () {
  return (
    <div className="recommend-container">
      <div className="title-area">
        <h2>Рекомендуем для Вас</h2>
        <button type="submit">Смотреть все</button>
      </div>
      <div className="card-wrapper">
        {[1, 2, 3, 4].map(() => <ProductCard />)}
      </div>
    </div>
  );
};

export default Recommend;
