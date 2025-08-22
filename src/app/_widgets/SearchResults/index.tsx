"use client"
import { useState } from 'react';

import ArticleItemCard from '@/app/_widgets/components/ArticleCard';
import ArticleHorizontalItemCard from '@/app/_widgets/components/ArticleHorizontalCard';
import CardViewSwitcher from '@/app/_widgets/components/CardViewSwitcher';
import Filter from '@/app/_widgets/components/Filter';
import QueryResultsSummary from '@/app/_widgets/components/QueryResultsSummary';
import ResultsPerPage from '@/app/_widgets/components/ResultsPerPage';
import SearchFacets from '@/app/_widgets/components/SearchFacets';
import SearchPagination from '@/app/_widgets/components/SearchPagination';
import SortOrder from '@/app/_widgets/components/SortOrder';
import Spinner from '@/app/_widgets/components/Spinner';
import { GridIcon, ListBulletIcon } from '@radix-ui/react-icons';
import type { SearchResultsInitialState, SearchResultsStoreState } from '@sitecore-search/react';
import { WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';
import HomeHighlighted from '@/app/_widgets/HomeHighlighted';
import { HIGHLIGHTED_ARTICLES_RFKID } from '../../_data/customizations';
import React from 'react';

const SEARCH_CONFIG = {
  source: process.env.NEXT_PUBLIC_SEARCH_SOURCE as string,
};

export type ArticleModel = {
  id: string;
  type?: string;
  title?: string;
  name?: string;
  subtitle?: string;
  url?: string;
  description?: string;
  content_text?: string;
  image_url?: string;
  source_id?: string;
};
type ArticleSearchResultsProps = {
  defaultSortType?: SearchResultsStoreState['sortType'];
  defaultPage?: SearchResultsStoreState['page'];
  defaultItemsPerPage?: SearchResultsStoreState['itemsPerPage'];
  defaultKeyphrase?: SearchResultsStoreState['keyphrase'];
};
type InitialState = SearchResultsInitialState<'itemsPerPage' | 'keyphrase' | 'page' | 'sortType'>;

export const SearchResultsComponent = ({
  defaultSortType = 'featured_desc',
  defaultPage = 1,
  defaultKeyphrase = '',
  defaultItemsPerPage = 10,
}: ArticleSearchResultsProps) => {
  const {
    actions: { onItemClick },
    state: { sortType, page, itemsPerPage },
    queryResult: {
      isLoading,
      isFetching,
      data: {
        total_item: totalItems = 0,
        sort: { choices: sortChoices = [] } = {},
        facet: facets = [],
        content: articles = [],
      } = {},
    },
  } = useSearchResults<ArticleModel, InitialState>({
    state: {
      sortType: defaultSortType,
      page: defaultPage,
      itemsPerPage: defaultItemsPerPage,
      keyphrase: defaultKeyphrase,
    },
    query: (query): any => {
      query
        if (SEARCH_CONFIG.source !== '') {
          const sources = SEARCH_CONFIG.source.split('|');
          sources.forEach(source => {
              query.getRequest().addSource(source.trim());
          });
        }
    },
  });
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const defaultCardView = 'list';
  const [dir, setDir] = useState(defaultCardView);
  const onToggle = (value = defaultCardView) => setDir(value);
  console.log("DEFAULT ", defaultKeyphrase)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner loading />
      </div>
    );
  }
  return (
    <div>
      <div className="flex relative max-w-full px-4 text-black dark:text-gray-100 text-opacity-75">
        {isFetching && (
          <div className="w-full h-full fixed top-0 left-0 bottom-0 right-0 z-30 bg-white dark:bg-gray-800 opacity-50">
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center z-40">
              <Spinner loading />
            </div>
          </div>
        )}
        {totalItems > 0 && (
          <React.Fragment key="1">
            <section className="flex flex-col flex-none relative mt-4 mr-8 w-[25%]">
              <Filter />

              <SearchFacets facets={facets} />
            </section>
            <section className="flex flex-col flex-[4_1_0%]">
              {/* Sort Select */}
              <section className="flex justify-between text-xs">
                {totalItems > 0 && (
                  <QueryResultsSummary
                    currentPage={page}
                    itemsPerPage={itemsPerPage}
                    totalItems={totalItems}
                    totalItemsReturned={articles.length}
                  />
                )}
                <div>
                  <CardViewSwitcher
                    onToggle={onToggle}
                    defaultCardView={defaultCardView}
                    GridIcon={GridIcon}
                    ListIcon={ListBulletIcon}
                  />
                  <SortOrder options={sortChoices} selected={sortType} />
                </div>
              </section>

              {/* Results */}
              {dir === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-5 xl:gap-x-6 gap-y-3 xl:gap-y-4 ">
                  {articles.map((a, index) => (
                    <ArticleItemCard key={a.id} article={a as ArticleModel} index={index} onItemClick={onItemClick} />
                  ))}
                </div>
              ) : (
                <div className="w-full">
                  {articles.map((a, index) => (
                    <ArticleHorizontalItemCard
                      key={a.id}
                      article={a as ArticleModel}
                      index={index}
                      onItemClick={onItemClick}
                      displayText={true}
                    />
                  ))}
                </div>
              )}

              <div className="flex flex-col md:flex-row md:justify-between text-xs">
                <ResultsPerPage defaultItemsPerPage={defaultItemsPerPage} />
                <SearchPagination currentPage={page} totalPages={totalPages} />
              </div>
            </section>
          </React.Fragment>
        )}
        {totalItems <= 0 && !isFetching && (
          // <div className="w-full flex justify-center">
          //   <h3>0 Results</h3>
          // </div>
          <HomeHighlighted rfkId={HIGHLIGHTED_ARTICLES_RFKID} />
        )}
      </div>
    </div>
  );
};
const SearchResultsWidget = widget(SearchResultsComponent, WidgetDataType.SEARCH_RESULTS, 'content');
export default SearchResultsWidget;
