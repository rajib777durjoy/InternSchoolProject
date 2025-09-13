import { StudentList } from '@/lib/StudentDB';
import Link from 'next/link';
import React from 'react';
import { FaEye } from "react-icons/fa";

const StudentByAge = () => {

    const classSix = StudentList.filter(item => item?.class === 6);
    const SixAge11 = classSix.filter(item => item?.age === 11);
    const SixAgeMale = SixAge11.filter(item => item?.gender === 'Male')
    const SixAgeFemale = SixAge11.filter(item => item?.gender === 'Female');

    const SixAge12 = classSix.filter(item => item?.age === 12);
    const SixAgeMale12 = SixAge12.filter(item => item?.gender === 'Male')
    const SixAgeFemale12 = SixAge12.filter(item => item?.gender === 'Female');

    const SixAge13 = classSix.filter(item => item?.age === 13);
    const SixAgeMale13 = SixAge13.filter(item => item?.gender === 'Male')
    const SixAgeFemale13 = SixAge13.filter(item => item?.gender === 'Female')

    const SixAge14 = classSix.filter(item => item?.age === 14);
    const SixAgeMale14 = SixAge14.filter(item => item?.gender === 'Male')
    const SixAgeFemale14 = SixAge14.filter(item => item?.gender === 'Female');

    const SixAge15 = classSix.filter(item => item?.age === 15);
    const SixAgeMale15 = SixAge15.filter(item => item?.gender === 'Male')
    const SixAgeFemale15 = SixAge15.filter(item => item?.gender === 'Female');

    const SixAge16 = classSix.filter(item => item?.age === 16);
    const SixAgeMale16 = SixAge16.filter(item => item?.gender === 'Male')
    const SixAgeFemale16 = SixAge16.filter(item => item?.gender === 'Female');

    const classSeven = StudentList.filter(item => item?.class === 7);
    const SevenAge11 = classSeven.filter(item => item?.age === 11);
    const SevenAgeMale11 = SevenAge11.filter(item => item?.gender === 'Male')
    const SevenAgeFemale11 = SevenAge11.filter(item => item?.gender === 'Female');

    const SevenAge12 = classSeven.filter(item => item?.age === 12);
    const SevenAgeMale12 = SevenAge12.filter(item => item?.gender === 'Male')
    const SevenAgeFemale12 = SevenAge12.filter(item => item?.gender === 'Female');

    const SevenAge13 = classSeven.filter(item => item?.age === 13);
    const SevenAgeMale13 = SevenAge13.filter(item => item?.gender === 'Male')
    const SevenAgeFemale13 = SevenAge13.filter(item => item?.gender === 'Female');

    const SevenAge14 = classSeven.filter(item => item?.age === 14);
    const SevenAgeMale14 = SevenAge14.filter(item => item?.gender === 'Male')
    const SevenAgeFemale14 = SevenAge14.filter(item => item?.gender === 'Female');

    const SevenAge15 = classSeven.filter(item => item?.age === 15);
    const SevenAgeMale15 = SevenAge15.filter(item => item?.gender === 'Male')
    const SevenAgeFemale15 = SevenAge15.filter(item => item?.gender === 'Female');

    const SevenAge16 = classSeven.filter(item => item?.age === 16);
    const SevenAgeMale16 = SevenAge16.filter(item => item?.gender === 'Male')
    const SevenAgeFemale16 = SevenAge16.filter(item => item?.gender === 'Female');


    const classEight = StudentList.filter(item => item?.class === 8);
    const EightAge11 = classEight.filter(item => item?.age === 11);
    const EightAgeMale11 = EightAge11.filter(item => item?.gender === 'Male')
    const EightAgeFemale11 = EightAge11.filter(item => item?.gender === 'Female');

    const EightAge12 = classEight.filter(item => item?.age === 12);
    const EightAgeMale12 = EightAge12.filter(item => item?.gender === 'Male')
    const EightAgeFemale12 = EightAge12.filter(item => item?.gender === 'Female');

    const EightAge13 = classEight.filter(item => item?.age === 13);
    const EightAgeMale13 = EightAge13.filter(item => item?.gender === 'Male')
    const EightAgeFemale13 = EightAge13.filter(item => item?.gender === 'Female');

    const EightAge14 = classEight.filter(item => item?.age === 14);
    const EightAgeMale14 = EightAge14.filter(item => item?.gender === 'Male')
    const EightAgeFemale14 = EightAge14.filter(item => item?.gender === 'Female');

    const EightAge15 = classEight.filter(item => item?.age === 15);
    const EightAgeMale15 = EightAge15.filter(item => item?.gender === 'Male')
    const EightAgeFemale15 = EightAge15.filter(item => item?.gender === 'Female');

    const EightAge16 = classEight.filter(item => item?.age === 16);
    const EightAgeMale16 = EightAge16.filter(item => item?.gender === 'Male')
    const EightAgeFemale16 = EightAge16.filter(item => item?.gender === 'Female');


    const classNine = StudentList.filter(item => item?.class === 9);
    const NineAge11 = classNine.filter(item => item?.age === 11);
    const NineAgeMale11 = NineAge11.filter(item => item?.gender === 'Male')
    const NineAgeFemale11 = NineAge11.filter(item => item?.gender === 'Female');

    const NineAge12 = classNine.filter(item => item?.age === 12);
    const NineAgeMale12 = NineAge12.filter(item => item?.gender === 'Male')
    const NineAgeFemale12 = NineAge12.filter(item => item?.gender === 'Female');

    const NineAge13 = classNine.filter(item => item?.age === 13);
    const NineAgeMale13 = NineAge13.filter(item => item?.gender === 'Male')
    const NineAgeFemale13 = NineAge13.filter(item => item?.gender === 'Female');

    const NineAge14 = classNine.filter(item => item?.age === 14);
    const NineAgeMale14 = NineAge14.filter(item => item?.gender === 'Male')
    const NineAgeFemale14 = NineAge14.filter(item => item?.gender === 'Female');

    const NineAge15 = classNine.filter(item => item?.age === 15);
    const NineAgeMale15 = NineAge15.filter(item => item?.gender === 'Male')
    const NineAgeFemale15 = NineAge15.filter(item => item?.gender === 'Female');

    const NineAge16 = classNine.filter(item => item?.age === 16);
    const NineAgeMale16 = NineAge16.filter(item => item?.gender === 'Male')
    const NineAgeFemale16 = NineAge16.filter(item => item?.gender === 'Female');
  //------------------------------------------//
    const classTen = StudentList.filter(item => item?.class === 10);
    const TenAge11 = classTen.filter(item => item?.age === 11);
    const TenAgeMale11 = TenAge11.filter(item => item?.gender === 'Male')
    const TenAgeFemale11 = TenAge11.filter(item => item?.gender === 'Female');

    const TenAge12 = classTen.filter(item => item?.age === 12);
    const TenAgeMale12 = TenAge12.filter(item => item?.gender === 'Male')
    const TenAgeFemale12 = TenAge12.filter(item => item?.gender === 'Female');

    const TenAge13 = classTen.filter(item => item?.age === 13);
    const TenAgeMale13 = TenAge13.filter(item => item?.gender === 'Male')
    const TenAgeFemale13 = TenAge13.filter(item => item?.gender === 'Female');

    const TenAge14 = classTen.filter(item => item?.age === 14);
    const TenAgeMale14 = TenAge14.filter(item => item?.gender === 'Male')
    const TenAgeFemale14 = TenAge14.filter(item => item?.gender === 'Female');

    const TenAge15 = classTen.filter(item => item?.age === 15);
    const TenAgeMale15 = TenAge15.filter(item => item?.gender === 'Male')
    const TenAgeFemale15 = TenAge15.filter(item => item?.gender === 'Female');

    const TenAge16 = classTen.filter(item => item?.age === 16);
    const TenAgeMale16 = TenAge16.filter(item => item?.gender === 'Male')
    const TenAgeFemale16 = TenAge16.filter(item => item?.gender === 'Female');

    return (
        <div className='w-[100%] border-t border-gray-300 h-[400px] overflow-auto'>
            <table className='w-[100%] text-black text-center border border-gray-300'>
                <thead>
                    <tr className='bg-gray-100'>
                        <th rowSpan={2} className='border border-gray-300 px-3 py-2'>ক্রমিক</th>
                        <th rowSpan={2} className='border border-gray-300 px-3 py-2'>শ্রেণী</th>
                        <th colSpan={3} className='border border-gray-300 px-3 py-2'>শিক্ষার্থীর সংখ্যা (11 বছর)</th>
                        <th colSpan={3} className='border border-gray-300 px-3 py-2'>শিক্ষার্থীর সংখ্যা (12 বছর)</th>
                        <th colSpan={3} className='border border-gray-300 px-3 py-2'>শিক্ষার্থীর সংখ্যা (13 বছর)</th>
                        <th colSpan={3} className='border border-gray-300 px-3 py-2'>শিক্ষার্থীর সংখ্যা (14 বছর)</th>
                        <th colSpan={3} className='border border-gray-300 px-3 py-2'>শিক্ষার্থীর সংখ্যা (15 বছর)</th>
                        <th colSpan={3} className='border border-gray-300 px-3 py-2'>শিক্ষার্থীর সংখ্যা (16 বছর)</th>
                        <th rowSpan={2} className='border border-gray-300 px-3 py-2'>শিক্ষার্থীর তালিকা</th>
                    </tr>
                    <tr className='bg-gray-50'>

                        <th className='border border-gray-300 px-3 py-2'>মোট</th>
                        <th className='border border-gray-300 px-3 py-2'>বালক</th>
                        <th className='border border-gray-300 px-3 py-2'>বালিকা</th>

                        <th className='border border-gray-300 px-3 py-2'>মোট</th>
                        <th className='border border-gray-300 px-3 py-2'>বালক</th>
                        <th className='border border-gray-300 px-3 py-2'>বালিকা</th>

                        <th className='border border-gray-300 px-3 py-2'>মোট</th>
                        <th className='border border-gray-300 px-3 py-2'>বালক</th>
                        <th className='border border-gray-300 px-3 py-2'>বালিকা</th>

                        <th className='border border-gray-300 px-3 py-2'>মোট</th>
                        <th className='border border-gray-300 px-3 py-2'>বালক</th>
                        <th className='border border-gray-300 px-3 py-2'>বালিকা</th>

                        <th className='border border-gray-300 px-3 py-2'>মোট</th>
                        <th className='border border-gray-300 px-3 py-2'>বালক</th>
                        <th className='border border-gray-300 px-3 py-2'>বালিকা</th>

                        <th className='border border-gray-300 px-3 py-2'>মোট</th>
                        <th className='border border-gray-300 px-3 py-2'>বালক</th>
                        <th className='border border-gray-300 px-3 py-2'>বালিকা</th>

                    </tr>
                </thead>
                <tbody>
                    {/* Rows will go here */}
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>1</td>
                        <td className='border border-gray-300 px-3 py-2'>6</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAge11.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAgeMale.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAgeFemale.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAge12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAgeMale12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAgeFemale12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAge13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAgeMale13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAgeFemale13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAge14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAgeMale14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAgeFemale14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAge15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAgeMale15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAgeFemale15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAge16.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAgeMale16.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SixAgeFemale16.length}</td>

                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/6'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>2</td>
                        <td className='border border-gray-300 px-3 py-2'>7</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAge11.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAgeMale11.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAgeFemale11.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAge12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAgeMale12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAgeFemale12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAge13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAgeMale13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAgeFemale13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAge14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAgeMale14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAgeFemale14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAge15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAgeMale15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAgeFemale15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAge16.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAgeMale16.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SevenAgeFemale16.length}</td>

                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/7'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>3</td>
                        <td className='border border-gray-300 px-3 py-2'>8</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAge11.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAgeMale11.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAgeFemale11.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAge12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAgeMale12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAgeFemale12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAge13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAgeMale13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAgeFemale13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAge14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAgeMale14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAgeFemale14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAge15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAgeMale15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAgeFemale15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAge16.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAgeMale16.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{EightAgeFemale16.length}</td>

                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/8'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>

                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>4</td>
                        <td className='border border-gray-300 px-3 py-2'>9</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAge11.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAgeMale11.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAgeFemale11.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAge12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAgeMale12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAgeFemale12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAge13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAgeMale13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAgeFemale13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAge14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAgeMale14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAgeFemale14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAge15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAgeMale15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAgeFemale15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAge16.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAgeMale16.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{NineAgeFemale16.length}</td>

                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/9'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>5</td>
                        <td className='border border-gray-300 px-3 py-2'>10</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAge11.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAgeMale11.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAgeFemale11.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAge12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAgeMale12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAgeFemale12.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAge13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAgeMale13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAgeFemale13.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAge14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAgeMale14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAgeFemale14.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAge15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAgeMale15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAgeFemale15.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAge16.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAgeMale16.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenAgeFemale16.length}</td>

                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/10'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
};

export default StudentByAge;