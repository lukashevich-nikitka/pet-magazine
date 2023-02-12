import React, { useEffect } from 'react';
import '../../../styles/main/recommend/recommend.scss';
import { useAppDispatch, useAppSelector } from '../../../types/redux-hooks';
import ProductCard from '../../common_components/product_card';
import mainThunks from '../../../store/main/main_thunks';
import { IProduct } from '../../../types/interfaces';

const Recommend: React.FC = function () {
  const { recommendList } = mainThunks;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(recommendList());
  }, []);
  const recommendArray: Array<IProduct | null> = useAppSelector(
    (state) => state.main.products.recommend,
  );
  return (
    <div className="recommend-container">
      <div className="title-area">
        <h2>Рекомендуем для Вас</h2>
        <button type="submit">Смотреть все</button>
      </div>
      <div className="card-wrapper">
        {recommendArray.map((el: IProduct | null) => (
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

export default Recommend;
