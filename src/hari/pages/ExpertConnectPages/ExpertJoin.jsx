import React from 'react';
import Banner from '../../components/ExpertConnectComponents/ExpertJoinComponents/Banner';
import Features from '../../components/ExpertConnectComponents/ExpertJoinComponents/Features';
import OpportunitySection from '../../components/ExpertConnectComponents/ExpertJoinComponents/OpportunitySection';
import ConnectSection from '../../components/ExpertConnectComponents/ExpertJoinComponents/ConnectSection';
import CommunityAndEvents from '../../components/ExpertConnectComponents/ExpertJoinComponents/CommunityAndEvents';
import FooterSection from '../../components/ExpertConnectComponents/ExpertJoinComponents/FooterSection';

function ExpertJoin() {
  return (
    <>
      <Banner />
      <Features /> 
      <OpportunitySection />
      <ConnectSection />
      <CommunityAndEvents />     
      <FooterSection />
    </>
  )
}

export default ExpertJoin;