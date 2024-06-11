import React from 'react'
import Image from "next/image";

import { useState } from 'react';
// Component
import DogCard from './app.dogCard'
const dogs = [
    {
      id: 'MO231',
      name: 'Pomeranian White',
      gender: 'Male',
      age: '02 months',
      price: '6.900.000',
      imageUrl: '/img/card-img.png', // Đảm bảo đường dẫn đúng
    },
    {
      id: 'MO232',
      name: 'Poodle Tiny Sepia',
      gender: 'Female',
      age: '03 months',
      price: '7.500.000',
      imageUrl: '/img/card-img.png', // Đảm bảo đường dẫn đúng
    },
    
    // Thêm các đối tượng chó khác ở đây
  ];
const itemsPerPage = 6;

type Props = {}

const DogList = (props: Props) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentDogs = dogs.slice(startIndex, endIndex);

    const totalPages = Math.ceil(dogs.length / itemsPerPage);
  
  return (
    
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5'>
        {currentDogs.map(dog => (
            <DogCard
                key={dog.id}
                id={dog.id}
                name={dog.name}
                gender={dog.gender}
                age={dog.age}
                price={dog.price}
                imageUrl={dog.imageUrl}
            />
        ))}
      </div>
      <div className='flex justify-center mt-4'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default DogList