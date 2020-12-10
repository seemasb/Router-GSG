import React from 'react';
import './Home.css';
import Hero from '../Components/HeroSection/Hero';
import HomeCard from '../Components/HomeCard/HomeCard';
import Testimonials from '../Components/Testimonials/Testi';
import Footer from '../Components/Footer/footer';
import { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import axios from 'axios';
// import b1 from '../images/b1.jpeg';

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log('im in useeffect');
    let mount = true;
    axios
      .get(`https://dog.ceo/api/breed/germanshepherd/images`)
      .then((res) => {
        // console.log(res.data.message);
        if (mount) {
          setData(res.data.message);
          // console.log(data);
        }
      })
      .catch((err) => {
        console.dir(err);
        console.log(err);
      });

    return () => {
      console.log('cleanup');

      mount = false;
    };
  }, []);

  return (
    <>
      <Hero />
      <span className="home_span">
        All our room types are including complementary breakfast
      </span>
      <div className="cards">
        <HomeCard imgsrc={data[1]} />
        <HomeCard imgsrc={data[30]} />
        {/* <HomeCard /0
        <HomeCard /> */}
      </div>
      <Testimonials />
      <Footer />
    </>
  );
}

// const [data, setData] = useState([]);
// useEffect(() => {
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
//     mount = false;
//   };
// }, []);

// const mydata = [...data];

// const cimg1 = data[0].urls.full;
// const cimg2 = data[0].urls.full;

// --------------------------------------------dogs api---------------------------------
