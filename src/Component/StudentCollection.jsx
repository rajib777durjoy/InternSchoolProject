'use client'
import { StudentList } from '@/lib/StudentDB';
import React, { useEffect, useState } from 'react';

const StudentCollection = () => {
    const [data, setData] = useState(StudentList);
    const [Class, setClass] = useState('');
    const [year, setYear] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const Year = e.target.year.value;
        const Class = e.target.class.value;
        const Section = e.target.section.value;
        const Group = e.target.group.value;
        const Gender = e.target.gender.value;
        const Religion = e.target.religion.value;
        const MaxAge = e.target.maxAge.value;
        const MinAge = e.target.minAge.value;
        setClass(Class)
        setYear(Year)
        console.log(Year, parseInt(Class), Section, Group, Gender, Religion, Number(MaxAge), Number(MinAge))
        const filter = StudentList.filter(item => (!Year || item.admissionYear === Number(Year)) &&
            (!Class || item.class === Number(Class)) &&
            (!Section || item.section === Section) &&
            (!Group || item.group === Group) &&
            (!Religion || item.religion === Religion) &&
            (!Gender || item.gender === Gender) &&
            (!MinAge || item.age >= Number(MinAge)) &&
            (!MaxAge || item.age <= Number(MaxAge)));
        console.log('filtering Data::', filter);
        setData(filter)
    }
    useEffect(() => {
        setData(StudentList)
    }, [])

    return (
        <div className='w-[100%] text-black'>
            <h1 className='text-2xl my-4'>ধরণভিত্তিক শিক্ষার্থীদের তালিকা</h1>
            <div className='w-[100%] shadow-lg p-4 my-4 rounded-md border border-gray-300'>
                <form onSubmit={handleSubmit} className='w-[100%] grid lg:grid-cols-5 gap-2'>
                    <div>
                        <label className="block mb-1 font-medium">Year</label>
                        <select name='year' defaultValue="" className="select bg-white">
                            <option value="">Select Year</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2021">2020</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Select Class</label>
                        <select name='class' defaultValue="" className="select bg-white">
                            <option value="">Select class</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Select Section</label>
                        <select name='section' defaultValue="" className="select bg-white">
                            <option value="">Select Section</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Select Group</label>
                        <select name='group' defaultValue="" className="select bg-white">
                            <option value="">Select Group</option>
                            <option value="Humanities">Humanities</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Science">Science</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Select Genders</label>
                        <select name='gender' defaultValue="" className="select bg-white">
                            <option value="">Select Genders</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Select Religions</label>
                        <select name='religion' defaultValue="" className="select bg-white">
                            <option value="">Select Religions</option>
                            <option value="Hinduism">Hinduism</option>
                            <option value="Islam">Islam</option>
                            <option value="Christianity">Christianity</option>
                            <option value="Buddhism">Buddhism</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Max age</label>
                        <input
                            type="number"
                            name="maxAge"
                            className="w-full border rounded-md px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Min age</label>
                        <input
                            type="number"
                            name="minAge"
                            className="w-full border rounded-md px-3 py-2"
                        />
                    </div>

                    <button
                        type='submit'
                        className='text-white bg-green-700 rounded-md h-[40px] block mt-7'
                    >
                        Show Students
                    </button>
                </form>

            </div>
            {/* student collections */}
            <div className="overflow-x-auto w-[100%]">
                <div className='flex justify-between items-center my-2'>
                    <div className='text-xl font-light'>Students of Class:{Class} || Year:{(year)}</div>
                    <div className='bg-green-700 text-white p-1 rounded-md'>Total Student{data.length}</div>
                </div>
                <table className="w-[100%] border border-gray-300 rounded-md">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">Section</th>
                            <th className="px-4 py-2 border">Roll</th>
                            <th className="px-4 py-2 border">Student Name</th>
                            <th className="px-4 py-2 border">Group</th>
                            <th className="px-4 py-2 border">Age</th>
                            <th className="px-4 py-2 border">Gender</th>
                            <th className="px-4 py-2 border">Religion</th>
                            <th className="px-4 py-2 border">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((student) => (
                            <tr key={student?.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border text-center">{student?.section}</td>
                                <td className="px-4 py-2 border text-center">{student?.roll}</td>
                                <td className="px-4 py-2 border">{student?.name}</td>
                                <td className="px-4 py-2 border">{student?.group || 'NA'}</td>
                                <td className="px-4 py-2 border text-center">{student?.age}</td>
                                <td className="px-4 py-2 border text-center">{student?.gender}</td>
                                <td className="px-4 py-2 border">{student?.religion}</td>
                                <td className="px-4 py-2 border">{'NA'}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentCollection;