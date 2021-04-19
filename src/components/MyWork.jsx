import myPicture from "../assets/IMG_3481.jpg";
import localTrade from "../assets/LocalTrade/Landing.png";
import bountifull from "../assets/LocalTrade/bountifullLanding.png";
const MyWork = () => {
  return (
    <div title="myWork" className="myWork">
      <div className="localTrade">
        <a href="https://github.com/deidalopez/LocalTradeApp">
          <h2 className="projectTitle">LocalTrade</h2>
          <img src={localTrade} alt="localtrade" className="localTradeBorder" />
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
  )
}

export default MyWork;