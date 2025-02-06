import './App.css';
import React from "react";

function App() {
  return (
    <div>
      {/* Navbar and personal website logo */}
      <nav className ="navbar">
        <div className = "logo">
          <span className = "circle">BNK</span>
          <span className = "name"> Beyzanur Kuyuk</span> 
        </div>
        <ul className = "navbar-links">
          <li><a href = "#about">About</a></li>
          <li><a href = "#experience">Experience</a></li>
          <li><a href = "#education">Education</a></li>
          <li><a href = "#projects">Projects</a></li>
          <li><a href = "#hobbies">Hobbies</a></li>
        </ul>
      </nav>
      {/*Home section*/}
      <section id = "home">
        <h1>Hello! I am Beyza</h1>
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
