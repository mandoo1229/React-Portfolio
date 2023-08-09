import React from 'react';
import '../style/main.css';
import Navigation from './Navigation';
import photo from '../image/photo.jpg';

const Main = () => {
  return (
    <div>
      <Navigation />
      <img className="photo" src={photo} />
    </div>
  );
};

export default Main;
