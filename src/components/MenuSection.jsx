import React from 'react';
import MenuItem from './MenuItem';

export default function MenuSection({ section }) {
  const { title, tagline, image, imageAlt, imagePosition, items, isSpecialLayout } = section;

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
          <div className="lg:col-span-2 aspect-video rounded-xl overflow-hidden shadow-lg group border border-[#e0dad5]/60">
            <img
              src={image}
              alt={imageAlt || title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
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
          <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl group border border-[#e0dad5]/60">
            <img
              src={image}
              alt={imageAlt || title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
