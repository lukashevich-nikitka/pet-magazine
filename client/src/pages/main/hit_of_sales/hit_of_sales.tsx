import React, { useEffect } from 'react';
import '../../../styles/main/hit_of_sales/hit_of_sales.scss';
import { useAppDispatch, useAppSelector } from '../../../types/redux-hooks';
import ProductCard from '../../common_components/product_card';
import mainThunks from '../../../store/main/main_thunks';
import { IProduct } from '../../../types/interfaces';

const HitOfSales: React.FC = function () {
  const { hitOfSalesList } = mainThunks;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(hitOfSalesList());
  }, []);
  const hitOfSalesArray: Array<IProduct | null> = useAppSelector(
    (state) => state.main.products.hitOfSales,
  );
  return (
    <div className="hit-of-sales-container">
      <div className="title-area">
        <h2>Хиты Продаж</h2>
        <button type="submit">Смотреть все</button>
      </div>
      <div className="card-wrapper">
        {hitOfSalesArray.map((el: IProduct | null) => (
          <ProductCard
            key={el!.id}
            id={el!.id}
            name={el!.name}
            size={el!.size}
            price={el!.price}
            chapter={el!.chapter}
          />
        ))}
      </div>
    </div>
  );
};

export default HitOfSales;
