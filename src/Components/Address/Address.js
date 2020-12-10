import React from 'react';
import './Address.css';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
export default function Address() {
  return (
    <div className="AddressCont">
      <p>
        497 Evergreen Rd. Roseville,<br></br>
        CA 95673
      </p>
      <span>
        View map <HiOutlineArrowNarrowRight size={45} className="arrow2" />
      </span>

      <p>
        Phone: +44 345 678 903<br></br>
        Email: luxury_hotels@gmail.com
      </p>
    </div>
  );
}
