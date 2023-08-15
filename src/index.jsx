import React from 'react';
import ReactDOM from 'react-dom/client';
import StyledGlobal from './components/StyledComponents/StyledGlobal';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledGlobal />
    <App />
  </React.StrictMode>
);

