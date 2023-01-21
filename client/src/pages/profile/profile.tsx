import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderController from '../main/header/header_controller';
import { useAppDispatch } from '../../types/redux-hooks';
import autharization from '../../store/profile/profile_thunks';

const Profile: React.FC = function () {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    dispatch(autharization());
    jwt
      ? console.log('permisiion-request')
      : navigate('/auth');
  });
  return (
    <>
      <HeaderController />
      <div className="profile-container">
        <div className="user-data">
          <h1>Имя Фамилия</h1>
          <div>Возраст</div>
        </div>
        <div className="user-purchases">
          <h2>Ваши покупки</h2>
        </div>
      </div>
    </>
  );
};

export default Profile;
