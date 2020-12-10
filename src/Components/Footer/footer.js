import React from 'react';
import './footer.css';
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoTwitter } from 'react-icons/io';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className="triangle"></div>
      <div className="blue_div">
        <div className="inner_div">
          <div className="p1">
            <span className="f1">LUXURY</span>
            <span className="f2">HOTELS</span>
            <span>
              <p className="f3">
                497 Evergreen Rd. Roseville, CA 95673<br></br> +44 345 678 903
                <br></br>
                luxury_hotels@gmail.com
              </p>
            </span>
          </div>

          <p className="p2">
            About Us<br></br>
            Contact<br></br>
            Terms & Conditions<br></br>
          </p>

          <div className="socialIcons">
            <GrFacebookOption color="white" size={13} />
            <IoLogoTwitter color="white" size={13} />
            <FaInstagram color="white" size={13} />
          </div>

          <p className="p3">
            Facebook<br></br>
            Twitter<br></br>
            Instagram<br></br>
          </p>

          <div className="email">
            <span id="subs">Subscribe to our newsletter</span>
            <div id="search_div">
              <input type="text" placeholder="Email Address"></input>
              <button>Ok</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
