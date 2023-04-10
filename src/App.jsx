import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Header from './components/Header';
import Nav from './components/Nav';
import './global.css';
import Cursor from './components/Cursor';

function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Header />
      <Nav />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
