import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const SeparatorA = () => {

  const redirectToAbout = (e) => {
    e.preventDefault();
    var element = document.getElementById('about-area-link');
    element.scrollIntoView({behavior: 'smooth'});
  };


  return (
    <div>
    <div class="separatorA" onClick={redirectToAbout}>
        <i class="fas fa-arrow-circle-down fa-3x"></i>
        <h2> Click to learn more about me! </h2>
    </div>
    </div>
  )

};

export default SeparatorA;