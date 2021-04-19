import React, { useState } from 'react';
import localTrade from "../assets/LocalTrade/localtrademockup.svg";
import bountifull from "../assets/Bountifull/Bountifullmockup.svg";
import localTrademp4 from '../assets/Bountifull/LocalApp.mp4'
import Bountifullmp4 from '../assets/Bountifull/Bountifull.mp4'

import BountifullLanding from '../assets/Bountifull/landing/bountifullLanding.svg'
import BountifullLandingText from '../assets/Bountifull/landing/bountifullLandingText.svg'
const MyWork = () => {

  const [hovering, setHovering] = useState(false);
  const [hoveringBountifull, setHoveringBountifull] = useState(false);
  const [hoveringBountifullLanding, setHoveringBountifullLanding] = useState(false);

  return (
    <div title="myWork" className="myWork">
      <div className="localTrade">
        <a href="https://github.com/deidalopez/LocalTradeApp">

          {hovering ?
            <video className="localTradeBorder" autoPlay loop muted
              onMouseOver={() => setHovering(true)}
              onMouseOut={() => setHovering(false)}
            >
              <source src={localTrademp4}></source>
            </video>
            :
            <img
              onMouseOver={() => setHovering(true)}
              onMouseOut={() => setHovering(false)}
              src={localTrade}
              alt="localtrade"
              className="localTradeBorder" />
          }
      <h2 className="projectTitle">LocalTrade</h2>
        </a>
      </div>
      <div className="localTrade">
        <a href="https://www.linkedin.com/company/bountifull-app/">
          {hoveringBountifull ?
            <video className="localTradeBorder" autoPlay loop muted
              onMouseOver={() => setHoveringBountifull(true)}
              onMouseOut={() => setHoveringBountifull(false)}
            >
              <source src={Bountifullmp4}></source>
            </video>
            :
            <img
              onMouseOver={() => setHoveringBountifull(true)}
              onMouseOut={() => setHoveringBountifull(false)}
              src={bountifull}
              alt="bountifull"
              className="localTradeBorder" />
          }
          <h2 className="projectTitle">Bountifull</h2>
        </a>
      </div>
      <div className="localTrade">
        <a href="https://bountifull.vercel.app/">
          {hoveringBountifullLanding ?
            <img
              onMouseOver={() => setHoveringBountifullLanding(true)}
              onMouseOut={() => setHoveringBountifullLanding(false)}
              src={BountifullLandingText}
              alt="bountifull"
              className="localTradeBorder" />
            :
            <img
              onMouseOver={() => setHoveringBountifullLanding(true)}
              onMouseOut={() => setHoveringBountifullLanding(false)}
              src={BountifullLanding}
              alt="bountifull"
              className="localTradeBorder" />
          }
          <h2 className="projectTitle">Bountifull Landing Page</h2>
        </a>
      </div>
    </div>
  )
}

export default MyWork;