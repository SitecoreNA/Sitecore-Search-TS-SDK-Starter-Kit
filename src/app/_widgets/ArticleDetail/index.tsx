import { JSX } from 'react';
import { useState, useEffect } from "react"
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

  const [standardPrice, setStandardPrice] = useState(0)
  const [deluxePrice, setDeluxePrice] = useState(0)

  useEffect(() => {
    const randomPrice = Math.floor(Math.random() * (500 - 200 + 1)) + 200
    setStandardPrice(randomPrice)
    setDeluxePrice(randomPrice + 150)
  }, [])

  if (mainArticle.type == "Blog" || mainArticle.type == "News" || mainArticle.type == "article") {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [&]:hover:bg-accent [&]:hover:text-accent-foreground bg-orange-100 text-orange-800 border-orange-200">Notifications</span>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-4 w-4" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                    Sun, September 21, 2025
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user h-4 w-4" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <span>Maria Rodriguez</span>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-foreground text-balance">{mainArticle.name}</h1>
              <div className="flex items-center space-x-4 mb-8">
                <button data-slot="button" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all  disabled:opacity-50 [&_svg]:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[<svg]:px-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2 lucide-share-2 h-4 w-4 mr-2" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                  Share
                </button>
                <button data-slot="button" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:opacity-50 [&_svg]:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[<svg]:px-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark h-4 w-4 mr-2" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>Save</button>
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

        <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">

            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{mainArticle.name?.replace('| SkyWings Vacations 2025', '')}</h1>
            </div>

            {/* Description */}
            <section className="mb-12">
              <div className="prose prose-lg text-gray-700">
                {mainArticle.description}
              </div>
            </section>

            {/* Key Highlights */}
            <section className="mb-12">
              {/* Best Time to Visit */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Time to Visit</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-blue-600">Spring (April-June)</span>
                  <p className="text-sm text-gray-600">Mild weather, blooming gardens</p>
                </div>
                <div>
                  <span className="font-medium text-blue-600">Fall (September-November)</span>
                  <p className="text-sm text-gray-600">Pleasant temperatures, fewer crowds</p>
                </div>
              </div>
            </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Your Flight</h3>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Search Flights today!
              </button>
            </div>
          </div>
        </div>
      </div>
      );
  }

};

const ArticleDetailWidget = widget(ArticleDetailComponent, WidgetDataType.SEARCH_RESULTS, 'content');

export default ArticleDetailWidget;