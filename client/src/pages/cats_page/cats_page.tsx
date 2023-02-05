import React, { useEffect } from 'react';
import HeaderController from '../main/header/header_controller';

const CatsPage: React.FC = function () {
  useEffect(() => {
    console.log('get request to the server to get products for cats');
  }, []);
  return (
    <HeaderController />
  );
};

export default CatsPage;
