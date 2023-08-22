import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './Routes';
import { StyledGlobal } from './components/StyledComponents/StyledGlobal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledGlobal />
    <Routing />
  </React.StrictMode>
);

