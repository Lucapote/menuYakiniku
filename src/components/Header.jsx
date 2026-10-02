import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Header() {
  const location = useLocation();
  const isMatcha = location.pathname.startsWith('/matcha');

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#f8f7f5]/95 backdrop-blur-md border-b border-[#e0dad5]/60 px-4 md:px-16 py-3 flex justify-between items-center max-w-screen-2xl mx-auto transition-all duration-300">
      {/* Restaurant Logo */}
      <Link to="/" className="flex items-center gap-2 group py-0.5">
        <img
          src={RESTAURANT_INFO.img}
          alt={`${RESTAURANT_INFO.name} Logo`}
          className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Switcher tabs for Yakiniku and Matcha Bar */}
      <div className="flex items-center gap-1.5 bg-[#eae5df] p-1 rounded-full text-xs sm:text-sm font-semibold shadow-inner">
        <Link
          to="/yakiniku"
          className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
            !isMatcha
              ? 'bg-tertiary text-white shadow-md'
              : 'text-[#5a524c] hover:text-black'
          }`}
        >
          Yakiniku
        </Link>
        <Link
          to="/matcha"
          className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
            isMatcha
              ? 'bg-[#e3391f] text-white shadow-md'
              : 'text-[#5a524c] hover:text-black'
          }`}
        >
          Matcha Bar
        </Link>
      </div>
    </header>
  );
}


