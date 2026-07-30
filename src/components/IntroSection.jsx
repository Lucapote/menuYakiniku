import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';
import preparationVideo from '../assets/7.1.mp4';

export default function IntroSection() {
  return (
    <section className="mb-10 sm:mb-14 md:mb-16 text-center max-w-4xl mx-auto pt-4 px-4 flex flex-col items-center">
      {/* Decorative accent header line */}
      <div className="flex justify-center items-center mb-6">
        <div className="h-px w-10 md:w-16 bg-tertiary"></div>
        <h2 className="font-label-caps text-xs md:text-sm text-tertiary mx-3 md:mx-4 tracking-[0.35em] md:tracking-[0.4em] uppercase font-bold">
          {RESTAURANT_INFO.tagline}
        </h2>
        <div className="h-px w-10 md:w-16 bg-tertiary"></div>
      </div>

      {/* Philosophy quote */}
      <div className="bg-white border border-tertiary/30 rounded-2xl p-6 sm:p-8 shadow-xs mb-8 w-full max-w-3xl transition-all duration-300 hover:border-tertiary/50">
        <p className="font-display-lg text-xl sm:text-2xl md:text-3xl text-on-background italic leading-relaxed font-normal">
          "{RESTAURANT_INFO.introQuote}"
        </p>
      </div>

      {/* Preparation Demonstration Video (Instagram 9:16 vertical ratio) */}
      <div className="w-full max-w-[260px] sm:max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-[#e0dad5]/80 bg-black">
        <video
          src={preparationVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

