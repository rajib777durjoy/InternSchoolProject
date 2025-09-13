
import { StudentList } from '@/lib/StudentDB';
import Link from 'next/link';
import React from 'react';
import { FaEye } from "react-icons/fa";
const StudentCount = () => {
   
    const data = StudentList;
    const classSix = StudentList.filter(item => item?.class === 6);
    const Male = classSix.filter(item => item?.gender === 'Male');
    const Female = classSix.filter(item => item?.gender === 'Female');
    //--------------------------------//
    const classSeven = StudentList.filter(item => item?.class === 7);
    const MaleOfSeven = classSeven.filter(item => item?.gender === 'Male');
    const FemaleOfSeven = classSeven.filter(item => item?.gender === 'Female');
    //----------------------------------//
    const classEight = StudentList.filter(item => item?.class === 8);
    const MaleOfEight = classEight.filter(item => item?.gender === 'Male');
    const FemaleOfEight = classEight.filter(item => item?.gender === 'Female');
    //------------------------------------//
    const classNine = StudentList.filter(item => item?.class === 9);
    const MaleOfNine = classNine.filter(item => item?.gender === 'Male');
    const FemaleOfNine = classNine.filter(item => item?.gender === 'Female');
    //------------------------------------//
    const classTen = StudentList.filter(item => item?.class === 10);
    const MaleOfTen = classTen.filter(item => item?.gender === 'Male');
    const FemaleOfTen = classTen.filter(item => item?.gender === 'Female');
    return (
        <div className='w-[100%] border-t border-gray-300 h-[400px] overflow-auto'>
            <table className='w-[100%]  text-black text-center border border-gray-300'>
                <thead>
                    <tr className='bg-gray-100 '>
                        <th rowSpan={2} className='border border-gray-300 px-2 py-1'>ক্রমিক</th>
                        <th rowSpan={2} className='border border-gray-300 px-2 py-1'>শ্রেণী</th>
                        <th colSpan={3} className='border border-gray-300 px-2 py-1'>শিক্ষার্থীর সংখ্যা</th>
                        <th rowSpan={2} className='border border-gray-300 px-2 py-1'>শিক্ষার্থীর তালিকা</th>
                    </tr>
                    <tr className='bg-gray-50 '>
                        <th className='border border-gray-300 px-2 py-1'>মোট</th>
                        <th className='border border-gray-300 px-2 py-1'>বালক</th>
                        <th className='border border-gray-300 px-2 py-1'>বালিকা</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=' hover:bg-gray-50'>
                        <td className='border border-gray-300 px-2 py-1'>1</td>
                        <td className='border border-gray-300 px-2 py-1'>6</td>
                        <td className='border border-gray-300 px-2 py-1'>{classSix.length}</td>
                        <td className='border border-gray-300 px-2 py-1'>{Male.length}</td>
                        <td className='border border-gray-300 px-2 py-1'>{Female.length}</td>
                        <td className='border border-gray-300 px-2 py-1 text-center'><Link href={'/StudentCountPage/6'}><FaEye className='text-center w-[10%] mx-auto'/></Link></td>
                    </tr>
                    <tr className='border hover:bg-gray-50'>
                        <td className='border border-gray-300 px-2 py-1'>2</td>
                        <td className='border border-gray-300 px-2 py-1'>7</td>
                        <td className='border border-gray-300 px-2 py-1'>{classSeven.length}</td>
                        <td className='border border-gray-300 px-2 py-1'>{MaleOfSeven.length}</td>
                        <td className='border border-gray-300 px-2 py-1'>{FemaleOfSeven.length}</td>
                        <td className='border border-gray-300 px-2 py-1 '><Link href={'/StudentCountPage/7'}><FaEye className='text-center w-[10%] mx-auto'/></Link></td>
                    </tr>
                    <tr className='border hover:bg-gray-50'>
                        <td className='border border-gray-300 px-2 py-1'>3</td>
                        <td className='border border-gray-300 px-2 py-1'>8</td>
                        <td className='border border-gray-300 px-2 py-1'>{classEight.length}</td>
                        <td className='border border-gray-300 px-2 py-1'>{MaleOfEight.length}</td>
                        <td className='border border-gray-300 px-2 py-1'>{FemaleOfEight.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/8'}><FaEye className='text-center w-[10%] mx-auto'/></Link></td>
                    </tr>
                    <tr className='border hover:bg-gray-50'>
                        <td className='border border-gray-300 px-2 py-1'>4</td>
                        <td className='border border-gray-300 px-2 py-1'>9</td>
                        <td className='border border-gray-300 px-2 py-1'>{classNine.length}</td>
                        <td className='border border-gray-300 px-2 py-1'>{MaleOfNine.length}</td>
                        <td className='border border-gray-300 px-2 py-1'>{FemaleOfNine.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/9'}><FaEye className='text-center w-[10%] mx-auto'/></Link></td>
                    </tr>
                    <tr className='border hover:bg-gray-50'>
                        <td className='border border-gray-300 px-2 py-1'>5</td>
                        <td className='border border-gray-300 px-2 py-1'>10</td>
                        <td className='border border-gray-300 px-2 py-1'>{classTen.length}</td>
                        <td className='border border-gray-300 px-2 py-1'>{MaleOfTen.length}</td>
                        <td className='border border-gray-300 px-2 py-1'>{FemaleOfTen.length}</td>
                        <td  className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/10'}><FaEye className='text-center w-[10%] mx-auto'/></Link></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default StudentCount;