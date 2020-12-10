import React from 'react';
import './contact.css';
import ContactH from '../Components/ContactHero/ContactH';
import Beginning from '../Components/Begining/Begin';
import Form from '../Components/ContactForm/form';
import Footer from '../Components/Footer/footer';
import Address from '../Components/Address/Address';
export default function Contact() {
  return (
    <>
      <ContactH />
      <div className="contactTitle">
        <span>WE ARE HERE FOR YOU</span>
        <p>
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, compaints or requests, please forward <br></br>it to our
          support desk and we will get back to you as soon as possible.
        </p>
      </div>

      <div className="NoName">
        <Address />
        <Form />
      </div>
      <Footer />
    </>
  );
}
