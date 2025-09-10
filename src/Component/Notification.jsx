import Link from 'next/link';
import { CgNotes } from "react-icons/cg";
import { IoMdArrowDropright } from "react-icons/io";
const Notifications = () => {
    return (
        <div className='w-[100%] h-[300px] my-5 flex border-2 border-black py-4'>
            <div className='mx-10'>
                <CgNotes className='text-9xl text-green-700 mt-4 mx-10' />
            </div>
            <div className=' w-[70%]'>
                <h2 className='text-2xl font-bold text-green-700 my-4'>নোটিশ বোর্ড</h2>
                <ul className='text-black'>
                    <li className='flex items-center my-2 cursor-pointer text-blue-900'><IoMdArrowDropright className='text-green-700 text-2xl' /> <Link href={'/'} >Eid-E Miladunnabi Sa. 2025 Programm List</Link></li>
                    <li className='flex items-center my-2 cursor-pointer text-blue-900'><IoMdArrowDropright className='text-green-700 text-2xl' /> <Link href={'/'} >প্রত‌্যাহিক সমাবেশ</Link></li>
                    <li className='flex items-center my-2 cursor-pointer text-blue-900'><IoMdArrowDropright className='text-green-700 text-2xl' /> <Link href={'/'} >অর্ধ বার্ষিক পরীক্ষা ২০২৫ এর উত্তরপত্র জমাদান সংক্রান্ত।</Link></li>
                    <li className='flex items-center my-2 cursor-pointer text-blue-900'><IoMdArrowDropright className='text-green-700 text-2xl' /> <Link href={'/'} >MPO EFT সংক্রান্তঃ মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তরাধীন শিক্ষা প্রতিষ্ঠানের...</Link></li>
                    <li className='flex items-center my-2 cursor-pointer text-blue-900'><IoMdArrowDropright className='text-green-700 text-2xl' /> <Link href={'/'} >উপবৃত্তি প্রাপ্ত শিক্ষার্থীদের শিক্ষা প্রতিষ্ঠান পরিবর্তন/ট্রান্সফারকরণ প্রসঙ্গে।</Link></li>
                </ul>
                <div className='text-black text-end mt-4'>
                    <Link href={'/'} className='border-0 p-4 rounded-md text-white text-sm bg-green-700 '>সকল নোটিশ</Link>
                </div>
            </div>
        </div>
    );
};

export default Notifications;