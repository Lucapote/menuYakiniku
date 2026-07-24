import React from 'react';

export default function MenuItem({ name, price, description, badge }) {
  // Format price as currency (e.g. $980.00)
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  }).format(price);

  return (
    <div className="p-5 sm:p-6 bg-white border border-[#e0dad5] hover:border-tertiary/60 shadow-xs hover:shadow-md rounded-xl transition-all duration-300 group">
      {/* Header Row: Title on Top, Badge Below, Price on Right */}
      <div className="flex justify-between items-start gap-4 mb-2 w-full">
        {/* Left Column: Title (h4) on top, Badge (span) below */}
        <div className="flex flex-col items-start gap-1 max-w-full">
          <h4 className="font-menu-item text-xl sm:text-2xl text-primary uppercase tracking-wider group-hover:text-tertiary transition-colors">
            {name}
          </h4>
          {badge && (
            <span className="inline-block text-[9px] sm:text-[10px] font-label-caps font-bold px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20">
              {badge}
            </span>
          )}
        </div>

        {/* Right: Price */}
        <span className="font-body-md text-lg sm:text-xl text-tertiary font-bold shrink-0 pt-0.5">
          {formattedPrice}
        </span>
      </div>

      {/* Description */}
      {description && (
        <p className="font-body-md text-sm sm:text-base text-on-surface-variant italic leading-relaxed pt-0.5">
          {description}
        </p>
      )}
    </div>
  );
}

