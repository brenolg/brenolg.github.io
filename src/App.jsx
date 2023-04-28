import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './pages/AnimatedRoutes';
import Header from './components/Header';
import Nav from './components/Nav';
import './global.css';
import Cursor from './components/Cursor';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Cursor />
      <Nav />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
