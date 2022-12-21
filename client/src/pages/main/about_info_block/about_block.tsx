import React from 'react';
import '../../../styles/main/about_info_block/about_info_block.scss';

import dogImage from '../../../assets/images/about-block-dog.jpg';

const AboutBlock: React.FC = function () {
  return (
    <div className="about-block-container">
      <div className="about-info">
        <h2>О нас</h2>
        <div className="main-info">
          <p>
            Мы рады приветстовать Вас в нашем онлайн-магазине зоотоваров. Здесь
            вы найдёте все категории товаров: от игрушек и лакомств до лекарств
            и средств по уходу.
          </p>
          <p>
            Наш ассортимент постоянно расширяется, чтобы мы могли продолжать
            радовать наших покупателей. У нас вы найдёте сухие корма для кошек и
            собак Royal Canin, Brit, Purina One, Hills, Unica Natura, Berkley.
            Также есть линейки лечебных кормов.
          </p>
          <p>
            Для досуга питомца мы предлагаем множество разных игрушек: мячики,
            кусалки, дразнилки, игрушки для лакомств, развивающие игрушки.
          </p>
          <p>
            Для постоянных покупателей у нас действует программа лояльности,
            поэтому заботиться о питомце можно выгодно!
          </p>
        </div>
        <button type="submit">Узнать больше</button>
      </div>
      <div className="about-images-wrapper">
        <img src={dogImage} alt="dog" />
        <div className="about-block-first-stars-pack" />
        <div className="about-block-second-stars-pack" />
        <div className="about-block-paws-pack" />
      </div>
    </div>
  );
};

export default AboutBlock;
