import React, { useState, useEffect } from 'react';
import { FaRegClock, FaFire } from 'react-icons/fa';

const Enterainment = () => {
    // লোডিং স্টেট
    const [loading, setLoading] = useState(true);

    // কৃত্রিম লোডিং টাইম (২ সেকেন্ড)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const mainNews = [
        { id: 1, category: "জাতীয়", title: "মেট্রোরেলের কমলাপুর স্টেশনের নির্মাণ কাজ ৯৫ শতাংশ শেষ, উদ্বোধন মার্চে", time: "১৫ মিনিট আগে", img: "https://i.postimg.cc/pdCVYc29/01fa1f1787a40a05a9c3ea4ca9e9c83a-654711639ff3d.webp" },
        { id: 2, category: "অর্থনীতি", title: "রেকর্ড গড়েছে রেমিট্যান্স, এক মাসে প্রবাসীরা পাঠালেন ২.৫ বিলিয়ন ডলার", time: "৩০ মিনিট আগে", img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop" },
        { id: 3, category: "আন্তর্জাতিক", title: "ইউক্রেন-রাশিয়া যুদ্ধ বন্ধে জাতিসংঘে নতুন শান্তি প্রস্তাব পাস", time: "১ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=250&fit=crop" },
        { id: 4, category: "খেলা", title: "বিপিএল ২০২৬: তামিম-হৃদয়ের ব্যাটে বড় জয় পেল ফরচুন বরিশাল", time: "২ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
        { id: 5, category: "বিনোদন", title: "কান চলচ্চিত্র উৎসবে জয়া আহসানের নতুন সিনেমার বিশ্ব প্রিমিয়ার", time: "৩ ঘণ্টা আগে", img: "https://i.postimg.cc/rmG1JkD9/342853334.gif" },
        { id: 6, category: "বিজ্ঞান ও প্রযুক্তি", title: "বাংলাদেশে ৫জি সেবার পরিধি বাড়ছে, নতুন ৫টি শহরে টাওয়ার স্থাপন", time: "৪ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=400&h=250&fit=crop" },
        { id: 7, category: "স্বাস্থ্য", title: "শীতের তীব্রতা বাড়ছে শ্বাসকষ্টজনিত রোগ, মাস্ক পরার পরামর্শ চিকিৎসকদের", time: "৫ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400&h=250&fit=crop" },
        { id: 8, category: "লাইফস্টাইল", title: "শীতকালীন পর্যটনে জমজমাট সাজেক ভ্যালি, রেকর্ড পর্যটকের সমাগম", time: "৬ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=250&fit=crop" },
    ];

    const trendingNews = [
        { id: 101, title: "বাজারে স্বর্ণের দাম আবার বেড়েছে, ভরি ছাড়াল ১ লাখ ২৫ হাজার", time: "১০ মিনিট আগে", img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=200&h=150&fit=crop" },
        { id: 102, title: "ফেসবুক-ইনস্টাগ্রাম সার্ভার জটিলতা কাটিয়ে সচল, কারণ জানাল মেটা", time: "৪০ মিনিট আগে", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=150&fit=crop" },
        { id: 103, title: "ঢাকায় সিনেমার নতুন শুটিং সেটে অগ্নিকাণ্ড, অল্পের জন্য রক্ষা", time: "১ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=150&fit=crop" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 bg-white font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* --- বাম পাশ: ৮টি কার্ড --- */}
                <div className="lg:col-span-8">
                    <div className="flex justify-between items-center mb-6 border-b-2 border-red-600 pb-2">
                        <h2 className="text-2xl font-bold text-gray-800">সর্বশেষ সংবাদ</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {loading ? (
                            // বাম পাশের জন্য Skeleton
                            [...Array(6)].map((_, i) => (
                                <div key={i} className="bg-white rounded-lg overflow-hidden border border-gray-100 animate-pulse">
                                    <div className="h-44 bg-gray-200"></div>
                                    <div className="p-4 space-y-3">
                                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                        <div className="h-3 bg-gray-100 rounded w-1/4"></div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            mainNews.map((news) => (
                                <div key={news.id} className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                                    <div className="relative h-44 overflow-hidden">
                                        <img src={news.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="news" />
                                        <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                                            {news.category}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[17px] font-bold text-gray-900 leading-snug group-hover:text-blue-700 mb-2">
                                            {news.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-gray-400 text-[12px]">
                                            <FaRegClock /> <span>{news.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* --- ডান পাশ: সাইডবার --- */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
                            <FaFire className="text-orange-500 animate-bounce" /> জনপ্রিয় খবর
                        </h3>
                        
                        <div className="space-y-6">
                            {loading ? (
                                // সাইডবারের জন্য Skeleton
                                [...Array(3)].map((_, i) => (
                                    <div key={i} className="flex gap-3 animate-pulse border-b border-gray-200 pb-4 last:border-0">
                                        <div className="w-24 h-16 bg-gray-200 rounded-md"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                trendingNews.map((news) => (
                                    <div key={news.id} className="flex gap-3 group cursor-pointer border-b border-gray-200 pb-4 last:border-0">
                                        <div className="w-24 h-16 flex-shrink-0 rounded-md overflow-hidden">
                                            <img src={news.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="trend" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-[14px] font-bold text-gray-800 group-hover:text-red-600 leading-tight">
                                                {news.title}
                                            </h4>
                                            <span className="text-[11px] text-gray-400 mt-1 block">{news.time}</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {!loading && (
                            <button className="w-full mt-6 py-2 border border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all text-sm">
                                সব খবর দেখুন
                            </button>
                        )}
                    </div>

                    {/* বিজ্ঞাপন কার্ড (এটি সাধারণত লোডিং স্টেটের বাইরে রাখা ভালো, অথবা বিজ্ঞাপন ডাটা থাকলে স্কেলিটন দেয়া যায়) */}
                    <div className="relative rounded-2xl overflow-hidden group shadow-lg h-[400px]">
                        <img 
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=600&fit=crop" 
                            className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                            alt="ad" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent flex flex-col justify-end p-6 text-center">
                            <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded">SPONSORED</span>
                            <h4 className="text-white font-black text-xl mb-4 italic uppercase">নতুন কালেকশনে ৫০% ছাড়!</h4>
                            <button className="bg-yellow-400 text-black font-black py-2 rounded-md hover:bg-white transition-colors">শপ নাও</button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Enterainment;