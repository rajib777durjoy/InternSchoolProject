import StudentByAge from '@/Component/StudentByAge';
import StudentByGroup from '@/Component/StudentByGroup';
import StudentByReligion from '@/Component/StudentByReligion';
import StudentCount from '@/Component/StudentCount';
import StudentSection from '@/Component/StudentSection';
import React from 'react';

const StudentCountPage = () => {
    return (<>
        <div className='w-[100%] border border-gray-300 mt-4 rounded-md shadow-md'>
            <h1 className='text-black text-center py-4'>বর্তমান বছরের শ্রেণিভিত্তিক শিক্ষার্থীর সংখ্যা (মোট:100)</h1>
            <StudentCount></StudentCount>
        </div>
        <div className='w-[100%] border border-gray-300 mt-4 rounded-md shadow-md'>
            <h1 className='text-black text-center py-4'>বর্তমান বছরের সেকশনভিত্তিক শিক্ষার্থীর সংখ্যা (মোট:100)</h1>
            <StudentSection></StudentSection>
        </div>
        <div className='w-[100%] border border-gray-300 mt-4 rounded-md shadow-md '>
            <h1 className='text-black text-center py-4'>বর্তমান বছরের গ্রুপভিত্তিক শিক্ষার্থীর সংখ্যা (মোট:100)</h1>
            <StudentByGroup></StudentByGroup>
        </div>
        <div className='w-[100%] border border-gray-300 mt-4 rounded-md shadow-md '>
            <h1 className='text-black text-center py-4'>বর্তমান বছরের গ্রুপভিত্তিক শিক্ষার্থীর সংখ্যা (মোট:100)</h1>
            <StudentByAge></StudentByAge>
        </div>
        <div className='w-[100%] border border-gray-300 mt-4 rounded-md shadow-md '>
            <h1 className='text-black text-center py-4'>বর্তমান বছরের ধর্ম ও শ্রেণিভিত্তিক শিক্ষার্থীর সংখ্যা (মোট:100)</h1>
            <StudentByReligion></StudentByReligion>
        </div>
    </>

    );
};

export default StudentCountPage;