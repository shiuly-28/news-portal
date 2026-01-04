import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  return (
    <Link to={`/news/${news.id}`} className="group block mb-4">
      <div className="overflow-hidden rounded-sm mb-3">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div>
        <h3 className="text-[17px] font-bold leading-[1.3] text-gray-900 group-hover:text-blue-700 transition-colors">
          {news.title}
        </h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2 leading-relaxed">
          {news.description}
        </p>
        <div className="mt-3 text-[11px] text-gray-400 font-bold uppercase flex items-center gap-2">
          <span className="text-red-700">{news.category}</span>
          <span>•</span>
          <span>{news.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;