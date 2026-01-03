import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaRegClock, FaChevronRight } from 'react-icons/fa';
// ১. Link ইমপোর্ট করা হয়েছে
import { Link } from 'react-router-dom';

const internationalNews = [
    {
        id: "int-01",
        title: "মধ্যপ্রাচ্যে চরম উত্তেজনা: কূটনৈতিক সমাধানের পথে বিশ্বনেতারা",
        summary: "গাজা ও লেবানন ইস্যুতে বিশ্বজুড়ে উদ্বেগ বাড়ছে। উত্তেজনা কমাতে জরুরি বৈঠকে বসছে জাতিসংঘ...",
        category: "International",
        time: "৩ ঘণ্টা আগে",
        imageUrl: "https://picsum.photos/seed/middleeast/800/500",
        relatedLinks: [
            "ইসরায়েলি হামলায় আরও ১০ জন নিহত",
            "যুদ্ধবিরতির আহ্বান জানিয়েছে ইউরোপীয় ইউনিয়ন",
            "মার্কিন পররাষ্ট্রমন্ত্রীর মধ্যপ্রাচ্য সফর শুরু"
        ]
    },
    {
        id: "int-02",
        title: "যুক্তরাষ্ট্রের নির্বাচনে ডোনাল্ড ট্রাম্পের বড় জয়, বিশ্ব রাজনীতিতে নতুন মোড়",
        summary: "ঐতিহাসিক ব্যবধানে জয়ের পর বিশ্বনেতাদের অভিনন্দনে ভাসছেন নতুন প্রেসিডেন্ট। কী হতে পারে আগামীর পররাষ্ট্রনীতি?",
        category: "International",
        time: "৫ ঘণ্টা আগে",
        imageUrl: "https://picsum.photos/seed/usa/800/500",
        relatedLinks: [
            "অভিনন্দন জানালেন মোদি ও পুতিন",
            "অর্থনীতিতে বড় ধরনের পরিবর্তনের আভাস",
            "বিশ্ববাজারে তেলের দামে বড় পতন"
        ]
    },
    {
        id: "int-03",
        title: "ইউক্রেন-রাশিয়া যুদ্ধ: কিয়েভে ড্রোন হামলা তীব্রতর করছে মস্কো",
        summary: "গত ২৪ ঘণ্টায় ইউক্রেনের জ্বালানি অবকাঠামো লক্ষ্য করে রেকর্ড সংখ্যক ড্রোন হামলা চালিয়েছে রাশিয়া। বিদ্যুৎহীন লাখো মানুষ...",
        category: "International",
        time: "১ ঘণ্টা আগে",
        imageUrl: "https://picsum.photos/seed/ukraine/800/500",
        relatedLinks: [
            "পাল্টা হামলার প্রস্তুতি নিচ্ছে ইউক্রেনীয় বাহিনী",
            "ইউরোপে নতুন করে শরণার্থী সংকটের আশঙ্কা",
            "নতুন ক্ষেপণাস্ত্র সহায়তার ঘোষণা ন্যাটোর"
        ]
    },
    {
        id: "int-04",
        title: "বিশ্ববাজারে রেকর্ড উচ্চতায় স্বর্ণের দাম, অস্থির শেয়ারবাজার",
        summary: "আন্তর্জাতিক বাজারে প্রতি আউন্স স্বর্ণের দাম রেকর্ড ছাড়িয়েছে। মুদ্রাস্ফীতি ও বৈশ্বিক অস্থিরতায় বিনিয়োগকারীরা নিরাপদ আশ্রয়ের দিকে ঝুঁকছেন...",
        category: "International",
        time: "২ ঘণ্টা আগে",
        imageUrl: "https://picsum.photos/seed/gold/800/500",
        relatedLinks: [
            "বাংলাদেশেও বাড়তে পারে স্বর্ণের দাম",
            "ডলারের বিপরীতে আরও দুর্বল হচ্ছে ইউরো",
            "শেয়ারবাজারে বড় ধস এশিয়ার দেশগুলোতে"
        ]
    },
    {
        id: "int-05",
        title: "জলবায়ু পরিবর্তন: ২০২৫ ছিল ইতিহাসের উষ্ণতম বছর",
        summary: "বিশ্ব আবহাওয়া সংস্থার রিপোর্ট অনুযায়ী, গত বছর বৈশ্বিক তাপমাত্রা সব রেকর্ড ছাড়িয়েছে। হিমালয়ের বরফ গলছে আশঙ্কাজনক হারে...",
        category: "International",
        time: "৪ ঘণ্টা আগে",
        imageUrl: "https://picsum.photos/seed/climate/800/500",
        relatedLinks: [
            "সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধিতে ঝুঁকির মুখে ঢাকা",
            "কার্বন নিঃসরণ কমাতে নতুন বিশ্ব চুক্তির প্রস্তাব",
            "ব্রাজিলের আমাজন বন রক্ষায় কঠোর আইন"
        ]
    },
    {
        id: "int-06",
        title: "ভারত-পাকিস্তান সীমান্ত উত্তেজনা: সীমান্তে সেনাসতর্কতা জারি",
        summary: "কাশ্মীর সীমান্তে গোলাগুলির পর দুই দেশের মধ্যে নতুন করে উত্তেজনা দেখা দিয়েছে। শান্তি বজায় রাখার আহ্বান জানিয়েছে প্রতিবেশী দেশগুলো...",
        category: "International",
        time: "৬ ঘণ্টা আগে",
        imageUrl: "https://picsum.photos/seed/border/800/500",
        relatedLinks: [
            "সীমান্তবর্তী এলাকার বাসিন্দাদের নিরাপদ স্থানে সরিয়ে নেওয়া হচ্ছে",
            "পররাষ্ট্র মন্ত্রণালয়ের পক্ষ থেকে জরুরি বিবৃতি",
            "ক্রিকেট কূটনীতি কি পারবে উত্তেজনা কমাতে?"
        ]
    }
];

export default function International() {
    return (
        <div className="bg-white min-h-screen font-serif">
            <div className="container mx-auto px-4 py-4 border-b-2 border-red-600 mb-8 flex items-center gap-2">
                <FaGlobe className="text-red-600 text-xl" />
                <h1 className="text-2xl font-bold text-gray-900">আন্তর্জাতিক নিউজ</h1>
            </div>

            <main className="container mx-auto px-4 space-y-16">
                {internationalNews.map((news) => (
                    <div key={news.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b pb-12 last:border-0">
                        
                        <div className="lg:col-span-8 group">
                            {/* ২. ইমেজের সাথে লিংক কানেক্ট করা হয়েছে */}
                            <Link to={`/international-news/${news.id}`}>
                                <motion.div 
                                    whileHover={{ scale: 1.01 }}
                                    className="overflow-hidden rounded-lg mb-4 cursor-pointer"
                                >
                                    <img 
                                        src={news.imageUrl} 
                                        alt={news.title}
                                        className="w-full h-[450px] object-cover"
                                    />
                                </motion.div>
                            </Link>

                            {/* ৩. টাইটেলের সাথে লিংক কানেক্ট করা হয়েছে */}
                            <Link to={`/international-news/${news.id}`}>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-blue-700 cursor-pointer mb-3 leading-snug">
                                    {news.title}
                                </h2>
                            </Link>

                            <p className="text-gray-600 text-lg mb-4 line-clamp-3">
                                {news.summary}
                            </p>
                            <div className="flex items-center text-gray-400 text-sm gap-4">
                                <span className="flex items-center gap-1 font-bold text-red-600">
                                    <FaRegClock /> {news.time}
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-4 bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-lg font-bold border-b pb-3 mb-4 text-gray-800 flex items-center justify-between">
                                সংশ্লিষ্ট খবর 
                                <FaChevronRight className="text-xs text-red-600" />
                            </h3>
                            <ul className="space-y-4">
                                {news.relatedLinks.map((link, i) => (
                                    <li key={i} className="flex gap-3 group cursor-pointer border-b border-gray-200 pb-3 last:border-0">
                                        <div className="min-w-[4px] h-4 bg-red-600 mt-1"></div>
                                        <p className="text-[16px] font-semibold text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">
                                            {link}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-8 p-4 bg-blue-100 rounded-lg text-center">
                                <p className="text-xs text-blue-800 font-bold uppercase tracking-widest">Sponsored</p>
                                <p className="text-sm font-bold mt-1">বিশ্বের সবচেয়ে দামি শহরগুলোর তালিকায় ঢাকা কত নম্বরে?</p>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}