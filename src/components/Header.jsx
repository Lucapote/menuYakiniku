import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#f8f7f5]/95 backdrop-blur-md border-b border-[#e0dad5]/60 px-4 md:px-16 py-3.5 flex justify-center items-center max-w-screen-2xl mx-auto transition-all duration-300">
      {/* Centered Restaurant Logo */}
      <a href="#" className="flex items-center gap-2 group py-0.5">
        <img
          src={RESTAURANT_INFO.logoUrl}
          alt={`${RESTAURANT_INFO.name} Logo`}
          className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </a>
    </header>
  );
}
