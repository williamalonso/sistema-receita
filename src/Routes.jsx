import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Cuisine from './pages/Cuisine';
import App from './App';
import Searched from './pages/Searched';
import Recipe from './pages/Recipe';
import { AnimatePresence } from 'framer-motion';

export default function Routing() {

  const location = useLocation();

  return (
      <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<App />} />
            <Route path="/cuisine/*" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:id" element={<Recipe />} />
          </Routes>
      </AnimatePresence>
  );
}