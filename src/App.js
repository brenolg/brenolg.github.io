import React from 'react';
import './global.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={ About } />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
