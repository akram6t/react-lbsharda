import React, { useState } from 'react';
import MainPage from './MainPage';
import Menu from './pages/Menu';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  );
}
