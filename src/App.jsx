import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login'; // Make sure the path is correct
import CxAgent from './CxAgent'; // Replace with your actual component
import DepotManager from './DepotManager'; // Replace with your actual component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/CxAgent" element={<CxAgent />} />
          <Route path="/DepotManager" element={<DepotManager />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
