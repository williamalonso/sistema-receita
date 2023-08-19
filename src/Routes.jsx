import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cuisine from './pages/Cuisine';
import App from './App';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/cuisine/*" element={<Cuisine />} />
      </Routes>
    </BrowserRouter>
  );
}