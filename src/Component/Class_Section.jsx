import React from 'react';
import { FaDownload } from 'react-icons/fa6';
const Class_Section = () => {
    return (
        <div className='w-[100%] mt-4'>
            <div className='w-[100%] h-[50px] bg-[#27ae5f] opacity-90 rounded-md'>
                <h2 className='text-center text-black leading-14 text-2xl'>শ্রেণি ভিত্তিক শাখা অনুমোদনের চিঠি</h2>
            </div>
            <div className='w-[100%] overflow-x-scroll text-black my-4'>
                <table className='w-[100%]'>
                    <thead>
                        <tr className='border border-gray-300'>
                            <th className='text-center text-sm py-2 border border-gray-300'>#</th>
                            <th className='text-center text-sm py-2 border border-gray-300'>শ্রেণি-শাখা	</th>
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
                                ষষ্ঠ শ্রেণির খ শাখা অনুমোদন
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                               1991-08-27
                            </td>
                            <td className='text-center border border-gray-300 py-2 text-sm'>
                               27/08/1991 হ‌ইতে
                            </td>
                            <td className='text-center py-2 text-sm  flex justify-center'>
                                <Link href={`/rahmatpuraghs_Teaching-Permission_1756147307_68acae6b1aca7`} download={`/rahmatpuraghs_Teaching-Permission_1756147307_68acae6b1aca7`} rel='documentfile' >
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

export default Class_Section;