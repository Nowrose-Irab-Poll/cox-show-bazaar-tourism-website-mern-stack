import {
  faFacebook,
  faFacebookF,
  faFacebookMessenger,
  faFacebookSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer p-3 mt-auto">
      <h2>© Cox Show Bazaar</h2>
      <p>✆ 2441139</p>
      <div className="icon">
        <a target="_blank" href="https://www.facebook.com/nowrozeirabpoll/">
          <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
        </a>
        <a target="_blank" href="https://github.com/Nowrose-Irab-Poll/">
          <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default Footer;
