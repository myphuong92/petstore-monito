import React from 'react'
import Image from "next/image";

import news1 from '../../public/img/news-img-1.png'

type Props = {}

const newsCard = (props: Props) => {
  return (
    <div className='flex flex-col gap-5 bg-white rounded-lg shadow-lg p-3'>
        <div className="img">
        <Image
            src={news1}
            alt='dog1'
            className='rounded-lg'
            />
        </div>
        <div className='card-content font-poppins flex flex-col gap-2'>
          <div className='tag bg-blue-500 py-1 px-2 rounded-full w-1/3 text-center'>
            <p className='text-white text-[12px] font-bold'>Pet knowledge</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='card-heading font-bold line-clamp-2'>What is a Pomeranian? How to Identify Pomeranian Dogs</p>
            <p className='text-sm line-clamp-3'>The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.</p>
          </div>
          
        </div>
    </div>
  )
}

export default newsCard