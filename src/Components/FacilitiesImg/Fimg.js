import React from 'react';
import './Fimg.css';

export default function FacilitiesImg(props) {
  const { imgSrc, ImgTitle } = props;
  return (
    <div className="Fimg_container">
      <img src={imgSrc} className="F-img"></img>
      <div className="white_div">
        <span className="caption">{ImgTitle}</span>
      </div>
    </div>
  );
}
