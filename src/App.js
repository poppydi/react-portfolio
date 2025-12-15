import React from 'react';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';

import './components/Header/Header.css';
import './components/Portfolio/Portfolio.css';
import './components/About/About.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;