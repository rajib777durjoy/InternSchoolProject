'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper shadow-lg z-0"
            >
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center relative rounded-md"
                        style={{ backgroundImage: 'url("/rahmatpuraghs_Home-Page-Slider1.jpg")' }}

                    >
                        <h2 className='text-center absolute bottom-10 left-0 right-0 m-auto drop-shadow-lg drop-shadow-black '>প্রধান শিক্ষকের কক্ষ</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center relative rounded-md"
                        style={{ backgroundImage: 'url("/rahmatpuraghs_Home-Page-Slide2.jpg")' }}

                    >
                        <h2 className='text-center absolute bottom-10 left-0 right-0 m-auto drop-shadow-lg drop-shadow-black '>শিক্ষার্থীদের বিএমআই পরীক্ষণ</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center relative rounded-md"
                        style={{ backgroundImage: 'url("/rahmatpuraghs_Home-Page-Slide3.jpg")' }}

                    >
                        <h2 className='text-center absolute bottom-10 left-0 right-0 m-auto drop-shadow-lg drop-shadow-black '>প্রত‌্যাহিক সমাবেশ</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center relative rounded-md"
                        style={{ backgroundImage: 'url("/rahmatpuraghs_Home-Page-Slide4.jpg")' }}

                    >
                        <h2 className='text-center absolute bottom-10 left-0 right-0 m-auto drop-shadow-lg drop-shadow-black'>বই বিতরণ উৎসব ২০২৩</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='text-black flex my-2'>
                <div className=' pe-4 py-2 text-start'><button className='btn border-0 outline-0  bg-green-700 px-2'>শিরোনাম:</button></div>
                <Marquee pauseOnHover speed={100} style={{color:'blue',fontSize:'15px'}}>
                    📢২০২৫ সালের ১০ম শ্রেণির শিক্ষার্থীদের প্রাক-নির্বাচনী পরীক্ষা আগামী ০১/০৯/২০২৫ইং তারিখ হইতে আরম্ভ হইবে।
                </Marquee>
               
            </div>
        </div>
    );
};

export default Slider;