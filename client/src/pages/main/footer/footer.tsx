import React from 'react';
import '../../../assets/svg/paws-footer.scss';

const Footer: React.FC = function () {
  return (
    <footer className="footer-container">
      <div className="paws-footer" />
      <div className="delivery-block">
        <span>Доставка и оплата</span>
        <span>Адреса магазинов</span>
        <span>Пункты выдачи</span>
        <span>Гарантия</span>
      </div>
      <div className="social-networks-block">
        <div className="instagram" />
        <div className="facebook" />
        <div className="vk" />
      </div>
      <div className="contacts-block">
        <div className="contacts">
          <span>+375292580911</span>
          <span>08.00 - 21.00</span>
          <span>Без выходных</span>
        </div>
        <div className="privacy-policy">
          <span>Политика конфиденциальности</span>
          <span>Обработка персональных данных</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
