import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

// function check() {
//   const one = document.getElementById('home');
//   one.textContent = 'hi';
// }

export default function NavBar() {
  // const [flag, setFlag] = useState('none');

  // useEffect(() => {
  //   if (flag === 'home') {
  //     console.log('jelooooo');
  //   }
  // });

  return (
    <div className="header_container">
      <div className="Nav">
        <ul>
          <li>
            <NavLink
              to="/Home"
              className="naving"
              id="home"
              activeStyle={{
                borderBottom: 'solid 1px #fff',
                fontWeight: 'bold',
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Facilities"
              className="naving"
              id="facilities"
              activeStyle={{
                borderBottom: 'solid 1px #fff',
                fontWeight: 'bold',
              }}
            >
              Facilities
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Rooms"
              className="naving"
              id="rooms"
              activeStyle={{
                borderBottom: 'solid 1px #fff',
                fontWeight: 'bold',
              }}
            >
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Contact"
              className="naving"
              id="contact"
              activeStyle={{
                borderBottom: 'solid 1px #fff',
                fontWeight: 'bold',
              }}
            >
              Contact-us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="yellow">
        <span className="span1">LUXURY</span>
        <br></br>
        <span className="span2">HOTELS</span>
      </div>
      {/* {check()} */}
    </div>
  );
}
