import React, { useState, useEffect } from 'react';

const Sports = () => {
  // লোডিং স্টেট
  const [loading, setLoading] = useState(true);

  // ২ সেকেন্ডের কৃত্রিম লোডিং টাইম
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const smallNews = [
    { id: 1, title: "যুব বিশ্বকাপে বাংলাদেশের নেতৃত্ব দিচ্ছে আজিজুল হাকিম", time: "৪ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=300&h=200&fit=crop" },
    { id: 2, title: "স্টোকসের সাফ কথা, ম্যাককুলাম ছাড়া ইংল্যান্ড কল্পনা করা যায় না", time: "৫ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=300&h=200&fit=crop" },
    { id: 3, title: "নববর্ষের রাতে অগ্নিদগ্ধ হয়ে হাসপাতালে ফরাসি ফুটবলার", time: "৫ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=300&h=200&fit=crop" },
    { id: 4, title: "আইসিসি র‍্যাঙ্কিংয়ে কাঠগড়ায় বাংলাদেশের পিচ", time: "৬ ঘণ্টা আগে", img: "https://i.postimg.cc/qq5mxdq6/johranmamdani1.jpg" },
    { id: 5, title: "নববর্ষের রাতে অগ্নিদগ্ধ হয়ে হাসপাতালে ফরাসি ফুটবলার", time: "৫ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=300&h=200&fit=crop" },
    { id: 6, title: "আইসিসি র‍্যাঙ্কিংয়ে কাঠগড়ায় বাংলাদেশের পিচ", time: "৬ ঘণ্টা আগে", img: "https://i.postimg.cc/QNySPhNj/images.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-gray-900 bg-white">
      {/* ক্যাটেগরি হেডার */}
      <div className="border-b-2 border-red-600 mb-6 flex items-center">
        <h2 className="text-2xl font-bold text-red-600 pb-1 pr-4">জাতীয়</h2>
        <div className="flex-grow h-[1px] bg-gray-200"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* কলাম ১: বাম পাশের লিস্ট */}
        <div className="lg:col-span-3 space-y-5 lg:border-r border-gray-200 pr-5">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-3 border-b border-gray-100 pb-4 animate-pulse">
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-100 rounded w-1/4"></div>
                </div>
                <div className="w-24 h-16 bg-gray-200 rounded-sm flex-shrink-0"></div>
              </div>
            ))
          ) : (
            smallNews.map((news) => (
              <div key={news.id} className="flex gap-3 border-b border-gray-100 pb-4 last:border-0 cursor-pointer group">
                <div className="flex-1">
                  <h3 className="font-bold text-[15px] leading-snug group-hover:text-blue-700 transition-colors">{news.title}</h3>
                  <span className="text-xs text-gray-400 mt-2 block">{news.time}</span>
                </div>
                <div className="w-24 h-16 relative flex-shrink-0">
                  <img src={news.img} className="w-full h-full object-cover rounded-sm" alt="thumb" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* কলাম ২: মাঝখানের লিড নিউজ */}
        <div className="lg:col-span-6 lg:border-r border-gray-200 px-4">
          {loading ? (
            <div className="animate-pulse">
              <div className="w-full aspect-video bg-gray-200 rounded-sm mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-100 rounded w-2/3"></div>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="space-y-3">
                   <div className="h-36 bg-gray-200 rounded"></div>
                   <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
                <div className="space-y-3">
                   <div className="h-36 bg-gray-200 rounded"></div>
                   <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* ১. মেইন বড় নিউজ (লিড) */}
              <div className="cursor-pointer group">
                <div className="w-full aspect-video overflow-hidden mb-4 rounded-sm">
                  <img src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=800&h=450&fit=crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Main" />
                </div>
                <h1 className="text-3xl font-extrabold leading-tight group-hover:text-blue-700 transition-colors">আগের ম্যাচের ‘খলনায়ক’ মাহমুদউল্লাহ এবার নায়ক</h1>
                <p className="text-gray-600 mt-3 text-lg leading-relaxed">শেষ ৫ ওভারে জয়ের জন্য ৪৭ রান দরকার হয় রংপুর রাইডার্সের। ঠিক তখনই উইকেটে এসে ঝড় তুললেন মাহমুদউল্লাহ...</p>
                <span className="text-sm text-gray-400 mt-4 block border-b pb-6">৩ ঘণ্টা আগে</span>
              </div>

              {/* ২. মাঝখানের ২ কলামের মাঝারি কার্ড */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pb-6 border-b border-gray-100">
                <div className="group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=400&h=250&fit=crop" className="w-full h-36 object-cover mb-3 rounded-sm" alt="sub" />
                  <h4 className="font-bold text-[17px] leading-snug group-hover:text-blue-700 transition-colors">বিপিএল ২০২৬: সাকিবের অলরাউন্ড নৈপুণ্যে ফরচুন বরিশালের বড় জয়</h4>
                </div>
                <div className="group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=400&h=250&fit=crop" className="w-full h-36 object-cover mb-3 rounded-sm" alt="sub" />
                  <h4 className="font-bold text-[17px] leading-snug group-hover:text-blue-700 transition-colors">তামিমের সেঞ্চুরি মিস, আফসোস নিয়ে ফিরলেন ড্রেসিংরুমে</h4>
                </div>
              </div>

              {/* ৩. নিচে ছোট থাম্বনেইল গ্রিড */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
                <div className="flex gap-4 group cursor-pointer items-start">
                  <div className="w-24 h-20 flex-shrink-0"><img src="https://i.postimg.cc/k4KKHNDg/bd-F-team-deshrupantor.jpg" className="w-full h-full object-cover rounded shadow-sm" alt="thumb" /></div>
                  <h4 className="font-bold text-sm leading-tight group-hover:text-blue-700 transition-colors">জাতীয় দলে ডাক পেলেন ৫ নতুন মুখ, বাদ পড়লেন অভিজ্ঞরা</h4>
                </div>
                <div className="flex gap-4 group cursor-pointer items-start">
                  <div className="w-24 h-20 flex-shrink-0"><img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=200" className="w-full h-full object-cover rounded shadow-sm" alt="thumb" /></div>
                  <h4 className="font-bold text-sm leading-tight group-hover:text-blue-700 transition-colors">বিশ্বকাপ বাছাইপর্ব: আর্জেন্টিনার বড় জয়, ড্র করল ব্রাজিল</h4>
                </div>
                <div className="flex gap-4 group cursor-pointer items-start">
                  <div className="w-24 h-20 flex-shrink-0"><img src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=200" className="w-full h-full object-cover rounded shadow-sm" alt="thumb" /></div>
                  <h4 className="font-bold text-sm leading-tight group-hover:text-blue-700 transition-colors">চ্যাম্পিয়ন্স লিগ: শেষ মুহূর্তের গোলে বার্সেলোনার নাটকীয় জয়</h4>
                </div>
                <div className="flex gap-4 group cursor-pointer items-start">
                  <div className="w-24 h-20 flex-shrink-0"><img src="https://images.unsplash.com/photo-1552667466-07770ae110d0?w=200" className="w-full h-full object-cover rounded shadow-sm" alt="thumb" /></div>
                  <h4 className="font-bold text-sm leading-tight group-hover:text-blue-700 transition-colors">পিএসজি ছেড়ে নতুন ক্লাবে যোগ দিচ্ছেন এমবাপ্পে?</h4>
                </div>
              </div>
            </>
          )}
        </div>

        {/* কলাম ৩: ডান পাশের সাইডবার */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-gray-200 p-4 shadow-sm">
            <h4 className="font-bold border-b border-red-600 pb-2 mb-4 text-gray-800">সর্বশেষ সংবাদ</h4>
            <ul className="space-y-4">
              {loading ? (
                [...Array(3)].map((_, i) => <div key={i} className="h-4 bg-gray-100 rounded animate-pulse w-full"></div>)
              ) : (
                ["শরিফুল-তানভীরে দিশাহারা ঢাকা, কোটি টাকার নাইমের প্রথম ফিফটি", "অস্ট্রেলিয়া, ভারত ও পাকিস্তান—২০২৬-এ যারা আসবে", "রিলিজের আগেই আলোচনায় শাহরুখের নতুন সিনেমা"].map((text, i) => (
                  <li key={i} className="text-[14px] font-bold hover:text-red-600 cursor-pointer flex gap-2 leading-snug">
                    <span className="text-red-600 font-black">•</span> {text}
                  </li>
                ))
              )}
            </ul>
          </div>
          
          <div className="w-full relative group overflow-hidden rounded-2xl shadow-xl border border-gray-100">
            <img src="https://i.postimg.cc/k40BPcnx/pngtree-achievement-trophywinning-sport-background-basketball-best-victory-photo-image-26584516.jpg" alt="Sports Advertisement" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-black/20 to-transparent flex flex-col items-center justify-end p-6 text-center">
              <span className="absolute top-4 left-4 bg-yellow-400 text-black text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter shadow-lg">Live Sports</span>
              <h4 className="text-white text-2xl font-black mb-2 italic tracking-tighter group-hover:text-yellow-400 transition-colors">আসন্ন বিশ্বকাপের সব আপডেট পান সবার আগে!</h4>
              <p className="text-gray-200 text-sm mb-6 leading-tight font-medium">খেলাধুলার ব্রেকিং নিউজ এবং লাইভ স্কোর জানতে আমাদের স্পোর্টস অ্যাপ ডাউনলোড করুন।</p>
              <button className="bg-yellow-400 hover:bg-white text-blue-900 font-black py-3 px-10 rounded-lg transition-all duration-300 transform active:scale-95 shadow-[0_5px_0_rgb(180,150,0)]">অ্যাপটি নামান</button>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <span className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Live Updates Available</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sports;