import React from 'react';
import Typed from "react-typed";
import pdfFile from "../resume.pdf";
import me from "../me.jpg";

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info" id="home">
           <img className="my-self" src= {me} alt="me" /> 
           <h1>Hi, I' m Redina Mishka</h1>
           <h2>Web Developer & Graphic Designer</h2>
           <Typed
           className="typed-text"
           strings = {["Web Design", "Web development", "Graphic design"]}
           typeSpeed = {40}
           backSpeed = {60}
           loop
           />
           <div className="two-buttons"><a href="#aboutme" className="btn-main-offer">Learn about me</a>
           <a href={pdfFile} target="_blank" rel="noreferrer" className="btn-main-offer">My resume</a></div>
           
        </div>
    </div>
  )
}

export default Header