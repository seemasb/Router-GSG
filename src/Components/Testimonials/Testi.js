import React from 'react';
import './Testi.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

export default function Testimonials() {
  return (
    <div className="Testi_container">
      <span className="span11">Testimonials</span>
      <br></br>
      <span className="span22">
        "Calm, Serene, Retro – What a way to relax and enjoy"
      </span>
      <br></br>
      <span className="span33"> Mr. and Mrs. Baxter, UK</span>
      <br></br>

      <div className="buttons">
        <button>
          <MdKeyboardArrowLeft color="white" size={20} className="arrow" />
        </button>
        <button>
          <MdKeyboardArrowRight color="white" size={20} className="arrow" />
        </button>
      </div>
    </div>
  );
}
