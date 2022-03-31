import React from 'react';
import { LineProgressBar } from '@frogress/line';
import "./About.css";
import card_img from "../card_img.jpg";

const About = () => {
  return (
    <div className="cards" id="aboutme">
        <h2><b>----About me----</b></h2>
        <div className="cards__container">

        <div class="card">
  <img class="card-img-top" src={card_img} alt="laptop" />
  <div class="card-body">
    <h5 class="card-title"><b>Who am I?</b></h5>
    <br/>
    <p class="card-text">Hey! I am Redina, a Business Informatics student. During my studies, I have worked on many projects related to
             web development, and graphic design. I am passionate about coding, creating 
             modern and innovative web pages. If you are looking for a web developer or a graphic designer you are in the 
             right place because you will receive the best quality under your requirements at affordable prices.</p>
  </div>
</div>

<div class="card">
  <div class="card-body">
    <h5 class="card-title"><b>My skills</b></h5>
    <p class="card-text">
    <p><b>HTML</b><LineProgressBar percent={90} progressColor="linear-gradient(to right, #A9A9A9 60%, #778899)" /></p>
    <p><b>CSS</b><LineProgressBar percent={90} progressColor="linear-gradient(to right, #A9A9A9 60%, #778899)" /></p>
    <p><b>JS</b><LineProgressBar percent={85}progressColor="linear-gradient(to right, #A9A9A9 60%, #778899)" /></p>
    <p><b>Bootstrap</b><LineProgressBar percent={90} progressColor="linear-gradient(to right, #A9A9A9 60%, #778899)"/></p>
    <p><b>React Js</b><LineProgressBar percent={70} progressColor="linear-gradient(to right, #A9A9A9 60%, #778899)" /></p>
    <p><b>Java</b><LineProgressBar percent={70} progressColor="linear-gradient(to right, #A9A9A9 60%, #778899)" /></p>
    <p><b>C & C++</b><LineProgressBar percent={85} progressColor="linear-gradient(to right, #A9A9A9 60%, #778899)" /></p>
    <p><b>Php</b><LineProgressBar percent={70} progressColor="linear-gradient(to right, #A9A9A9 60%, #778899)" /></p>
    </p>
  </div>
</div>
        
</div>
</div>
  )
}

export default About;