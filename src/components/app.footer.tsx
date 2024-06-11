import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import logo from '../../public/icon/logo.png'
type Props = {}

const AppFooter = (props: Props) => {
  return (
    <footer className='font-poppins'>
        <div className='bg-red-100 responsive-section'>
            <div className='grid grid-cols-3 gap-5 lg:gap-2 bg-primary-color rounded-xl p-5'>
                <p className='font-bold text-2xl text-white'>Register now so you dont miss our programs</p>
                <div className='col-span-2 bg-white p-4 rounded-xl'>
                  <div className="w-full flex gap-3">
                    <input placeholder='Enter your email' className='border-[#003459] border-solid border-[1px] flex-1 rounded-xl px-5 py-3' type="text" />
                    <button className='bg-primary-color text-white rounded-xl py-2 px-4'>Subcribe Now</button>
                  </div>
                    
                </div>
            </div>
            <div className='grid grid-cols-2 py-10 divide-y'>
              <ul className='flex font-bold gap-16 w-full'>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Category</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Contact</Link>
              </ul>
              <ul className='flex gap-10 justify-end'>
              <FontAwesomeIcon className='text-2xl' icon={faFacebook} />
              <FontAwesomeIcon className='text-2xl' icon={faTwitter} />
              <FontAwesomeIcon className='text-2xl' icon={faInstagram} />
              <FontAwesomeIcon className='text-2xl' icon={faYoutube} />
              </ul>
            </div>
            <div className='solid'></div>
            <div className='flex justify-between text-content-color font-medium mt-8'>
              <p>&copy; 2022 Monito. All rights reserved.</p>
              <div>
                <Link href={'/'}><Image src={logo} alt='logo'/></Link>
              </div>
              <div className='flex gap-5'>
                <Link href={'/'}>Terms of Service</Link>
                <Link href={'/'}>Privacy Policy</Link>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default AppFooter