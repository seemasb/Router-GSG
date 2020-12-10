import React from 'react';
import './RoomCardCont.css';
import Details from '../ViewDetails/Details';
import Dots from '../Dots/Dots';

export default function RoomCard(props) {
  const { img, span, price } = props;
  return (
    <div className="RoomCard">
      <img src={img} className="RoomCard_img"></img>
      <Dots />
      <div className="RoomBlue">{span}</div>
      <Details price={price} />
    </div>
  );
}
