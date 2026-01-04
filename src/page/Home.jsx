import React from 'react';
import { newsData } from '../data';
import NewsCard from '../components/NewsCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const leftSidebarNews = newsData.slice(0, 15); 
  const mainContentNews = newsData; 
  const trendingNews = newsData.slice(5, 10); 

  return (
    <main className="max-w-[1300px] mx-auto px-4 py-8 bg-white font-sans text-gray-900">
      
      {/* ৩-কলাম গ্রিড */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* বাম পাশ: সর্বশেষ খবরের শিরোনাম (৩ কলাম) */}
        <aside className="lg:col-span-3 hidden lg:block border-r border-gray-100 pr-5">
          <div className="border-b-2 border-red-600 mb-4">
            <h3 className="text-xl font-bold pb-1">সর্বশেষ</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {leftSidebarNews.map((news, index) => (
              <Link to={`/news/${news.id}`} key={news.id} className="block py-4 group">
                <div className="flex gap-4">
                  <span className="text-3xl font-bold text-gray-200 group-hover:text-red-600">
                    {index + 1}
                  </span>
                  <h4 className="text-[15px] font-bold leading-snug group-hover:text-blue-700 transition-colors">
                    {news.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </aside>

        {/* মাঝখান: মূল সংবাদ কার্ড (৬ কলাম) */}
        <div className="lg:col-span-6">
          <div className="border-b-2 border-gray-900 mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-black italic">প্রধান সংবাদ</h2>
            <div className="flex items-center gap-1 text-red-600 text-xs font-bold">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span> সরাসরি
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainContentNews.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        {/* ডান পাশ: আলোচিত ও বিজ্ঞাপন (৩ কলাম) --- */}
        <aside className="lg:col-span-3 border-l border-gray-100 pl-5">
          <div className="mb-10">
            <div className="border-b-2 border-gray-800 mb-4">
              <h3 className="text-xl font-bold pb-1">আলোচিত</h3>
            </div>
            <div className="space-y-6">
              {trendingNews.map((news) => (
                <Link to={`/news/${news.id}`} key={news.id} className="flex gap-3 group">
                  <div className="w-24 h-16 flex-shrink-0">
                    <img src={news.image} className="w-full h-full object-cover rounded shadow-sm" alt="" />
                  </div>
                  <h4 className="text-sm font-bold group-hover:text-blue-700 leading-tight">
                    {news.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          {/* বিজ্ঞাপন সেকশন */}
          <div className="sticky top-24">
  <div className="w-full relative group overflow-hidden rounded-xl shadow-lg border border-gray-200">
    {/* বিজ্ঞাপন ইমেজ */}
    <img 
      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&h=800&fit=crop" 
      alt="Advertisement" 
      className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* ডার্ক ওভারলে ডিজাইন */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-end p-6 text-center">
      
      {/* ছোট ব্যাজ */}
      <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded uppercase tracking-widest border border-white/30 font-bold">
        Sponsored
      </span>

      {/* টেক্সট কন্টেন্ট */}
      <h4 className="text-white text-xl font-bold mb-2 leading-tight">
        আপনার ব্যবসার প্রচার করুন আমাদের সাথে
      </h4>
      
      <p className="text-gray-300 text-sm mb-6">
        প্রতিদিন লাখো পাঠকের কাছে পৌঁছে দিন আপনার ব্র্যান্ড।
      </p>

      {/* কল টু অ্যাকশন বাটন */}
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform active:scale-95 shadow-lg">
        বিজ্ঞাপন দিন
      </button>
      
      {/* ছোট লিঙ্ক বা টেক্সট */}
      <div className="mt-4 text-[10px] text-gray-500 italic">
        www.yournewsportal.com/ads
      </div>
    </div>
  </div>
</div>
        </aside>

      </div>
    </main>
  );
};

export default Home;