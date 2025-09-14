import React from 'react';

const page = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-xl text-black '> বিভিন্ন ফরম ডাউনলোড</h1>
            <ul className='w-[100%]'>
                <li className='text-black list-decimal'>ছুটির ফরম (শিক্ষক-কর্মচারী)</li>
                <li className='text-black list-decimal'>ছুটির ফরম (শিক্ষার্থী)</li>
                <li className='text-black list-decimal'>জেএসসি রেজিস্ট্রেশণের আবেদন ফরম</li>
                <li className='text-black list-decimal'>এসএসসি রেজিস্ট্রেশণের আবেদন ফরম</li>
            </ul>
        </div>
    );
};

export default page;