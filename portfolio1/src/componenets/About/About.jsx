import React from "react";
import img from "../../assets/back.png";
import "./About.css";
import img3 from "../../assets/Ai.jpg"
import { ImPointRight } from "react-icons/im";
import { DiJavascript1, DiReact, DiJava, DiMysql } from "react-icons/di";

export default function About() {
  return (
    <>
      <div className="Abcontainer">
        <div className="mydetails">
          <div className="detailscon">
            <h1>
      
              KNOW WHO <strong style={{ color: "violet" }}>I'M</strong>
            </h1>
            <div className="para">
              <div>
                <p className="cont1">
                  Hello! I'm Boopathi Velayutham from Erode, Tamil Nadu. I
                  graduated in 2022 with a degree in Electronic and
                  Communication Engineering from Government College of
                  Engineering Erode (IRTT). My academic journey equipped me with
                  strong problem-solving skills.
                  <br />
                </p>
              </div>
              <p>Apart from coding,some other activities that I love to do! </p>
              <div className="list">
                <ul>
                  <li className="about-activity">
                    <ImPointRight /> Playing Games
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Travelling
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="heropic">
            <img src={img} alt="back" className="hero" />
          </div>
        </div>
        <div className="skills">
          <h1 className="skillhead">Professional Skillset</h1>
          <div className="myskills">
            <div className="box-Reactjs">
              <DiReact />
              <h6 style={{fontSize:"20px"}}>React js</h6>
            </div>
            <div className="box-java">
              <DiJava />
              <h6 style={{fontSize:"20px"}}>Java</h6>
            </div>
            <div className="box-Mysql">
              <DiMysql />
              <h6 style={{fontSize:"20px"}}>MySQL</h6>
            </div>
            <div className="box-javascript">
              <DiJavascript1 />
              <h6 style={{fontSize:"20px"}}>javascript</h6>
            </div>
          </div>
          <div className="projects">
            <h1 className="projects">My Projects</h1>
            <div className="maincontainer">
              <div className="back">
                <h2>College Project</h2>
                <p style={{fontSize:"16px"}}>"Basically, the machine learning algorithm identifies and classifies the toxic comments on social media based on the toxicity levels." </p>
              </div>
              <div className="front">
                <div className="image3">
                <img src={img3} className="Img3" alt="MAchine IMG"/>
                <h2 >Identification & Classification of Toxic Comments on social media Using machine learning </h2>
              </div>
            </div>
        </div>
            <div className="reactpro"></div>
          </div>
        </div>
      </div>
    </>
  );
}
