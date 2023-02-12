/* eslint-disable global-require */
import React from 'react';
import '../../styles/common_components/product_card.scss';
import { IProduct } from '../../types/interfaces';

const ProductCard: React.FC<IProduct> = function (props) {
  const {
    name, size, price, id,
  } = props;
  return (
    <div className="product-card">
      <div className="product-view-part">
        <div><img src={`http://localhost:5000/${id}.jpg`} alt="product" /></div>
        <span>{name}</span>
      </div>
      <div className="product-icons">
        <div className="favourite-icon" />
        <div className="rate-icon" />
      </div>
      <div className="buyer-view-part">
        <div className="product-info">
          <div className="product-size">{size}</div>
          <div className="product-price">{price}</div>
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
