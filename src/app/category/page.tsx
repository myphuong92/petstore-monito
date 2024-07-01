import React from 'react'
import ReactDOM from 'react-dom'
import mongoose from 'mongoose';
// Data
import { connectToDB } from "@utils/database";

// Icons
import { faPlay, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Images
import banner from '../../../public/img/category-banner.png'
import Image from "next/image";

// Component
import ButtonView from '@components/app.btnView'
import DogCard from '@components/app.dogCard'
import DogList from'@components/app.dogList'
// Swiper
// import function to register Swiper custom elements

// register Swiper custom elements

type Props = {}

const Category = (props: Props) => {

  
  // useEffect(() => {
  //   // Ensure swiperElRef.current is not null before adding event listeners
  //   if (swiperElRef.current) {
  //     swiperElRef.current.addEventListener('swiperprogress', (e: any) => {
  //       const [swiper, progress] = e.detail;
  //       console.log(progress);
  //     });

  //     swiperElRef.current.addEventListener('swiperslidechange', (e: any) => {
  //       console.log('slide changed');
  //     });
  //   }
  // }, []);
  return (
    
    <main id="category">
      <section className='pt-[72px] responsive-section font-poppins'>
        <div className='flex gap-2 items-center text-sm my-2 text-content-color'>
          <a href="">Home</a> <span><FontAwesomeIcon className="w-2" icon={faChevronRight} /></span> 
          <a href="">Dog</a> <span><FontAwesomeIcon className="w-2" icon={faChevronRight} /></span> 
          <a href="">Small Dog</a>
        </div>
        <div className='relative'>
          <div className='h-full'>
            <Image src={banner} alt="category-banner" />
          </div>
          <div className="absolute w-[47%] right-8 top-28 lg:top-10 flex flex-col gap-6 font-poppins text-right">
            <div className="title flex flex-col gap-3 text-white">
              <p className="text-4xl lg:text-6xl font-extrabold text-left">One more friend</p>
              <p className="text-3xl lg:text-[46px] font-bold">Thousands more fun!</p>
            </div>
            <div className="content text-[#CCD1D2] poppins-medium flex flex-col gap-3">
                <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                <div className="flex gap-4 justify-end">
                  <ButtonView typeBtn="outline-btn-white" content="View Intro" iconName={faPlay}/>
                  <ButtonView typeBtn="primary-color-btn-white" content="Explore now"/>
                </div>  
              </div>  
        </div>
        </div>
      </section>
      <section className='responsive-section font-poppins'>
        <div className='flex gap-4'>
          {/* begin filter */}
          <div className='filter flex flex-col gap-3'>
            <p className='primary-color text-2xl font-bold'>Filter</p>
            {/* gender filter */}
            <div className='genderFilter flex flex-col gap-1'>
              <p className='font-bold'>Gender</p>
              <div className="flex flex-col gap-2">
                <label>
                  <input type="radio" className="radio text-sm mr-1" value="male" name="gender" />Male
                </label>
                <label>
                  <input type="radio" className="radio text-sm mr-1" value="female" name="gender" />Female
                </label>
              </div>

              
            </div>
            {/* color filter */}
            <div  className='colorFilter flex flex-col gap-1'>
              <p className='font-bold'>Color</p>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                    <input type="checkbox" className="radio text-sm" value="1" name="red" /> <span className="dot bg-[#FF564F]"></span>Red 
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="radio text-sm" value="1" name="apricot" /><span className="dot bg-[#FFB672]"></span>Apricot
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="radio text-sm" value="1" name="black" /><span className="dot bg-[#00171F]"></span>Black
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="radio text-sm" value="1" name="blackwhite" /><span className="dot bg-[#00171F]"></span>Black & White
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="radio text-sm" value="1" name="silver" /><span className="dot bg-[#CECECE]"></span>Silver
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="radio text-sm" value="1" name="tan" /><span className="dot bg-[#FFF7CE]"></span>Tan
                  </label>
              </div>
              
            </div>
            {/* price filter */}
            <div className='priceFilter flex flex-col gap-1'>
            <p className='font-bold'>Price</p>
            <div className="flex gap-2">
              <div className="input-group flex gap-2">
                <label htmlFor="min-price">Min</label>
                <input type="number" id="min-price" name="min-price" className='w-20'></input>
              </div>
              <div className="input-group flex gap-2">
                <label htmlFor="max-price">Max</label>
                <input type="number" id="max-price" name="max-price" className='w-20'></input>
              </div>
            </div>
            
            </div>
            {/* Breed filter */}
            <div className='priceFilter flex flex-col gap-1'>
              <p className='font-bold'>Breed</p>
              <label>
                  <input type="radio" className="radio text-sm mr-1" value="small" name="breed" />Small
                </label>
                <label>
                  <input type="radio" className="radio text-sm mr-1" value="medium" name="breed" />Medium
                </label>
                <label>
                  <input type="radio" className="radio text-sm mr-1" value="large" name="breed" />Large
                </label>
            </div>
          </div>
          {/* end of filter */}
          <div className='flex-1'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-1 items-center'>
                <p className='primary-color text-2xl font-bold'>Small Dog</p>
                <p className='quantity-product text-sm text-content-color font-medium'>52 puppies</p>
              </div>
              
            </div>
            {/* begin of dog cards */}
            <div className='container mx-auto'>
                <DogList />
              </div>
              {/* end of dog cards */}
              
          </div>
        </div>
      </section>
              
    </main>
  )
}

export default Category