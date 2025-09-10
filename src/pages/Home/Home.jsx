
import Slider from '@/Component/Slider';
import React from 'react';

const Home = () => {
    return (
        <div className='w-[100%] border-2 flex justify-between gap-2'>
            <div className='w-[70%] border-2 border-black min-h-screen'>
                  <Slider></Slider>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;