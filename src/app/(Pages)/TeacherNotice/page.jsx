import React from 'react';

const TeacherNotice = () => {
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
                            <td className='text-center py-2 text-sm border border-gray-300'>7</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>Eid-E Miladunnabi Sa. 2025 Programm List</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>2025-09-03 16:05:42</td>
                            <Link href='/rahmatpuraghs_Students-Notice_7.jpg' download='/rahmatpuraghs_Students-Notice_7.jpg' rel='#'><td className='text-center py-2 border border-gray-300 flex justify-center'><FaDownload className='text-2xl' /></td></Link>
                        </tr>
                        <tr className='border border-gray-300'>
                            <td className='text-center py-2 text-sm border border-gray-300'>6</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>প্রত‌্যাহিক সমাবেশ</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>2025-08-29 15:37:40</td>
                            <Link href='/rahmatpuraghs_Others-Notice_6.png' download='/rahmatpuraghs_Others-Notice_6.png' rel='#'><td className='text-center py-2 border border-gray-300 flex justify-center'><FaDownload className='text-2xl' /></td></Link>
                        </tr>
                        <tr className='border border-gray-300'>
                            <td className='text-center py-2 text-sm border border-gray-300'>5</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>অর্ধ বার্ষিক পরীক্ষা ২০২৫ এর উত্তরপত্র জমাদান সংক্রান্ত।</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>2025-08-28 22:00:54</td>
                            <Link href='/rahmatpuraghs_Staff-Notice_5.jpg' download='/rahmatpuraghs_Staff-Notice_5.jpg' rel='#'><td className='text-center py-2 border border-gray-300 flex justify-center'><FaDownload className='text-2xl' /></td></Link>
                        </tr>
                        <tr className='border border-gray-300'>
                            <td className='text-center py-2 text-sm border border-gray-300'>4</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>MPO EFT সংক্রান্তঃ মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তরাধীন শিক্ষা প্রতিষ্ঠানের এমপিওভুক্ত শিক্ষক-কর্মচারীদের এমপিও এর অর্থ EFT-তে প্রেরণের লক্ষ্যে প্রতিষ্ঠান প্রধান কর্তৃক বিল সাবমিট সংক্রান্ত।</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>2025-08-21 02:26:06</td>
                            <Link href='/rahmatpuraghs_Official-Notice_4.pdf' download='/rahmatpuraghs_Official-Notice_4.pdf' rel='#'><td className='text-center py-2 border border-gray-300 flex justify-center'><FaDownload className='text-2xl' /></td></Link>
                        </tr>
                        <tr className='border border-gray-300'>
                            <td className='text-center py-2 text-sm border border-gray-300'>3</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>উপবৃত্তি প্রাপ্ত শিক্ষার্থীদের শিক্ষা প্রতিষ্ঠান পরিবর্তন/ট্রান্সফারকরণ প্রসঙ্গে।</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>2025-08-18 23:51:13</td>
                            <Link href='/rahmatpuraghs_Official-Notice_3.pdf' download='/rahmatpuraghs_Official-Notice_3.pdf' rel='#'><td className='text-center py-2 border border-gray-300 flex justify-center'><FaDownload className='text-2xl' /></td></Link>
                        </tr>

                        <tr className='border border-gray-300'>
                            <td className='text-center py-2 text-sm border border-gray-300'>2</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>২০২৫ মাস থেকে ৬ষ্ঠ থেকে ১০ম এবং সমমান শ্রেণির উপবৃত্তির বিষয়বস্তু নির্ধারণের মধ্যে অযোগ্য নির্ধারণের মাধ্যমে নিষ্ক্রিয়করণ।</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>2025-08-18 23:48:15</td>
                            <Link href='/rahmatpuraghs_Students-Notice_2.png' download='/rahmatpuraghs_Students-Notice_2.png' rel='#'><td className='text-center py-2 border border-gray-300 flex justify-center'><FaDownload className='text-2xl' /></td></Link>
                        </tr>
                        <tr className='border border-gray-300'>
                            <td className='text-center py-2 text-sm border border-gray-300'>1</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>২০২৫ সালের ১০ম শ্রেণির শিক্ষার্থীদের প্রাক-নির্বাচনী পরীক্ষা আগামী ০১/০৯/২০২৫ইং তারিখ হইতে আরম্ভ হইবে।</td>
                            <td className='text-center py-2 text-sm border border-gray-300'>2025-08-10 02:12:10</td>
                            <Link href='/rahmatpuraghs_Official-Notice_1.pdf' download='/rahmatpuraghs_Official-Notice_1.pdf' rel='#'><td className='text-center py-2 border border-gray-300 flex justify-center'><FaDownload className='text-2xl' /></td></Link>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default TeacherNotice;