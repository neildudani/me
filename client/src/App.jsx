import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import BannerArea from './components/BannerArea.jsx';
import About from './components/About.jsx';
import SeparatorA from './components/SeparatorA.jsx';
import SeparatorB from './components/SeparatorB.jsx';
import Projects from './components/Projects.jsx';

const App = () => {

  return (
    <div>
      <Navbar />
      <BannerArea />
      <SeparatorA />
      <About />
      <SeparatorB />
      <Projects />
    </div>
  )

};

ReactDOM.render(<App/>, document.getElementById('app'));