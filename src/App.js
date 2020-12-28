import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <p>Test</p>
    </Router>
  );
}

export default App;
