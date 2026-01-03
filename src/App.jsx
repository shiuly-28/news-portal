import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home';
import National from './page/National';
import International from './page/International';
import NewsDetails from './page/NewsDetails'; 
import InternationalDetails from './page/InternationalDetails'; // ১. নিশ্চিত করুন এটি ইমপোর্ট করেছেন

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/National" element={<National />} />
        <Route path="/category/International" element={<International />} />
        
        {/* সাধারণ নিউজ রাউট */}
        <Route path="/news/:id" element={<NewsDetails />} />

        {/* ২. ইন্টারন্যাশনাল নিউজের স্পেশাল রাউট */}
        <Route path="/international-news/:id" element={<InternationalDetails />} />
        
        <Route path="/category/:categoryName" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;