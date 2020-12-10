import React from 'react';
import Hero from '../Components/HeroSection/Hero';
import Beginning from '../Components/Begining/Begin';
import RoomCard from '../Components/RoomCardContainer/RoomCardCont';
import Testimonials from '../Components/Testimonials/Testi';
import Footer from '../Components/Footer/footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Rooms() {
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
      <Beginning title="Rooms and rates" />
      <RoomCard img={data[46]} span="single room" price={147} />
      <RoomCard img={data[30]} span="double room" price={155} />
      <RoomCard img={data[27]} span="twin room" price={155} />
      <Testimonials />
      <Footer />
    </>
  );
}
