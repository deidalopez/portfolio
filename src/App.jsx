import "./styles/App.scss";
import "./styles/_colors.scss";
import deidalopez from "./assets/deidalopez.png";
import about from "./assets/about.png";
import myWork from "./assets/myWork.png";
import contactMe from "./assets/contactMe.png";
import Button from "@material-ui/core/Button";
import { Link, animateScroll as scroll } from "react-scroll";
import javascript from "./assets/tech/javascript.svg";
import css from "./assets/tech/css-3.svg";
import html from "./assets/tech/html-5.svg";
import github from "./assets/tech/github-icon.svg";
import giticon from "./assets/tech/git-icon.svg";
import reactSVG from "./assets/tech/react.svg";
import reactNative from "./assets/tech/react-native-logo.png";
import typescript from "./assets/tech/typescript-icon.svg";
import nodejs from "./assets/tech/nodejs.svg";
import express from "./assets/tech/express.svg";
import jest from "./assets/tech/jest.svg";
import mongoDB from "./assets/tech/mongodb.svg";
import postgres from "./assets/tech/postgresql.svg";
import figma from "./assets/tech/figma.svg";
import awss3 from "./assets/tech/aws-s3.svg";
import myPicture from "./assets/IMG_3481.jpg";
import localTrade from "./assets/LocalTrade/Landing.png";
import bountifull from "./assets/LocalTrade/bountifullLanding.png";

import emailSocial from "./assets/iconmonstr-email-10.svg";
import githubSocial from "./assets/iconmonstr-github-3.svg";
import linkedinSocial from "./assets/iconmonstr-linkedin-3.svg";
import twitterSocial from "./assets/iconmonstr-twitter-3.svg";
import ContactForm from './components/Contact';

function App() {
  return (
    <div className="Container">
      <header className="App-header">
        <div className="navbar">
          <ul id="nav">
            <li>
              <Link
                activeClass="active"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <img src={about} className="linkPNG" alt="logo" />
                {/* about */}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="myWork"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <img src={myWork} className="linkPNG" alt="logo" />
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contactMe"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <img src={contactMe} className="linkPNG" alt="logo" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="hero">
          <img src={deidalopez} id="myName" alt="logo" />
          {/* <button className="submitButton">
            LET'S GO
          </button> */}
          <Link
            activeClass="active"
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            <Button
              variant="contained"
              style={{
                height: "4.5em",
                width: "10em",
                backgroundColor: "#FF8758",
                borderRadius: "1em",
                boxShadow: "1px 1px 3px $charcoal",
                color: "#fff",
                fontWeight: "700",
                margin: "0",
              }}
            >
              let's go
            </Button>{" "}
          </Link>
        </div>
      </header>
      <div title="aboutMe" className="aboutMe">
        <h1 id="aboutMeTitle">About Me</h1>
        <div className="aboutMeSection">
          <div className="aboutMeContent">
            <p>
              Full Stack Developer with a passion for building appealing, and
              stable mobile and web applications. Enjoy being involved in the
              initial conceptualization of an app, and following through until
              development, and delivery.
            </p>
            <p>
              Experienced in working in a team setting following Agile
              methodology, requiring good communication, and time management
              skills.
            </p>
            <p>
              When I am not developing, I enjoy vegetable gardening, hiking, and
              creating new plant-based recipes.
            </p>
          </div>
          <img src={myPicture} className="myPicture" alt="logo" />
        </div>
      </div>
      <h1 id="myWorkTitle">My Work</h1>
      <div title="myWork" className="myWork">
        <div className="localTrade">
          <a href="https://github.com/deidalopez/LocalTradeApp">
            <h2 className="projectTitle">LocalTrade</h2>
            <img src={localTrade} alt="" className="localTrade" />
          </a>
        </div>
        <div className="localTrade">
          <a href="https://www.linkedin.com/company/bountifull-app/">
            <h2 className="projectTitle">Bountifull</h2>
            <img
              className="localTradeBorder"
              src={bountifull}
              alt="bountifull"
            />
          </a>
        </div>
      </div>
      <h1 id="technologyTitle">Technology</h1>
      <div title="technology" className="technology">
        <div className="logo">
          <img src={javascript} className="logoSVG" alt="JSLogo" />
        </div>
        <div className="logo">
          <img src={typescript} className="logoSVG" alt="TSLogo" />
        </div>
        <div className="logo">
          <img src={css} className="logoSVG" alt="CSSLogo" />
        </div>
        <div className="logo">
          <img src={html} className="logoSVG" alt="HTMLLogo" />
        </div>
        <div className="logo">
          <img src={reactSVG} className="logoSVG" alt="ReactLogo" />
        </div>
        <div className="logo">
          <img src={reactNative} className="logoSVG" alt="reactNativeLogo" />
        </div>
        <div className="logo">
          <img src={giticon} className="logoSVG" alt="giticon" />
        </div>
        <div className="logo">
          <img src={github} className="logoSVG" alt="github" />
        </div>

        <div className="logo">
          <img src={nodejs} className="logoSVG" alt="nodejs" />
        </div>
        <div className="logo">
          <img src={figma} className="logoSVG" alt="figma" />
        </div>
        <div className="logo">
          <img src={awss3} className="logoSVG" alt="aws-s3" />
        </div>
        <div className="logo">
          <img src={jest} className="logoSVG" alt="jest" />
        </div>
        <div className="logo">
          <img src={mongoDB} className="logoSVGLong" alt="mongoDB" />
        </div>
        <div className="logo">
          <img src={postgres} className="logoSVG" alt="postgres" />
        </div>
        <div className="logo">
          <img src={express} className="logoSVGLong" alt="express" />
        </div>
      </div>
      <div title="contactMe" className="contactMe">
        <h1 id="contactMeTitle">Contact Me</h1>
        <ContactForm />
        <div className="socialSection">
          <div className="socialIcon">
            <a>
              <img className="socialIcon" src={emailSocial} alt="emailSocial" />
            </a>
          </div>
          <div className="socialIcon">
            <a href="https://www.linkedin.com/in/deidalopez/">
              <img
                className="socialIcon"
                src={linkedinSocial}
                alt="linkedinSocial"
              />
            </a>
          </div>
          <div className="socialIcon">
            <a href="https://github.com/deidalopez">
              <img
                className="socialIcon"
                src={githubSocial}
                alt="githubSocial"
              />
            </a>
          </div>
          <div className="socialIcon">
            <a href="#">
              <img
                className="socialIcon"
                src={twitterSocial}
                alt="twitterSocial"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
