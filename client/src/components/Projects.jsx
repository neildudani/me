import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Projects = () => {

  return (
    <div class="project_area" id="project-area-link">
      <h1 class="section-header">Projects</h1>
      <div class="row d-flex justify-content-around">
        <div class="col-sm-4">
          <div class="card first-card">
            <div class="card-body">
              <h5 class="card-title">E-Commerce Front-End</h5>
              <p class="card-text">Front-end of an e-commerce application that allows users to browse, search and review over 1 million products</p>
              <button type="button" class="btn button github-mini" onClick={()=> window.open('https://github.com/Trendz-eCommerce/Trendz', '_blank')}>
                  <i class="fab fa-github"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card second-card">
            <div class="card-body">
              <h5 class="card-title">Digital Library</h5>
              <p class="card-text">Full stack application built using the Google Books API that allows users to add a book to their digital library and save their book reviews</p>
              <button type="button" class="btn button github-mini" onClick={()=> window.open('https://github.com/neildudani/my-digital-library', '_blank')}>
                  <i class="fab fa-github"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card third-card">
            <div class="card-body">
              <h5 class="card-title">Coffee Shop Review App</h5>
              <p class="card-text">Back-end of a Yelp-like app that allows users to find and view their favourite coffee shops across any location</p>
              <button type="button" class="btn button github-mini" onClick={()=> window.open('https://github.com/HR-Tiger/Backend', '_blank')}>
                  <i class="fab fa-github"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

};

export default Projects;