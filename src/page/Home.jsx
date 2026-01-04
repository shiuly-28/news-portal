import React, { useState, useEffect } from 'react';
import { newsData } from '../data'; 
import NewsCard from '../components/NewsCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(true);

  // ডাটা লোড হওয়ার একটি ভান করা (Real API থাকলে এটার দরকার হতো না)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // ১.৫ সেকেন্ড লোডিং দেখাবে
    return () => clearTimeout(timer);
  }, []);

  const leftSidebarNews = newsData.slice(0, 15);
  const mainContentNews = newsData.slice(0, 8);
  const trendingNews = newsData.slice(8, 13);

  // Skeleton UI Component
  const Skeleton = () => (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-200 h-48 w-full rounded-md"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );

  return (
    <main className="max-w-[1300px] mx-auto px-4 py-8 bg-white font-sans text-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* বাম পাশ: সর্বশেষ */}
        <aside className="lg:col-span-3 hidden lg:block border-r border-gray-100 pr-5">
          <div className="border-b-2 border-red-600 mb-4">
            <h3 className="text-xl font-bold pb-1 text-gray-800">সর্বশেষ</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {loading ? (
              [...Array(10)].map((_, i) => (
                <div key={i} className="py-4 animate-pulse flex gap-4">
                  <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  <div className="flex-1 h-4 bg-gray-200 rounded"></div>
                </div>
              ))
            ) : (
              leftSidebarNews.map((news, index) => (
                <Link to={`/news/${news.id}`} key={news.id} className="block py-4 group">
                  <div className="flex gap-4 items-start">
                    <span className="text-3xl font-black text-gray-100 group-hover:text-red-600 transition-colors">{index + 1}</span>
                    <h4 className="text-[15px] font-bold leading-snug group-hover:text-blue-700">{news.title}</h4>
                  </div>
                </Link>
              ))
            )}
          </div>
        </aside>

        {/* মাঝখান: প্রধান সংবাদ */}
        <div className="lg:col-span-6">
          <div className="border-b-2 border-gray-900 mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-black italic">প্রধান সংবাদ</h2>
            {!loading && (
              <div className="flex items-center gap-1 text-red-600 text-xs font-bold">
                <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping"></span> সরাসরি
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
            {loading ? (
              [...Array(6)].map((_, i) => <Skeleton key={i} />)
            ) : (
              mainContentNews.map(news => (
                <NewsCard key={news.id} news={news} />
              ))
            )}
          </div>
        </div>

        {/* ডান পাশ: আলোচিত ও বিজ্ঞাপন */}
        <aside className="lg:col-span-3 border-l border-gray-100 pl-5">
          <div className="mb-10">
            <div className="border-b-2 border-gray-800 mb-4">
              <h3 className="text-xl font-bold pb-1 text-gray-800">আলোচিত</h3>
            </div>
            <div className="space-y-6">
              {loading ? (
                [...Array(5)].map((_, i) => (
                  <div key={i} className="flex gap-3 animate-pulse">
                    <div className="w-24 h-16 bg-gray-200 rounded"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))
              ) : (
                trendingNews.map((news) => (
                  <Link to={`/news/${news.id}`} key={news.id} className="flex gap-3 group">
                    <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded bg-gray-50">
                      <img src={news.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" alt="" />
                    </div>
                    <h4 className="text-[13px] font-bold group-hover:text-blue-700 leading-tight">{news.title}</h4>
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* বিজ্ঞাপন সেকশন (লোডিং থাকলেও দেখা যাবে) */}
          <div className="sticky top-24">
            <div className="w-full relative group overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&h=800&fit=crop" alt="Ad" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col items-center justify-end p-6 text-center">
                <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded uppercase tracking-widest border border-white/30 font-bold">Sponsored</span>
                <h4 className="text-white text-xl font-bold mb-2 leading-tight">আপনার ব্যবসার প্রচার করুন</h4>
                <p className="text-gray-300 text-xs mb-6">প্রতিদিন লাখো পাঠকের কাছে পৌঁছে দিন আপনার ব্র্যান্ড।</p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md">বিজ্ঞাপন দিন</button>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
};

export default Home;