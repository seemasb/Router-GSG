import React from 'react';
import './Book.css';
import { FaCalendarCheck } from 'react-icons/fa';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

export default function Book() {
  return (
    <div className="book_container">
      <button className="book_button">
        <FaCalendarCheck color="white" className="book_icon" size={16} />
        BOOK NOW
      </button>

      <span className="book_span">Scroll</span>
      <button className="scroll_button">
        <IoIosArrowDropdownCircle color="white" size={33} />
      </button>
    </div>
  );
}
