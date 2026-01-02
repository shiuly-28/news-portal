import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NewsDetails from './pages/NewsDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetails />} />
        </Routes>
        <footer className="bg-white border-t py-8 mt-12 text-center text-gray-500">
          <p>© 2026 News Portal Assignment - Prothom Alo Style</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;