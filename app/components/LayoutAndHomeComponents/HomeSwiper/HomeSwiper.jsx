"use client"

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

export default function HomeSwiper() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <Image src={'/assets/home/RectangleBanner.png'} alt={'Banner'} width={1920} height={300} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/assets/home/RectangleBanner.png'} alt={'Banner'}  width={1920} height={300} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/assets/home/RectangleBanner.png'} alt={'Banner'}  width={1920} height={300} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/assets/home/RectangleBanner.png'} alt={'Banner'} width={1920} height={300} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/assets/home/RectangleBanner.png'} alt={'Banner'}  width={1920} height={300} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/assets/home/RectangleBanner.png'} alt={'Banner'}  width={1920} height={300} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/assets/home/RectangleBanner.png'} alt={'Banner'} width={1920} height={300} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/assets/home/RectangleBanner.png'} alt={'Banner'}  width={1920} height={300} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/assets/home/RectangleBanner.png'} alt={'Banner'}  width={1920} height={300} />
            </SwiperSlide>
        </Swiper>
    );
};