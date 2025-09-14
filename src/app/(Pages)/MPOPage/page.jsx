import React from 'react';
import { FaDownload } from 'react-icons/fa6';

const page = () => {
    return (
        <div className='w-[100%] mt-4'>
            <div className='w-[100%] h-[50px] bg-[#27ae5f] opacity-90 rounded-md'>
                <h2 className='text-center text-black leading-14 text-2xl'>এমপিও-ইএফটি</h2>
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
                        <tr className='border border-gray-300 '>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                                6
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                                2023, January
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                                2025-08-19 01:18:57
                            </td>
                           
                            <td className='text-center py-2 text-sm border  border-gray-300 flex justify-center'>
                                <a href={`/rahmatpuraghs_MPO-EFT_1755544737_MPO`} download={`/rahmatpuraghs_MPO-EFT_1755544737_MPO`} rel='documentfile' >
                                    <FaDownload className='text-2xl' />
                                </a>
                            </td>

                        </tr>
                        <tr className='border border-gray-300 '>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                                5
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                               	2022, December
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                               2025-08-19 01:18:30	

                            </td>
                           
                            <td className='text-center py-2 text-sm border  border-gray-300 flex justify-center'>
                                <a href={`/rahmatpuraghs_MPO-EFT_1755544710_MPO_5`} download={`/rahmatpuraghs_MPO-EFT_1755544710_MPO_5`} rel='documentfile' >
                                    <FaDownload className='text-2xl' />
                                </a>
                            </td>

                        </tr>
                        <tr className='border border-gray-300 '>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                                4
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                               	2022, November	
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                               2025-08-19 01:17:56

                            </td>
                           
                            <td className='text-center py-2 text-sm border  border-gray-300 flex justify-center'>
                                <a href={`/rahmatpuraghs_MPO-EFT_1755544676_MPO_4`} download={`/rahmatpuraghs_MPO-EFT_1755544676_MPO_4`} rel='documentfile' >
                                    <FaDownload className='text-2xl' />
                                </a>
                            </td>

                        </tr>
                        <tr className='border border-gray-300 '>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                                3
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                               		2022, October
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                              2025-08-19 01:17:20	

                            </td>
                           
                            <td className='text-center py-2 text-sm border  border-gray-300 flex justify-center'>
                                <a href={`/rahmatpuraghs_MPO-EFT_1755544640_MPO_3`} download={`/rahmatpuraghs_MPO-EFT_1755544640_MPO_3`} rel='documentfile' >
                                    <FaDownload className='text-2xl' />
                                </a>
                            </td>

                        </tr>
                        <tr className='border border-gray-300 '>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                                2
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                               	2022, September
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                               2025-08-19 00:37:01

                            </td>
                           
                            <td className='text-center py-2 text-sm border  border-gray-300 flex justify-center'>
                                <a href={`/rahmatpuraghs_MPO-EFT_1755542221_MPO_2`} download={`/rahmatpuraghs_MPO-EFT_1755542221_MPO_2`} rel='documentfile' >
                                    <FaDownload className='text-2xl' />
                                </a>
                            </td>

                        </tr>
                        <tr className='border border-gray-300 '>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                                1
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                               	2022, August
                            </td>
                            <td className='text-center border  border-gray-300 py-2 text-sm'>
                              2025-08-19 00:23:56	

                            </td>
                           
                            <td className='text-center py-2 text-sm border  border-gray-300 flex justify-center'>
                                <a href={`/rahmatpuraghs_MPO-EFT_1755541436_MPO_1`} download={`/rahmatpuraghs_MPO-EFT_1755541436_MPO_1`} rel='documentfile' >
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

export default page;