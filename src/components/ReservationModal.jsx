import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function ReservationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2 personas',
    notes: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#f8f7f5] text-primary w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-[#e0dad5] relative">
        {/* Header */}
        <div className="bg-sumi-charcoal text-white p-6 flex justify-between items-center">
          <div>
            <span className="text-[10px] font-label-caps text-tertiary tracking-[0.2em] font-bold block">
              {RESTAURANT_INFO.name.toUpperCase()} RESTAURANTE
            </span>
            <h3 className="font-display-lg text-2xl font-medium text-white">
              Reservación de Mesa
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg"
            aria-label="Cerrar modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-tertiary/10 text-tertiary rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <h4 className="font-display-lg text-2xl text-primary font-bold">¡Reservación Confirmada!</h4>
            <p className="font-body-md text-gray-600 text-sm">
              Gracias, <strong className="text-primary">{formData.name}</strong>. Hemos registrado tu reservación para {formData.guests} el día {formData.date || 'solicitado'} a las {formData.time}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-label-caps font-semibold text-gray-700 mb-1 tracking-wider">
                NOMBRE COMPLETO
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. Sofia Martínez"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#e0dad5] bg-white text-sm focus:outline-none focus:border-tertiary transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-label-caps font-semibold text-gray-700 mb-1 tracking-wider">
                  TELÉFONO
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="55 1234 5678"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#e0dad5] bg-white text-sm focus:outline-none focus:border-tertiary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-label-caps font-semibold text-gray-700 mb-1 tracking-wider">
                  NÚMERO DE PERSONAS
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#e0dad5] bg-white text-sm focus:outline-none focus:border-tertiary transition-colors"
                >
                  <option value="1 persona">1 Persona</option>
                  <option value="2 personas">2 Personas</option>
                  <option value="4 personas">4 Personas</option>
                  <option value="6 personas">6 Personas</option>
                  <option value="8+ personas">8+ Personas (Grupo)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-label-caps font-semibold text-gray-700 mb-1 tracking-wider">
                  FECHA
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#e0dad5] bg-white text-sm focus:outline-none focus:border-tertiary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-label-caps font-semibold text-gray-700 mb-1 tracking-wider">
                  HORARIO
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#e0dad5] bg-white text-sm focus:outline-none focus:border-tertiary transition-colors"
                >
                  <option value="13:30">13:30 hrs</option>
                  <option value="15:00">15:00 hrs</option>
                  <option value="18:00">18:00 hrs</option>
                  <option value="19:30">19:30 hrs</option>
                  <option value="21:00">21:00 hrs</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-label-caps font-semibold text-gray-700 mb-1 tracking-wider">
                NOTAS O PREFERENCIAS (OPCIONAL)
              </label>
              <textarea
                name="notes"
                rows="2"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Alergias, solicitudes de ubicación de mesa..."
                className="w-full px-3.5 py-2 rounded-lg border border-[#e0dad5] bg-white text-sm focus:outline-none focus:border-tertiary transition-colors"
              />
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-lg border border-[#e0dad5] font-label-caps text-xs tracking-wider text-gray-600 hover:bg-gray-100 transition-colors"
              >
                CANCELAR
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-lg bg-tertiary text-white font-label-caps text-xs tracking-widest font-bold hover:bg-red-700 transition-all shadow-md active:scale-95"
              >
                CONFIRMAR RESERVA
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
