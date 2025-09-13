import React from 'react';

const Syllabus = () => {
    return (
        <div className='w-[100%] mt-4'>
            <div className='w-[100%] h-[50px] bg-[#27ae5f] opacity-90 rounded-md'>
                <h2 className='text-center text-black leading-14 text-2xl'>ক্লাস রুটিন</h2>
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
                        <tr className='border border-gray-300'>
                            <td className='text-center py-2 text-sm border border-gray-300'>1</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>Class Routine 2025</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>2025-09-02 08:47:42</td>
                            <Link href='/rahmatpuraghs_Class-Routine_1756781262_Class Routine 2025 September.pdf' download='/rahmatpuraghs_Class-Routine_1756781262_Class Routine 2025 September.pdf' rel='#'><td className='text-center py-2 border border-gray-300 flex justify-center'><FaDownload className='text-2xl' /></td></Link>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Syllabus;