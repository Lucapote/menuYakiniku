import React from 'react';

export default function ChefRecommendationCard({ recommendation }) {
  if (!recommendation) return null;

  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  }).format(recommendation.price);

  return (
    <div className="p-5 sm:p-6 bg-white border border-tertiary/30 shadow-md rounded-xl transition-all duration-300 hover:shadow-lg hover:border-tertiary/50">
      <div className="flex items-center gap-2 mb-3">
        <span className="material-symbols-outlined text-tertiary text-xl">workspace_premium</span>
        <span className="text-[10px] font-label-caps font-bold tracking-widest text-tertiary uppercase">
          RECOMENDACIÓN DESTACADA
        </span>
      </div>

      <div className="flex items-baseline justify-between mb-3 border-b border-tertiary/15 pb-2 gap-2">
        <span className="font-menu-item text-lg sm:text-xl text-tertiary uppercase font-semibold">
          {recommendation.title}
        </span>
        <span className="font-body-md text-lg sm:text-xl text-tertiary font-bold shrink-0">
          {formattedPrice}
        </span>
      </div>

      <p className="font-body-md text-sm sm:text-base text-on-surface-variant italic leading-relaxed">
        {recommendation.description}
      </p>
    </div>
  );
}
