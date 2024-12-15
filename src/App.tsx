import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { Consultation } from './pages/Consultation';
import { Guide } from './pages/Guide';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-right" />
      </div>
    </Router>
  );
}

export default App;