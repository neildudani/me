import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const About = () => {

  const [whoAmI, setWhoAmI] = useState(false);
  const [interests, setInterests] = useState(false);
  const [technicalSkills, setTechnicalSkills] = useState(false);

  const toggleWhoAmI = () => {
    setWhoAmI(!whoAmI);
  }

  const toggleInterests = () => {
    setInterests(!interests);
  }

  const toggleTechnicalSkills = () => {
    setTechnicalSkills(!technicalSkills);
  }

  return (
    <div class="about_area" id="about-area-link">
      <h1 class="section-header">About</h1>
      <div class="about-question-container" onClick={toggleWhoAmI}>
        <i class="fas fa-user fa-2x question-icon"></i>
        <h2 class="about-question-title who-am-i">A Little About Me</h2>
      </div>
      {whoAmI && <p class="about-content">I was born and raised in Ottawa, Canada, and am currently pursuing my MBA from the Kellogg School of Management in Evanston, Illinois, where I am hoping to transition into a product management role in tech.
      </p>}
      {whoAmI && <p class="about-content">Prior to moving to the United States, I completed my undergraduate Commerce degree from the Smith School of Business at Queen's University and spent time in Toronto working in management consulting and product strategy at <a href="https://www.level5strategy.com/">Level5 Strategy</a> and Capital One, respectively.
      </p>}
      {whoAmI && <p class="about-content">
      I am always eager to meet new people, so please feel free to contact me at neil.dudani@kellogg.northwestern.edu if you would like to set up time to chat :)</p>}
      <div class="about-question-container" onClick={toggleInterests}>
        <i class="fas fa-star fa-2x question-icon"></i>
        <h2 class="about-question-title">My Interests</h2>
      </div>
      {interests && <p class="about-content">
        I love to learn about new, innovative technologies and am always seeking ways to better understand how we can leverage them to help serve our society with better tools and resources.
      </p>}
      {interests && <p class="about-content">
        I am passionate about giving back, and currently serve as a Board Member for <a href="https://www.gildasclubtoronto.org/">Gilda's Club Greater Toronto</a>, whose mission is to ensure all people impacted by cancer are empowered by knowledge, strengthened by action and sustained by community.
      </p>}
      {interests && <p class="about-content">
        I hope to someday further explore my entreprenurial spirit and contribute towards an application or technology that brings further support to untapped areas and underdeveloped communities. As my first foray into software development, I completed a software engineering bootcamp from Hack Reactor, a 3-month immersive program focused on developing full-stack applications, some of which are described at the bottom of this page!
      </p>}
      <div class="about-question-container" onClick={toggleTechnicalSkills}>
        <i class="fas fa-cog fa-2x question-icon"></i>
        <h2 class="about-question-title">Technical Skills</h2>
      </div>
      {technicalSkills && <table class="table table-borderless table-sm skills-table">
        <tbody>
          <tr>
            <td>
              <li class="skill">JavaScript</li>
              <li class="skill">HTML/CSS</li>
              <li class="skill">Bootstrap</li>
              <li class="skill">React</li>
              <li class="skill">Node.js</li>
              <li class="skill">Express</li>
              <li class="skill">PostgreSQL</li>
              <li class="skill">MySQL</li>
            </td>
            <td>
              <li class="skill">MongoDB</li>
              <li class="skill">AWS</li>
              <li class="skill">Docker</li>
              <li class="skill">Jest & Mocha</li>
              <li class="skill">SQL</li>
              <li class="skill">Tableau</li>
              <li class="skill">Excel</li>
              <li class="skill">PowerPoint</li>
            </td>
          </tr>
        </tbody>
      </table>}
    </div>
  )

};

export default About;