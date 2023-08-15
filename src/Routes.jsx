import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import App from './App';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/cuisine" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}