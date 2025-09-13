import { StudentList } from '@/lib/StudentDB';
import Link from 'next/link';
import React from 'react';
import { FaEye } from "react-icons/fa";

const StudentSection = () => {
    const classSix = StudentList.filter(item => item?.class === 6);
    const SectionSix = classSix.filter(item => item?.section === 'A');
    const SectionSix2 = classSix.filter(item => item?.section === 'B');
    const Male = classSix.filter(item => item?.gender === 'Male');
    const Female = classSix.filter(item => item?.gender === 'Female');
    //--------------------------------//
    const classSeven = StudentList.filter(item => item?.class === 7);
    const SectionSeven = classSeven.filter(item => item?.section === 'A');
    const SectionSeven2 = classSeven.filter(item => item?.section === 'B');
    const MaleOfSeven = classSeven.filter(item => item?.gender === 'Male');
    const FemaleOfSeven = classSeven.filter(item => item?.gender === 'Female');
    //----------------------------------//
    const classEight = StudentList.filter(item => item?.class === 8);
    const SectionEight = classEight.filter(item => item?.section === 'A');
    const SectionEight2 = classEight.filter(item => item?.section === 'B');
    const MaleOfEight = classEight.filter(item => item?.gender === 'Male');
    const FemaleOfEight = classEight.filter(item => item?.gender === 'Female');
    //------------------------------------//
    const classNine = StudentList.filter(item => item?.class === 9);
    const SectionNine = classNine.filter(item => item?.section === 'A');
    const SectionNine2 = classNine.filter(item => item?.section === 'B');
    const MaleOfNine = classNine.filter(item => item?.gender === 'Male');
    const FemaleOfNine = classNine.filter(item => item?.gender === 'Female');
    //------------------------------------//
    const classTen = StudentList.filter(item => item?.class === 10);
    const SectionTen = classTen.filter(item => item?.section === 'A');
    const SectionTen2 = classTen.filter(item => item?.section === 'B');
    const MaleOfTen = classTen.filter(item => item?.gender === 'Male');
    const FemaleOfTen = classTen.filter(item => item?.gender === 'Female');
    return (
        <div className='w-full border-t border-gray-300 h-[400px] overflow-auto'>
            <table className='w-full text-black text-center border-collapse'>
                <thead>
                    <tr className='bg-gray-100'>
                        <th rowSpan={2} className='border border-gray-300 px-3 py-2'>ক্রমিক</th>
                        <th rowSpan={2} className='border border-gray-300 px-3 py-2'>শ্রেণী</th>
                        <th colSpan={2} className='border border-gray-300 px-3 py-2'>শাখা</th>
                        <th colSpan={3} className='border border-gray-300 px-3 py-2'>শিক্ষার্থীর সংখ্যা</th>
                        <th rowSpan={2} className='border border-gray-300 px-3 py-2'>শিক্ষার্থীর তালিকা</th>
                    </tr>
                    <tr className='bg-gray-50'>
                        <th className='border border-gray-300 px-3 py-2'>A</th>
                        <th className='border border-gray-300 px-3 py-2'>B</th>
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
                        <td className='border border-gray-300 px-3 py-2'>{SectionSix.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SectionSix2.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{classSix.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{Male.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{Female.length}</td>
                         <td className='border border-gray-300 px-2 py-1 '><Link href={'/StudentCountPage/7'}><FaEye className='text-center w-[10%] mx-auto'/></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>2</td>
                        <td className='border border-gray-300 px-3 py-2'>7</td>
                        <td className='border border-gray-300 px-3 py-2'>{SectionSeven.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SectionSeven2.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{classSeven.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{MaleOfSeven.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{FemaleOfSeven.length}</td>
                         <td className='border border-gray-300 px-2 py-1 '><Link href={'/StudentCountPage/7'}><FaEye className='text-center w-[10%] mx-auto'/></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>3</td>
                        <td className='border border-gray-300 px-3 py-2'>8</td>
                        <td className='border border-gray-300 px-3 py-2'>{SectionEight.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SectionEight2.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{classEight.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{MaleOfEight.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{FemaleOfEight.length}</td>
                         <td className='border border-gray-300 px-2 py-1 '><Link href={'/StudentCountPage/8'}><FaEye className='text-center w-[10%] mx-auto'/></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>4</td>
                        <td className='border border-gray-300 px-3 py-2'>9</td>
                        <td className='border border-gray-300 px-3 py-2'>{SectionNine.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SectionNine2.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{classNine.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{MaleOfNine.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{FemaleOfNine.length}</td>
                         <td className='border border-gray-300 px-2 py-1 '><Link href={'/StudentCountPage/9'}><FaEye className='text-center w-[10%] mx-auto'/></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>5</td>
                        <td className='border border-gray-300 px-3 py-2'>10</td>
                        <td className='border border-gray-300 px-3 py-2'>{SectionTen.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{SectionTen2.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{classTen.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{MaleOfTen.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{FemaleOfTen.length}</td>
                         <td className='border border-gray-300 px-2 py-1 '><Link href={'/StudentCountPage/10'}><FaEye className='text-center w-[10%] mx-auto'/></Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StudentSection;