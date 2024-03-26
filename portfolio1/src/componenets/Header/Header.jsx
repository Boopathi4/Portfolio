import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import hamburger from "../../assets/menu.png"
// import { IoClose, IoMenu } from "react-icons/io5";
// import { useMediaQuery } from "react-responsive";

import "./Header.css";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
    <nav className="navbar">
      <div className="containerhead">
        <div className="logo">
          <Link to="/" className="li1">
            <h1 className="h11">BV</h1>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={hamburger} alt="hammenu"style={{color:"white",height:"34px",width:"34px"}}/>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={handleShowNavbar} >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleShowNavbar}>About</NavLink>
            </li>
            <li>
              <NavLink to="/resume" onClick={handleShowNavbar}>Resume</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
