import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Header from './components/Header';
import Nav from './components/Nav';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
