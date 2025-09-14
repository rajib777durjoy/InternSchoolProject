import View_map from '@/Component/View_map';
import React from 'react';

const page = () => {
    return (
        <div className='w-[100%]'>
            <div className='w-[100%] h-[50px] bg-[#27ae5f] opacity-90 rounded-md'>
                <h2 className='text-center text-black leading-14 text-2xl'>ক্লাস রুটিন</h2>
            </div>
            <div className='flex flex-wrap gap-4'>
                <div className='w-[100%] lg:w-[38%] border border-gray-300 h-[250px] rounded-md my-4 p-4'>
                    <h2 className='text-xl text-green-700 font-bold'>ঠিকানা:</h2>
                    <p className='text-xl text-black'>পার্বতীপুর, রহমতপুর, গাইবান্ধা সদর, গাইবান্ধা</p>
                    <h2 className='text-xl text-green-700 font-bold'>ইমেইল:</h2>
                    <p className='text-xl text-black'>rahmatpuraghs99@gmail.com</p>
                    <h2 className='text-xl text-green-700 font-bold'>মোবাইল ফোন:</h2>
                    <p className='text-xl text-black'>01721214499</p>
                </div>
                <div className='w-[100%] lg:w-[60%] border border-gray-300 my-4 p-4 rounded-md'>
                    <h1 className='text-sm text-black'>আমাদের সাথে যোগাযোগ করতে নিচের তথ্য এবং ফর্ম ব্যবহার করুন।</h1>
                    <h2>যোগাযোগ ফর্ম</h2>
                    <form action="" className='w-[90%] mx-auto '>
                        <input type="text" className='border border-gray-300 text-black mx-2 my-4 rounded-md w-[310px]' placeholder='আপনার নাম ' />
                        <input type="text" className='border border-gray-300 text-black mx-2 my-4 rounded-md w-[310px]' placeholder='আপনার ইমেইল' />
                        <br />
                        <input type="text" placeholder='বিষয় ' className='block text-black w-[95%] rounded-md my-3 ms-2 border border-gray-300' />
                        <textarea rows={5} className='border rounded-md  my-2 text-black w-[95%] ms-2 border-gray-300' name="" placeholder='আপনার বার্তা লিখুন ' id=""></textarea>
                        <button className='text-white border border-gray-300 bg-green-700 p-2 ms-1 rounded-md'>বার্তা পাঠান</button>
                    </form>
                </div>
            </div>
            <View_map></View_map>
        </div>
    );
};

export default page;