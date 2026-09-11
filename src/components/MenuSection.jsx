import React, { useState } from 'react';
import MenuItem from './MenuItem';

function ImageCarousel({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const imageList = Array.isArray(images) ? images : [images].filter(Boolean);

  if (imageList.length === 0) return null;

  if (imageList.length === 1) {
    return (
      <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-[#e0dad5]/60 group">
        <img
          src={imageList[0]}
          alt={alt}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>
    );
  }

  const prevSlide = (e) => {
    e?.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextSlide = (e) => {
    e?.stopPropagation();
    if (currentIndex < imageList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const distance = touchStart - touchEnd;
    if (distance > 40 && currentIndex < imageList.length - 1) {
      nextSlide();
    } else if (distance < -40 && currentIndex > 0) {
      prevSlide();
    }
  };

  return (
    <div className="space-y-3 select-none">
      {/* Main Image Stage - Instagram Carousel Frame */}
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-[#e0dad5]/80 bg-neutral-900 group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Horizontal Filmstrip Track (Instagram Style) */}
        <div
          className="flex w-full h-full transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imageList.map((img, idx) => (
            <div key={idx} className="w-full h-full flex-shrink-0 relative">
              <img
                src={img}
                alt={`${alt} ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Instagram Top Right Counter Badge: "1/4" */}
        <div className="absolute top-3 right-3 z-20 bg-black/65 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded-full border border-white/15 shadow-sm">
          {currentIndex + 1}/{imageList.length}
        </div>

        {/* Instagram Left Arrow (hidden on first slide) */}
        {currentIndex > 0 && (
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-neutral-800 flex items-center justify-center backdrop-blur-sm transition-all duration-200 shadow-md hover:scale-110 cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined text-lg leading-none font-bold">chevron_left</span>
          </button>
        )}

        {/* Instagram Right Arrow (hidden on last slide) */}
        {currentIndex < imageList.length - 1 && (
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Siguiente imagen"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-neutral-800 flex items-center justify-center backdrop-blur-sm transition-all duration-200 shadow-md hover:scale-110 cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined text-lg leading-none font-bold">chevron_right</span>
          </button>
        )}

        {/* Instagram Floating Dots (Bottom Overlay) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
          {imageList.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir a foto ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? 'w-2.5 h-2.5 bg-tertiary scale-110'
                  : 'w-1.5 h-1.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Instagram-Style Mini Thumbnails below */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {imageList.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`relative w-14 sm:w-16 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
              idx === currentIndex
                ? 'border-tertiary ring-2 ring-tertiary/30 scale-105 opacity-100 shadow-sm'
                : 'border-transparent opacity-50 hover:opacity-90'
            }`}
          >
            <img src={img} alt={`Vista previa ${idx + 1}`} className="w-full h-full object-cover" />
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

