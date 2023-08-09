import React from 'react';
import '../style/main.css';
import Navigation from './Navigation';
import photo from '../image/photo.jpg';
import { FaGithub, FaBlogger } from 'react-icons/fa';
import { AiTwotoneMail, AiFillHome } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div>
      <Navigation />
      <div>
        <div className="portfolio">PORTFOLIO</div>
        <img className="photo" src={photo} />
        <div className="name"> NAM MIN WOO</div>
        <div className="front">Front-End Developer</div>
        <div className="icons">
          <SlCalender size="20" className="icon" style={{ marginRight: '10px' }} />
          1994.12.29
        </div>
        <div className="icons">
          <AiFillHome size="20" className="icon" style={{ marginRight: '10px' }} />
          서울시 강서구 내발산동
        </div>
        <div className="icons">
          <BsFillTelephoneFill size="20" className="icon" style={{ marginRight: '10px' }} />
          010-2318-9836
        </div>
        <div className="icons">
          <AiTwotoneMail size="20" className="icon" style={{ marginRight: '10px' }} />
          skaalsdn35@gmail.com
        </div>
        <div className="icons">
          <FaGithub size="20" className="icon" style={{ marginRight: '10px' }} />
          https://github.com/mandoo1229
        </div>
        <div className="icons">
          <FaBlogger size="20" className="icon" style={{ marginRight: '10px' }} />
          velog.io/@mandoo1229
        </div>
      </div>
    </div>
  );
};

export default Main;
