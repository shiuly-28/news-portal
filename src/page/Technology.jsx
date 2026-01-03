import React from 'react';
import { FaRegClock, FaChevronRight, FaRocket, FaLaptopCode, FaMicrochip } from 'react-icons/fa';

const Technology = () => {
    // ১. টেকনোলজি নিউজের মেইন ডাটা
    const techNews = [
        { id: 1, category: "স্মার্টফোন", title: "আইফোন ১৭ প্রো: থাকছে সম্পূর্ণ নতুন ডিজাইনের ক্যামেরা সেটআপ", time: "২ ঘণ্টা আগে", img: "https://i.postimg.cc/g2jkHFS0/iphone-20250729175106.webp" },
        { id: 2, category: "এআই", title: "চ্যাটজিপিটি-৫ আসছে জুনে, মানুষের মতো চিন্তাশক্তি থাকবে বলে দাবি ওপেনএআই-এর", time: "৪ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop" },
        { id: 3, category: "মহাকাশ", title: "মঙ্গল গ্রহে পানির সন্ধান পেল নাসার নতুন রোভার পারসিভারেন্স", time: "৫ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&h=250&fit=crop" },
        { id: 4, category: "গ্যাজেট", title: "বাজারে এলো বিশ্বের প্রথম ফোল্ডেবল ল্যাপটপ, দাম সাধারণের নাগালের বাইরে", time: "৬ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=250&fit=crop" },
        { id: 5, category: "সাইবার নিরাপত্তা", title: "ফেসবুক ও ইনস্টাগ্রামে বড় ধরনের ডাটা ব্রিচ, পাসওয়ার্ড বদলের পরামর্শ বিশেষজ্ঞদের", time: "৮ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop" },
        { id: 6, category: "ইন্টারনেট", title: "বাংলাদেশে স্টারলিঙ্ক স্যাটেলাইট ইন্টারনেট সেবার পরীক্ষামূলক কার্যক্রম শুরু", time: "১০ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=250&fit=crop" },
        { id: 7, category: "গেমস", title: "জিটিএ সিক্স (GTA 6) এর নতুন ট্রেলার প্রকাশ, গেমারদের মধ্যে উত্তেজনা", time: "১২ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop" },
        { id: 8, category: "অটোমোবাইল", title: "টেসলার নতুন সাশ্রয়ী ইলেকট্রিক কার আসছে বাজারে, এক চার্জে চলবে ৫০০ কিমি", time: "১৪ ঘণ্টা আগে", img: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=400&h=250&fit=crop" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-gray-900 bg-white">
            {/* হেডার সেকশন */}
            <div className="border-b-2 border-blue-600 mb-8 flex items-center gap-3">
                <div className="bg-blue-600 p-2 text-white rounded-lg shadow-lg">
                    <FaMicrochip  className="animate-spin-slow" />
                </div>
                <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight">প্রযুক্তি সংবাদ</h2>
                <div className="flex-grow h-[1px] bg-gray-100"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* --- বাম পাশ: ৮টি মেইন কার্ড --- */}
                <div className="lg:col-span-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {techNews.map((news) => (
                            <div key={news.id} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl shadow-md mb-4 aspect-video">
                                    <img 
                                        src={news.img} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                        alt={news.title} 
                                    />
                                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                                        {news.category}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold leading-snug group-hover:text-blue-600 transition-colors mb-2">
                                    {news.title}
                                </h3>
                                <div className="flex items-center gap-2 text-[12px] text-gray-400">
                                    <FaRegClock /> <span>{news.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- ডান পাশ: টেক সাইডবার --- */}
                <aside className="lg:col-span-4 space-y-10">
                    
                    {/* ১. ফিচারড ট্রেন্ডিং (টেক ডাইনামিক) */}
                    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                        <FaRocket className="absolute -top-4 -right-4 text-7xl text-blue-500/20 rotate-12" />
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-gray-700 pb-3">
                            <FaLaptopCode className="text-blue-400" /> ডেভেলপার কর্নার
                        </h4>
                        <ul className="space-y-6 relative z-10">
                            {[
                                "২০২৬ সালে শিখতে হবে এমন ৫টি প্রোগ্রামিং ল্যাঙ্গুয়েজ",
                                "কেন রিঅ্যাক্ট (React) এখনো সবার প্রিয়?",
                                "এআই কোডিং টুলস: ডেভেলপারদের চাকরি কি ঝুঁকির মুখে?",
                                "গিটহাব কোপাইলটের নতুন আপডেট"
                            ].map((item, i) => (
                                <li key={i} className="group cursor-pointer flex gap-4 items-start">
                                    <span className="text-blue-500 font-black">0{i+1}</span>
                                    <p className="text-sm font-semibold group-hover:text-blue-400 transition-colors">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ২. টেকনোলজি রিভিউ বিজ্ঞাপন */}
                    <div className="bg-blue-50 p-6 rounded-2xl border-2 border-dashed border-blue-200">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg shadow-blue-200">
                                <FaMicrochip  />
                            </div>
                            <h5 className="font-bold text-blue-900 mb-2">আপনার কি টেক রিভিউ দরকার?</h5>
                            <p className="text-xs text-blue-700 mb-4 leading-relaxed">
                                নতুন গ্যাজেট বা সফটওয়্যারের প্রমোশনাল রিভিউ এর জন্য যোগাযোগ করুন আমাদের বিজ্ঞাপন টিমে।
                            </p>
                            <button className="bg-blue-600 text-white text-xs font-bold py-2 px-6 rounded-lg hover:bg-gray-900 transition-all flex items-center gap-2 mx-auto">
                                কন্টাক্ট করুন <FaChevronRight />
                            </button>
                        </div>
                    </div>

                </aside>

            </div>
        </div>
    );
};

export default Technology;