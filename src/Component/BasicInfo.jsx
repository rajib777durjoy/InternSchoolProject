
import Link from 'next/link';
import { FaUser } from "react-icons/fa6";
const BasicInfo = () => {
    return (
        <div className='w-[100%]'>
            <div className='w-[90%] mx-auto bg-green-700'>
                <h2 className='text-center py-1'>প্রধান শিক্ষক</h2>
            </div>
            <div className='w-[70%] mx-auto py-4'>
                <img src={'/rahmatpuraghs_staffs.jpg'} alt='' className='w-[100%] h-[250px]' />
                <h3 className='text-center text-black text-sm my-2'>বাদল চন্দ্র বর্মন</h3>
                <Link href={'/'} className='text-blue-900 block text-sm cursor-pointer text-center'>বিস্তারিত</Link>
            </div>
            <div className='w-[90%] mx-auto bg-green-700'>
                <h2 className='text-center py-1'>এডমিন প্যানেল</h2>
            </div>
            <div className='w-[90%] mx-auto py-2'>
                <div className='bg-green-700 rounded-full my-2  w-[30px] h-[30px] mx-auto flex items-center justify-center '>
                    <FaUser className='text-white text-xl' />
                </div>
                <Link href={'/login'} className='text-blue-900 block text-sm cursor-pointer text-center'>লগইন</Link>
            </div>
            

        </div>
    );
};

export default BasicInfo;