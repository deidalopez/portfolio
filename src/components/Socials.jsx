import githubSocial from "../assets/iconmonstr-github-3.svg";
import linkedinSocial from "../assets/iconmonstr-linkedin-3.svg";
import twitterSocial from "../assets/iconmonstr-twitter-3.svg";


const Socials = () => {
  return (
    <div className="socialSection">
    
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
  )
}

export default Socials;