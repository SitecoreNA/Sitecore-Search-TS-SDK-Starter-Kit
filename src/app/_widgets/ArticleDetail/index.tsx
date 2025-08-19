import { JSX } from 'react';

import { DEFAULT_IMAGE } from '@/app/_data/constants';
import type { ArticleModel } from '@/app/_widgets/SearchResults';
import type { SearchResultsInitialState } from '@sitecore-search/react';
import { FilterEqual, WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';
import Image from 'next/image';

const SEARCH_CONFIG = {
  source: process.env.NEXT_PUBLIC_SEARCH_SOURCE as string,
};

type ArticleDetailProps = {
  id?: string;
};

type InitialState = SearchResultsInitialState<'itemsPerPage'>;

export const ArticleDetailComponent = ({ id }: ArticleDetailProps): JSX.Element => {
  const {
    queryResult: { data: { content: articles = [] } = {} },
  } = useSearchResults<ArticleModel, InitialState>({
    query: (query) => {
      const equalFilter = new FilterEqual('id', id);
      query.getRequest().setSearchFilter(equalFilter);

      if (SEARCH_CONFIG.source !== '') {
        const sources = SEARCH_CONFIG.source.split('|');
        sources.forEach(source => {
            query.getRequest().addSource(source.trim());
        });
      }
    },
    state: {
      itemsPerPage: 1,
    },
  });
  let mainArticle: ArticleModel = { id: '', title: '' };
  if (articles.length > 0) {
    mainArticle = articles[0];
  }

  if (mainArticle.type == "Blog") {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{mainArticle.name}</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="font-medium"></span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-4 w-4" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg><span>2025-08-14T00:00:00Z</span></div><div className="flex items-center space-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock h-4 w-4" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span></span>
                </div>
              </div>
              <div className="flex items-center justify-between border-y py-4">
                <div className="flex items-center space-x-4">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart mr-2 h-4 w-4" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>17 Likes</button><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 lucide-share-2 mr-2 h-4 w-4" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>4 Shares</button></div><div className="flex items-center space-x-2"><span className="text-sm text-gray-500">Share:</span><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook h-4 w-4" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></button><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter h-4 w-4" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin h-4 w-4" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-8">
              {mainArticle.image_url && <Image height="500" width="1200" className="w-full h-64 md:h-96 object-cover rounded-lg" src={mainArticle.image_url || DEFAULT_IMAGE} alt="alt text" />}
            </div>
            <div className="max-w-none mb-12">
              {mainArticle.description}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
        <div className="max-w-[1280px] m-auto pt-10">
          <div className="items-center flex justify-between">
            <div className="max-w-[50%] min-h-[300px] flex items-center flex-col">
              <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100 w-full mb-3 mt-4">{mainArticle.name}</h1>
              <div className="text-left text-md text-gray-700 dark:text-gray-100">{mainArticle?.subtitle}</div>
              <div className="text-left leading-tight text-base text-gray-700 dark:text-gray-100">{mainArticle?.description}</div>
            </div>
            <div className="max-w-[50%] min-h-[300px] flex items-center">
               {mainArticle.image_url && <Image height="500" width="1200" className="w-full h-64 md:h-96 object-cover rounded-lg" src={mainArticle.image_url || DEFAULT_IMAGE} alt="alt text" />}
            </div>
          </div>
        </div>
      );
  }

};

const ArticleDetailWidget = widget(ArticleDetailComponent, WidgetDataType.SEARCH_RESULTS, 'content');

export default ArticleDetailWidget;