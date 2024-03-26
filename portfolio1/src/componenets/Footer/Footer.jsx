import React from "react";
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  // let date = new Date();
  // let year = date.getFullYear();
  return (
    <>
      <div className="fot">
        <div className="cof1">
          <h4>Design and Developed By Boopathi</h4>
        </div>
        <div className="cof2">
          <h4>Copyright @ BV</h4>
        </div>
        <div className="cof3">
          <div className="items">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Mr-Mysterious1"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/boopathi-velayutham"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default Footer;
