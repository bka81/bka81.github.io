import './App.css';
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
      {/* Navbar and personal website logo */}
      <nav className ="navbar">
        <div className = "logo">
          <span className = "circle">BNK</span>
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
      </section>

      {/*About section*/}
      <section id = "about">
        <h2>About Me</h2>
        <p>bio</p>
      </section>

      {/*Experience section*/}
      <section id = "experience">
        <h2>Experience</h2>
        <p>Work and volunteer experience</p>
      </section>

      {/*Education section*/}
      <section id ="education">
        <h2>Education</h2>
        <p>describe education</p>
      </section>

      {/*Projects section*/}
      <section id ="projects">
        <h2>Projects</h2>
        <p>List your projects here and provide any links</p>
      </section>

      {/*Hobbies section*/}
      <section id ="hobbies">
        <h2>Hobbies</h2>
        <p>describe some your hobbies</p>
      </section>
    </div>
  );
}


export default App;
