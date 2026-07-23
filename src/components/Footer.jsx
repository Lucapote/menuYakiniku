import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Footer() {
  return (
    <footer id="footer" className="w-full py-12 mt-auto bg-sumi-charcoal text-white border-t border-white/10 flex justify-center items-center">
      <div className="flex justify-center items-center">
        <img
          src={RESTAURANT_INFO.logoUrl}
          alt={`${RESTAURANT_INFO.name} Logo`}
          className="h-10 sm:h-12 w-auto object-contain invert brightness-0 opacity-90 transition-opacity hover:opacity-100"
        />
      </div>
    </footer>
  );
}
