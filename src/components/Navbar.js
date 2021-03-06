import React from "react";
import logo from "../logo.png";

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg  fixed-top  navbar-dark bg-dark">
  <div className="container">
  <a className="navbar-brand" href="#home"><img className="logo" src={logo} alt="logo" /></a>
  <button className="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#aboutme">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
      </ul>
      
  </div>
  </div>
</nav>
  )
}

export default Navbar