"use client"

import { JSX } from 'react'
import { PAGE_EVENTS_HOME } from '@/app/_data/constants';
import { HIGHLIGHTED_ARTICLES_RFKID } from './_data/customizations';
import withPageTracking from '@/app/_hocs/withPageTracking';
import HomeHighlighted from '@/app/_widgets/HomeHighlighted';
// import QuestionsAnswers from '@/app/_widgets/QuestionsAnswers'
import HomepageBanner from "@/app/_components/HomepageBanner"
import WhyChooseSkywings from "@/app/_components/WhyChooseSkywings"
import InFlightExperience from "@/app/_components/InFlightExperience"
import OurFleet from "@/app/_components/OurFleet"
import PopularDestinations from "@/app/_components/PopularDestinations"
// import { HTMBlockWidget } from '@sitecore-search/react';

const Home = (): JSX.Element => {
  return (
    <>
      {/* <HTMBlockWidget rfkId={HOME_HERO_RFKID} /> */}
      <HomepageBanner />
      <PopularDestinations />
      <WhyChooseSkywings />
      <InFlightExperience />
      <OurFleet />
      <HomeHighlighted rfkId={HIGHLIGHTED_ARTICLES_RFKID} />
      {/* <div className="mx-auto w-[80%]">
        <QuestionsAnswers
            rfkId="rfkid_qa"
            defaultKeyphrase={DEFAULT_QUESTION}
            defaultRelatedQuestions={2}
          />
      </div> */}
      </>
  );
}

export default withPageTracking(Home, PAGE_EVENTS_HOME);
