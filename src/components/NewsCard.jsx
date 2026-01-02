import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  return (
    <Link to={`/news/${news.id}`} className="group block bg-white border border-gray-100 rounded-sm hover:shadow-lg transition-all duration-300">
      <div className="overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <span className="text-red-700 text-xs font-bold uppercase tracking-wider">
          {news.category}
        </span>
        <h3 className="text-lg font-bold mt-2 leading-tight group-hover:text-blue-600 transition-colors">
          {news.title}
        </h3>
        <p className="text-gray-600 text-sm mt-3 line-clamp-2">
          {news.description}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-50 text-xs text-gray-400 font-semibold">
          {news.date}
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;