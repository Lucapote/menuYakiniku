import React, { useRef, useEffect } from 'react';
import { MENU_CATEGORIES } from '../data/menuData';

export default function CategoryFilter({ activeCategory, onSelectCategory }) {
  const scrollContainerRef = useRef(null);

  // Auto-scroll the active category button into view on mobile
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeBtn = scrollContainerRef.current.querySelector('[data-active="true"]');
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeCategory]);

  return (
    <nav
      aria-label="Filtro de categorías del menú"
      className="sticky top-[56px] sm:top-[64px] z-30 bg-[#f8f7f5]/95 backdrop-blur-md border-y border-[#e0dad5]/80 py-2.5 sm:py-3 mb-8 sm:mb-10 shadow-xs transition-all duration-300"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        {/* Scrollable Container with touch momentum scrolling */}
        <div
          ref={scrollContainerRef}
          className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 py-0.5 scroll-smooth snap-x snap-mandatory"
        >
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                data-active={isActive}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 snap-center min-h-[40px] px-4 sm:px-5 py-2 text-[11px] sm:text-xs font-label-caps tracking-[0.16em] uppercase rounded-full border transition-all duration-300 active:scale-95 focus:outline-none ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-md font-bold'
                    : 'bg-white text-gray-700 border-[#e0dad5] hover:border-tertiary hover:text-tertiary shadow-2xs'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
          {/* Spacer element so the last button isn't cut off on narrow mobile screens */}
          <div className="shrink-0 w-2 md:hidden" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}
