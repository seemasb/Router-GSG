import React from 'react';
import './Details.css';
import { GoPlus } from 'react-icons/go';
export default function Details(props) {
  const { price } = props;
  return (
    <div className="DetailsContainer">
      <button className="b1">
        <GoPlus color="white" size={14} className="GoPlus" />
      </button>
      <span>VIEW ROOM DETAILS</span>
      <button className="b2">${price} &nbsp; &nbsp; Avg/height</button>
    </div>
  );
}
