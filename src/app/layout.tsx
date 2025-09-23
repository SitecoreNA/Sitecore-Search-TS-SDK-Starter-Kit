"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header';
import DataBar from '@/app/_components/DataBar';
 import { LanguageContext } from '@/app/_contexts/languageContext';
 import useLanguage from '@/app/_hooks/useLanguage';
import { SEOWidget, WidgetsProvider } from '@sitecore-search/react';
import { useEffect } from "react";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { language, setLanguage } = useLanguage();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gridwell | Search </title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {/* <DataBar /> */}
            <div className="bg-white dark:bg-gray-700">
              <WidgetsProvider 
                env={SEARCH_CONFIG.env}
                customerKey={SEARCH_CONFIG.customerKey}
                apiKey={SEARCH_CONFIG.apiKey}
                publicSuffix={true}
              >
                <SEOWidget rfkId={'demo_search_seo'} />
                <Header />
                <main className="">
                  {children}
                </main>
                <Footer />
              </WidgetsProvider>
            </div>
        </LanguageContext.Provider>
      </body>
    </html>
  );
}
