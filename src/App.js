import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Quotes from './routes/Quotes';
import Home from './routes/Home';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="containter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
