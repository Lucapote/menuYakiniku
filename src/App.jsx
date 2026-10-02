import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import YakinikuMenu from './components/YakinikuMenu';
import MatchaBarMenu from './components/MatchaBarMenu';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body-md flex flex-col selection:bg-tertiary selection:text-white">
      {/* Header */}
      <Header />

      {/* Content View Routing: Yakiniku vs Matcha Bar */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<YakinikuMenu />} />
          <Route path="/yakiniku" element={<YakinikuMenu />} />
          <Route path="/matcha" element={<MatchaBarMenu />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}


