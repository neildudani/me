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
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="me-auto"></div>
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
        </nav>
      </div>
    </div>
  )

};

export default Navbar;