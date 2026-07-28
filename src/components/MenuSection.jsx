import React, { useState } from 'react';
import MenuItem from './MenuItem';

function ImageCarousel({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageList = Array.isArray(images) ? images : [images].filter(Boolean);

  if (imageList.length === 0) return null;

  if (imageList.length === 1) {
    return (
      <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl group border border-[#e0dad5]/60">
        <img
          src={imageList[0]}
          alt={alt}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-3">
      {/* Main Image Stage */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl group border border-[#e0dad5]/60 bg-black/5">
        {imageList.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${alt} ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
              idx === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
            }`}
            loading="lazy"
          />
        ))}

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Imagen anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-tertiary text-white flex items-center justify-center backdrop-blur-xs transition-all opacity-85 hover:opacity-100 cursor-pointer shadow-md"
        >
          <span className="material-symbols-outlined text-xl">chevron_left</span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Siguiente imagen"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-tertiary text-white flex items-center justify-center backdrop-blur-xs transition-all opacity-85 hover:opacity-100 cursor-pointer shadow-md"
        >
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>

        {/* Counter Badge */}
        <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md text-white text-[10px] font-label-caps px-2.5 py-1 rounded-full border border-white/20">
          {currentIndex + 1} / {imageList.length}
        </div>
      </div>

      {/* Thumbnails grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {imageList.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? 'border-tertiary shadow-md ring-2 ring-tertiary/20'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt={`${alt} vista previa ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function MenuSection({ section }) {
  const { title, tagline, image, images, imageAlt, imagePosition, items, isSpecialLayout } = section;
  const sectionImages = images || (image ? [image] : []);

  // Special layout for Especialidades section
  if (isSpecialLayout) {
    return (
      <section id={section.id} className="bg-[#f4f4f4]/40 p-5 sm:p-8 md:p-10 rounded-2xl border border-[#e0dad5]/60 shadow-xs mb-16 sm:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Left Column: Category Header & Menu Item Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="border-l-4 border-tertiary pl-4 sm:pl-5 py-1">
              <h3 className="font-label-caps text-xs text-tertiary uppercase tracking-widest mb-1 font-bold">
                {title}
              </h3>
              <p className="font-headline-sm text-2xl sm:text-3xl text-primary font-medium">
                {tagline}
              </p>
            </div>

            {/* Item list cards */}
            <div className="space-y-4">
              {items.map((item) => (
                <MenuItem key={item.id} {...item} />
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image Showcase */}
          <div className="lg:col-span-2">
            <ImageCarousel images={sectionImages} alt={imageAlt || title} />
          </div>
        </div>
      </section>
    );
  }

  // Standard Layout with Image (Image Position: left or right on desktop)
  const isImageRight = imagePosition === 'right';

  return (
    <section id={section.id} className="mb-16 sm:mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-center">
        {/* Content Column with Cards */}
        <div className={`space-y-5 md:space-y-6 ${isImageRight ? 'order-2 lg:order-1' : 'order-2'}`}>
          <h3 className="font-display-lg text-4xl sm:text-5xl text-primary uppercase border-b-2 border-tertiary pb-2 inline-block font-normal tracking-wider">
            {title}
          </h3>

          <div className="space-y-4 pt-1">
            {items.map((item) => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div className={`${isImageRight ? 'order-1 lg:order-2' : 'order-1'}`}>
          <ImageCarousel images={sectionImages} alt={imageAlt || title} />
        </div>
      </div>
    </section>
  );
}

