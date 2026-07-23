import React from 'react';

export default function MobileStickyCTA({ onOpenReservation }) {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 md:hidden px-4 pb-5 pt-3 bg-gradient-to-t from-[#f8f7f5] via-[#f8f7f5]/90 to-transparent">
      <button
        onClick={onOpenReservation}
        className="w-full bg-tertiary text-white font-label-caps text-xs sm:text-sm py-3.5 px-6 tracking-[0.25em] shadow-xl uppercase transition-transform active:scale-98 rounded-xl font-bold flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-lg">calendar_month</span>
        RESERVAR MESA
      </button>
    </div>
  );
}
