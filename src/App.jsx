import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home';
import National from './page/National';
import International from './page/International';
import NewsDetails from './page/NewsDetails'; 
import InternationalDetails from './page/InternationalDetails'; 
import Sports from './page/Sports';
import Entertainment from './page/Entertainment';
import Technology from './page/Technology';
import SearchPage from './SearchPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  
  {/* নিউজ ডিটেইলস রাউটগুলো সবার উপরে রাখুন */}
  <Route path="/news/:id" element={<NewsDetails />} />
  <Route path="/international-news/:id" element={<InternationalDetails />} />

  {/* নির্দিষ্ট ক্যাটেগরি রাউট */}
  <Route path="/category/National" element={<National />} />
  <Route path="/category/International" element={<International />} />
  <Route path="/category/Sports" element={<Sports />} />
  <Route path="/category/Entertainment" element={<Entertainment />} />
  <Route path="/category/Technology" element={<Technology />} />
  <Route path="/search" element={<SearchPage />} />
  
  {/* সমস্যা সৃষ্টিকারী এই লাইনটি সাময়িকভাবে মুছে দিন অথবা নিউজ রাউটের অনেক নিচে রাখুন */}
  {/* <Route path="/category/:categoryName" element={<Home />} /> */}

  {/* সবশেষে এটি রাখুন */}
  {/* <Route path="*" element={<Home />} /> */}
</Routes>
    </Router>
  );
}

export default App;