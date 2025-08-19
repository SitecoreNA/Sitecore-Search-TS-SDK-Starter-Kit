"use client"
import { JSX } from 'react';
import { useSearchParams } from 'next/navigation';

import { PAGE_EVENTS_SEARCH } from '@/app/_data/constants';
import withPageTracking from '@/app/_hocs/withPageTracking';
import QuestionsAnswers from '@/app/_widgets/QuestionsAnswers';
import SearchResults from '@/app/_widgets/SearchResults';

const Search = (): JSX.Element => {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') || '';

  return (
    <div className="m-auto pt-30 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-800 text-lg w-full text-left">Showing results for <strong className="text-blue-700 text-700">{`"${query}"`}</strong></p>
        </div>
        <QuestionsAnswers
          key={`${query}-questions`}
          rfkId="rfkid_qa"
          defaultKeyphrase={query}
          defaultRelatedQuestions={4}
        />
        <SearchResults key={`${query}-search`} rfkId="rfkid_7" defaultKeyphrase={query} />
      </div>
    </div>
  );
};

export default withPageTracking(Search, PAGE_EVENTS_SEARCH);
