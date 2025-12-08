import React from 'react';
import ConnectBanner from '../../components/LemiciHomeComponents/Connect/ConnectBanner';
import AboutSection from '../../components/LemiciHomeComponents/Connect/AboutSection';
import Careers from '../../components/LemiciHomeComponents/Connect/Careers';
import Contactus from '../../components/LemiciHomeComponents/Connect/ContactUs';
import Footer from '../../components/LemiciHomeComponents/Connect/Footer';

function Connect() {
  return (
    <>
      <ConnectBanner />
      <AboutSection />
      <Careers />
      <Contactus />
      <Footer />
    </>
  )
}

export default Connect;