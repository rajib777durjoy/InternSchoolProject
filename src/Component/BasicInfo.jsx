'use client'
import Link from 'next/link';
import { FaUser } from "react-icons/fa6";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdArrowDropright } from 'react-icons/io';

const BasicInfo = () => {
      const rahmatpurSchool = [25.3620, 89.5680];
    return (
        <div className='w-[100%]'>
            <div className='w-[100%] lg:w-[90%] mx-auto bg-green-700'>
                <h2 className='text-center py-1'>প্রধান শিক্ষক</h2>
            </div>
            {/* profile information */}
            <div className='w-[70%] mx-auto py-4'>
                <img src={'/rahmatpuraghs_staffs.jpg'} alt='' className='w-[100%] h-[250px]' />
                <h3 className='text-center text-black text-sm my-2'>বাদল চন্দ্র বর্মন</h3>
                <Link href={'/'} className='text-blue-900 block text-sm cursor-pointer text-center'>বিস্তারিত</Link>
            </div>
            <div className='w-[100%] lg:w-[90%] mx-auto bg-green-700'>
                <h2 className='text-center py-1'>এডমিন প্যানেল</h2>
            </div>
            <div className='w-[100%] lg:w-[90%] mx-auto py-2'>
                <div className='bg-green-700 rounded-full my-2  w-[30px] h-[30px] mx-auto flex items-center justify-center '>
                    <FaUser className='text-white text-xl' />
                </div>
                <Link href={'/login'} className='text-blue-900 block text-sm cursor-pointer text-center'>লগইন</Link>
            </div>
            {/* map */}
            <div className='w-[100%] lg:w-[90%] mx-auto py-2'>
                <h1 className='text-center bg-green-700 py-1'>ম্যাপ</h1>
                <div className='w-[100%] h-[300px] relative'>
                    <div className='absolute top-1 left-2 z-[1000] bg-white/80 text-black px-3 py-1 rounded shadow'>
                        <h2 className='text-black font-bold text-sm'>Rahmatpur Adars...</h2>
                        <Link href={'../ViewMap'} className='text-xs text-blue-600 cursor-pointer'>View larger map</Link>
                    </div>
                    <MapContainer center={rahmatpurSchool} zoom={13} zoomControl={false} className="h-full w-full">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={rahmatpurSchool}>
                            <Popup>Gaibandha,Bangladesh</Popup>
                        </Marker>
                        <ZoomControl position="bottomright" />
                    </MapContainer>
                    <div className='absolute bottom-0 left-2 z-[1000] bg-white/80 text-black px-3 py-1 rounded shadow'>
                        <span className='flex text-xs items-center'><FaMapMarkerAlt className='mx-1'/> map data 2025 Terms Report a map error</span>
                    </div>
                </div>
            </div>
            <h2 className='text-center text-sm  text-blue-900 my-2'>বিস্তারিত</h2>
            <div className='w-[100%] lg:w-[90%] mx-auto '>
              <h2 className='text-center bg-green-700 py-1'>গুরত্বপুর্ণ লিংকসমুহ</h2>
              <ul>
                <li className='text-blue-900 flex items-center my-1'><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='#'></Link> শিক্ষা মন্ত্রণালয়</li>
                <li className='text-blue-900 flex items-center my-1'><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='https://shed.gov.bd/'></Link> মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ</li>
                <li className='text-blue-900 flex items-center my-1'><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='http://www.dsherangpur.gov.bd/'></Link> মাধ্যমিক ও উচ্চশিক্ষা, রংপুর অঞ্চল</li>
                <li className='text-blue-900 flex items-center my-1'><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='https://dinajpurboard.gov.bd/'></Link> দিনাজপুর বোর্ড (ই-ফাইলিং, রেজিঃ, ফরম ফিলাপ)</li>
                <li className='text-blue-900 flex items-center my-1'><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='https://dinajpureducationboard.gov.bd/'></Link> দিনাজপুর বোর্ড (অফিসিয়াল সাইট, নোটিশ)</li>
                <li className='text-blue-900 flex items-center my-1'><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='https://bteb.gov.bd/'></Link> বাংলাদেশ কারিগরি শিক্ষা বোর্ড</li>
                <li className='text-blue-900 flex items-center my-1'><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='https://emis.gov.bd/emis'></Link> EMIS</li>
                <li className='text-blue-900 flex items-center my-1'><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='https://banbeis.gov.bd/'></Link> BANBEIS</li>
                <li className='text-blue-900 flex items-center my-1'><IoMdArrowDropright className='text-green-700 text-2xl' /><Link href='https://hsp.pmeat.gov.bd/HSP-MIS/login'></Link> উপবৃত্তি (HSP-MIS)</li>
              </ul>
            </div>
        </div>
    );
};

export default BasicInfo;