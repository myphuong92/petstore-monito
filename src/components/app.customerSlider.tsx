'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Image from "next/image";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
type StaticImageData = {
    src: string;
    height?: number;
    width?: number;
    placeholder?: string;
  };
type Props = {
    images: StaticImageData[];
  };
const CustomerSlider = (props: Props) => {
  return (
    <div>
        <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {props.images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Image src={image.src} alt={`Customer ${index + 1}`} className="rounded-lg object-cover" width={248} height={340}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CustomerSlider