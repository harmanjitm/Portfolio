import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Navbar/>
      <p>Test</p>
    </Router>
  );
}

export default App;
