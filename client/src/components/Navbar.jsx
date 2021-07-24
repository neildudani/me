import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Navbar = () => {

  const redirectToBanner = (e) => {
    e.preventDefault();
    var element = document.getElementById('banner-area-link');
    element.scrollIntoView({behavior: 'smooth'});
  };

  const redirectToAbout = (e) => {
    e.preventDefault();
    var element = document.getElementById('about-area-link');
    element.scrollIntoView({behavior: 'smooth'});
  };

  const redirectToProjects = (e) => {
    e.preventDefault();
    var element = document.getElementById('project-area-link');
    element.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div class="header_area">
      <div class="main-menu">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item" onClick={redirectToBanner}>
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item" onClick={redirectToAbout}>
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item" onClick={redirectToProjects}>
              <a class="nav-link" href="#">Projects</a>
            </li>
          </ul>
      </div>
    </div>
  )

};

export default Navbar;