import React from 'react';
import './Hero.css';
import hero from '../../assets/image.png'; 


function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>

      <div className="hero-content">
        <p className="subtitle">BEST DESTINATIONS AROUND THE WORLD</p>
        
        <h1>
          Travel, enjoy
          <br />
          and live a new
          <br />
          and full life
        </h1>

        <p className="description">
          Built Wicket longer admire do barton vanity itself do in it.
          <br />
          Preferred to sportsmen it engrossed listening. Park gate
          <br />
          sell they west hard for the.
        </p>
              <div className="button">
        <button className="btn">Find out more</button>
         
          <button className="demo-btn"> <span className="play-icon"> ▶</span>
Play Demo</button>
      </div>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Hero" />
      </div>

    </section>
  )
};

export default Hero;