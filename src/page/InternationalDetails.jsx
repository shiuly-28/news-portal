// import React, { useEffect } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import { FaArrowLeft, FaGlobe, FaRegClock, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

// // আপনার ৬টি ডাটা এখানে (অথবা ইমপোর্ট করা)
// const internationalNews = [
//     {
//         id: "int-01",
//         title: "মধ্যপ্রাচ্যে চরম উত্তেজনা: কূটনৈতিক সমাধানের পথে বিশ্বনেতারা",
//         description: "গাজা ও লেবানন সীমান্তে সংঘাত তীব্রতর হওয়ায় মধ্যপ্রাচ্য এখন এক অস্থিতিশীল পরিস্থিতির মধ্য দিয়ে যাচ্ছে। বিশ্বনেতারা এই উত্তেজনা কমাতে কূটনৈতিক তৎপরতা শুরু করেছেন। জাতিসংঘ নিরাপত্তা পরিষদ একটি জরুরি বৈঠকের আহ্বান জানিয়েছে। ইউরোপীয় ইউনিয়ন এবং মার্কিন যুক্তরাষ্ট্র উভয় পক্ষকেই সংযত হওয়ার অনুরোধ জানিয়েছে। পরিস্থিতি নিয়ন্ত্রণে না এলে এটি একটি আঞ্চলিক যুদ্ধে রূপ নিতে পারে বলে আশঙ্কা করছেন বিশেষজ্ঞরা।",
//         category: "International",
//         time: "৩ ঘণ্টা আগে",
//         imageUrl: "https://picsum.photos/seed/middleeast/800/500",
//     },
//     {
//         id: "int-02",
//         title: "যুক্তরাষ্ট্রের নির্বাচনে ডোনাল্ড ট্রাম্পের বড় জয়, বিশ্ব রাজনীতিতে নতুন মোড়",
//         description: "যুক্তরাষ্ট্রের ৪৭তম প্রেসিডেন্ট হিসেবে ডোনাল্ড ট্রাম্পের বিজয় বিশ্ব রাজনীতিতে এক নতুন সমীকরণ তৈরি করেছে। অর্থনীতি এবং অভিবাসন নীতিতে বড় ধরনের পরিবর্তনের আভাস দিয়েছেন তিনি। বিশ্বনেতারা তাকে অভিনন্দন জানাচ্ছেন, তবে চীন-মার্কিন বাণিজ্য সম্পর্ক নিয়ে অনেক দেশই এখন তাদের ভবিষ্যৎ পরিকল্পনা পুনরায় মূল্যায়ন করছে।",
//         category: "International",
//         time: "৫ ঘণ্টা আগে",
//         imageUrl: "https://picsum.photos/seed/usa/800/500",
//     },
//     {
//         id: "int-03",
//         title: "ইউক্রেন-রাশিয়া যুদ্ধ: কিয়েভে ড্রোন হামলা তীব্রতর করছে মস্কো",
//         description: "গত ২৪ ঘণ্টায় ইউক্রেনের জ্বালানি অবকাঠামো লক্ষ্য করে রেকর্ড সংখ্যক ড্রোন হামলা চালিয়েছে রাশিয়া। শীতের শুরুতে রাশিয়ার এই ড্রোন হামলা ইউক্রেনের বিদ্যুৎ সরবরাহ ব্যবস্থাকে পঙ্গু করে দিয়েছে। কিয়েভসহ বড় বড় শহরগুলোতে লোডশেডিং চরম আকার ধারণ করেছে। ন্যাটো দেশগুলো থেকে আরও শক্তিশালী বিমান প্রতিরক্ষা ব্যবস্থা চেয়েছেন জেলেনস্কি।",
//         category: "International",
//         time: "১ ঘণ্টা আগে",
//         imageUrl: "https://picsum.photos/seed/ukraine/800/500",
//     },
//     {
//         id: "int-04",
//         title: "বিশ্ববাজারে রেকর্ড উচ্চতায় স্বর্ণের দাম, অস্থির শেয়ারবাজার",
//         description: "আন্তর্জাতিক বাজারে প্রতি আউন্স স্বর্ণের দাম রেকর্ড ছাড়িয়েছে। বৈশ্বিক রাজনৈতিক অস্থিরতা ও মুদ্রাস্ফীতির কারণে বিনিয়োগকারীরা নিরাপদ আশ্রয়ের দিকে ঝুঁকছেন। এর প্রভাবে এশিয়ার বাজারগুলোতে মুদ্রাস্ফীতি বাড়ার আশঙ্কা দেখা দিয়েছে। ডলারের মান উঠানামা করায় শেয়ারবাজারেও অস্থিরতা লক্ষ করা যাচ্ছে।",
//         category: "International",
//         time: "২ ঘণ্টা আগে",
//         imageUrl: "https://picsum.photos/seed/gold/800/500",
//     },
//     {
//         id: "int-05",
//         title: "জলবায়ু পরিবর্তন: ২০২৫ ছিল ইতিহাসের উষ্ণতম বছর",
//         description: "বিশ্ব আবহাওয়া সংস্থার রিপোর্ট অনুযায়ী, গত বছর বৈশ্বিক তাপমাত্রা সব রেকর্ড ছাড়িয়েছে। হিমালয়ের বরফ গলছে আশঙ্কাজনক হারে। সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধির হুমকি বাড়ছে এবং বাংলাদেশসহ নিম্নভূমির দেশগুলো এখন চরম জলবায়ু ঝুঁকির মুখে রয়েছে। কার্বন নিঃসরণ কমাতে নতুন বিশ্ব চুক্তির প্রস্তাব করা হয়েছে।",
//         category: "International",
//         time: "৪ ঘণ্টা আগে",
//         imageUrl: "https://picsum.photos/seed/climate/800/500",
//     },
//     {
//         id: "int-06",
//         title: "ভারত-পাকিস্তান সীমান্ত উত্তেজনা: সীমান্তে সেনাসতর্কতা জারি",
//         description: "কাশ্মীর সীমান্তে নতুন করে গোলাগুলি শুরু হওয়ায় দুই দেশই সীমান্তে সেনাসতর্কতা জারি করেছে। শান্তি বজায় রাখার আহ্বান জানিয়েছে প্রতিবেশী দেশগুলো। স্থানীয় প্রশাসন সীমান্তবর্তী এলাকাগুলো থেকে সাধারণ মানুষদের নিরাপদ দূরত্বে সরিয়ে নিচ্ছে। এই উত্তেজনা নিরসনে আন্তর্জাতিক মহল থেকে আলোচনার তাগিদ দেওয়া হচ্ছে।",
//         category: "International",
//         time: "৬ ঘণ্টা আগে",
//         imageUrl: "https://picsum.photos/seed/border/800/500",
//     }
// ];

// const InternationalDetails = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     // ১. ক্লিক করা নিউজটি আইডি দিয়ে খুঁজে বের করা
//     const news = internationalNews.find((item) => item.id === id);

//     // ২. বর্তমান নিউজটি বাদে বাকি সব নিউজকে সাইডবারের জন্য ফিল্টার করা
//     const otherNews = internationalNews.filter((item) => item.id !== id);

//     // ৩. প্রতিবার নিউজ চেঞ্জ হলে পেজ যেন উপরে স্ক্রল হয়
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [id]);

//     if (!news) {
//         return <div className="text-center py-20 font-bold">খবরটি পাওয়া যায়নি!</div>;
//     }

//     return (
//         <div className="bg-white min-h-screen font-serif">
//             <div className="container mx-auto px-4 py-10 max-w-7xl">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
//                     {/* --- বাম পাশে মেইন নিউজ --- */}
//                     <div className="lg:col-span-8">
//                         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-red-600 font-bold mb-6">
//                             <FaArrowLeft /> ফিরে যান
//                         </button>

//                         <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                             {news.title}
//                         </h1>

//                         <div className="flex items-center gap-4 text-gray-500 mb-6 border-b pb-4">
//                             <span className="font-bold text-blue-700 flex items-center gap-1">
//                                 <FaGlobe /> {news.category}
//                             </span>
//                             <span>{news.time}</span>
//                         </div>

//                         <img src={news.imageUrl} alt={news.title} className="w-full h-auto rounded-xl mb-8 shadow-lg" />

//                         <div className="text-gray-800 text-xl leading-relaxed">
//                             {news.description}
//                         </div>
//                     </div>

//                     {/* --- ডান পাশে ডাইনামিক সাইডবার --- */}
//                     <aside className="lg:col-span-4">
//                         <div className="sticky top-24 space-y-8">
//                             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
//                                 <h3 className="text-xl font-bold border-l-4 border-red-600 pl-3 mb-6">
//                                     আরও পড়ুন (অন্যান্য সংবাদ)
//                                 </h3>
                                
//                                 <div className="space-y-6">
//                                     {otherNews.map((item) => (
//                                         <Link 
//                                             key={item.id} 
//                                             to={`/international-news/${item.id}`} 
//                                             className="block group"
//                                         >
//                                             <div className="flex gap-4">
//                                                 <img 
//                                                     src={item.imageUrl} 
//                                                     className="w-20 h-20 object-cover rounded-lg" 
//                                                     alt={item.title} 
//                                                 />
//                                                 <div>
//                                                     <p className="font-bold text-gray-700 group-hover:text-blue-700 transition-colors leading-snug">
//                                                         {item.title}
//                                                     </p>
//                                                     <span className="text-xs text-red-500">{item.time}</span>
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* সোশ্যাল শেয়ারিং বক্স */}
//                             <div className="p-6 bg-blue-50 rounded-2xl text-center">
//                                 <p className="font-bold mb-4 text-blue-900">খবরটি শেয়ার করুন</p>
//                                 <div className="flex justify-center gap-6 text-3xl">
//                                     <FaFacebook className="text-blue-600 cursor-pointer" />
//                                     <FaTwitter className="text-blue-400 cursor-pointer" />
//                                     <FaWhatsapp className="text-green-500 cursor-pointer" />
//                                 </div>
//                             </div>
//                         </div>
//                     </aside>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InternationalDetails;