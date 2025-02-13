import './App.css';
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
      {/* Navbar and personal website logo */}
      <nav className ="navbar">
        <div className = "logo">
          <span className = "circle">B</span>
          <span className = "name"> Beyzanur Kuyuk</span> 
        </div>
        <ul className = "navbarLinks">
          <li><a href = "#about">About</a></li>
          <li><a href = "#experience">Experience</a></li>
          <li><a href = "#education">Education</a></li>
          <li><a href = "#projects">Projects</a></li>
          <li><a href = "#hobbies">Hobbies</a></li>
        </ul>
      </nav>
      {/*Home section*/}
      <section id = "home">
        <div className="intro">
          <h1>Hello! I am Beyza</h1>
          <div className = "icon-links">
            <a href="https://www.linkedin.com/in/beyzanur-kuyuk-144a5b260" target="_blank" rel="noopener noreferrer">
            <i className = "fab fa-linkedin"></i>
            </a>

            <a href="https://github.com/bka81" target="_blank" rel="noopener noreferrer">
            <i className = "fab fa-github"></i>
            </a>

            <a href="mailto:kuyukbeyza@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className = "fab fa-google"></i>
            </a>
          </div>
        </div>
        <div className = "profile-placeholder">
          <img src ="/profile_placeholder.jpg" alt ="A cute cat as a profile placeholder">
          </img>
        </div>
      </section>

      {/*About section*/}
      <section id = "about">
        <h2>About Me</h2>
        <p>I am a Computer Science student at Simon Fraser University with a passion for software development and love to learn more everyday and improve myself. For me, the computer is a canvas, the keyboard a brush, and programming a most fascinating art.</p>
      </section>

      {/*Experience section*/}
      <section id = "experience">
        <h2>Experience</h2>
        <ul className = 'experience-links'>
          <li><a href="https://www.turkishcanadiansociety.ca/about-tcs/" target ="_blank" rel = "noopener noreferrer">Turkish Canadian Society of Edmonton</a> - Teaching Assistant</li>
          <li><a href = "https://www.edmontonbluemosque.com" target ="_blank" rel = "noopener noreferrer">Edmonton Blue Mosque</a> - Volunteer</li>
        </ul>
        <h4>Certifications</h4>
        <ul className = 'certifications-links'>
          <li><a href = "https://www.freecodecamp.org/certification/byz_kyk/responsive-web-design" target ="_blank" rel = "noopener noreferrer">Responsive Web Design</a> - freeCodeCamp</li>
          <li><a href = "https://www.freecodecamp.org/certification/byz_kyk/javascript-algorithms-and-data-structures" target ="_blank" rel = "noopener noreferrer">Legacy JavaScript Algorithms and Data Structures</a> - freeCodeCamp</li>
        </ul>
        
      </section>

      {/*Education section*/}
      <section id ="education">
        <h2>Education</h2>
        <div className='school-info'>
          <h4>Bachelor of Science - Computer Science</h4>
          <h5>Simon Fraser University</h5>
          <h6>Expected Graduation: 2027</h6>
          <h6>GPA: 3.5/4.0</h6>
        </div>
      </section>

      {/*Projects section*/}
      <section id ="projects">
        <h2>Projects</h2>
        <p>School assignments and personal projects</p>
        <div className='project-container'>
          <div className = 'project-box'>
            <h4>Customer Survey Form</h4>
            <p>A customer feedback form built with HTML and CSS</p>
            <a href="https://bka81.github.io/surveyform/" target = "_blank" rel="noopener noreferrer">Live Demo</a>
            <br></br>
            <a href="https://github.com/bka81/surveyform.git" target = "_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
          <div className = 'project-box'>
            <h4>Bank Simulation</h4>
            <p>A C++ project simulating banking transactions</p>
            <a href="https://github.com/bka81/bankSimApp.git" target = "_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
          <div className = 'project-box'>
            <h4>FriendsBook App</h4>
            <p>A simple command-line social application in C++</p>
            <a href="https://github.com/bka81/FriendsBook-App.git" target = "_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
          <div className = 'project-box'>
            <h4>Monkey Mayhem - Board Game</h4>
            <p>Group Project - A strategy-based board game designed for 2 to 6 players</p>
            <a href="https://drive.google.com/file/d/1h_SFWQT5L65ZGgGpLOnD8jNYVd8l099l/view?usp=sharing" target = "_blank" rel="noopener noreferrer">Preproduction Prototype</a>
          </div>
        </div>
      </section>

      {/*Hobbies section*/}
      <section id ="hobbies">
        <h2>Hobbies</h2>
        <ul>
          <li><strong>Reading :</strong> My favourite genre is mystery and thriller</li>
          <li><strong>Board Games: </strong>I love playing <em>Sorry</em> with my husband. It has such unpredictable outcomes and brings out the competitiveness of people</li>
          <li><strong>Painting/Digital art: </strong>Painting is my go-to activity when I want to relax and recharge, especially when accompanied with a nice audio book. Here are some of my digital paintings:</li>
        </ul>
        <br></br>
        <div className="art-container">
          <div className="art-box1">
            <img src = "/art1.jpg" alt ="digitial art of pink flowers"></img>
          </div>
          <div className="art-box2">
            <img src = "/art2.jpg" alt ="digitial art of water lilies"></img>
          </div>
          <div className="art-box3">
            <img src = "/art3.jpg" alt ="digitial art of yellow roses"></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
