import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// ডাটা অ্যারেটি ফাংশনের বাইরে রাখতে হয়
const navLinks = [
  { text: "Home", url: "/" },
  { text: "National", url: "/category/National" },
  { text: "International", url: "/category/International" },
  { text: "Sports", url: "/category/Sports" },
  { text: "Entertainment", url: "/category/Entertainment" },
  { text: "Technology", url: "/category/Technology" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      {/* Top Bar: Date & Simple Links */}
      <div className="hidden md:block bg-gray-50 border-b py-1.5">
        <div className="container mx-auto px-4 flex justify-between items-center text-[12px] text-gray-500 font-medium">
          <span>Saturday, January 03, 2026</span>
          <div className="flex space-x-4">
            <button className="hover:text-red-700">English</button>
            <button className="hover:text-red-700">Login</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          
          {/* Trending Highlights */}
          <div className="hidden lg:flex items-center space-x-4 w-1/3">
            <div className="w-12 h-12 bg-gray-100 rounded-sm overflow-hidden border">
                <img src="https://picsum.photos/seed/news1/100" alt="trending" className="object-cover" />
            </div>
            <p className="text-[13px] leading-tight font-bold text-gray-800 hover:text-red-700 cursor-pointer line-clamp-2">
              Metro Rail network expansion update for 2026...
            </p>
          </div>

          {/* Main Logo */}
          <Link to="/" className="flex flex-col items-center group">
            <div className="relative">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-orange-500 text-xl animate-pulse">☀️</div>
               <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase transition-transform group-hover:scale-105">
                PROTHOM <span className="text-red-700">NEWS</span>
               </h1>
            </div>
            <div className="h-0.5 w-full bg-red-700 mt-1"></div>
          </Link>

          {/* Search Section */}
          <div className="hidden md:flex justify-end items-center w-1/3 space-x-4">
             <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search news..." 
                  className="pl-8 pr-4 py-1.5 border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
             </div>
          </div>
        </div>

        {/* Categories Menu (এখন এটি navLinks অ্যারে থেকে ডাইনামিকালি আসবে) */}
        <nav className="flex justify-center border-t py-1">
          <ul className="flex space-x-6 md:space-x-10 overflow-x-auto no-scrollbar py-2">
            {navLinks.map((link) => (
              <li key={link.text}>
                <Link 
                  to={link.url} 
                  className={`text-sm md:text-[16px] font-bold transition-colors whitespace-nowrap ${
                    location.pathname === link.url ? 'text-red-700 border-b-2 border-red-700' : 'text-gray-700 hover:text-red-700'
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;