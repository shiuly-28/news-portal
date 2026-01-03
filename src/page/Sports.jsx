import React from 'react';

const Sports = () => {
  // আসল নিউজ ইমেজ লিঙ্কের ডামি ভার্সন
  const smallNews = [
    { 
        id: 1, 
        title: "যুব বিশ্বকাপে বাংলাদেশের নেতৃত্ব দিচ্ছে আজিজুল হাকিম", 
        time: "৪ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=300&h=200&fit=crop" 
    },
    { 
        id: 2, 
        title: "স্টোকসের সাফ কথা, ম্যাককুলাম ছাড়া ইংল্যান্ড কল্পনা করা যায় না", 
        time: "৫ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=300&h=200&fit=crop" 
    },
    { 
        id: 3, 
        title: "নববর্ষের রাতে অগ্নিদগ্ধ হয়ে হাসপাতালে ফরাসি ফুটবলার", 
        time: "৫ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=300&h=200&fit=crop" 
    },
    { 
        id: 4, 
        title: "আইসিসি র‍্যাঙ্কিংয়ে কাঠগড়ায় বাংলাদেশের পিচ", 
        time: "৬ ঘণ্টা আগে", 
        img: "https://i.postimg.cc/qq5mxdq6/johranmamdani1.jpg" 
    },
    { 
        id: 3, 
        title: "নববর্ষের রাতে অগ্নিদগ্ধ হয়ে হাসপাতালে ফরাসি ফুটবলার", 
        time: "৫ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=300&h=200&fit=crop" 
    },
    { 
        id: 4, 
        title: "আইসিসি র‍্যাঙ্কিংয়ে কাঠগড়ায় বাংলাদেশের পিচ", 
        time: "৬ ঘণ্টা আগে", 
        img: "https://i.postimg.cc/QNySPhNj/images.jpg" 
    },
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
          {smallNews.map((news) => (
            <div key={news.id} className="flex gap-3 border-b border-gray-100 pb-4 last:border-0 cursor-pointer group">
              <div className="flex-1">
                <h3 className="font-bold text-[15px] leading-snug group-hover:text-blue-700 transition-colors">
                  {news.title}
                </h3>
                <span className="text-xs text-gray-400 mt-2 block">{news.time}</span>
              </div>
              <div className="w-24 h-16 relative flex-shrink-0">
                <img src={news.img} className="w-full h-full object-cover rounded-sm" alt="thumb" />
              </div>
            </div>
          ))}
        </div>

        {/* কলাম ২: মাঝখানের লিড নিউজ */}
        <div className="lg:col-span-6 lg:border-r border-gray-200 px-2">
          <div className="cursor-pointer group">
            <div className="w-full aspect-video overflow-hidden mb-4 rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=800&h=450&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Main" 
              />
            </div>
            <h1 className="text-3xl font-extrabold leading-tight group-hover:text-blue-700 transition-colors">
              আগের ম্যাচের ‘খলনায়ক’ মাহমুদউল্লাহ এবার নায়ক
            </h1>
            <p className="text-gray-600 mt-3 text-lg leading-relaxed">
              শেষ ৫ ওভারে জয়ের জন্য ৪৭ রান দরকার হয় রংপুর রাইডার্সের। ঠিক তখনই উইকেটে এসে ঝড় তুললেন মাহমুদউল্লাহ...
            </p>
            <span className="text-sm text-gray-400 mt-4 block border-b pb-6">৩ ঘণ্টা আগে</span>
          </div>

          {/* মাঝখানের নিচের ২ কলামের ছোট গ্রিড (প্রথম আলোর স্টাইল) */}
          <div className="grid grid-cols-2 gap-6 mt-6">
             <div className="group cursor-pointer">
                <img src="https://i.postimg.cc/23NWDHXX/47157197215172188192221464285212008768505184n.jpg" className="w-full h-32 object-cover mb-2" alt="sub" />
                <h4 className="font-bold text-sm group-hover:text-blue-700">বাংলাদেশ ফুটবল লিগ: মোহামেডান জয়ী</h4>
             </div>
             <div className="group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=400&h=250&fit=crop" className="w-full h-32 object-cover mb-2" alt="sub" />
                <h4 className="font-bold text-sm group-hover:text-blue-700">দুই ছক্কা মেশিন ও ৬ পেসার নিয়ে দক্ষিণ আফ্রিকা</h4>
             </div>
          </div>
        </div>

        {/* কলাম ৩: ডান পাশের সাইডবার */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-gray-200 p-4 shadow-sm">
            <h4 className="font-bold border-b border-red-600 pb-2 mb-4 text-gray-800">সর্বশেষ সংবাদ</h4>
            <ul className="space-y-4">
              {[
                "শরিফুল-তানভীরে দিশাহারা ঢাকা, কোটি টাকার নাইমের প্রথম ফিফটি",
                "অস্ট্রেলিয়া, ভারত ও পাকিস্তান—২০২৬-এ যারা আসবে",
                "রিলিজের আগেই আলোচনায় শাহরুখের নতুন সিনেমা"
              ].map((text, i) => (
                <li key={i} className="text-[14px] font-bold hover:text-red-600 cursor-pointer flex gap-2 leading-snug">
                  <span className="text-red-600 font-black">•</span> {text}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full relative group overflow-hidden rounded-2xl shadow-xl border border-gray-100">
  {/* স্পোর্টস রিলেটেড ইমেজ (যেমন: ফুটবল বা ক্রিকেট) */}
  <img 
    src="https://i.postimg.cc/k40BPcnx/pngtree-achievement-trophywinning-sport-background-basketball-best-victory-photo-image-26584516.jpg" 
    alt="Sports Advertisement" 
    className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
  />

  {/* ডার্ক এবং স্পোর্টস থিম ওভারলে */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-black/20 to-transparent flex flex-col items-center justify-end p-6 text-center">
    
    {/* বিজ্ঞাপন ট্যাগ */}
    <span className="absolute top-4 left-4 bg-yellow-400 text-black text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter shadow-lg">
      Live Sports
    </span>

    <h4 className="text-white text-2xl font-black mb-2 italic tracking-tighter group-hover:text-yellow-400 transition-colors">
      আসন্ন বিশ্বকাপের সব আপডেট পান সবার আগে!
    </h4>
    
    <p className="text-gray-200 text-sm mb-6 leading-tight font-medium">
      খেলাধুলার ব্রেকিং নিউজ এবং লাইভ স্কোর জানতে আমাদের স্পোর্টস অ্যাপ ডাউনলোড করুন।
    </p>

    {/* কল টু অ্যাকশন বাটন */}
    <button className="bg-yellow-400 hover:bg-white text-blue-900 font-black py-3 px-10 rounded-lg transition-all duration-300 transform active:scale-95 shadow-[0_5px_0_rgb(180,150,0)] active:translate-y-[2px] active:shadow-none">
      অ্যাপটি নামান
    </button>
    
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