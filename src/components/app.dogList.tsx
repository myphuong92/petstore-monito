'use client'
import React, { useEffect } from 'react';
import Image from "next/image";
// Data
import { connectToDB } from "@utils/database";
import mongoose from 'mongoose';
import { useState } from 'react';
// Component
import DogCard from './app.dogCard'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
type Pet = {
  _id: string;
  Name: string;
  Gender: string;
  Age: string;
  Price: string;
  Images: string[];
};
// async function getData(): Promise<Pet[]> {
//   await connectToDB();
  
//   try {
//     const database = mongoose.connection.db;
//     const collection = database.collection('Pets');
//     const result = await collection.find({}).toArray();
//     return result.map(item => ({
//       _id: item._id.toString(),
//       Name: item.Name,
//       Gender: item.Gender,
//       Age: item.Age,
//       Price: item[" Price "].trim(),
//       Images: item.Images,
//     }));
//   } catch (error) {
//     console.error('Error:', error);
//     return [];
//   }
// }

const itemsPerPage = 9;

type Props = {}

const DogList = () => {
  
    const [currentPage, setCurrentPage] = useState(1);
    const [pets, setPets] = useState<Pet[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/pets');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setPets(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentDogs = pets.slice(startIndex, endIndex);

    const totalPages = Math.ceil(pets.length / itemsPerPage);

  return (
    
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5'>
      {currentDogs.map(pet => (
          <DogCard
            key={pet._id}
            id={pet._id}
            name={pet.Name}
            gender={pet.Gender}
            age={pet.Age}
            price={pet.Price}
            imageUrl={pet.Images[0]} // Lấy hình ảnh đầu tiên làm đại diện
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

export default DogList;
