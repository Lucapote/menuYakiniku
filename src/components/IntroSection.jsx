import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function IntroSection() {
  return (
    <section className="mb-14 md:mb-20 text-center max-w-4xl mx-auto pt-6 px-4">
      {/* Decorative accent header line */}
      <div className="flex justify-center items-center mb-6">
        <div className="h-px w-10 md:w-16 bg-tertiary"></div>
        <h2 className="font-label-caps text-xs md:text-sm text-tertiary mx-3 md:mx-4 tracking-[0.35em] md:tracking-[0.4em] uppercase font-bold">
          {RESTAURANT_INFO.tagline}
        </h2>
        <div className="h-px w-10 md:w-16 bg-tertiary"></div>
      </div>

      {/* Philosophy quote */}
      <p className="font-display-lg text-2xl sm:text-3xl md:text-4xl text-on-background italic leading-relaxed md:leading-relaxed font-normal">
        "{RESTAURANT_INFO.introQuote}"
      </p>
    </section>
  );
}
