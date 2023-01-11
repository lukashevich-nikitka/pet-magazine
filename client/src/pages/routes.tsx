/* eslint-disable import/no-cycle */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login/login';
import Main from './main';
import Registration from './registration/registration';
const RoutesComponent: React.FC = function () {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/cats" element={<Main />} />
      <Route path="/dogs" element={<Main />} />
      <Route path="/other" element={<Main />} />
      <Route path="/pharmacy" element={<Main />} />
      <Route path="/shops" element={<Main />} />
      <Route path="/favourites" element={<Main />} />
      <Route path="/search" element={<Main />} />
      <Route path="/basket" element={<Main />} />
    </Routes>
  );
};

export default RoutesComponent;
