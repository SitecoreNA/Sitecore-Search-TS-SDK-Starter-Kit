"use client"
import { JSX } from 'react';
import { HIGHLIGHTED_ARTICLES_CONTENT_TYPE } from '@/app/_data/customizations';
import ArticleCard from '@/app/_widgets/components/ArticleCard';
import { FilterEqual, WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';

const SEARCH_CONFIG = {
  source: process.env.NEXT_PUBLIC_SEARCH_SOURCE as string,
};

export const HomeHighlightedComponent = (): JSX.Element => {
  const {
    actions: { onItemClick },
    queryResult: { data: { content: articles = [] } = {} },
  } = useSearchResults({
    query: (query) => {
      query.getRequest().setSearchFilter(new FilterEqual('type', HIGHLIGHTED_ARTICLES_CONTENT_TYPE));

      if (SEARCH_CONFIG.source !== '') {
        const sources = SEARCH_CONFIG.source.split('|');
        sources.forEach(source => {
            query.getRequest().addSource(source.trim());
        });
      }
    },
  });
  const articlesToShow = articles.slice(0, 4);
  return (
    <>
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Inspired</h2>
        <p className="text-xl text-gray-600">Discover amazing destinations and travel tips from our latest stories</p>
      </div>
      <div className="w-full flex justify-around text-gray-900 dark:text-gray-200 my-10">
        <div className="grid grid-cols-4 gap-x-5 gap-y-3">
          {articlesToShow.map((a, index) => (
            <ArticleCard article={a} key={index} index={index} onItemClick={onItemClick} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default widget(HomeHighlightedComponent, WidgetDataType.SEARCH_RESULTS, 'content');
