import React from 'react';
import "./Portfolio.css";
import img1 from "../1.png";
import img2 from "../2.png";
import img3 from "../3.jpg";
import img4 from "../4.png";
import img5 from "../5.png";
import img6 from "../6.png";
import img7 from "../7.png";
import img8 from "../8.png";
import img9 from "../9.png";
const Portfolio = () => {

  return (
    <div className="card-port" id="portfolio">
      <br/>
      <br/>
        <h2><b>----My Portfolio----</b></h2>
        <br/>
        <hr/>
        <h3><b>***Web Development***</b></h3>
    <div className="cards_container">

    <div class="card" id="card">
    <a href='https://github.com/redinaM/be-healthy---mishkaredina'target="_blank" rel="noopener noreferrer">
      <img class="card-img-top" src={img1} alt="food blog" />
    </a>
    <div class="card-body">
    <h5 class="card-title"><b>FOOD BLOG WEBSITE</b></h5>
    </div>
    </div>

    <div class="card" id="card">
    <a href='https://github.com/redinaM/chiara-ferragni---mishkaredina'target="_blank" rel="noopener noreferrer">
       <img class="card-img-top" src={img2} alt="chiara ferragni blog" />
    </a>
    <div class="card-body">
    <h5 class="card-title"><b>CHIARA FERRAGNI</b></h5>
    </div>
    </div>

    <div class="card" id="card">
    <a href='https://github.com/redinaM/fashion-blog---mishkaredina'target="_blank" rel="noopener noreferrer">
      <img class="card-img-top" src={img3} alt="fashion blog" />
    </a>
    <div class="card-body">
    <h5 class="card-title"><b>FASHION BLOG</b></h5>
    </div>
    </div>
</div>

 <div className="cards_container">

    <div class="card" id="card"> 
    <a href='https://github.com/redinaM/dice-game---mishkaredina'target="_blank" rel="noopener noreferrer">
       <img class="card-img-top" src={img4} alt="dice game" />
    </a>
    <div class="card-body">
    <h5 class="card-title"><b>DICE GAME JAVASCRIPT</b></h5>
    </div>
    </div>

    <div class="card" id="card">
    <a href='https://github.com/redinaM/myself-React.Js---mishkaredina'target="_blank" rel="noopener noreferrer">
       <img class="card-img-top" src={img5} alt="me in react" />
    </a>
    <div class="card-body">
    <h5 class="card-title"><b>ABOUT ME IN REACT</b></h5>
    </div>
    </div>

    <div class="card" id="card"> 
    <a href='https://github.com/redinaM/mercedes-benz---mishkaredina'target="_blank" rel="noopener noreferrer">
      <img class="card-img-top" src={img6} alt="mercedes benz website" />
    </a>
    <div class="card-body">
    <h5 class="card-title"><b>MERCEDES BENZ</b></h5>
    </div>
    </div>

</div>

<h3><b>***Graphic Design***</b></h3>
<div className="cards_container">

    <div class="card" id="card"> 
    <img class="card-img-top" src={img7} alt="logo design" />
    <div class="card-body">
    <h5 class="card-title"><b>BUSINESS LOGO DESIGN</b></h5>
    </div>
    </div>

    <div class="card" id="card"> 
    <img class="card-img-top" src={img8} alt="business card" />
    <div class="card-body">
    <h5 class="card-title"><b>BUSINESS/LOYALTY CARDS</b></h5>
    </div>
    </div>


    <div class="card" id="card"> 
    <img class="card-img-top" src={img9} alt="laptop" />
    <div class="card-body">
    <h5 class="card-title"><b>FLYERS/BROCHURES</b></h5>
    </div>
    </div>

</div>
</div>
  )
}

export default Portfolio;
