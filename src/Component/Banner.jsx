import React from 'react';

const Banner = () => {
    return (
        <div className='w-[100%]'>
        {/* title */}
         <div className='w-[100%] h-[50px] bg-green-300  rounded-md'>
           <h2 className='text-center text-black leading-14 text-2xl'>Galari</h2> 
            </div>
           {/* card */}
           <div className='w-[100%] lg:grid-cols-4 md:grid-cols-3'>
              <div>
                 <img src="" alt="" />
                 <div>
                    <span>text bangla</span>
                 </div>
              </div>
           </div>
        </div>
    );
};

export default Banner;