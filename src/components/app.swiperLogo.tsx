"use client"; // <===== REQUIRED
import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Image
import Image from "next/image";
import logo1 from '../../public/icon/slider-logo-1.png'
import logo2 from '../../public/icon/slider-logo-2.png'
import logo3 from '../../public/icon/slider-logo-3.png'
import logo4 from '../../public/icon/slider-logo-4.png'
import logo5 from '../../public/icon/slider-logo-5.png'
import logo6 from '../../public/icon/slider-logo-6.png'
import logo7 from '../../public/icon/slider-logo-7.png'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
type Props = {}

const SwiperJS = (props: Props) => {
  return (
    <div>
       <Swiper
        slidesPerView={7}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={logo1} alt='logo'/></SwiperSlide>
        <SwiperSlide><Image src={logo2} alt='logo'/></SwiperSlide>
        <SwiperSlide><Image src={logo3} alt='logo'/></SwiperSlide>
        <SwiperSlide><Image src={logo4} alt='logo'/></SwiperSlide>
        <SwiperSlide><Image src={logo5} alt='logo'/></SwiperSlide>
        <SwiperSlide><Image src={logo6} alt='logo'/></SwiperSlide>
        <SwiperSlide><Image src={logo7} alt='logo'/></SwiperSlide>
        
        <SwiperSlide><Image src={logo1} alt='logo'/></SwiperSlide>
        <SwiperSlide><Image src={logo2} alt='logo'/></SwiperSlide>
        <SwiperSlide><Image src={logo3} alt='logo'/></SwiperSlide>
        <SwiperSlide><Image src={logo4} alt='logo'/></SwiperSlide>
        <SwiperSlide><Image src={logo5} alt='logo'/></SwiperSlide>
        <SwiperSlide><Image src={logo6} alt='logo'/></SwiperSlide>
        <SwiperSlide><Image src={logo7} alt='logo'/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperJS