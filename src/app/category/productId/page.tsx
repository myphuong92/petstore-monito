'use client'

import React from 'react'
import Image from "next/image";
import { useRef, useEffect } from 'react';
// Component
import ImageSlider from '@components/app.imageSlider'
import CustomerSlider from '@components/app.customerSlider'

import ButtonView from '@components/app.btnView'
// Images
import shiba from '../../../../public/img/product-info-1.png'
import shiba1 from '../../../../public/img/shiba-1.jpg'
import shiba2 from '../../../../public/img/shiba-2.jpg'
import shiba3 from '../../../../public/img/shiba-3.jpg'

import customer1 from '../../../../public/img/customer-1.png'
import customer2 from '../../../../public/img/customer-2.png'
import customer3 from '../../../../public/img/customer-3.png'
import customer4 from '../../../../public/img/customer-4.png'
import customer5 from '../../../../public/img/customer-5.png'

import heartIcon from '../../../../public/icon/heart-icon.png'
import dogIcon from '../../../../public/icon/pet-icon.png'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faChevronRight, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import{faMessage} from '@fortawesome/free-regular-svg-icons'
import {faFacebook, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

// Swiper
import { register} from 'swiper/element/bundle';
register();
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    }
  }
}
type Props = {}
const dogImages = [
  shiba,
  shiba1,
  shiba2,
  shiba3,
  shiba,
  shiba,
  shiba,
];
const customerImages=[
  customer1,
  customer2,
  customer3,
  customer4,
  customer5,
]
const DogInfo = (props: Props) => {
  const swiperElRef = useRef(null);
  
  return (
    <main id='product-info'>
      <section className='pt-[72px] responsive-section font-poppins'>
        <div className="grid grid-cols-2 gap-8">
          {/* <div className='flex flex-col gap-2'>
          <Image className='rounded-lg' src={shiba} alt="category-banner" />
          <div className="banner-img">
            <swiper-container
            className=''
            ref={swiperElRef}
            slides-per-view="1"
            >
            <swiper-slide><Image className='rounded-lg' src={shiba} alt="product-img-preview"  /></swiper-slide>
            <swiper-slide><Image className='rounded-lg' src={shiba} alt="product-img-preview"  /></swiper-slide>
            <swiper-slide><Image className='rounded-lg' src={shiba} alt="product-img-preview"  /></swiper-slide>
          
          </swiper-container>
          </div>
          </div> */}
          <div>
            <div className='flex flex-col'>
                <ImageSlider images={dogImages} />
            </div>
            <div className='dark-blue-80 text-sm font-bold bg-pink-200 p-3 text-center mt-4 rounded-xl'>
              <p className='flex gap-1'><span><Image src={heartIcon} alt='heart-icon'/></span>100% health guarantee for pets <span><Image src={dogIcon} alt='pet-icon'/></span>100% guarantee of pet identification</p>
            </div>
            <div className='social-share flex gap-1 dark-blue-80 mt-4 items-center'>
              <span><FontAwesomeIcon className="w-5" icon={faShareNodes} /></span>
              <p className='font-bold mr-2'>Share:</p>
              <div className="flex gap-2 items-center text-gray-500">
                  <a href=""><FontAwesomeIcon className='text-xl' icon={faFacebook} /></a>
                  <a href=""><FontAwesomeIcon className='text-xl' icon={faTwitter} /></a>
                  <a href=""><FontAwesomeIcon className='text-xl' icon={faInstagram} /></a>
                  <a href=""><FontAwesomeIcon className='text-xl' icon={faYoutube} /></a>
              </div>
            </div>
          </div>
           
          <div className='flex flex-col gap-2'>
          <div className='flex gap-2 items-center text-sm my-2 text-content-color'>
            <a href="">Home</a> <span><FontAwesomeIcon className="w-2" icon={faChevronRight} /></span> 
            <a href="">Dog</a> <span><FontAwesomeIcon className="w-2" icon={faChevronRight} /></span> 
            <a href="">Large Dog</a> <span><FontAwesomeIcon className="w-2" icon={faChevronRight} /></span>
            <a>Shiba Inu Sepia</a>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-sm text-content-color'>SKU #1000078</p>
            <p className='product-name font-bold text-2xl'>Shiba Inu Sepia</p>
            <p className='product-price font-bold text-xl'>34.000.000 VND</p>
            <div className='contact-button flex gap-3 my-2'>
              <ButtonView typeBtn="primary-color-btn" content="Contact us"/>
              <ButtonView typeBtn="outline-btn" content="Chat with Monito" firstIcon={faMessage}/>
            </div>
            <div className="product-detail grid grid-cols-2 gap-3 text-content-color text-sm font-medium">
              <div className="title flex justify-between">
                <p>SKU</p>
                <p>:</p>
              </div>
              <p className="detail">#1000078</p>

              <div className="title flex justify-between">
                <p>Gender</p>
                <p>:</p>
              </div>
              <p className="detail">Female</p>

              <div className="title flex justify-between">
                <p>Age</p>
                <p>:</p>
              </div>
              <p className="detail">2 Months</p>

              <div className="title flex justify-between">
                <p>Size</p>
                <p>:</p>
              </div>
              <p className="detail">Small</p>

              <div className="title flex justify-between">
                <p>Color</p>
                <p>:</p>
              </div>
              <p className="detail">Appricot & Tan</p>

              <div className="title flex justify-between">
                <p>Vaccinated</p>
                <p>:</p>
              </div>
              <p className="detail">Yes</p>

              <div className="title flex justify-between">
                <p>Dewormed</p>
                <p>:</p>
              </div>
              <p className="detail">Yes</p>

              <div className="title flex justify-between">
                <p>Cert</p>
                <p>:</p>
              </div>
              <p className="detail">Yes (MKA)</p>

              <div className="title flex justify-between">
                <p>Microchip</p>
                <p>:</p>
              </div>
              <p className="detail">Yes</p>

              <div className="title flex justify-between">
                <p>Location</p>
                <p>:</p>
              </div>
              <p className="detail">Vietnam</p>

              <div className="title flex justify-between">
                <p>Published Date</p>
                <p>:</p>
              </div>
              <p className="detail">12-Oct-2022</p>  

              <div className="title flex justify-between">
                <p>Additional Information</p>
                <p>:</p>
              </div>
              <p className="detail">Pure breed Shih Tzu. <br /> Good body structure. <br />With MKA cert and Microchip <br />Father from champion lineage</p>  
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className='responsive-section font-poppins flex flex-col gap-4'>
        <p className='text-heading-color text-2xl font-bold'>Our lovely customer</p>
        <CustomerSlider images={customerImages}/>
      </section>
    </main>
  )
}

export default DogInfo