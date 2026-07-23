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
      {/* 50/50 Grid Header Row */}
      <div className="grid grid-cols-2 gap-2 sm:gap-4 items-center mb-2 w-full">
        {/* Left 50%: Title & Badge */}
        <div className="flex items-center gap-2 max-w-full flex-wrap sm:flex-nowrap">
          <h4 className="font-menu-item text-xl sm:text-2xl text-primary uppercase tracking-wider group-hover:text-tertiary transition-colors">
            {name}
          </h4>
          {badge && (
            <span className="inline-block text-[9px] sm:text-[10px] font-label-caps font-bold px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20 shrink-0">
              {badge}
            </span>
          )}
        </div>

        {/* Right 50%: Dotted Leader & Price */}
        <div className="flex items-center justify-end gap-2 text-right">
          <div className="dotted-leader !border-tertiary/30 hidden sm:block"></div>
          <span className="font-body-md text-lg sm:text-xl text-tertiary font-bold shrink-0">
            {formattedPrice}
          </span>
        </div>
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
