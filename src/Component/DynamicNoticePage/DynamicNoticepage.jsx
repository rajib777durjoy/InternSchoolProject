'use client'
import { NoticeData } from '@/lib/noticeDb';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa6';

const DynamicNoticepage = ({ id }) => {
    const [selectData, setSelectData] = useState(id);
    const [data, setData] = useState([])

    useEffect(() => {
        if (selectData === 'Null') {
            return setData(NoticeData);
        }
        const filter = NoticeData.filter(item => item?.role === selectData);
        setData(filter)
    }, [selectData])
    return (
        <div className='w-[100%] mt-4'>
            <div className='w-[100%] h-[50px] bg-[#27ae5f] opacity-90 rounded-md'>
                <h2 className='text-center text-black leading-14 text-2xl'>সকল নোটিশ</h2>
            </div>
            <div className='w-[100%] flex items-center gap-2'>
                <div className='text-black h-[40px] leading-[40px] w-[150px] px-2 border border-gray-300'>নোটিশের ধরন:</div>
                <select onChange={(e) => setSelectData(e.target.value)} defaultValue="" className="select w-[100%] bg-white text-black border border-gray-300">
                    <option value={'Null'}>সকল নোটিশ</option>
                    <option value={'student'}>শিক্ষার্থীর নোটিশ</option>
                    <option value={'assistantTeacher'}>শিক্ষক কর্মচারী নোটিশ</option>
                    <option value={'office'}>উর্ধতন অফিসের নোটিশ</option>
                    <option value={'Null'}>ভর্তির নোটিশ</option>
                    <option value={'Null'}>পরীক্ষা সংক্রান্ত নোটিশ</option>
                    <option value={'Null'}>নিয়োগ সংক্রান্ত বিজ্ঞপ্তি</option>
                    <option value={'Null'}>অন্যান্য</option>
                </select>
            </div>
            <div className='w-[100%] overflow-x-scroll text-black my-4'>
                <table className='w-[100%]'>
                    <thead>
                        <tr className='border border-gray-300'>
                            <th className='text-center text-sm py-2 border border-gray-300'>#</th>
                            <th className='text-center text-sm py-2 border border-gray-300'>শিরোনাম</th>
                            <th className='text-center text-sm py-2 border border-gray-300'>তারিখ</th>
                            <th className='text-center text-sm py-2 border border-gray-300'>ডাউনলোড</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item) => <tr key={item?.id} className='border border-gray-300 text-black'>
                                <td className='text-start px-4 py-2 text-sm border border-gray-300 text-black'>{item?.id}</td>
                                <td className='text-start px-4 py-2 text-sm border border-gray-300 text-blue-900'>{item?.title}</td>
                                <td className='text-start px-4 py-2 text-sm border border-gray-300 text-black'>{item?.date}</td>
                                <td className='text-center py-2  flex justify-center'>
                                    <a href={`${item?.item?.download_link}`} download={`${item?.item?.download_link}`} rel='documentfile' >
                                        <FaDownload className='text-2xl' />
                                    </a>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default DynamicNoticepage;