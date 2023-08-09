import React from 'react';
import '../style/main.css';
import Navigation from './Navigation';
import photo from '../image/photo.jpg';

const Main = () => {
  return (
    <div>
      <Navigation />
      <div>
        <div className="portfolio">PORTFOLIO</div>
        <img className="photo" src={photo} />
        <div className="name"> NAM MIN WOO</div>
        <div className="front">Front-End Developer</div>
      </div>
    </div>
  );
};

export default Main;
