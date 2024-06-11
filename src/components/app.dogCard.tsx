import React from 'react'
import Image from "next/image";
import dog1 from '../../public/img/card-img.png'
import { WithId } from 'mongodb';

type Props = {
    id?: string;
    name?: string;
    gender?: string;
    age?: string;
    price?: string;
    imageUrl?: string;
}

const Cards = (props: Props) => {
  return (
    <div className='flex flex-col gap-5 bg-white rounded-lg shadow-lg p-3'>
        <div className='card-img rounded-lg'>
        <Image
          src={props.imageUrl || dog1}
          alt={props.name || 'dog1'}
          className='rounded-lg'
          width={300}
          height={200}
        />
            
        </div>
        <div className='card-content font-poppins flex flex-col gap-1'>
            <div className='flex font-bold gap-4 text-base text-heading-color line-clamp-2'>
                <p>{props.id}</p>
                <p>{props.name}</p>
            </div>
            <div className='flex gap-4 text-[12px] text-content-color'>
                <div className='flex gap-1'>
                    <p>Gene:</p>
                    <p className='font-bold'>{props.gender}</p>
                </div>
                <span className='dot font-bold'>&#8226;</span>
                <div className='flex gap-1'>
                    <p>Age:</p>
                    <p className='font-bold'>{props.age}</p>
                </div>
            </div>
            <div className="price flex gap-2 font-bold text-heading-color">
                <p>{props.price}</p>
                <p>VND</p>
            </div>
        </div>
    </div>
  )
}

export default Cards