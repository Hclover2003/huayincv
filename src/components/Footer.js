import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <h1 style={{ fontSize: "40px" }}>Connect with Me</h1>
      <div className="socialmedia">
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <p> huayinluo.com &copy; Jan 2022</p>
    </div>
  );
};

export default Footer;
