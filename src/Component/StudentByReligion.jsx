import { StudentList } from '@/lib/StudentDB';
import Link from 'next/link';
import React from 'react';
import { FaEye } from "react-icons/fa";

const StudentByReligion = () => {
    const classSix = StudentList.filter(item => item?.class === 6);
    const HinduismSix = classSix.filter(item => item?.religion === 'Hinduism');
    const HinduismMaleSix = HinduismSix.filter(item => item?.gender === 'Male');
    const HinduismFemaleSix = HinduismSix.filter(item => item?.gender === 'Female');

    const IslamSix = classSix.filter(item => item?.religion === 'Islam');
    const IslamMaleSix = IslamSix.filter(item => item?.gender === 'Male');
    const IslamFemaleSix = IslamSix.filter(item => item?.gender === 'Female');


    const classSeven = StudentList.filter(item => item?.class === 7);
    const HinduismSeven = classSeven.filter(item => item?.religion === 'Hinduism');
    const HinduismMaleSeven = HinduismSeven.filter(item => item?.gender === 'Male');
    const HinduismFemaleSeven = HinduismSeven.filter(item => item?.gender === 'Female');

    const IslamSeven = classSeven.filter(item => item?.religion === 'Islam');
    const IslamMaleSeven = IslamSeven.filter(item => item?.gender === 'Male');
    const IslamFemaleSeven = IslamSeven.filter(item => item?.gender === 'Female');


    const classEight = StudentList.filter(item => item?.class === 8);
    const HinduismEight = classEight.filter(item => item?.religion === 'Hinduism');
    const HinduismMaleEight = HinduismEight.filter(item => item?.gender === 'Male');
    const HinduismFemaleEight = HinduismEight.filter(item => item?.gender === 'Female');

    const IslamEight = classEight.filter(item => item?.religion === 'Islam');
    const IslamMaleEight = IslamEight.filter(item => item?.gender === 'Male');
    const IslamFemaleEight = IslamEight.filter(item => item?.gender === 'Female');


    const classNine = StudentList.filter(item => item?.class === 9);
    const HinduismNine = classNine.filter(item => item?.religion === 'Hinduism');
    const HinduismMaleNine = HinduismNine.filter(item => item?.gender === 'Male');
    const HinduismFemaleNine = HinduismNine.filter(item => item?.gender === 'Female');

    const IslamNine = classNine.filter(item => item?.religion === 'Islam');
    const IslamMaleNine = IslamNine.filter(item => item?.gender === 'Male');
    const IslamFemaleNine = IslamNine.filter(item => item?.gender === 'Female');


    const classTen = StudentList.filter(item => item?.class === 10);
    const HinduismTen = classTen.filter(item => item?.religion === 'Hinduism');
    const HinduismMaleTen = HinduismTen.filter(item => item?.gender === 'Male');
    const HinduismFemaleTen = HinduismTen.filter(item => item?.gender === 'Female');

    const IslamTen = classTen.filter(item => item?.religion === 'Islam');
    const IslamMaleTen = IslamTen.filter(item => item?.gender === 'Male');
    const IslamFemaleTen = IslamTen.filter(item => item?.gender === 'Female');

    return (
        <div className='w-[100%] border-t border-gray-300 h-[400px] overflow-auto'>
            <table className='w-[100%] text-black text-center border border-gray-300'>
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='border border-gray-300 px-3 py-2'>ক্রমিক</th>
                        <th className='border border-gray-300 px-3 py-2'>শ্রেণী</th>
                        <th className='border border-gray-300 px-3 py-2'>ধর্ম</th>
                        <th className='border border-gray-300 px-3 py-2'>মোট</th>
                        <th className='border border-gray-300 px-3 py-2'>বালক</th>
                        <th className='border border-gray-300 px-3 py-2'>বালিকা</th>
                        <th className='border border-gray-300 px-3 py-2'>শিক্ষার্থীর তালিকা</th>
                    </tr>

                </thead>
                <tbody>
                    {/* Rows will go here */}
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>1</td>
                        <td className='border border-gray-300 px-3 py-2'>6</td>
                        <td className='border border-gray-300 px-3 py-2'>{'Hinduism'}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismSix.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismMaleSix.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismFemaleSix.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/6'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>2</td>
                        <td className='border border-gray-300 px-3 py-2'>6</td>
                        <td className='border border-gray-300 px-3 py-2'>{'Islam'}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamSix.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamMaleSix.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamFemaleSix.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/6'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>


                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>3</td>
                        <td className='border border-gray-300 px-3 py-2'>7</td>
                        <td className='border border-gray-300 px-3 py-2'>{'Hinduism'}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismSeven.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismMaleSeven.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismFemaleSeven.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/7'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>4</td>
                        <td className='border border-gray-300 px-3 py-2'>7</td>
                        <td className='border border-gray-300 px-3 py-2'>{'Islam'}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamSeven.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamMaleSeven.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamFemaleSix.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/7'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>


                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>5</td>
                        <td className='border border-gray-300 px-3 py-2'>8</td>
                        <td className='border border-gray-300 px-3 py-2'>{'Hinduism'}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismEight.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismMaleEight.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismFemaleEight.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/8'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>6</td>
                        <td className='border border-gray-300 px-3 py-2'>8</td>
                        <td className='border border-gray-300 px-3 py-2'>{'Islam'}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamEight.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamMaleEight.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamFemaleEight.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/8'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>


                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>7</td>
                        <td className='border border-gray-300 px-3 py-2'>9</td>
                        <td className='border border-gray-300 px-3 py-2'>{'Hinduism'}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismNine.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismMaleNine.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismFemaleNine.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/9'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>8</td>
                        <td className='border border-gray-300 px-3 py-2'>9</td>
                        <td className='border border-gray-300 px-3 py-2'>{'Islam'}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamNine.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamMaleNine.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamFemaleNine.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/9'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>


                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>9</td>
                        <td className='border border-gray-300 px-3 py-2'>10</td>
                        <td className='border border-gray-300 px-3 py-2'>{'Hinduism'}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismTen.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismMaleTen.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{HinduismFemaleTen.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/10'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>10</td>
                        <td className='border border-gray-300 px-3 py-2'>10</td>
                        <td className='border border-gray-300 px-3 py-2'>{'Islam'}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamTen.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamMaleTen.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{IslamFemaleTen.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/10'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                   

                </tbody>
            </table>
        </div>
    );
};

export default StudentByReligion;