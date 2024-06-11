'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Thumbs } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

SwiperCore.use([Navigation, Thumbs]);
type StaticImageData = {
    src: string;
    height: number;
    width: number;
    placeholder?: string;
  };
type Props = {
    images: StaticImageData[];
}

const ImageSlider = (props: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  return (
    <div className="image-slider">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="main-swiper"
      >
        {props.images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={`Slide ${index}`} className="rounded-lg object-cover w-full h-full" width={560} height={476}/>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumb-swiper mt-2 thumbnails overflow-hidden"
      >
        {props.images.map((image, index) => (
          <SwiperSlide key={index} className=''>
            <div className="w-[94px] h-[94px] overflow-hidden rounded-lg">
            <Image src={image} alt={`Thumbnail ${index}`} className="rounded-lg object-cover w-full h-full " />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSlider