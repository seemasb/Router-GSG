import React from 'react';
import './HomeCard.css';
import line3 from '../images/Line 3.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomeCard(props) {
  const { imgsrc } = props;
  return (
    <div className="HomeCard_container">
      <div className="inner_container">
        <img src={line3} className="line"></img>
        <>
          <div>
            <span className="n1">Luxury redefined</span>
            <p className="n2">
              Our rooms are designed to transport<br></br> you into an
              environment made for leisure.<br></br> Take your mind off the
              day-to-day of home<br></br> life and find a private paradise for
              yourself.
            </p>
            <button className="explore_button">Explore</button>
          </div>
        </>
      </div>
      {/* {data.slice(0, 1).map((d) => {
        // console.log(d);
        // <img src={d.urls.full} className="pic"></img>;
        const mysrc = d.urls.full;
        console.log(mysrc);
        <img src={mysrc} className="pic"></img>;
      })} */}
      {/* {console.log(data[0])} */}
      <img src={imgsrc} className="pic"></img>
    </div>
  );
}

// const cimg1 = data[0].urls.full;
//   const cimg2 = data[0].urls.full;

// useEffect(() => {
//   console.log('im in useeffect');
//   let mount = true;
//   axios
//     .get(
//       `https://api.unsplash.com/photos/?client_id=7PspC5FQx33HfaaiNTPqAjUW1UyjArR1FWG32JG0NLs`
//       // /photos/:id
//     )
//     .then((res) => {
//       console.log(res.data);
//       if (mount) {
//         setData(res.data);
//       }
//     })
//     .catch((err) => {
//       console.dir(err);
//       console.log(err);
//     });

//   return () => {
//     console.log('cleanup');

//     mount = false;
//   };
// }, []);
