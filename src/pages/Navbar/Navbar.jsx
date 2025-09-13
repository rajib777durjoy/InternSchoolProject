import Image from 'next/image';
import React from 'react';
import logo from '../../Images/rahmatpuraghs_logo.png'
import { FaHome } from "react-icons/fa";
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
    return (
        <div className='w-[90%] border mx-auto min-h-[100px]'>
            <div className='text-right text-black py-2'>English</div>
            <div className="navbar bg-green-700  shadow-sm justify-between ">
                <div className="flex items-center">
                    {/* logo */}
                    <Image src={logo} alt='' quality={100} className='w-[50px] h-[50px]' />
                    {/* school name */}
                    <span className='mx-2'>
                        <h2 className='text-2xl  font-bold drop-shadow-lg drop-shadow-black'>রহমতপুর আদর্শ বালিকা উচ্চ বিদ্যালয়</h2>
                        <h2 className='text-sm drop-shadow-lg drop-shadow-black font-bold'>শিক্ষা জাতির মেরুদণ্ড, শিক্ষা হোক সবার জন্য</h2>
                    </span>

                </div>
                <div className="text-end flex flex-col ">
                    <h2 className='text-sm font-semibold mb-1'>ইআইআইএন: ১২১১২৬; এমপিও কোড: ৮৭০২০৯১২০৪</h2>
                    <h2 className='text-sm font-semibold '>দিনাজপুর বোর্ড কোড: ৮৯৯১; কারিগরি বোর্ড কোড: ১৮১৭৪ </h2>
                </div>
            </div>
            <div className='text-black flex justify-between items-center my-1 '>
                <ul className='flex flex-wrap gap-4 items-center'>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="py-2 px-4 hover:bg-green-700 hover:text-white flex items-start rounded"
                        >
                            <FaHome className='text-xl' />
                        </Link>
                        
                    </li>
                    <li className="relative group">
                        <Link
                            href="#"
                            className="p-2 hover:bg-green-700 hover:text-white text-sm flex items-start rounded"
                        >
                           প্রতিষ্ঠান পরিচিতি <IoMdArrowDropdown className='text-xl' />
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 z-40 top-full mt-1 w-[300px] bg-white text-black  rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/Profile"
                                    className="block px-4 py-2 text-sm  hover:bg-green-700"
                                >
                                    প্রধান শিক্ষকের বক্তব্য
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/AssistantTeacher"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                    সহাকারি প্রধান শিক্ষকের বক্তব্য
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/AllTeacher"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                    শিক্ষক মন্ডলী 
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/AllStaff"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                    কর্মচারী তালিকা
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/AboutUs"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                    আমাদের সম্পর্কে
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="#"
                            className="p-2 hover:bg-green-700 hover:text-white text-sm flex items-start rounded"
                        >
                            শিক্ষার্থীর তথ্য <IoMdArrowDropdown className='text-xl'/>
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 z-40 top-full mt-1 w-[300px] bg-white text-black  rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/StudentCountPage"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                    ধরণ ভিত্তিক শিক্ষার্থী সংখ্যা
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/StudentListPage"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                     ধরণ ভিত্তিক শিক্ষার্থী তালিকা
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="p-2 hover:bg-green-700 hover:text-white text-sm flex items-start rounded"
                        >
                            পাঠ্যদানসংক্রন্ত তথ্য <IoMdArrowDropdown className='text-xl' />
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 z-40 top-full mt-1 w-[300px] bg-white text-black  rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/ClassRoutine"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                   শিক্ষকদের নামসহ পূর্ণাঙ্গ রুটিন
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/Syllabus"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                   পাঠ্যসূচি
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                 বিবিধ 
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="p-2 hover:bg-green-700 hover:text-white text-sm flex items-start rounded"
                        >
                            নোটিশ <IoMdArrowDropdown className='text-xl' />
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 z-40 top-full mt-1 w-[300px] bg-white text-black  rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                    সকল নোটিশ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage2"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                    শিক্ষকগণের নোটিশ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                     শিক্ষার্থী নোটিশ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                   নিয়োগ সংক্রান্ত নোটিশ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                    পরীক্ষা সংক্রান্ত নোটিশ 
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="p-2 hover:bg-green-700 hover:text-white text-sm flex items-start rounded"
                        >
                            ফলাফল <IoMdArrowDropdown className='text-xl' />
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 z-40 top-full mt-1 w-[300px] bg-white text-black  rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                   বিদ্যালয়ের ফলাফল
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="p-2 hover:bg-green-700 hover:text-white text-sm flex items-start rounded"
                        >
                            কমিটি <IoMdArrowDropdown className='text-xl'/>
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 z-40 top-full mt-1 w-[300px] bg-white text-black  rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                    অনুমোদিত কমিটির চিঠি
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage2"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                   কমিটির সদস্যের তথ্য
                                </Link>
                            </li>
                            
                        </ul>
                    </li>
                    <li className="relative group ">
                        <Link
                            href="/"
                            className="p-2 hover:bg-green-700 hover:text-white text-sm flex items-start rounded"
                        >
                            অন্যান্য <IoMdArrowDropdown className='text-xl' />
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 z-40 top-full mt-1 w-[300px] bg-white text-black  rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2  text-sm hover:bg-green-700"
                                >
                                    অনুমোদিত কমিটির চিঠি
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage2"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                   কমিটির সদস্যের তথ্য
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                   পাঠদানের অনুমতি ও স্বীকৃতি
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                    শ্রেণিভিত্তিক অনুমোদিত শাখা
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                   তথ্যসেবা কেন্দ্রের ঠিকানা ও মোবাইল নম্বর
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                   অভিযোগ নিষ্পত্তি কর্মকর্তার ঠিকানা ও মোবাইল নম্বর
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                    এমপিও/ইএফটি
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 text-sm hover:bg-green-700"
                                >
                                     বিভিন্ন ফরম ডাউনলোড 
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="">
                        <Link
                            href="/Gallary"
                            className="p-2 hover:bg-green-700 hover:text-white text-sm flex items-start rounded"
                        >
                           গ্যালারি 
                        </Link>

                       
                    </li>
                    <li className="">
                        <Link
                            href="/"
                            className="p-2 hover:bg-green-700 hover:text-white text-sm flex items-start rounded"
                        >
                            যোগাযোগ 
                        </Link>
                    </li>
                </ul>
                <div>
                    <button className='btn text-white hover:text-black bg-green-700 hover:bg-transparent rounded-md'>লগইন</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;