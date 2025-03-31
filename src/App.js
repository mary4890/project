import React from 'react';
import './assets/dist/css/bootstrap.min.css';
import './cover.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
