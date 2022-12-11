/* eslint-disable global-require */
import React from 'react';
import '../../../../styles/main/recommend/components/product_card.scss';

const ProductCard: React.FC = function () {
  return (
    <div className="product-card">
      <div className="product-view-part">
        <div><img src={require('../../../../assets/images/cat-litter.jpg')} alt="product" /></div>
        <span>Наполнитель для кошачьего туалета впитывающий</span>
      </div>
      <div className="product-icons">
        <div className="favourite-icon" />
        <div className="rate-icon" />
      </div>
      <div className="buyer-view-part">
        <div className="product-info">
          <div className="product-size">Size</div>
          <div className="product-price">Price</div>
        </div>
        <button type="submit">
          <div>
            <div />
            <span>В корзину</span>
          </div>
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
