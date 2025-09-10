import Image from 'next/image';
import React from 'react';
import logo from '../../Images/rahmatpuraghs_logo.png'
import { FaHome } from "react-icons/fa";
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className='w-[90%] mx-auto min-h-[100px] border '>
            <div className='text-right'>English</div>
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
                            className="px-4 py-2 block hover:bg-green-700  rounded"
                        >
                            <FaHome className='text-xl' />
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 top-full mt-1 w-40 bg-white text-black  rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2  hover:bg-green-700"
                                >
                                    Subitem 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage2"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 3
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="px-4 py-2 block hover:bg-green-700  rounded"
                        >
                           প্রতিষ্ঠান পরিচিতি
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 top-full mt-1 w-40 bg-white text-black  rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2  hover:bg-green-700"
                                >
                                    Subitem 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage2"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 3
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="px-4 py-2 block hover:bg-green-700  rounded"
                        >
                            শিক্ষার্থীর তথ্য
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 top-full mt-1 w-40 bg-white text-black  rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2  hover:bg-green-700"
                                >
                                    Subitem 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage2"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 3
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="px-4 py-2 block hover:bg-green-700  rounded"
                        >
                            পাঠ্যদানসংক্রন্ত তথ্য
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 top-full mt-1 w-40 bg-white text-black  rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2  hover:bg-green-700"
                                >
                                    Subitem 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage2"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 3
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="px-4 py-2 block hover:bg-green-700  rounded"
                        >
                            নোটিশ
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 top-full mt-1 w-40 bg-white text-black  rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2  hover:bg-green-700"
                                >
                                    Subitem 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage2"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 3
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="px-4 py-2 block hover:bg-green-700  rounded"
                        >
                            ফলাফল
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 top-full mt-1 w-40 bg-white text-black  rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2  hover:bg-green-700"
                                >
                                    Subitem 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage2"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 3
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="px-4 py-2 block hover:bg-green-700  rounded"
                        >
                            কমিটি
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 top-full mt-1 w-40 bg-white text-black  rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2  hover:bg-green-700"
                                >
                                    Subitem 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage2"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 3
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="px-4 py-2 block hover:bg-green-700  rounded"
                        >
                            অন্যান্য
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 top-full mt-1 w-40 bg-white text-black  rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2  hover:bg-green-700"
                                >
                                    Subitem 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage2"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 3
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="px-4 py-2 block hover:bg-green-700  rounded"
                        >
                           গ্যালারি
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 top-full mt-1 w-40 bg-white text-black  rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2  hover:bg-green-700"
                                >
                                    Subitem 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage2"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 3
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link
                            href="/"
                            className="px-4 py-2 block hover:bg-green-700  rounded"
                        >
                            যোগাযোগ
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 top-full mt-1 w-40 bg-white text-black  rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <li>
                                <Link
                                    href="/subpage1"
                                    className="block px-4 py-2  hover:bg-green-700"
                                >
                                    Subitem 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage2"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subpage3"
                                    className="block px-4 py-2 hover:bg-green-700"
                                >
                                    Subitem 3
                                </Link>
                            </li>
                        </ul>
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