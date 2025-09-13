import { TeacherCollection } from '@/lib/db';
import React from 'react';

const page = ({ params }) => {
    const { id } = params
    console.log(id)
    const filter = TeacherCollection.filter(item => item?.id === parseInt(id));
    console.log(filter[0])
    const { id: _id, name, title, image } = filter[0] || {};
    return (
        <div className='w-[100%] min-h-screen lg:flex  p-4'>
            <div className='w-[100%] lg:w-[40%] mt-4'>
                <img src="/rahmatpuraghs_staffs.jpg" alt="" className='w-[280px] h-[280px] mx-auto rounded-full' />
                <div className='text-black w-[50%] mx-auto'>
                    <h2 className='text-black text-xl text-center my-3'>বাদল চন্দ্র বর্মন</h2>
                    <h3 className='text-black text-sm text-center my-1'>প্রধান শিক্ষক</h3>
                </div>
            </div>

            <div className='w-[100%] lg:w-[60%]'>
                {/* table */}

                <table className=" w-[100%] border border-gray-300 shadow-lg  text-black">
                    <tbody>
                        <tr>
                            <th className="px-4 py-2 border border-gray-400 text-left">Phone</th>
                            <td className="px-4 py-2 border border-gray-400"></td>
                        </tr>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border border-gray-400 text-left">Comment</th>
                            <td className="px-4 py-2 border border-gray-400"></td>
                        </tr>
                        
                    </tbody>
                </table>   
            </div>
        </div>
    );
};

export default page;