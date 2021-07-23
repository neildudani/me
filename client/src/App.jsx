import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import BannerArea from './components/BannerArea.jsx';
import About from './components/About.jsx';
import Separator from './components/Separator.jsx';
import Projects from './components/Projects.jsx';

const App = () => {

  return (
    <div>
      <Navbar />
      <BannerArea />
      <About />
      <Separator />
      <Projects />
    </div>
  )

};

ReactDOM.render(<App/>, document.getElementById('app'));