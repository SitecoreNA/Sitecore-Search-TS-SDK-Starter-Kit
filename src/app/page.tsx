"use client"

import { JSX } from 'react'
import { PAGE_EVENTS_HOME } from '@/app/_data/constants';
import { HIGHLIGHTED_ARTICLES_RFKID } from './_data/customizations';
import withPageTracking from '@/app/_hocs/withPageTracking';
import HomeHighlighted from '@/app/_widgets/HomeHighlighted';
// import QuestionsAnswers from '@/app/_widgets/QuestionsAnswers'
import HomepageBanner from "@/app/_components/HomepageBanner"
import LiveGridConditions from "@/app/_components/LiveGridConditions"
import QuickActions from "@/app/_components/QuickActions"
import EngergyTips from "@/app/_components/EnergyTips"
// import { HTMBlockWidget } from '@sitecore-search/react';

const Home = (): JSX.Element => {
  return (
    <>
      <HomepageBanner />
      <LiveGridConditions />
      <QuickActions />
      <EngergyTips />
      {/* <HomeHighlighted rfkId={HIGHLIGHTED_ARTICLES_RFKID} /> */}
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
