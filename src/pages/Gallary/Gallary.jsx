import React from 'react';
const Gallary = () => {
   return (
      <div className='w-[100%]'>
         {/* title */}
         <div className='w-[100%] h-[50px] bg-[#27ae5f] opacity-90 rounded-md'>
            <h2 className='text-center text-black leading-14 text-2xl'>গ্যালারি</h2>
         </div>
         {/* card */}
         <div className='w-[100%] grid lg:grid-cols-4 md:grid-cols-3 gap-6 mt-6'>
            <div className='shadow-md rounded-lg h-[260px]'>
               <img src={'/rahmatpuraghs_Gallery-Image.jpg'} alt="" className='w-[100%] h-[200px] rounded-t-lg hover:scale-110 duration-300' />
               <div className='py-4 text-center'>
                  <span className='text-black text-xs'>বার্ষিক পরীক্ষা-২০২৩ এর ফলাফল বিতরণ</span>
               </div>
            </div>
            <div className='shadow-md rounded-lg h-[260px]'>
               <img src={'/rahmatpuraghs_Gallery-Image_1754673688_raghs_2.jpg'} alt="" className='w-[100%] h-[200px] rounded-t-lg hover:scale-110 duration-300' />
               <div className='py-4 text-center'>
                  <span className='text-black text-xs'>শিক্ষার্থীদের বিএমআই পরীক্ষণ</span>
               </div>
            </div>
            <div className='shadow-md rounded-lg h-[260px]'>
               <img src={'/rahmatpuraghs_Gallery-Image_3.jpg'} alt="" className='w-[100%] h-[200px] rounded-t-lg hover:scale-110 duration-300' />
               <div className='py-4 text-center'>
                  <span className='text-black text-xs'>বই বিতরণ উৎসব ২০২৩</span>
               </div>
            </div>
            <div className='shadow-md rounded-lg h-[260px]'>
               <img src={'/rahmatpuraghs_Gallery-Image_1754673643_raghs_4.jpg'} alt="" className='w-[100%] h-[200px] rounded-t-lg hover:scale-110 duration-300' />
               <div className='py-4 text-center'>
                  <span className='text-black text-xs'>প্রত‌্যাহিক সমাবেশ</span>
               </div>
            </div>
            <div className='shadow-md rounded-lg h-[260px]'>
               <img src={'/rahmatpuraghs_Gallery-Image5.jpg'} alt="" className='w-[100%] h-[200px] rounded-t-lg hover:scale-110 duration-300' />
               <div className='py-4 text-center'>
                  <span className='text-black text-xs'>শিক্ষক-কর্মচারী ও ম‌্যানেজিং কমিটির সদ‌স‌্যগণে যৌথ ছবি</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Gallary;