'use client'

import Link from 'next/link';
import React from 'react';
import { FaDownload } from 'react-icons/fa6';

const Commeti = () => {
    return (
        <div className='w-[100%] mt-4'>
            <div className='w-[100%] h-[50px] bg-[#27ae5f] opacity-90 rounded-md'>
                <h2 className='text-center text-black leading-14 text-2xl'>কমিটির অনুমোদনের চিঠি</h2>
            </div>
            <div className='w-[100%] overflow-x-scroll text-black my-4'>
                <table className='w-[100%]'>
                    <thead>
                        <tr className='border border-gray-300'>
                            <th className='text-center text-sm py-2 border border-gray-300'>#</th>
                            <th className='text-center text-sm py-2 border border-gray-300'>কমিটির ধরণ</th>
                            <th className='text-center text-sm py-2 border border-gray-300'>অনুমোদনের তারিখ</th>
                            <th className='text-center text-sm py-2 border border-gray-300'>মেয়াদকাল</th>
                            <th className='text-center text-sm py-2 border border-gray-300'>ডাউনলোড</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border border-gray-300 '>
                            <td className='text-center py-2 text-sm border border-gray-300'>
                                1
                            </td>
                            <td className='text-center py-2 text-sm border border-gray-300'>
                                এডহক কমিটি
                            </td>
                            <td className='text-center py-2 text-sm border border-gray-300'>
                                2025-03-04
                            </td>
                            <td className='text-center py-2 text-sm border border-gray-300'>
                                04/03/2025 হ‌ইতে 03/09/2025
                            </td>
                            <td className='text-center py-2 text-sm flex justify-center'>
                                <Link href={`/rahmatpuraghs_Committee_1756147149_68acadcd750d8`} download={`/rahmatpuraghs_Committee_1756147149_68acadcd750d8.pdf`} rel='documentfile' >
                                        <FaDownload className='text-2xl' />
                                    </Link>                                                 
                            </td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Commeti;