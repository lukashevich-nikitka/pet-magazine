import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderController from '../main/header/header_controller';
import Footer from '../main/footer/footer';
import { useAppDispatch, useAppSelector } from '../../types/redux-hooks';
import autharization from '../../store/profile/profile_thunks';
import '../../styles/profile/profile.scss';
import ProductCard from '../common_components/product_card';
import mainThunks from '../../store/main/main_thunks';
import { IProduct } from '../../types/interfaces';

const Profile: React.FC = function () {
  const { purchasesList } = mainThunks;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.profile);
  const purchasesArray: Array<IProduct | null> = useAppSelector(
    (state) => state.main.products.purchases,
  );
  const {
    firstName, lastName, age, id,
  } = userInfo;
  useEffect(() => {
    const jwt: string | null = localStorage.getItem('jwt');
    jwt
      ? dispatch(autharization(jwt)).then((res) => {
        if (!res.payload.success) {
          navigate('/auth');
        }
      })
      : navigate('/auth');
    dispatch(purchasesList(id));
  }, []);
  return (
    <>
      <HeaderController />
      <div className="profile-container">
        <div className="user-data">
          <h1>{`${firstName} ${lastName}`}</h1>
          <div>{`id: ${id}`}</div>
          <div>{`Возраст: ${age}`}</div>
        </div>
        <div className="user-purchases">
          <h2>Ваши покупки</h2>
          <div className="purchases-wrapper">
            {purchasesArray.map((el: IProduct | null) => (
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
      </div>
      <Footer />
    </>
  );
};

export default Profile;
