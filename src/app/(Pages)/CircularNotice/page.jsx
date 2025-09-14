import React from 'react';
import { FaDownload } from 'react-icons/fa6';

const page = () => {
    return (
         <div className='w-[100%] mt-4'>
                    <div className='w-[100%] h-[50px] bg-[#27ae5f] opacity-90 rounded-md'>
                        <h2 className='text-center text-black leading-14 text-2xl'>নিয়োগ সংক্রান্ত বিজ্ঞপ্তি</h2>
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
                                <tr>
                                  <td colSpan={4} className='text-center text-sm py-2 '>কোনো নোটিশ খুঁজে পাওয়া যায়নি।</td>
                                </tr>
                            </tbody>
                        </table>
        
                    </div>
                </div>
    );
};

export default page;