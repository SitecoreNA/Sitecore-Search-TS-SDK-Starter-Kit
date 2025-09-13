"use client"

import { JSX } from 'react';
import Logo from '@/app/_components/Logo';
import PreviewSearch from '@/app/_widgets/PreviewSearch';
import Link from 'next/link';
import { useState } from "react"


const Header = (): JSX.Element => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="sticky z-10 top-0 left-0">
      <header className="bg-white border-b border-gray-200 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/" tabIndex={1} className="flex items-center space-x-2">
                <Logo />
                <span className="text-2xl font-bold text-blue-600">SkyWings</span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a className="text-gray-700 hover:text-blue-600 font-medium" href="#">Book</a>
              <a className="text-gray-700 hover:text-blue-600 font-medium" href="#">Check In</a>
              <a className="text-gray-700 hover:text-blue-600 font-medium" href="#">My Trips</a>
              <a className="text-gray-700 hover:text-blue-600 font-medium" href="#">Flight Status</a>
              <a className="text-gray-700 hover:text-blue-600 font-medium" href="#">Destinations</a>
              <a className="text-gray-700 hover:text-blue-600 font-medium" href="#">Blogs</a>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <button href="#" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">Sign In</button>
              <button href="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                Join SkyWings
              </button>
            </div>
          </div>
        </div>
      </header>

      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center gap-2">
              <PreviewSearch rfkId="rfkid_6" isOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />

              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-3 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header;