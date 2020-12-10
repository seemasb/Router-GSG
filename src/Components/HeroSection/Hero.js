import React from 'react';
import './Hero.css';
import Title from '../Title/title';
import Book from '../BookButton/Book';
import bg2e from '../images/bg2e.jpg';

export default function HeroSection() {
  return (
    <div className="hero_section">
      <Title />
      <Book />
      <img src={bg2e}></img>
      <div className="mytest"> </div>
    </div>
  );
}
