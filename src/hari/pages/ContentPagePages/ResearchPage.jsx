import React from 'react';
import Navbar from "../../components/ContentPageComponents/ResearchPageComponents/Navbar";
import Research from "../../components/ContentPageComponents/ResearchPageComponents/Research";
import ResearchHighlight from "../../components/ContentPageComponents/ResearchPageComponents/ResearchHighlight";
import Methods101 from "../../components/ContentPageComponents/ResearchPageComponents/Methods101";
import ResearchSection from "../../components/ContentPageComponents/ResearchPageComponents/ResearchSection";
import Footer from "../../components/ContentPageComponents/ResearchPageComponents/Footer";

function ResearchPage() {
  return (
    <>
      <Navbar /> 
      <Research />
      <ResearchHighlight />
      <Methods101 />
      <ResearchSection />
      <Footer />
    </>
  )
}

export default ResearchPage;
