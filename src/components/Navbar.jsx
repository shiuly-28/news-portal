import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Border */}
      <div className="h-1 bg-red-700"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 border-b">
          {/* Logo */}
          <Link to="/" className="text-3xl font-black text-red-700 tracking-tighter">
            PROTHOM NEWS
          </Link>

          {/* Search Button (Hidden on Mobile) */}
          <div className="hidden md:block">
            <button className="text-gray-600 hover:text-red-700 font-medium">
              অনুসন্ধান 🔍
            </button>
          </div>
        </div>

        {/* Categories */}
        <nav className="flex space-x-6 py-3 overflow-x-auto no-scrollbar text-sm md:text-base font-bold text-gray-700">
          <Link to="/" className="hover:text-red-700 whitespace-nowrap">হোম</Link>
          <Link to="#" className="hover:text-red-700 whitespace-nowrap">বাংলাদেশ</Link>
          <Link to="#" className="hover:text-red-700 whitespace-nowrap">আন্তর্জাতিক</Link>
          <Link to="#" className="hover:text-red-700 whitespace-nowrap">খেলা</Link>
          <Link to="#" className="hover:text-red-700 whitespace-nowrap">বিনোদন</Link>
          <Link to="#" className="hover:text-red-700 whitespace-nowrap">প্রযুক্তি</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;