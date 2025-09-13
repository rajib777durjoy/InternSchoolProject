import React from 'react';
import { FaDownload } from 'react-icons/fa6';
const StudyOrderPage = () => {
    return (
        <div className='w-[100%] mt-4'>
            <div className='w-[100%] h-[50px] bg-[#27ae5f] opacity-90 rounded-md'>
                <h2 className='text-center text-black leading-14 text-2xl'>স্বীকৃতি অনুমোদনের চিঠি</h2>
            </div>
            <div className='w-[100%] overflow-x-scroll text-black my-4'>
                <table className='w-[100%]'>
                    <thead>
                        <tr className='border border-gray-300'>
                            <th className='text-center text-sm py-2 border border-gray-300'>#</th>
                            <th className='text-center text-sm py-2 border border-gray-300'>স্বীকৃতির স্তর	</th>
                            <th className='text-center text-sm py-2 border border-gray-300'>অনুমোদনের তারিখ</th>
                            <th className='text-center text-sm py-2 border border-gray-300'>মেয়াদকাল</th>
                            <th className='text-center text-sm py-2 border border-gray-300'>ডাউনলোড</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border border-gray-300 '>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                                1
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                               	স্বীকৃতি নবায়ন
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                                2025-05-13
                            </td>
                            <td className='text-center border border-gray-300 py-2 text-sm'>
                                01/01/2024 হ‌ইতে 31/12/2026
                            </td>
                            <td className='text-center py-2 text-sm border  border-gray-300 flex justify-center'>
                                <a href={`/rahmatpuraghs_Recognition_1756147230_68acae1e8d89f`} download={`/rahmatpuraghs_Recognition_1756147230_68acae1e8d89f`} rel='documentfile' >
                                    <FaDownload className='text-2xl' />
                                </a>
                            </td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default StudyOrderPage;