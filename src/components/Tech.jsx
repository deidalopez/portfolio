import "../styles/App.scss";


import javascript from "../assets/tech/javascript.svg";
import css from "../assets/tech/css-3.svg";
import html from "../assets/tech/html-5.svg";
import github from "../assets/tech/github-icon.svg";
import giticon from "../assets/tech/git-icon.svg";
import reactSVG from "../assets/tech/react.svg";
import reactNative from "../assets/tech/react-native-logo.png";
import typescript from "../assets/tech/typescript-icon.svg";
import nodejs from "../assets/tech/nodejs.svg";
import express from "../assets/tech/express.svg";
import jest from "../assets/tech/jest.svg";
import mongoDB from "../assets/tech/mongodb.svg";
import postgres from "../assets/tech/postgresql.svg";
import figma from "../assets/tech/figma.svg";
import awss3 from "../assets/tech/aws-s3.svg";


function Tech() {
  return (
    <div className='technology'>
      {/* <h1 id='technologyTitle'>Technology</h1> */}
      {/* <div title="technology" className="technology"> */}
      <div title="JavaScript"  className="logo">
          <img src={javascript} className="logoSVG" alt="JSLogo" />
        </div>
        <div title="TypeScript" className="logo">
          <img src={typescript} className="logoSVG" alt="TSLogo" />
        </div>
      <div title="CSS" className="logo">
          <img src={css} className="logoSVG" alt="CSSLogo" />
        </div>
      <div title="HTML" className="logo">
          <img src={html} className="logoSVG" alt="HTMLLogo" />
        </div>
      <div title="React" className="logo">
          <img src={reactSVG} className="logoSVG" alt="ReactLogo" />
        </div>
      <div title="ReactNative!" className="logo">
          <img src={reactNative} className="logoSVG" alt="reactNativeLogo" />
        </div>
      <div title="Git" className="logo">
          <img src={giticon} className="logoSVG" alt="giticon" />
        </div>
      <div title="Github" className="logo">
          <img src={github} className="logoSVG" alt="github" />
        </div>

      <div title="Node.js"  className="logo">
          <img src={nodejs} className="logoSVG" alt="nodejs" />
        </div>
      <div title="Figma" className="logo">
          <img src={figma} className="logoSVG" alt="figma" />
        </div>
      <div title="AWS S3" className="logo">
          <img src={awss3} className="logoSVG" alt="aws-s3" />
        </div>
      <div title="Jest" className="logo">
          <img src={jest} className="logoSVG" alt="jest" />
        </div>
      <div title="PostgreSQL" className="logo">
          <img src={postgres} className="logoSVG" alt="postgres" />
        </div>
      <div title="mongoDB" className="logo">
          <img src={mongoDB} className="logoSVGLong" alt="mongoDB" />
        </div>
      <div title="Express" className="logo">
          <img src={express} className="logoSVGLong" alt="express" />
        </div>
      </div>
    // </div>
  )
}

export default Tech;