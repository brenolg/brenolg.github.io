import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import '../global.css';
import { AnimatePresence } from 'framer-motion';
import About from '../pages/About';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
