import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsData } from '../data'; 
import { FaChevronLeft, FaRegClock } from 'react-icons/fa';

const NewsDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // আইডি কনভার্ট করে চেক করা (নম্বর বা স্ট্রিং যাই হোক মিলবে)
  const news = newsData.find(item => String(item.id) === String(id));

  // যদি খবর খুঁজে না পায় তবে এই মেসেজটি আসবে
  if (!news) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">দুঃখিত!</h2>
        <p className="text-gray-600 mb-6">আইডি নম্বর "{id}" এর জন্য কোনো খবর আমাদের ডাটাবেজে নেই।</p>
        <Link to="/" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* ব্যাক বাটন */}
        <div className="mb-8">
          <Link to="/category/Technology" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
            <FaChevronLeft /> প্রযুক্তি বিভাগে ফিরে যান
          </Link>
        </div>

        {/* শিরোনাম */}
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          {news.title}
        </h1>

        {/* তারিখ ও বিভাগ */}
        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-8 pb-6 border-b">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">
            {news.category}
          </span>
          <div className="flex items-center gap-2">
            <FaRegClock />
            <span>প্রকাশিত: {news.date || "সম্প্রতি"}</span>
          </div>
        </div>

        {/* ছবি */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-10">
          <img 
            src={news.image || news.img} 
            alt={news.title} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* ডেসক্রিপশন এবং কন্টেন্ট */}
        <div className="max-w-none">
          <p className="text-xl md:text-2xl font-medium text-gray-700 mb-8 leading-relaxed border-l-8 border-blue-600 pl-6 bg-gray-50 py-4 rounded-r-xl">
            {news.description}
          </p>
          <div className="text-lg text-gray-800 leading-loose whitespace-pre-line">
            {news.content || "এই সংবাদটির বিস্তারিত তথ্য এখনো সংগ্রহ করা হচ্ছে। আমাদের সাথেই থাকুন।"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;