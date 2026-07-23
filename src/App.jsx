import React, { useState } from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import CategoryFilter from './components/CategoryFilter';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import { MENU_DATA } from './data/menuData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('todos');

  // Filter sections based on selected category pill
  const filteredSections = activeCategory === 'todos'
    ? MENU_DATA
    : MENU_DATA.filter((section) => section.id === activeCategory);

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId !== 'todos') {
      const el = document.getElementById(categoryId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md flex flex-col selection:bg-tertiary selection:text-white">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main id="menu-content" className="flex-1 pt-20 sm:pt-24 md:pt-28 pb-12 md:pb-16 max-w-screen-xl mx-auto px-4 md:px-12 w-full">
        {/* Intro Tagline & Quote */}
        <IntroSection />

        {/* Category Sticky Navigation Filter */}
        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Recuadro Rojo de Acompañamientos */}
        <div className="mb-12 sm:mb-16 bg-tertiary text-white p-5 sm:p-6 md:p-8 rounded-2xl text-center shadow-lg transition-all duration-300">
          <p className="font-body-md text-base sm:text-lg md:text-xl italic leading-relaxed font-medium">
            Todos los cortes se acompañan de verduras que también puedes asar y la tradicional salsa de yakiniku que nos caracteriza.
          </p>
        </div>

        {/* Render Menu Sections */}
        <div className="space-y-14 md:space-y-20">
          {filteredSections.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
