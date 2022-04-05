import { NavLink } from "react-router-dom";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div class="link-boxes">
          <ul class="box">
            <li class="link_name">Table API</li>
            <li>
              <img width="20%" src="" />
            </li>
          </ul>
          <ul class="box">
            <li class="link_name">Project</li>
            <li>
              {" "}
              <a href="" target="_blank">
                Team
              </a>
            </li>
          </ul>
          <ul class="box">
            <li class="link_name">Support</li>
            <li>
              <a href="" target="_blank">
                FAQ
              </a>
            </li>
          </ul>
          <ul class="box">
            <li class="link_name">Social</li>
            <li>
              <a target="_blank" href="">
                Github
              </a>
            </li>
            <li>
              <a target="_blank" href="">
                Discord
              </a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
