
import BasicInfo from '@/Component/BasicInfo';
import Notifications from '@/Component/Notification';
import Slider from '@/Component/Slider';
import React from 'react';

const Home = () => {
    return (
        <div className='w-[100%]  flex justify-between gap-2 min-h-screen'>
            <div className='w-[75%] mt-4'>
                  <Slider></Slider>
                  <Notifications></Notifications>
            </div>
            <div className='w-[25%] mt-4'>
                <BasicInfo></BasicInfo> 
            </div>
        </div>
    );
};

export default Home;