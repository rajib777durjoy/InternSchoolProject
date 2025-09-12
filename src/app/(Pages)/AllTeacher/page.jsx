'use client'
import { TeacherCollection } from '@/lib/db';



const AllTeacher = () => {
    const data = TeacherCollection;
    console.log('teacher::', data)
   
    return (
        <div className='w-[100%]  text-black mt-4 '>
            <h1 className='text-center text-2xl py-4'>শিক্ষক তালিকা</h1>
        
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

export default AllTeacher;