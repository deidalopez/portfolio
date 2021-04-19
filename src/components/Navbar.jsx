import about from "../assets/about.png";
import myWork from "../assets/myWork.png";
import contactMe from "../assets/contactMe.png";
import Button from "@material-ui/core/Button";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (

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
)
}

export default Navbar;