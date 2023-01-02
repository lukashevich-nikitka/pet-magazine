import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Registration from './pages/registration/registration';
// import Main from './pages/main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Registration />
    </BrowserRouter>
  </React.StrictMode>,
);
