'use client'

import { TeacherCollection } from '@/lib/db';
import React, { useEffect, useState } from 'react';

const Teachers = () => {
    const [data, setData] = useState([]);
  console.log('filterdara::',data)

  const handleClickAll=()=>{
   setData(TeacherCollection)
  }
  const handleClickTeacher=()=>{
   const filters= TeacherCollection.filter(item=> item?.role === 'teacher');
   console.log(filters);
   setData(filters)
  }
  const handleClickStaff=()=>{
   const filters= TeacherCollection.filter(item=> item?.role === 'staff');
   console.log(filters);
   setData(filters)
  }
  useEffect(()=>{
   const filters= TeacherCollection.filter(item=> item?.role === 'teacher');
   console.log(filters);
   setData(filters)
  },[])
    return (
        <div className='w-[100%]  text-black mt-4 '>
            <h1 className='text-center text-2xl py-4'>শিক্ষক তালিকা</h1>
              <div className='flex justify-center gap-6 w-[70%] mx-auto text-black'>
                 <button onClick={()=>handleClickAll()} className='btn bg-white hover:bg-blue-500 hover:text-white text-blue-500 rounded-md border-blue-500'>সকল</button>
                 <button onClick={()=>handleClickTeacher()} className='btn bg-white hover:bg-blue-500 hover:text-white text-blue-500 rounded-md border-blue-500'>শিক্ষক</button>
                 <button onClick={()=>handleClickStaff()} className='btn bg-white hover:bg-blue-500 hover:text-white text-blue-500 rounded-md border-blue-500'>কর্মচারী</button>
              </div>
            <div className='w-[100%] grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 '>
                {
                    data.map((item, index) => <div key={index} className='border border-gray-300 rounded-md shadow-md p-4'>
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

export default Teachers;