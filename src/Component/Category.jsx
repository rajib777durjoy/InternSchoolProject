import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { IoMdArrowDropright } from 'react-icons/io';
import { CgNotes } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';
const Category = () => {
    return (
        <div className='w-[100%] border grid lg:grid-cols-2 gap-6 '>
            <div className='flex items-start gap-6 py-2 border border-gray-300 shadow-lg rounded-lg'>
                <div className='mx-6'><FaGraduationCap className='text-8xl text-green-700' /></div>
                <div>
                    <h2 className='text-2xl text-green-700 font-bold font-serif my-1'>Admission</h2>
                    <ul>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='/AdmitNotice'>ভর্তি বিজ্ঞপ্তি</Link></li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='#'>অনলাইন আবেদন</Link></li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='#'>অফলাইন ভর্তির ফরম</Link></li>
                    </ul>
                </div>
            </div>
            <div className='flex items-start gap-6 py-2 border border-gray-300 shadow-lg rounded-lg'>
                <div className='mx-6 '><CgNotes className='text-8xl text-green-700' /></div>
                <div>
                    <h2 className='text-2xl text-green-700 font-bold font-serif my-1'>নোটিশ</h2>
                    <ul>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='/NoticePage'>সকল নোটিশ</Link></li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='/NoticePage'>শিক্ষার্থীর নোটিশ</Link></li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='/NoticePage'>শিক্ষক-কর্মচারীর নোটিশ</Link></li>
                    </ul>
                </div>
            </div>
            <div className='flex items-start gap-6 py-2 border border-gray-300 shadow-lg rounded-lg'>
                <div className='mx-6'><FaBookOpen className='text-8xl text-green-700' /></div>
                <div>
                    <h2 className='text-2xl text-green-700 font-bold font-serif my-1'>পাঠ্যপুস্তক</h2>
                    <ul>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='https://nctb.portal.gov.bd/site/page/f84b0f23-ccb7-41a8-9c29-983afd3d092e'>৬ষ্ঠ শ্রেণি</Link></li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='https://nctb.portal.gov.bd/site/page/bc758f07-9e6e-4e7c-93ee-d3aef1c15229'>৭ম শ্রেণি</Link></li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='https://nctb.portal.gov.bd/site/page/00751775-3953-4c0d-9bd4-c4ff68760176'>৮ম শ্রেণি</Link></li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='https://nctb.portal.gov.bd/site/page/3a96de78-a64d-49e0-8a24-df9a1d305d87'>৯ম ও ১০ম শ্রেণি</Link></li>
                    </ul>
                </div>
            </div>
            <div className='flex items-start gap-6 py-2 border border-gray-300 shadow-lg rounded-lg'>
                <div className='mx-6 '><FaUsers className='text-8xl text-green-700' /></div>
                <div>
                    <h2 className='text-2xl text-green-700 font-bold font-serif my-1'>জনবল</h2>
                    <ul>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='/AllTeacher'></Link>শিক্ষকমন্ডলী</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='/CommitteMember'></Link>পরিচালনা কমিটি</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='/AllStaff'></Link>কর্মচারী</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-start gap-6 py-2 border border-gray-300 shadow-lg rounded-lg'>
                <div className='mx-6 '><FaAward className='text-8xl text-green-700' /></div>
                <div>
                    <h2 className='text-2xl text-green-700 font-bold font-serif my-1'>স্বীকৃতি/অনুমোদন</h2>
                    <ul>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='/ClassAndSection'></Link>পাঠদান/শাখা/বিভাগ অনুমোদন</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='/StudyOrder'></Link>স্বীকৃতি নবায়ন</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='/Committee'></Link>কমিটি অনুমোদন</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-start gap-6 py-2 border border-gray-300 shadow-lg rounded-lg'>
                <div className='mx-6 '><FaPlus className='text-8xl text-green-700' /></div>
                <div>
                    <h2 className='text-2xl text-green-700 font-bold font-serif my-1'>অন‌্যান‌্য</h2>
                    <ul>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='/AllTeacher'></Link>শিক্ষার্থীর তথ‌্য</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='/DataServicePage'></Link>তথ‌্য কর্মকর্তা</li>
                        <li className='text-blue-900 my-1 ms-2 flex items-center text-sm '><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='/CHOInfo'></Link>অভিযোগ ও প্রতিকার</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Category;