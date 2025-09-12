
import BasicInfo from '@/Component/BasicInfo';
import Category from '@/Component/Category';
import Notifications from '@/Component/Notification';
import Slider from '@/Component/Slider';
import React from 'react';

const Home = () => {
    return (
        <div className='w-[100%]  lg:flex justify-between gap-2 min-h-screen'>
            <div className='w-[100%] lg:w-[75%] mt-4'>
                  <Slider></Slider>
                  <Notifications></Notifications>
                  <Category></Category>
            </div>
            <div className='w-[100%] lg:w-[25%] mt-4'>
                <BasicInfo></BasicInfo> 
            </div>
        </div>
    );
};

export default Home;