import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

const App = () => {
  const size = useResizeWindow();
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero width={size.width} height={size.height} />
      <Section height={size.height}/>
    </Router>
  );
}

function useResizeWindow() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export default App;
