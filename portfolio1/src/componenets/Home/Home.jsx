import React from "react";
import "./Home.css";
import himg from "../../assets/homeimg1.png";
import himg2 from "../../assets/homepic2.png";
import Type1 from "./Type1";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="name">
          <div className="colunm1">
            <h1
              style={{ paddingBottom: 15, color: "white" }}
              className="heading"
            >
              Hi There! 👋🏻
            </h1>
            <h1 className="heading-name">
              I'M
              <strong className="main-name"> BOOPATHI VELAYUTHAM</strong>
            </h1>
            <div
              className="type"
              style={{
                padding: "30px",
                fontSize: "40px",
                textAlign: "center",
                fontWeight: "700",
                color: "whitesmoke",
              }}
            >
              <Type1 className="type" />
            </div>
          </div>
          <div className="colunm2">
            <img src={himg} alt="homeimg1" className="homepic" />
          </div>
        </div>
        <div className="home2">
          <div className="name2">
            <div className="col3">
              <div className="intro">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="purple"> INTRODUCE </span> MYSELF
                </h1>{" "}
              </div>
              <div className="paragraph">
                <div className="home-about-body">
                  Hello!{" "}
                  <b style={{ color: "violet", fontSize: "24px" }}>
                    I'm Boopathi Velayutham,
                  </b>{" "}
                  an aspiring web developer <br />
                  with a unique journey into the world of coding.
                  <br />
                  <br />
                  <div className="heading1">
                  <h3 style={{ color: "violet" }}>Welcome to My Web Space !</h3>

                  </div>
                  <br />
                  <p>
                    I'm a dedicated web developer passionate about creating
                    seamless digital experiences. <br />
                    <br />
                    With a strong foundation in coding, I enjoy turning
                    innovative ideas into reality. Let's build something
                    extraordinary together!
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="pageimg2">
              <div className="col4">
                <img src={himg2} alt="homeimgg2" className="homepic2" />
              </div>
            </div>
          </div>
        </div>
        <div className="socialmedia"></div>
        <h1>FIND ME ON </h1>
        <div className="media">
          <ul className="home-icons1">
            <li className="social-icons1">
              <a
                href="https://github.com/Mr-Mysterious1"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons1">
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
    </>
  );
}
