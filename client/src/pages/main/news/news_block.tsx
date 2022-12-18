/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import News from './components/news';
import '../../../styles/main/news_block/news_block.scss';

const NewsBlock: React.FC = function () {
  const [ofset, setOfset] = useState<number>(0);
  const webSiteInnerWidth: number = window.innerWidth;
  const rightOfset: () => void = () => {
    setOfset(ofset - webSiteInnerWidth);
  };
  const leftOfset: () => void = () => {
    setOfset(ofset + webSiteInnerWidth);
  };
  return (
    <div className="news-block-container">
      <h2>Наши новости</h2>
      <div className="slider">
        <div
          className="news-container"
          style={{
            transform: `translateX(${ofset}px)`,
          }}
        >
          {[1, 2].map(() => <News />)}
        </div>
      </div>
      <div className="slider-controller">
        <div className="slider-arrows">
          <div className="left-arrow" onClick={leftOfset} />
          <div className="right-arrow" onClick={rightOfset} />
        </div>
      </div>
    </div>
  );
};

export default NewsBlock;
