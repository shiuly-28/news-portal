import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { newsData } from './data'; // নিশ্চিত হোন আপনার ডাটা পাথ ঠিক আছে

const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search).get("q");

  // এই অংশটুকুতে নতুন লজিকটি বসানো হয়েছে
  const filteredNews = query 
    ? newsData.filter(news => {
        const title = news.title ? news.title.toLowerCase() : "";
        const category = news.category ? news.category.toLowerCase() : "";
        const searchWord = query.toLowerCase().trim();

        // টাইটেল অথবা ক্যাটাগরির সাথে মিললে রিটার্ন করবে
        return title.includes(searchWord) || category.includes(searchWord);
      }) 
    : [];

  return (
    <div className="container mx-auto px-4 py-10 min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-6">
        "{query || ''}" এর ফলাফল: {filteredNews.length}টি
      </h2>
      
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredNews.map(news => (
            <Link key={news.id} to={`/news/${news.id}`} className="border p-4 rounded shadow-sm hover:shadow-md transition group">
              <div className="overflow-hidden rounded mb-2">
                <img 
                  src={news.image || news.img} 
                  alt={news.title} 
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform" 
                />
              </div>
              <h3 className="font-bold group-hover:text-red-600">{news.title}</h3>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">দুঃখিত, কোনো খবর পাওয়া যায়নি।</p>
          <Link to="/" className="text-red-600 font-bold mt-4 inline-block underline">হোমে ফিরে যান</Link>
        </div>
      )}
    </div>
  );
};

export default SearchPage;