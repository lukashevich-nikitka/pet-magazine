import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderController from '../main/header/header_controller';
import Footer from '../main/footer/footer';
import { useAppDispatch, useAppSelector } from '../../types/redux-hooks';
import autharization from '../../store/profile/profile_thunks';
import '../../styles/profile/profile.scss';
import ProductCard from '../common_components/product_card';

const Profile: React.FC = function () {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.profile);
  const { firstName, lastName, age, id } = userInfo;
  useEffect(() => {
    const jwt: string | null = localStorage.getItem('jwt');
    jwt
      ? dispatch(autharization(jwt)).then((res) => {
          if (!res.payload.success) {
            navigate('/auth');
          }
        })
      : navigate('/auth');
  });
  return (
    <>
      <HeaderController />
      <div className='profile-container'>
        <div className='user-data'>
          <h1>{`${firstName} ${lastName}`}</h1>
          <div>{`id: ${id}`}</div>
          <div>{`Возраст: ${age}`}</div>
        </div>
        <div className='user-purchases'>
          <h2>Ваши покупки</h2>
          <div className='purchases-wrapper'>
            {[1, 2, 3, 4].map(() => (
              <ProductCard />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
