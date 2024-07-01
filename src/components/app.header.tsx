'use client'
import home from '@/styles/home.module.css'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/icon/logo.png'
const AppHeader = ()=>{
    return (
        <header className='fixed z-10 w-full font-poppins'>
            <nav className="flex justify-between items-center w-[92%] mx-auto py-4 poppins-bold">
                <a className="h-full cursor-pointer header-logo" href=""><Image src={logo} alt='logo'/></a>
                <div className="nav-links md:bg-inherit min-h-fit w-auto md:flex items-center px-5">
                    <ul className="header-line primary-color flex flex-row  items-center gap-6 lg:gap-[4vw] font-bold ">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/category'}>Category</Link>
                        <Link href={'/'}>About</Link>
                        <Link href={'/'}>Contact</Link>
                        
                    </ul>
                </div>
                <div className="flex flex-row">
                    <div className='flex flex-row items-center'>
                        <div className='search'>
                            <input type="text" placeholder='Search something here!'/>
                        </div>
                        
                        <button className='bg-primary-color text-white px-2 lg:px-4 py-2 rounded-full font-bold'>Join the community</button>
                    </div>
                    <div className="language flex">
                        {/* <img src="/icon/language-icon.png" alt="" /> */}
                        <div>
                            <select className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="true">
                                <option value="volvo">VND</option>
                                <option value="saab">Dollars</option>
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default AppHeader;