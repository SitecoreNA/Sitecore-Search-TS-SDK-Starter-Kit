"use client"

import { JSX } from 'react'
import { PAGE_EVENTS_HOME } from '@/app/_data/constants';
import { HOME_HERO_RFKID, HIGHLIGHTED_ARTICLES_RFKID, DEFAULT_QUESTION } from './_data/customizations';
import withPageTracking from '@/app/_hocs/withPageTracking';
import HomeHighlighted from '@/app/_widgets/HomeHighlighted';
import QuestionsAnswers from '@/app/_widgets/QuestionsAnswers'
import { HTMBlockWidget } from '@sitecore-search/react';

const Home = (): JSX.Element => {
  return (
    <>
      <img src="https://streams1.perfectgame.org/images/Promotions/BotB-26_website-ROS%20banner.png" alt="Perfect Game Banner"/>
      <HomeHighlighted rfkId={HIGHLIGHTED_ARTICLES_RFKID} />
      </>
  );
}

export default withPageTracking(Home, PAGE_EVENTS_HOME);
