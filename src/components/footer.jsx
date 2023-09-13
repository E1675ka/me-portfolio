import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const InstagramIcon = () => {
  return (
    <div>
      <i className="fa fa-instagram" aria-hidden="true"></i>
      <i className="fa fa-facebook"></i>
      <i className="fa fa-github"></i>
    </div>
  );
};

export default function Footer(props) {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="">Home</a>
        </li>

        <div className="nav-left-side">
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="./body.jsx/about">About</a>
          </li>
        </div>
      </ul>
      <InstagramIcon />
    </footer>
  );
}
