import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Nav from './components/Nav';
import './global.css';
import AnimatedRoutes from './pages/AnimatedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Cursor />
      <AnimatedRoutes />
      <Nav />
    </BrowserRouter>
  );
}

export default App;
