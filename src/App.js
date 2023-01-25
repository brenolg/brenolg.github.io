import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <main className="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={ About } />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
