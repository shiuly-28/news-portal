import React from 'react';
import { useParams } from 'react-router-dom';
import { newsData } from '../data';

const NewsDetails = () => {
  const { id } = useParams();
  const news = newsData.find(item => item.id === parseInt(id));

  if (!news) return <div className="text-center py-20">খবরটি পাওয়া যায়নি!</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm text-gray-500 mb-4">
        Home / {news.category}
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        {news.title}
      </h1>
      <div className="text-gray-500 text-sm mb-6 pb-6 border-b">
        প্রকাশিত: {news.date}
      </div>
      <img 
        src={news.image} 
        alt={news.title} 
        className="w-full h-auto rounded-lg mb-8 shadow-sm"
      />
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        <p className="mb-4 text-xl font-semibold text-gray-700">
          {news.description}
        </p>
        <p className="whitespace-pre-line">
          {news.content}
        </p>
      </div>
    </div>
  );
};

export default NewsDetails;