'use client'

import React from 'react';

const DynamicRoute = () => {
    const handleClick=(value)=>{
      console.log("button value::",value)
    }
    return (
        <div className='w-[100%]  text-black mt-4 '>
            <h1 className='text-center text-2xl py-4'>শিক্ষক তালিকা</h1>
            <div className='flex justify-center w-[90%] mx-auto text-black'>
                <button onClick={() => handleClick('All')} className='text-center btn mx-2 rounded-md border border-blue-500 text-xs hover:bg-blue-500 hover:text-white bg-white text-blue-500'>সকল</button>
                <button onClick={() => handleClick('teacher')} className='text-center btn mx-2 rounded-md border border-blue-500 text-xs hover:bg-blue-500 hover:text-white bg-white text-blue-500'>শিক্ষক</button>
                <button onClick={() => handleClick('staff')} className='text-center btn mx-2 rounded-md border border-blue-500 text-xs hover:bg-blue-500 hover:text-white bg-white text-blue-500'>কর্মচারী</button>
            </div>
            <div className='w-[100%] grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 '>
                {
                    data.map((item, index) => <div className='border border-gray-300 rounded-md shadow-md p-4'>
                        <img src="/rahmatpuraghs_staffs.jpg" alt="" className='w-[250px] h-[250px] mx-auto rounded-full' />
                        <div className='text-black mx-auto'>
                            <h2 className='text-black text-xl text-center my-3'>{item?.name}</h2>
                            <h3 className='text-black text-sm text-center my-1'>{item?.title}</h3>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default DynamicRoute;