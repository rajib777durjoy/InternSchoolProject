
import { TeacherCollection } from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';

const CommitteMember = () => {
    return (
        <div className='w-[100%] '>
            <h1 className='text-xl text-center text-black'>বর্তমান কমিটির সদস‌্যের তালিকা</h1>
            <div className='w-[100%] border border-red-300  grid lg:grid-cols-4 md:grid-cols-3 text-black'>
                {
                    TeacherCollection?.slice(0, 4).map(item => <div key={item?.id} className='border border-red  text-black'>
                        <div className='w-[90%] mx-auto'>
                            <img src={item?.image} alt="" className='w-[200px] h-[200px] mx-auto rounded-full' />
                        </div>
                        <div className='h-[200px] mt-5'>
                            <div className='text-center'>{item?.name}</div>
                            <div className='text-center'>{item?.title}</div>
                            <div className='flex justify-center mt-1'>
                                <Link href={`/CommitteMember/${item?.id}`} className='border bg-green-700 text-white py-2 px-4 rounded-md'><button>বিস্তারিত</button></Link>
                            </div>

                        </div>
                    </div>
                    )
                }

            </div>
        </div>
    );
};

export default CommitteMember;