import React from 'react';

const TeacherProfile = () => {
    return (
        <div className='w-[100%] min-h-screen lg:flex  p-4'>
            <div className='w-[100%] lg:w-[40%] mt-4'>
                <img src="/rahmatpuraghs_staffs_photo2.jpg" alt="" className='w-[280px] h-[280px] mx-auto rounded-full' />
                <div className='text-black w-[50%] mx-auto'>
                    <h2 className='text-black text-xl text-center my-3'>মোছাঃ তাহমিনা বেগম</h2>
                    <h3 className='text-black text-sm text-center my-1'>সহকারী শিক্ষক</h3>
                </div>
            </div>

            <div className='w-[100%] lg:w-[60%]'>
                {/* table */}

                <table className=" w-[100%] border border-gray-300 shadow-lg  text-black">
                    <tbody>
                        <tr>
                            <th className="px-4 py-2 border border-gray-400 text-left">Job Type</th>
                            <td className="px-4 py-2 border border-gray-400">নিয়মিত</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border border-gray-400 text-left">MPO Status</th>
                            <td className="px-4 py-2 border border-gray-400">এমপিও</td>
                        </tr>
                        <tr>
                            <th className="px-4 py-2 border border-gray-400 text-left">Index Number</th>
                            <td className="px-4 py-2 border border-gray-400">R560283</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border border-gray-400 text-left">Subject</th>
                            <td className="px-4 py-2 border border-gray-400">নিয়মিত</td>
                        </tr>
                        <tr>
                            <th className="px-4 py-2 border border-gray-400 text-left">Phone</th>
                            <td className="px-4 py-2 border border-gray-400">01721214499</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border border-gray-400 text-left">Email</th>
                            <td className="px-4 py-2 border border-gray-400">bcbarman99@gmail.com</td>
                        </tr>
                        <tr>
                            <th className="px-4 py-2 border border-gray-400 text-left">Social Link</th>
                            <td className="px-4 py-2 border border-gray-400"></td>
                        </tr>
                    </tbody>
                </table>



                {/* description */}
                <div className='mt-10 border-s-[6px] h-[50px] border-purple-600 rounded-lg py-2 leading-7 space-y-6 px-2'>
                    
                </div>
            </div>
        </div>
    );
};

export default TeacherProfile;