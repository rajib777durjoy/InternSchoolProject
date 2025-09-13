

import React from 'react';
import { CiLogin } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
const page = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <div className="w-[400px] bg-white p-8 rounded-xl shadow-lg">
            
                <h1 className="text-gray-700 text-2xl font-bold flex items-center gap-2 justify-center mb-6">
                    <FaLock className="text-blue-500" />
                    অ্যাডমিন লগইন
                </h1>

                <form className="flex flex-col gap-4">
                   
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600 font-medium">ইউজারনেম</label>
                        <input
                            type="text"
                            placeholder="ইউজারনেম লিখুন"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600 font-medium">পাসওয়ার্ড</label>
                        <input
                            type="password"
                            placeholder="পাসওয়ার্ড লিখুন"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                   
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition"
                    >
                        <CiLogin className="text-xl" /> লগইন
                    </button>
                </form>

                
                <p className="text-center text-sm text-gray-500 mt-4">
                    পাসওয়ার্ড ভুলে গেছেন? <a href="#" className="text-blue-500 hover:underline">রিসেট করুন</a>
                </p>
            </div>
        </div>
    );
};

export default page;
