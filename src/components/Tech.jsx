import javascript from './assets/tech/javascript.svg';
import css from './assets/tech/css-3.svg';
import html from './assets/tech/html-5.svg';
import giticon from './assets/tech/git-icon.svg';
import reactSVG from './assets/tech/react.svg';
import reactNative from './assets/tech/react-native-logo.png';
import typescript from './assets/tech/typescript-icon.svg';
import nodejs from './assets/tech/nodejs.svg';
import express from './assets/tech/express.svg';
import jest from './assets/tech/jest.svg';
import mongoDB from './assets/tech/mongodb.svg';
import postgres from './assets/tech/postgresql.svg';


function Tech() {
  return (
    <div title='technology' className='technology'>
      <h1 id='technologyTitle'>Technology</h1>
      <div className="logo">
        <img src={javascript} className="logoSVG" alt="logo" />
      </div>
    </div>
  )
}

export default Tech;