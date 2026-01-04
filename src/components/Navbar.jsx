import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { text: "হোম", url: "/" },
  { text: "জাতীয়", url: "/category/National" },
  { text: "আন্তর্জাতিক", url: "/category/International" },
  { text: "খেলা", url: "/category/Sports" },
  { text: "বিনোদন", url: "/category/Entertainment" },
  { text: "প্রযুক্তি", url: "/category/Technology" },
];

const Navbar = () => {
  const location = useLocation();

  // আজকের বাংলা তারিখ দেখানোর জন্য (সহজ ফরম্যাট)
  const today = new Date().toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50 font-sans">
      {/* টপ বার: তারিখ ও ভাষা */}
      <div className="hidden md:block bg-gray-50 border-b py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-[13px] text-gray-600 font-medium">
          <div className="flex items-center gap-2">
             <span className="text-red-600">●</span> {today}
          </div>
          <div className="flex space-x-6 items-center">
            <button className="hover:text-red-700 transition-colors">English</button>
            <span className="text-gray-300">|</span>
            <button className="bg-red-700 text-white px-3 py-1 rounded-sm hover:bg-black transition-all">লগইন</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* লোগো সেকশন */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          
          {/* ট্রেন্ডিং আপডেট (বাম পাশে) */}
          <div className="hidden lg:flex items-center space-x-4 w-1/3">
            <div className="w-14 h-10 bg-gray-100 rounded-md overflow-hidden border border-gray-100 shadow-sm">
                <img src="https://i.postimg.cc/D00LBVV0/istockphoto-1213605498-612x612.jpg" alt="trending" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] text-red-600 font-bold uppercase tracking-tighter">ব্রেকিং নিউজ</span>
                <p className="text-[13px] leading-tight font-bold text-gray-800 hover:text-red-700 cursor-pointer line-clamp-1 transition-colors">
                  মেট্রোরেলের নতুন রুট উদ্বোধন হতে যাচ্ছে আগামী মার্চে...
                </p>
            </div>
          </div>

          {/* মেইন লোগো (মাঝখানে) */}
          <Link to="/" className="flex flex-col items-center group mb-4 md:mb-0">
            <div className="relative">
               <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-orange-500 text-xl animate-bounce">☀️</div>
               <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter transition-transform group-hover:scale-105">
                 প্রথম <span className="text-red-700">নিউজ</span>
               </h1>
            </div>
            <div className="h-1 w-full bg-red-700 mt-1 rounded-full"></div>
          </Link>

          {/* সার্চ সেকশন (ডান পাশে) */}
          <div className="hidden md:flex justify-end items-center w-1/3">
             <div className="relative group">
                <input 
                  type="text" 
                  placeholder="খবর খুঁজুন..." 
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-100 w-64 transition-all"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600">🔍</span>
             </div>
          </div>
        </div>

        {/* ক্যাটাগরি মেনু */}
        <nav className="flex justify-center border-t border-gray-100">
          <ul className="flex space-x-6 md:space-x-12 overflow-x-auto no-scrollbar py-3">
            {navLinks.map((link) => (
              <li key={link.text}>
                <Link 
                  to={link.url} 
                  className={`text-[15px] md:text-[17px] font-bold transition-all relative pb-1 whitespace-nowrap ${
                    location.pathname === link.url 
                    ? 'text-red-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-700' 
                    : 'text-gray-700 hover:text-red-700'
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