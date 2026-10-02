import React, { useState, useMemo, useEffect, useRef } from "react";
import { MATCHA_CATEGORIES as CATEGORIES, MATCHA_PRODUCTS as PRODUCTS } from "../data/matchaMenuData";

// ---------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------

const catInfo = (id) => CATEGORIES.find((c) => c.id === id);

function ProductCard({ product, onOpen }) {
  return (
    <button className="mb-card" onClick={() => onOpen(product)}>
      <div className="mb-card-media">
        {product.image && <img src={product.image} alt={product.name} />}
      </div>
      <div className="mb-card-body">
        <div className="mb-card-top">
          <span className="mb-card-index">{product.index}</span>
          <h3 className="mb-card-name">{product.name}</h3>
          <span className="mb-card-price">${product.price}</span>
        </div>
        <p className="mb-card-jp">{product.jp}</p>
        <p className="mb-card-desc">{product.desc}</p>
        <div className="mb-card-pairing">
          <span className="mb-pairing-label">Marida con</span>
          <span className="mb-pairing-value">{product.pairing}</span>
        </div>
        {product.badge && <span className="mb-badge">{product.badge}</span>}
      </div>
    </button>
  );
}

// ---------------------------------------------------------------
// DETAIL MODAL
// ---------------------------------------------------------------

function ProductModal({ product, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!product) return null;
  const category = catInfo(product.category);

  return (
    <div className="mb-modal-overlay" onClick={onClose}>
      <div
        className="mb-modal"
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-modal-media">
          {product.image && <img src={product.image} alt={product.name} />}
          <button
            ref={closeRef}
            className="mb-modal-close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
          <span className="mb-modal-price">${product.price}</span>
        </div>

        <div className="mb-modal-body">
          <span className="mb-eyebrow mb-modal-cat">{category.label}</span>
          <h2 className="mb-modal-name">{product.name}</h2>
          <p className="mb-modal-jp">{product.jp}</p>

          <hr className="mb-rule" />

          <p className="mb-modal-desc">{product.desc}</p>

          <span className="mb-eyebrow">Ingredientes</span>
          <div className="mb-tags">
            {product.ingredients.map((ing) => (
              <span className="mb-tag" key={ing}>
                {ing}
              </span>
            ))}
          </div>

          <div className="mb-pairing-box">
            <span className="mb-eyebrow mb-pairing-eyebrow">Maridaje perfecto</span>
            <p className="mb-pairing-title">{product.pairing}</p>
            <p className="mb-pairing-text">{product.maridajeText}</p>
          </div>

          <span className="mb-eyebrow">Perfil de sabor</span>
          <div className="mb-perfil">
            {Object.entries(product.perfil).map(([label, value]) => (
              <div className="mb-perfil-row" key={label}>
                <span className="mb-perfil-label">{label}</span>
                <div className="mb-perfil-track">
                  <div
                    className="mb-perfil-fill"
                    style={{ width: `${(value / 5) * 100}%` }}
                  />
                </div>
                <span className="mb-perfil-value">{value}/5</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// TICKER
// ---------------------------------------------------------------

function Ticker({ products }) {
  const items = [...products, ...products]; // loop continuo
  return (
    <div className="mb-ticker">
      <div className="mb-ticker-track">
        {items.map((p, i) => (
          <span className="mb-ticker-item" key={`${p.id}-${i}`}>
            {p.name.toUpperCase()} <b>${p.price}</b>
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// APP
// ---------------------------------------------------------------

export default function MatchaBarMenu() {
  const [active, setActive] = useState("todo");
  const [selected, setSelected] = useState(null);

  const visible = useMemo(() => {
    if (active === "todo") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === active);
  }, [active]);

  const grouped = useMemo(() => {
    if (active !== "todo") return { [active]: visible };
    return PRODUCTS.reduce((acc, p) => {
      (acc[p.category] = acc[p.category] || []).push(p);
      return acc;
    }, {});
  }, [active, visible]);

  return (
    <div className="mb-root">
      <style>{CSS}</style>

      {/* Filter Navigation Tabs */}
      <div className="mb-tabs-wrapper">
        <nav className="mb-tabs" aria-label="Categorías">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`mb-tab ${active === c.id ? "is-active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {c.num && <span className="mb-tab-num">{c.num}</span>}
              <span className="mb-tab-label">{c.num ? c.label : "— Todo"}</span>
            </button>
          ))}
        </nav>
      </div>

      <Ticker products={PRODUCTS} />

      <main className="mb-main">
        <p className="mb-eyebrow mb-main-eyebrow">CARTA COMPLETA</p>
        <h1 className="mb-title">MATCHA BAR</h1>
        <div className="mb-collab">
          <span className="mb-collab-x">×</span>
          <span className="mb-collab-name">pauthecreative</span>
        </div>
        <p className="mb-subtitle">
          抹茶バー · MATCHA CEREMONIAL
        </p>

        {Object.entries(grouped).map(([catId, items]) => {
          const cat = catInfo(catId);
          return (
            <section className="mb-section" key={catId}>
              <div className="mb-section-head">
                <span className="mb-section-num">{cat.num}</span>
                <div>
                  <h2 className="mb-section-title">{cat.label}</h2>
                  <p className="mb-section-tagline">{cat.tagline}</p>
                </div>
              </div>
              <div className="mb-grid">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} onOpen={setSelected} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

// ---------------------------------------------------------------
// STYLES
// ---------------------------------------------------------------

const CSS = `
:root {
  --red: #e3391f;
  --black: #141414;
  --grey: #6b6b6b;
  --line: #e7e5e0;
  --bg: #ffffff;
}
* { box-sizing: border-box; }
.mb-root {
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: var(--black);
  background: var(--bg);
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 88px 16px 48px;
  min-height: 100vh;
}
@media (min-width: 640px) {
  .mb-root {
    padding: 104px 32px 64px;
  }
}
@media (min-width: 1024px) {
  .mb-root {
    padding: 112px 48px 64px;
  }
}

/* Sticky Category Tabs Navigation */
.mb-tabs-wrapper {
  position: sticky;
  top: 68px;
  z-index: 30;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 12px 0;
  margin-bottom: 24px;
  border-bottom: 2px solid var(--black);
}
.mb-tabs {
  display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px;
  scrollbar-width: none;
}
.mb-tabs::-webkit-scrollbar { display: none; }
.mb-tab {
  flex: none; display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 18px; font-size: 13px;
  background: #f4f1ec; border: none;
  cursor: pointer; white-space: nowrap; border-radius: 9999px; transition: all 0.2s ease;
}
.mb-tab-num {
  font-size: 13px; font-weight: 700; color: #777777;
  transition: color 0.2s ease;
}
.mb-tab-label {
  font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; color: var(--black);
  transition: color 0.2s ease;
}
.mb-tab.is-active {
  background: var(--red);
}
.mb-tab.is-active .mb-tab-num {
  color: rgba(255, 255, 255, 0.65);
}
.mb-tab.is-active .mb-tab-label {
  color: #ffffff;
}

/* Ticker */
.mb-ticker { background: var(--red); overflow: hidden; border-radius: 8px; margin-bottom: 24px; }
.mb-ticker-track {
  display: flex; width: max-content; padding: 10px 0;
  animation: mb-scroll 22s linear infinite;
}
@media (prefers-reduced-motion: reduce) { .mb-ticker-track { animation: none; } }
.mb-ticker-item {
  color: #fff; font-size: 12px; font-weight: 700; letter-spacing: 0.05em;
  padding: 0 24px; border-right: 1px solid rgba(255,255,255,0.4);
  white-space: nowrap; text-transform: uppercase;
}
.mb-ticker-item b { font-weight: 800; margin-left: 6px; }
@keyframes mb-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* Main */
.mb-main { padding: 8px 0; }
.mb-eyebrow {
  display: block; font-size: 12px; font-weight: 800;
  text-transform: uppercase; color: var(--red);
}
.mb-main-eyebrow { margin-bottom: 6px; }
.mb-title { font-size: 48px; line-height: 0.9; font-weight: 900; letter-spacing: -0.02em; margin: 0 0 10px; text-transform: uppercase; }
@media (min-width: 640px) { .mb-title { font-size: 68px; } }
@media (min-width: 1024px) { .mb-title { font-size: 80px; } }

.mb-collab { display: flex; align-items: center; gap: 8px; margin-bottom: 18px; }
.mb-collab-x { font-size: 26px; font-weight: 400; color: var(--black); line-height: 1; }
.mb-collab-name { font-size: 32px; font-weight: 700; font-style: italic; color: var(--red); letter-spacing: -0.01em; line-height: 1; }
@media (min-width: 640px) {
  .mb-collab-x { font-size: 32px; }
  .mb-collab-name { font-size: 42px; }
}

.mb-subtitle { font-size: 13px; font-weight: 600; letter-spacing: 0.14em; color: var(--grey); margin: 0 0 28px; padding-bottom: 20px; border-bottom: 2px solid var(--black); text-transform: uppercase; }

/* Section */
.mb-section { margin-top: 40px; }
.mb-section-head { display: flex; align-items: stretch; gap: 14px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 3px solid var(--black); }
.mb-section-num { display: flex; align-items: center; font-size: 42px; font-weight: 900; color: var(--red); line-height: 0.9; align-self: stretch; }
.mb-section-title { font-size: 22px; font-weight: 900; margin: 0; text-transform: uppercase; }
.mb-section-tagline { font-size: 13px; color: var(--grey); margin: 2px 0 0; }

/* Grid + cards */
.mb-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
@media (min-width: 640px) { .mb-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .mb-grid { grid-template-columns: repeat(3, 1fr); } }

.mb-card {
  display: flex; gap: 14px; text-align: left; background: #fff; border: 1px solid var(--line);
  padding: 14px; border-radius: 12px; cursor: pointer; font: inherit; color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.mb-card:hover {
  transform: translateY(-2px);
  border-color: #d1cbc3;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}
.mb-card-media { width: 100px; height: 100px; flex: none; border-radius: 8px; overflow: hidden; }
.mb-card-media img { width: 100%; height: 100%; object-fit: cover; }

.mb-card-body { flex: 1; min-width: 0; position: relative; }
.mb-card-top { display: flex; align-items: baseline; gap: 6px; }
.mb-card-index { font-size: 11px; font-weight: 700; color: var(--red); }
.mb-card-name { font-size: 15px; font-weight: 800; margin: 0; flex: 1; text-transform: uppercase; }
.mb-card-price { font-size: 15px; font-weight: 800; }
.mb-card-jp { font-size: 11px; color: var(--grey); margin: 2px 0 4px; }
.mb-card-desc { font-size: 12.5px; color: #3a3a3a; margin: 0 0 8px; line-height: 1.4; }
.mb-card-pairing {
  display: flex; align-items: baseline; gap: 5px; flex-wrap: wrap;
  font-size: 11.5px; line-height: 1.4; margin-top: 4px;
}
.mb-pairing-label {
  font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--red); margin: 0; line-height: 1;
}
.mb-pairing-value {
  color: var(--grey); margin: 0; line-height: 1;
}
.mb-badge {
  display: inline-block; margin-top: 8px; background: var(--red); color: #fff;
  font-size: 9px; font-weight: 800; letter-spacing: 0.06em; padding: 3px 8px; border-radius: 4px;
}

/* Modal */
.mb-modal-overlay {
  position: fixed; inset: 0; background: rgba(10,10,10,0.65); z-index: 50;
  display: flex; align-items: flex-end; justify-content: center; backdrop-filter: blur(4px);
}
@media (min-width: 640px) { .mb-modal-overlay { align-items: center; } }
.mb-modal {
  background: #fff; width: 100%; max-width: 520px; max-height: 90vh; overflow-y: auto;
  border-radius: 20px 20px 0 0; box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
@media (min-width: 640px) { .mb-modal { border-radius: 16px; } }

.mb-modal-media { position: relative; height: 280px; }
.mb-modal-media img { width: 100%; height: 100%; object-fit: cover; }
.mb-modal-close {
  position: absolute; top: 14px; right: 14px; width: 36px; height: 36px; border-radius: 50%;
  background: rgba(10,10,10,0.65); color: #fff; border: none; font-size: 22px; line-height: 1; cursor: pointer;
  display: flex; align-items: center; justify-content: center; transition: background 0.2s;
}
.mb-modal-close:hover { background: rgba(10,10,10,0.85); }
.mb-modal-price {
  position: absolute; left: 0; bottom: 0; background: var(--red); color: #fff;
  font-size: 22px; font-weight: 900; padding: 10px 22px; border-radius: 0 12px 0 0;
}

.mb-modal-body { padding: 24px 24px 32px; }
.mb-modal-name { font-size: 28px; font-weight: 900; margin: 0 0 2px; text-transform: uppercase; }
.mb-modal-jp { font-size: 13px; color: var(--grey); margin: 0; }
.mb-rule { border: none; border-top: 2px solid var(--black); margin: 16px 0; }
.mb-modal-desc { font-size: 14.5px; line-height: 1.5; margin: 0 0 20px; }

.mb-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 20px; }
.mb-tag { font-size: 12px; font-weight: 600; border: 1px solid var(--line); border-radius: 6px; padding: 6px 12px; background: #faf9f7; }

.mb-pairing-box { background: var(--red); color: #fff; border-radius: 10px; padding: 18px; margin-bottom: 22px; }
.mb-pairing-eyebrow { color: rgba(255,255,255,0.85); margin-bottom: 4px; }
.mb-pairing-title { font-size: 16px; font-weight: 800; margin: 0 0 6px; }
.mb-pairing-text { font-size: 13px; line-height: 1.5; margin: 0; color: rgba(255,255,255,0.95); }

.mb-perfil { display: flex; flex-direction: column; gap: 12px; }
.mb-perfil-row { display: flex; align-items: center; gap: 12px; }
.mb-perfil-label { width: 68px; font-size: 12.5px; font-weight: 700; flex: none; }
.mb-perfil-track { flex: 1; height: 8px; background: var(--line); border-radius: 4px; overflow: hidden; }
.mb-perfil-fill { height: 100%; background: var(--red); border-radius: 4px; }
.mb-perfil-value { width: 30px; text-align: right; font-size: 12px; color: var(--grey); font-weight: 700; flex: none; }
`;

