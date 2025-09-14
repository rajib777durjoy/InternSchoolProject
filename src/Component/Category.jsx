import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { IoMdArrowDropright } from 'react-icons/io';
import { CgNotes } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
const Category = () => {
    return (
        <div className='w-[100%] border grid lg:grid-cols-2 gap-6 '>
            <div className='flex items-start gap-6 py-2 border border-gray-300 shadow-lg rounded-lg'>
                <div className='mx-6'><FaGraduationCap className='text-8xl text-green-700' /></div>
                <div>
                    <h2 className='text-2xl text-green-700 font-bold font-serif my-1'>Admission</h2>
                    <ul>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />ভর্তি বিজ্ঞপ্তি</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />অনলাইন আবেদন</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />অফলাইন ভর্তির ফরম</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-start gap-6 py-2 border border-gray-300 shadow-lg rounded-lg'>
                <div className='mx-6 '><CgNotes className='text-8xl text-green-700' /></div>
                <div>
                    <h2 className='text-2xl text-green-700 font-bold font-serif my-1'>নোটিশ</h2>
                    <ul>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />সকল নোটিশ</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />শিক্ষার্থীর নোটিশ</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />শিক্ষক-কর্মচারীর নোটিশ</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-start gap-6 py-2 border border-gray-300 shadow-lg rounded-lg'>
                <div className='mx-6'><FaBookOpen className='text-8xl text-green-700' /></div>
                <div>
                    <h2 className='text-2xl text-green-700 font-bold font-serif my-1'>পাঠ্যপুস্তক</h2>
                    <ul>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />৬ষ্ঠ শ্রেণি</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />৭ম শ্রেণি</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />৮ম শ্রেণি</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />৯ম ও ১০ম শ্রেণি</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-start gap-6 py-2 border border-gray-300 shadow-lg rounded-lg'>
                <div className='mx-6 '><FaUsers className='text-8xl text-green-700' /></div>
                <div>
                    <h2 className='text-2xl text-green-700 font-bold font-serif my-1'>জনবল</h2>
                    <ul>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />শিক্ষকমন্ডলী</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />পরিচালনা কমিটি</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />কর্মচারী</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-start gap-6 py-2 border border-gray-300 shadow-lg rounded-lg'>
                <div className='mx-6 '><FaAward className='text-8xl text-green-700' /></div>
                <div>
                    <h2 className='text-2xl text-green-700 font-bold font-serif my-1'>স্বীকৃতি/অনুমোদন</h2>
                    <ul>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />পাঠদান/শাখা/বিভাগ অনুমোদন</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />স্বীকৃতি নবায়ন</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />কমিটি অনুমোদন</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-start gap-6 py-2 border border-gray-300 shadow-lg rounded-lg'>
                <div className='mx-6 '><FaPlus className='text-8xl text-green-700' /></div>
                <div>
                    <h2 className='text-2xl text-green-700 font-bold font-serif my-1'>অন‌্যান‌্য</h2>
                    <ul>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />শিক্ষার্থীর তথ‌্য</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />তথ‌্য কর্মকর্তা</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' />অভিযোগ ও প্রতিকার</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Category;