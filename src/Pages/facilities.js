import React from 'react';
import Hero from '../Components/HeroSection/Hero';
import Beginning from '../Components/Begining/Begin';
import FacilitiesImg from '../Components/FacilitiesImg/Fimg';
import Testimonials from '../Components/Testimonials/Testi';
import Footer from '../Components/Footer/footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Facilities() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log('im in useeffect');
    let mount = true;
    axios
      .get(`https://dog.ceo/api/breed/samoyed/images`)
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
      <Beginning title="Facilities" />
      <FacilitiesImg imgSrc={data[25]} ImgTitle="the gym" />
      <FacilitiesImg imgSrc={data[21]} ImgTitle="poolside bar" />
      <FacilitiesImg imgSrc={data[33]} ImgTitle="the spa" />
      <FacilitiesImg imgSrc={data[35]} ImgTitle="swimming pool" />
      <FacilitiesImg imgSrc={data[47]} ImgTitle="restaurant" />
      <FacilitiesImg imgSrc={data[86]} ImgTitle="laundry" />
      <Testimonials />
      <Footer />
    </>
  );
}
