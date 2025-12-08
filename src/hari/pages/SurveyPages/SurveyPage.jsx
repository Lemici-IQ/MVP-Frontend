import React from 'react';
import AISurvey from '../../components/SurveyComponents/AISurvey';
import ExpertSurvey from '../../components/SurveyComponents/ExpertSurvey';
import Audience from '../../components/SurveyComponents/Audience';
import Action from '../../components/SurveyComponents/Action';
import Tools from '../../components/SurveyComponents/Tools';
import ChallengeSection from '../../components/SurveyComponents/ChallengeSection';
import EasyToGetGoing from '../../components/SurveyComponents/EasyToGetGoing';
import NPSBanner from '../../components/SurveyComponents/NPSBanner';
import PlansSection from '../../components/SurveyComponents/PlansSection';
import FooterSection from '../../components/SurveyComponents/FooterSection';

function Survey() {
  return (
    <>
        <AISurvey />
        <ExpertSurvey />
        <Audience />
        <Action />
        <Tools />
        <ChallengeSection />
        <EasyToGetGoing />
        <NPSBanner />
        <PlansSection />
        <FooterSection />
    </>)
}

export default Survey;