import React from 'react';
import '../../../styles/main/under_header/under-header.scss';

const UnderHeader: React.FC = function () {
  return (
    <div className="under-header-container">
      <div className="left-side">
        <div className="lines" />
        <div className="left-cat" />
      </div>
      <div className="middle">
        <h1>
          всё самое лучшее
          <br />
          для любимых питомцев
        </h1>
        <div>
          В нашем магазине вы найдёте всё то, что необходимо
          для здоровья и счастья вашего друга, по доступным ценам. Убедитесь в этом сами!
        </div>
        <button type="submit">Перейти в каталог</button>
      </div>
      <div className="right-side">
        <div className="right-dog" />
        <div className="right-bottom-elements">
          <div className="right-cat" />
          <div className="right-paws" />
        </div>
      </div>
    </div>
  );
};

export default UnderHeader;
