import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cuisine from './pages/Cuisine';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import Searched from './pages/Searched';

export default function Routing() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/cuisine/*" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}