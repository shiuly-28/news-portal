import React from 'react';
import { Link } from 'react-router-dom'; // লিঙ্ক ব্যবহারের জন্য

const National = () => {
  // ১. জাতীয় খবরের ডাটা অবজেক্ট
  const nationalNewsList = [
    { 
        id: "nat-01", 
        title: "ঢাকায় নতুন মেট্রোরেল রুটের কাজ শুরু হচ্ছে আগামী মাসে", 
        time: "২ ঘণ্টা আগে", 
        img: "https://i.postimg.cc/7YQnJvZ4/images-(1).jpg",
        summary: "রাজধানীর যানজট নিরসনে নতুন এমআরটি লাইন-৫ এর নির্মাণ কাজ শুরুর ঘোষণা দিয়েছে কর্তৃপক্ষ।" 
    },
    { 
        id: "nat-02", 
        title: "শীতের তীব্রতা বাড়তে পারে, দেশের ৫ জেলায় শৈত্যপ্রবাহের আভাস", 
        time: "৪ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=300&h=200&fit=crop",
        summary: "আবহাওয়া অফিস জানিয়েছে, উত্তরাঞ্চলে তাপমাত্রা ১০ ডিগ্রির নিচে নামতে পারে।" 
    },
    { 
        id: "nat-03", 
        title: "বই উৎসব: সারাদেশে শিক্ষার্থীদের হাতে পৌঁছেছে নতুন বই", 
        time: "৫ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=300&h=200&fit=crop",
        summary: "বছরের প্রথম দিনে উৎসবমুখর পরিবেশে প্রাথমিক ও মাধ্যমিক স্তরের শিক্ষার্থীদের বই বিতরণ করা হয়।" 
    },
    { 
        id: "nat-04", 
        title: "বাজারে চালের দাম স্থিতিশীল রাখতে সরকারের কঠোর মনিটরিং", 
        time: "৬ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=300&h=200&fit=crop",
        summary: "অবৈধ মজুতদারদের বিরুদ্ধে অভিযান চালাচ্ছে ভ্রাম্যমাণ আদালত।" 
    },
    { 
        id: "nat-05", 
        title: "পর্যটন নগরী কক্সবাজারে পর্যটকের ঢল, তিল ধারণের ঠাঁই নেই", 
        time: "৭ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=300&h=200&fit=crop",
        summary: "বছরের শুরুতে সমুদ্র সৈকতে লাখো মানুষের সমাগম ঘটেছে।" 
    },
    { 
        id: "nat-06", 
        title: "পদ্মা সেতু দিয়ে রেকর্ড পরিমাণ যানবাহন পারাপার", 
        time: "৮ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1624314138470-5a2f24623f10?q=80&w=300&h=200&fit=crop",
        summary: "গত ২৪ ঘণ্টায় টোল আদায় হয়েছে ৩ কোটি টাকার বেশি।" 
    },
    { 
        id: "nat-07", 
        title: "দেশের সব হাসপাতালে ডেঙ্গু কর্নার খোলার নির্দেশ", 
        time: "৯ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=300&h=200&fit=crop",
        summary: "ডেঙ্গু আক্রান্ত রোগীর সংখ্যা বাড়তে থাকায় স্বাস্থ্য অধিদপ্তর থেকে এই বিশেষ নির্দেশনা দেওয়া হয়েছে।" 
    },
    { 
        id: "nat-08", 
        title: "সাভারে চামড়া শিল্প নগরীতে কেন্দ্রীয় বর্জ্য শোধনাগার চালুর উদ্যোগ", 
        time: "১০ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=300&h=200&fit=crop",
        summary: "পরিবেশ দূষণ রোধে ট্যানারি মালিকদের বিসিকের নতুন শর্ত পালনের নির্দেশ দেওয়া হয়েছে।" 
    },
    { 
        id: "nat-09", 
        title: "বিপিএল ২০২৬: সিলেট স্ট্রাইকার্সের দাপুটে জয়ে পয়েন্ট টেবিলে রদবদল", 
        time: "১১ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=300&h=200&fit=crop",
        summary: "মাশরাফির সিলেটের বোলিং তোপে অল্প রানেই গুটিয়ে গেল প্রতিপক্ষ।" 
    },
    { 
        id: "nat-10", 
        title: "বঙ্গোপসাগরে নতুন তেল ও গ্যাস অনুসন্ধানে বিদেশি বিনিয়োগের আহ্বান", 
        time: "১২ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=300&h=200&fit=crop",
        summary: "জ্বালানি নিরাপত্তা নিশ্চিত করতে ব্লু-ইকোনমি জোনে অনুসন্ধানের গতি বাড়াচ্ছে সরকার।" 
    },
    { 
        id: "nat-11", 
        title: "৫জি সেবার পরিধি বাড়াতে আরও ৫টি মোবাইল টাওয়ার স্থাপনের কাজ শুরু", 
        time: "১৩ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=300&h=200&fit=crop",
        summary: "বিটিআরসি জানিয়েছে, চলতি বছরের শেষ নাগাদ বড় শহরগুলোতে হাই-স্পিড ৫জি পাওয়া যাবে।" 
    },
    { 
        id: "nat-12", 
        title: "চট্টগ্রাম বন্দরে কন্টেইনার জট কমাতে স্বয়ংক্রিয় স্ক্যানার বসানো হচ্ছে", 
        time: "১৪ ঘণ্টা আগে", 
        img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=300&h=200&fit=crop",
        summary: "আমদানি-রপ্তানি কার্যক্রম দ্রুত করতে কাস্টমস হাউসে নতুন উন্নত প্রযুক্তি যোগ করা হচ্ছে।" 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-gray-900 bg-white">
      {/* ক্যাটেগরি হেডার */}
      <div className="border-b-2 border-red-600 mb-6 flex items-center">
        <h2 className="text-2xl font-bold text-red-600 pb-1 pr-4">জাতীয়</h2>
        <div className="flex-grow h-[1px] bg-gray-200"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* কলাম ১: বাম পাশের লিস্ট (জাতীয় নিউজ) */}
        <div className="lg:col-span-3 space-y-5 lg:border-r border-gray-200 pr-5">
          {nationalNewsList.map((news) => (
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

        {/* কলাম ২: মাঝখানের লিড নিউজ (জাতীয় প্রেক্ষাপট) */}
        <div className="lg:col-span-6 lg:border-r border-gray-200 px-4">
  {/* ১. লিড নিউজ (সবচেয়ে বড়) */}
  <div className="cursor-pointer group">
    <div className="w-full aspect-video overflow-hidden mb-4 rounded-sm">
      <img 
        src="https://i.postimg.cc/J4KdTd7b/inq-graphics-20230311194450.jpg" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        alt="National Main" 
      />
    </div>
    <h1 className="text-3xl font-extrabold leading-tight group-hover:text-blue-700 transition-colors">
      ডিজিটাল বাংলাদেশ থেকে ‘স্মার্ট বাংলাদেশ’ গড়ার প্রত্যয়
    </h1>
    <p className="text-gray-600 mt-3 text-lg leading-relaxed">
      ২০৪১ সালের মধ্যে উন্নত ও সমৃদ্ধ রাষ্ট্র বিনির্মাণে তথ্যপ্রযুক্তি খাতের আধুনিকায়নে গুরুত্ব দিচ্ছে সরকার। দেশের প্রতিটি গ্রামকে আধুনিক সুযোগ-সুবিধার আওতায় আনা হচ্ছে...
    </p>
    <span className="text-sm text-gray-400 mt-4 block border-b pb-6">৩ ঘণ্টা আগে</span>
  </div>

  {/* ২. মাঝারি গ্রিড (২টি কার্ড) */}
  <div className="grid grid-cols-2 gap-6 mt-6 pb-6 border-b border-gray-100">
    <div className="group cursor-pointer">
      <img src="https://i.postimg.cc/YCh8dryT/88ffa84d18b6ad15b5dadfb2251352495fecb1bce5faab95.jpg" className="w-full h-32 object-cover mb-3 rounded-sm shadow-sm" alt="sub" />
      <h4 className="font-bold text-[16px] leading-snug group-hover:text-blue-700">জ্বালানি তেলের দাম আরও কমার সম্ভাবনা</h4>
    </div>
    <div className="group cursor-pointer">
      <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400&h=250&fit=crop" className="w-full h-32 object-cover mb-3 rounded-sm shadow-sm" alt="sub" />
      <h4 className="font-bold text-[16px] leading-snug group-hover:text-blue-700">পাবলিক পরিবহনে ই-টিকেটিং সেবা জনপ্রিয় হচ্ছে</h4>
    </div>
  </div>

  {/* ৩. নতুন গ্রিড (আরও ৪টি ছোট কার্ড) */}
  <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-6">
    <div className="flex gap-3 group cursor-pointer">
      <div className="w-24 h-20 flex-shrink-0">
        <img src="https://i.postimg.cc/Dz7gLMzC/image-329680.jpg" className="w-full h-full object-cover rounded" alt="thumb" />
      </div>
      <h4 className="font-bold text-sm leading-tight group-hover:text-blue-700">মেট্রোরেলের নতুন রুট উদ্বোধন হতে যাচ্ছে খুব শীঘ্রই</h4>
    </div>
    
    <div className="flex gap-3 group cursor-pointer">
      <div className="w-24 h-20 flex-shrink-0">
        <img src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=200" className="w-full h-full object-cover rounded" alt="thumb" />
      </div>
      <h4 className="font-bold text-sm leading-tight group-hover:text-blue-700">সারাদেশে ডেঙ্গু প্রতিরোধে বিশেষ অভিযান শুরু</h4>
    </div>

    <div className="flex gap-3 group cursor-pointer">
      <div className="w-24 h-20 flex-shrink-0">
        <img src="https://i.postimg.cc/zD44KqYJ/walton-20240320205853.jpg" className="w-full h-full object-cover rounded" alt="thumb" />
      </div>
      <h4 className="font-bold text-sm leading-tight group-hover:text-blue-700">বাজারে আসছে সাশ্রয়ী মূল্যের নতুন স্মার্টফোন</h4>
    </div>

    <div className="flex gap-3 group cursor-pointer">
      <div className="w-24 h-20 flex-shrink-0">
        <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200" className="w-full h-full object-cover rounded" alt="thumb" />
      </div>
      <h4 className="font-bold text-sm leading-tight group-hover:text-blue-700">প্রাথমিক বিদ্যালয়ে নতুন পাঠ্যক্রম চালু হচ্ছে</h4>
    </div>
  </div>

  {/* ৪. একদম নিচে একটি টেক্সট লিস্ট (বর্ডারসহ) */}
  <div className="mt-10 pt-6 border-t-2 border-gray-900">
    <div className="flex flex-col divide-y divide-gray-100">
      {[
        "কক্সবাজার সমুদ্র সৈকতে পর্যটকদের উপচে পড়া ভিড়",
        "রমজানে নিত্যপণ্যের দাম নিয়ন্ত্রণে টাস্কফোর্স গঠন",
        "নতুন বছরে দেশের রপ্তানি আয়ে ১০ শতাংশ প্রবৃদ্ধি"
      ].map((list, i) => (
        <h4 key={i} className="py-3 font-bold text-gray-800 hover:text-blue-700 cursor-pointer flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {list}
        </h4>
      ))}
    </div>
  </div>
</div>

        {/* কলাম ৩: ডান পাশের সাইডবার (জাতীয় সর্বশেষ আপডেট) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-gray-200 p-4 shadow-sm">
            <h4 className="font-bold border-b border-red-600 pb-2 mb-4 text-gray-800">জাতীয় সর্বশেষ</h4>
            <ul className="space-y-4">
              {[
                "বিসিএস প্রিলিমিনারি পরীক্ষার আবেদন শুরু",
                "রাজধানীর বস্তিতে ভয়াবহ আগুন, নিয়ন্ত্রণে ১০ ইউনিট",
                "বেতন বৃদ্ধির দাবিতে পোশাক শ্রমিকদের কর্মবিরতি",
                "হজ যাত্রীদের জন্য বিশেষ হজ প্যাকেজ ঘোষণা"
              ].map((text, i) => (
                <li key={i} className="text-[14px] font-bold hover:text-red-600 cursor-pointer flex gap-2 leading-snug">
                  <span className="text-red-600 font-black">•</span> {text}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full relative group overflow-hidden rounded-xl shadow-lg border border-gray-200">
  {/* বিজ্ঞাপন ইমেজ */}
  <img 
    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&h=800&fit=crop" 
    alt="Advertisement" 
    className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
  />

  {/* ডার্ক ওভারলে ডিজাইন */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-end p-6 text-center">
    
    <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded uppercase tracking-widest border border-white/30">
      Sponsored
    </span>

    <h4 className="text-white text-xl font-bold mb-2 leading-tight">
      আপনার ব্যবসার প্রচার করুন আমাদের সাথে
    </h4>
    
    <p className="text-gray-300 text-sm mb-6">
      প্রতিদিন লাখো পাঠকের কাছে পৌঁছে দিন আপনার ব্র্যান্ড।
    </p>

    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]">
      বিজ্ঞাপন দিন
    </button>
    
    <div className="mt-4 text-[10px] text-gray-500 italic">
      www.yournewsportal.com/ads
    </div>
  </div>
</div>
        </div>

      </div>
    </div>
  );
};

export default National;