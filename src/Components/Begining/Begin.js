import React from 'react';
import './Begin.css';

export default function Begining(props) {
  const { title, paragraph } = props;
  return (
    <div className="Begin_container">
      <span>{title}</span>
      <p>
        We want your stay at our lush hotel to be truly unforgettable. That is
        why we give special attention to all of your needs so <br></br>that we
        can ensure an experience quite unique. Luxury hotels offers the perfect
        setting with stunning views for leisure<br></br> and our modern luxury
        resort facilities will help you enjoy the best of all.
      </p>
    </div>
  );
}
