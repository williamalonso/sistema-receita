import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { StyledGlobal } from './components/StyledComponents/StyledGlobal';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyledGlobal />
        <Routing />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

