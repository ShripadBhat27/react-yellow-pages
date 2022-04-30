import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Welcome to Yellow Pages</h1>
      <p>Indian Website for listing Local Buisness</p>
    </div>
  );
}

export default HeroSection;
