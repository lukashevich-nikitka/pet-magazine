import React from 'react';
import '../../../../styles/main/news_block/components/news.scss';

const News: React.FC = function () {
  return (
    <div className="background">
      <div className="second-background">
        <div className="news-info">
          <h1>ВЕСЬ МАЙ</h1>
          <span>Скидка 20% на любой товар для питомцев</span>
          <button type="submit">Подробнее</button>
        </div>
      </div>
      <div className="dog-image" />
    </div>
  );
};

export default News;
