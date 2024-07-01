import React, { useEffect, useState } from 'react';

import Image from "next/image";
import home from '@/styles/home.module.css'
import ReactDOM from 'react-dom'
import mongoose from 'mongoose';

// Components
import ButtonView from '@components/app.btnView'
import DogCard from '@components/app.dogCard'
import ProductCard from '@components/app.productCard'
import Slider from '@components/app.swiperLogo'
import NewsCard from '@components/app.newsCard'
// Pictures & Icons
import banner1 from '../../public/img/home-banner-1.png'
import banner2 from '../../public/img/home-banner-2.png'
import banner3 from '../../public/img/home-banner-3.png'

import { connectToDB } from "@utils/database";
import { faPlay, faChevronRight } from '@fortawesome/free-solid-svg-icons';

type Pet = {
  _id: string;
  Name: string;
  Gender: string;
  Age: string;
  Price: string;
  Images: string[];
};
async function getData(): Promise<Pet[]> {
  await connectToDB();
  
  try {
    const database = mongoose.connection.db;
    const collection = database.collection('Pets');
    const result = await collection
                  .find({})
                  .sort({ PublishedDate: -1 }) // Sort by PublishedDate descending
                  .limit(8) // Limit to 6 documents
                  .toArray();
    
    return result.map(item => ({
      _id: item._id.toString(),
      Name: item.Name,
      Gender: item.Gender,
      Age: item.Age,
      Price: item[" Price "].trim(),
      Images: item.Images,
    }));
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}
export default async function Home() {
  const data = await getData();
  if(!data){
    return
  }
  console.log(data);
  return (
    <main id="home" className="relative">
      <section className="relative font-poppins">
        <div className="h-full">
          <Image src={banner1} alt="home-banner" />
        </div>
        <div className="absolute w-2/5 left-11 top-28 lg:top-52 flex flex-col gap-6 font-poppins">
        <div className=" title flex flex-col gap-3 primary-color">
          <p className="text-4xl lg:text-6xl font-extrabold">One more friend</p>
          <p className="text-3xl lg:text-5xl font-bold">Thousands more fun!</p>
        </div>
        <div className="content poppins-medium flex flex-col gap-3">
          <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
          <div className="flex gap-4">
            <ButtonView typeBtn="outline-btn" content="View Intro" iconName={faPlay}/>
            <ButtonView typeBtn="primary-color-btn" content="Explore now"/>
          </div>  
          </div>  
        </div>
        
        
        
      </section>

      <section className="responsive-section font-poppins">
        <div>
          <p className="">Whats new?</p>
          <div className="flex justify-between">
            <p className="font-bold text-2xl primary-color">Take a look at some of our pets</p>
            <ButtonView typeBtn="outline-btn" content="View more" iconName={faChevronRight}/>
          </div>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
        {data.map(pet => (
            <DogCard
              key={pet._id}
              id={pet._id.toString()}
              name={pet.Name}
              gender={pet.Gender}
              age={pet.Age}
              price={pet.Price}
              imageUrl={pet.Images[0]} // Lấy hình ảnh đầu tiên làm đại diện
            />
          ))}
        </div>
      </section>
      <section className="responsive-section -mt-20 -mb-12 lg:-mb-20 relative">
        <div>
          <Image
          src={banner2}
          alt="home banner 2"
          className="rounded-lg"
          />
        </div>
        <div className="absolute w-1/3 right-16 lg:right-36 top-12 lg:top-28 flex flex-col gap-3 lg:gap-6 font-poppins text-right">
        <div className=" title flex flex-col gap-3 primary-color">
          <p className="text-3xl lg:text-5xl font-extrabold">One more friend</p>
          <p className="text-2xl lg:text-4xl font-bold">Thousands more fun!</p>
        </div>
        <div className="content poppins-medium flex flex-col gap-3">
          <p className="">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
          <div className="flex gap-4 justify-end">
            <ButtonView typeBtn="outline-btn" content="View Intro" iconName={faPlay}/>
            <ButtonView typeBtn="primary-color-btn" content="Explore now"/>
          </div>  
          </div>  
        </div>
      </section>
      <section className="responsive-section font-poppins">
      <div>
          <p className="">Hard to choose right products for your pets?</p>
          <div className="flex justify-between">
            <p className="font-bold text-2xl primary-color">Our Products</p>
            <ButtonView typeBtn="outline-btn" content="View more" iconName={faChevronRight}/>
          </div>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </section>
      <section className="responsive-section font-poppins flex flex-col gap-5 relative">  
        <div className="flex justify-between">
          <p className="">Proud to be part of <span className="primary-color font-bold text-2xl">Pet Sellers</span></p>
          <ButtonView typeBtn="outline-btn" content="View all our sellers" iconName={faChevronRight}/>
        </div>
        <Slider/>
        <div className="relative">
        <div className="h-full">
          <Image src={banner3} alt="home-banner" />
        </div>
        <div className="absolute w-1/3 top-[40px] left-[40px] flex flex-col gap-6 font-poppins">
          <div className=" title flex flex-col gap-3 primary-color">
            <p className="text-3xl lg:text-5xl font-extrabold">Adoption</p>
            <p className="text-2xl lg:text-4xl font-bold">We need help. so do they.</p>
          </div>
          <div className="content poppins-medium flex flex-col gap-3">
            <p className="">Adopt a pet and give it a home, <br />
            it will be love you back unconditionally.</p>
            <div className="flex gap-4">
            <ButtonView typeBtn="primary-color-btn" content="Explore now"/>
              <ButtonView typeBtn="outline-btn" content="View Intro" iconName={faPlay}/>
            </div>  
            </div>  
        </div>
        </div>
      </section>

      <section className="responsive-section font-poppins">
      <div>
          <p className="">You already know ?</p>
          <div className="flex justify-between">
            <p className="font-bold text-2xl primary-color">Useful pet knowledge</p>
            <ButtonView typeBtn="outline-btn" content="View more" iconName={faChevronRight}/>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
        </div>
      </section>
    </main>
  );
}

