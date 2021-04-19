import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import styled from 'styled-components';
import ReactDOM from 'react-dom';

import "./styles/App.scss";
import "./styles/_colors.scss";
import deidalopez from "./assets/deidalopez.png";

import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork'
import Tech from './components/Tech';
import ContactForm from './components/Contact';
import Socials from './components/Socials';

function App() {

  const [show, setShow] = useState({ first: false, second: false, third: false })

  const firstRef = useRef(null)
  const secondRef = useRef(null)
  const thirdRef = useRef(null);


  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
    const div1Pos = topPos(firstRef.current)
    const div2Pos = topPos(secondRef.current)
    const div3Pos = topPos(thirdRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        setShow(state => ({ ...state, first: true }));
      } else if (div2Pos < scrollPos) {
        setShow(state => ({ ...state, second: true }));
      } else if (div3Pos < scrollPos) {
        setShow(state => ({ ...state, third: true }))
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <Wrapper>

      <div className="Container">
        <header className="App-header">
          <Navbar />
          <div className="hero">
            <img src={deidalopez} id="myName" alt="logo" />
          </div>
        </header>
        <DivLeft animate={show.third} ref={thirdRef}>
          <h1 id="aboutMeTitle" >About Me</h1>
        </DivLeft>

        <AboutMe />
        <DivLeft animate={show.second} ref={secondRef}>
          <h1 id="myWorkTitle">My Work</h1>
        </DivLeft>
        <MyWork />
        <Div animate={show.first} ref={firstRef}>
          <h1 id="technologyTitle">Technology</h1>
        </Div>
        <Tech />
        <div title="contactMe" className="contactMe">
          <h1 id="contactMeTitle">Contact Me</h1>
          <ContactForm />

          <Socials />
        </div>
      </div>
    </Wrapper>
  );
}

export default App;


const Div = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "100vw")});
  transition: transform 1s;
  margin: 20px;
`;
const DivLeft = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "-110vw")});
  transition: transform 1s;
  margin: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);