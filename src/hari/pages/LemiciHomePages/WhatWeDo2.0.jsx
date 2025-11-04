import React from 'react';
import Navbar from '../../components/LemiciHomeComponents/WhatWeDo2.0Components/Navbar';
import CardSection from '../../components/LemiciHomeComponents/WhatWeDo2.0Components/Cards';
import WhoWeServe from '../../components/LemiciHomeComponents/WhatWeDo2.0Components/WhoWeServe';
import BusinessSolution from '../../components/LemiciHomeComponents/WhatWeDo2.0Components/BusinessSolution';
import Footer from '../../components/LemiciHomeComponents/WhatWeDo2.0Components/Footer';

function WhatWeDo() {
  return (
    <>
      {/* <Navbar /> */}
      <CardSection />
      <WhoWeServe />
      <BusinessSolution />
      <Footer />
    </>
  )
}

export default WhatWeDo;