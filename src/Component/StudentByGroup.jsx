import { StudentList } from '@/lib/StudentDB';
import Link from 'next/link';
import React from 'react';
import { FaEye } from "react-icons/fa";

const StudentByGroup = () => {
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
    const GroupScience = classNine.filter(item => item?.group === 'Science');
    const GroupCommerce = classNine.filter(item => item?.group === 'Commerce');
    const GroupHumanities = classNine.filter(item => item?.group === 'Humanities');

    const MaleOfScience = GroupScience.filter(item => item?.gender === 'Male');
    const FemaleOfScience = GroupScience.filter(item => item?.gender === 'Female');

    const MaleOfCommerce = GroupCommerce.filter(item => item?.gender === 'Male');
    const FemaleOfCommerce = GroupCommerce.filter(item => item?.gender === 'Female');

    const MaleOfHumanities = GroupHumanities.filter(item => item?.gender === 'Male');
    const FemaleOfHumanities = GroupHumanities.filter(item => item?.gender === 'Female');

    //------------------------------------//
    const classTen = StudentList.filter(item => item?.class === 10);
    const TenGroupScience = classTen.filter(item => item?.group === 'Science');
    const TenGroupCommerce = classTen.filter(item => item?.group === 'Commerce');
    const TenGroupHumanities = classTen.filter(item => item?.group === 'Humanities');

    const TenMaleOfScience = TenGroupScience.filter(item => item?.gender === 'Male');
    const TenFemaleOfScience = TenGroupScience.filter(item => item?.gender === 'Female');

    const TenMaleOfCommerce = TenGroupCommerce.filter(item => item?.gender === 'Male');
    const TenFemaleOfCommerce = TenGroupCommerce.filter(item => item?.gender === 'Female');

    const TenMaleOfHumanities = TenGroupHumanities.filter(item => item?.gender === 'Male');
    const TenFemaleOfHumanities = TenGroupHumanities.filter(item => item?.gender === 'Female');
    return (
        <div className='w-[100%] border-t border-gray-300 h-[400px] overflow-auto'>
            <table className='w-[100%] text-black text-center border border-gray-300'>
                <thead>
                    <tr className='bg-gray-100'>
                        <th rowSpan={2} className='border border-gray-300 px-3 py-2'>ক্রমিক</th>
                        <th rowSpan={2} className='border border-gray-300 px-3 py-2'>শ্রেণী</th>
                        <th colSpan={3} className='border border-gray-300 px-3 py-2'>Science</th>
                        <th colSpan={3} className='border border-gray-300 px-3 py-2'>Humanities</th>
                        <th colSpan={3} className='border border-gray-300 px-3 py-2'>Business Studies</th>
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
                    </tr>
                </thead>
                <tbody>
                    {/* Rows will go here */}
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>1</td>
                        <td className='border border-gray-300 px-3 py-2'>6</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/6'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>2</td>
                        <td className='border border-gray-300 px-3 py-2'>7</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/6'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>3</td>
                        <td className='border border-gray-300 px-3 py-2'>8</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-3 py-2'>NA</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/6'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>4</td>
                        <td className='border border-gray-300 px-3 py-2'>9</td>
                        <td className='border border-gray-300 px-3 py-2'>{GroupScience.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{GroupHumanities.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{GroupCommerce.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{MaleOfScience.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{FemaleOfScience.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{MaleOfHumanities.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{FemaleOfHumanities.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{MaleOfCommerce.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{FemaleOfCommerce.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/6'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                        <td className='border border-gray-300 px-3 py-2'>1</td>
                        <td className='border border-gray-300 px-3 py-2'>6</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenGroupScience.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenGroupHumanities.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenGroupCommerce.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenMaleOfScience.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenFemaleOfScience.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenMaleOfHumanities.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenFemaleOfHumanities.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenMaleOfCommerce.length}</td>
                        <td className='border border-gray-300 px-3 py-2'>{TenFemaleOfCommerce.length}</td>
                        <td className='border border-gray-300 px-2 py-1'><Link href={'/StudentCountPage/6'}><FaEye className='text-center w-[10%] mx-auto' /></Link></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default StudentByGroup;