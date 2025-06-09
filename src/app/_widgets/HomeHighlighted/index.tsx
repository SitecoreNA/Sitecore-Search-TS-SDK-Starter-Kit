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

      if (SEARCH_CONFIG.source != '') {
        query.getRequest().addSource(SEARCH_CONFIG.source);
      }
    },
  });
  const articlesToShow = articles.slice(0, 4);
  return (
    <>
    <p className="w-full flex justify-around text-gray-900 dark:text-gray-200 my-10 text-2xl">Highlighted Articles</p>
    <div className="w-full flex justify-around text-gray-900 dark:text-gray-200 my-10">
      
      <div className="grid grid-cols-4 gap-x-5 gap-y-3 w-[80%]">
        {articlesToShow.map((a, index) => (
          <ArticleCard article={a} key={index} index={index} onItemClick={onItemClick} />
        ))}
      </div>
    </div>
    </>
  );
};

export default widget(HomeHighlightedComponent, WidgetDataType.SEARCH_RESULTS, 'content');