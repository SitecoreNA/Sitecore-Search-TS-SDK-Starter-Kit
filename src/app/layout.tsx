"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header';
 import { LanguageContext } from '@/app/contexts/languageContext';
 import useLanguage from '@/app/hooks/useLanguage';
import ArticleDetail from '@/app/pages/ArticleDetail';
import Home from '@/app/pages/Home';
import ScrollToTop from '@/app/components/ScrollToTop';
import Search from '@/app/pages/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SEOWidget, WidgetsProvider } from '@sitecore-search/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SEARCH_CONFIG = {
  env: process.env.NEXT_PUBLIC_SEARCH_ENV as any,
  customerKey: process.env.NEXT_PUBLIC_SEARCH_CUSTOMER_KEY,
  apiKey: process.env.NEXT_PUBLIC_SEARCH_API_KEY,
};

export default function RootLayout() {
  const { language, setLanguage } = useLanguage();
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sitecore Search Sandbox</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <BrowserRouter>
            <ScrollToTop />
            <div className="bg-white dark:bg-gray-700">
              <WidgetsProvider 
                env={SEARCH_CONFIG.env}
                customerKey={SEARCH_CONFIG.customerKey}
                apiKey={SEARCH_CONFIG.apiKey}
                publicSuffix={true}
              >
                <SEOWidget rfkId={'demo_search_seo'} />
                <Header />
                <main className="w-full m-auto pt-[100px] min-h-[700px] bg-white dark:bg-gray-700">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/detail/:id" element={<ArticleDetail />}></Route>
                  </Routes>
                </main>
                <Footer />
              </WidgetsProvider>
            </div>
          </BrowserRouter>
        </LanguageContext.Provider>
      </body>
    </html>
  );
}
