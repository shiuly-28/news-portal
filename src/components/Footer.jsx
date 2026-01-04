import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-black pt-10 pb-6 mt-12 font-sans bg-gray-50">
            <div className="container mx-auto px-4">
                {/* সব কন্টেন্টকে সেন্টার করার জন্য text-center ব্যবহার করা হয়েছে */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-300 pb-8 text-center">
                    
                    {/* লোগো ও বর্ণনা */}
                    <div className="flex flex-col items-center md:items-center">
                        <h2 className="text-2xl font-bold mb-4 italic">
                            প্রথম <span className="text-red-600">নিউজ</span>
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            সঠিক খবর, সবার আগে। আমরা বস্তুনিষ্ঠ সংবাদ পরিবেশনায় বিশ্বাসী। দেশ ও বিদেশের সব খবর পেতে আমাদের সাথেই থাকুন।
                        </p>
                    </div>

                    {/* কুইক লিঙ্ক */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">বিভাগ</h3>
                        <ul className="text-gray-500 text-sm space-y-2">
                            <li><Link to="/category/National" className="hover:text-red-500 transition">জাতীয়</Link></li>
                            <li><Link to="/category/International" className="hover:text-red-500 transition">আন্তর্জাতিক</Link></li>
                            <li><Link to="/category/Sports" className="hover:text-red-500 transition">খেলাধুলা</Link></li>
                            <li><Link to="/category/Technology" className="hover:text-red-500 transition">প্রযুক্তি</Link></li>
                        </ul>
                    </div>

                    {/* যোগাযোগ */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">যোগাযোগ</h3>
                        <div className="text-gray-500 text-sm space-y-1">
                            <p>ইমেইল: info@prothomnews.com</p>
                            <p>ফোন: +৮৮০ ১২৩৪-৫৬৭৮৯০</p>
                            <p>ঢাকা, বাংলাদেশ।</p>
                        </div>
                    </div>
                </div>

                {/* কপিরাইট অংশ */}
                <div className="text-center mt-6 text-gray-400 text-xs tracking-wider">
                    <p>© ২০২৬ প্রথম নিউজ | সকল স্বত্ব সংরক্ষিত।</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;