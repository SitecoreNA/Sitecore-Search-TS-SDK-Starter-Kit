"use client"
import { JSX } from 'react';
import { useSearchParams } from 'next/navigation';

import { PAGE_EVENTS_SEARCH } from '@/app/_data/constants';
import withPageTracking from '@/app/_hocs/withPageTracking';
import QuestionsAnswers from '@/app/_widgets/QuestionsAnswers';
import SearchResults from '@/app/_widgets/SearchResults';
import BasicSearch from "@/app/_widgets/BasicSearch"

const Search = (): JSX.Element => {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') || '';

  return (
    <>
      <div className="bg-gray-900 flex justify-center py-20 px-4 bg-cover bg-center bg-[url(/banner-img.jpg)]">
        <div className="w-[800px] text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">Gridwell Search</h1>
          <BasicSearch rfkId="rfkid_6" />
        </div>
      </div>
      <div className="m-auto pt-10 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {query != '' &&
          <div className="mb-6">
            <p className="text-gray-800 text-lg w-full text-left">Showing results for <strong className="text-teal-600 text-700">{`"${query}"`}</strong></p>
          </div>}
          <QuestionsAnswers
            key={`${query}-questions`}
            rfkId="rfkid_qa"
            defaultKeyphrase={query}
            defaultRelatedQuestions={3}
          />
          <SearchResults key={`${query}-search`} rfkId="rfkid_7" defaultKeyphrase={query} />
        </div>
      </div>
    </>

  );
};

export default withPageTracking(Search, PAGE_EVENTS_SEARCH);
