import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import "./styles/App.scss";
import "./styles/_colors.scss";
import deidalopez from "./assets/deidalopez.png";

import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork'
import Tech from './components/Tech';
import ContactForm from './components/Contact';
import Socials from './components/Socials';
import Fade from 'react-reveal/Fade';
function App() {




  return (

      <div className="Container">
        <header className="App-header">
          <Navbar />
          <div className="hero">
            <img src={deidalopez} id="myName" alt="logo" />
          </div>
        </header>
        <Fade right>
          <h1 id="aboutMeTitle" >About Me</h1>
        </Fade>
        <AboutMe />
        <Fade left>

          <h1 id="myWorkTitle">My Work</h1>
        </Fade>
        <MyWork />
        <Fade right>
          <h1 id="technologyTitle">Technology</h1>
        </Fade>
        <Tech />
        <div title="contactMe" className="contactMe">
          <h1 id="contactMeTitle">Contact Me</h1>
          <ContactForm />

          <Socials />
        </div>
      </div>
  );
}

export default App;

