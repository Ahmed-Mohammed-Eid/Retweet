"use client"

// import Swiper core and required modules
import {Navigation, Pagination, A11y, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import axios from "axios";
import {useEffect, useState} from "react";

export default function HomeSwiper() {

    const [ads, setAds] = useState([]);

    function getSwiperSlides() {
        // Fetch data from server
        axios.get(`${process.env.BASE_URL}/all/home/ads`)
            .then(response => {
                const ads = response.data.homeAds.carousel;
                setAds(ads);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getSwiperSlides();
    }, []);

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            navigation
            pagination={{clickable: true}}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {ads.map((ad, index) => (
                <SwiperSlide key={index}>
                    <div style={{
                        width: '100%',
                        minHeight: '300px',
                        maxHeight: '300px',
                        overflow: 'hidden'
                    }}>
                        <Image
                            src={ad.url}
                            alt={'ADVERTISEMENT'}
                            width={1920}
                            height={300}
                            style={{
                                position: 'relative',
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};