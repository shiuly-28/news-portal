import React from 'react';
import { newsData } from '../data';
import NewsCard from '../components/NewsCard';

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-6 border-b-2 border-red-600 pb-2">
        <div className="w-4 h-4 bg-red-600"></div>
        <h2 className="text-2xl font-bold uppercase">Latest News</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map(news => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </main>
  );
};

export default Home;