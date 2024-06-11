import React from 'react'
import Image from "next/image";
import product1 from '../../public/img/product-1.png'
import gift from '../../public/icon/gift.png'
type Props = {}

const Cards = (props: Props) => {
  return (
    <div className='flex flex-col gap-5 bg-white rounded-lg shadow-lg p-3'>
        <div className='card-img rounded-lg'>
            <Image
            src={product1}
            alt='dog1'
            className='rounded-lg'
            />
            
        </div>
        <div className='card-content font-poppins flex flex-col gap-1'>
            <div className='flex font-bold gap-4 text-base text-heading-color line-clamp-2	'>
                <p>Reflex Plus Adult Cat Food Salmon</p>
            </div>
            <div className='flex gap-4 text-[12px] text-content-color items-center'>
                <div className='flex gap-1'>
                    <p>Product:</p>
                    <p className='font-bold'>Dog Food</p>
                </div>
                <span className='dot font-bold'>&#8226;</span>
                <div className='flex gap-1'>
                    <p>Size:</p>
                    <p className='font-bold'>385gm</p>
                </div>
            </div>
            <div className="price flex gap-2 font-bold text-heading-color">
                <p>140.000</p>
                <p>VND</p>
            </div>
            <div className='rounded-lg flex gap-2 p-1 bg-[#FCEED5] items-center primary-color'>
            <Image
            src={gift}
            alt='coupon'
            />
            <span className='dot'>&#8226;</span>
            <p className='text-sm font-bold'>Free Toy & Free Shaker</p>
            </div>
        </div>
    </div>
  )
}

export default Cards