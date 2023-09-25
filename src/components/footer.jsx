import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/footer.css";

const Icons = () => {
  return (
    <div>
      <i className="fa fa-instagram" aria-hidden="true">
        <a href="https://www.instagram.com/la_.kasha._/"></a>
      </i>
      <i className="fa fa-facebook">
        {" "}
        <a href="profile.php?id=100092447352972"></a>
      </i>
      <i className="fa fa-github">
        {" "}
        <a href="https://github.com/E1675ka"></a>
      </i>
    </div>
  );
};

export default function Footer(props) {
  return (
    <footer className="footer">
      <ul>
        <div className="footer-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </div>
      </ul>
      <Icons />
    </footer>
  );
}
