import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import logo from '../../dist/images/logo.jpeg'

const BannerArea = () => {

  return (
    <div class="site-main" id="banner-area-link">
      <div class="site-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 site-title">
                  <h3 class="title-text">Hey There!</h3>
                  <h1 class="title-text text">I am <span class="name">Neil</span></h1>
                  <div class="site-buttons">
                    <div class="d-flex flex-row flex-wrap">
                        <button type="button" class="btn button linkedin-button mr-4" onClick={()=> window.open('https://www.linkedin.com/in/neil-dudani/', '_blank')}>
                          <i class="fab fa-linkedin big-icon"></i>
                        </button>
                        <button type="button" class="btn button github-button" onClick={()=> window.open('https://github.com/neildudani', '_blank')}>
                          <i class="fab fa-github big-icon"></i>
                        </button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 banner-image">
                    <img src={logo} alt="banner-img"></img>
                </div>
            </div>
        </div>
      </div>
    </div>
  )

};

export default BannerArea;