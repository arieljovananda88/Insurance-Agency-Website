"use client";

import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        console.log("kepencet")
        setNav(!nav)
    }

    console.log(nav)
  return (
    <div className='  bg-white z-40 ease-in duration-300 shadow-md fixed inset-x-0 top-0'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
            <Link href = "/">
                <h1>
                    LOGO
                </h1>
            </Link>
            <ul className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href = '/about'>
                    About
                    </Link>
                </li>
                <li className='p-4'>
                    <Link href = '/branch-office'>
                    Branch Office
                    </Link>
                </li>
                <li className='p-4'>
                    <Link href = '/blog'>
                    Blogs
                    </Link>
                </li>
                <li className='p-4'>
                    <Link href = '/contact-us'>
                    Contact Us
                    </Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block sm:hidden z-40'>
                {nav ? (<AiOutlineClose size = {20} style={{ color: `white` }} />) : (<AiOutlineMenu size = {20}/>)}

            </div>
            <div className={
                `sm:hidden absolute top-0 ${nav ? "translate-x-0" : "translate-x-full"} transition duration-300 right-0 bottom-0 flex justify-center items-center w-[80vw] h-screen bg-black text-center text-white`}>
                <ul>
                    <li onClick={handleNav} className='p-4'>
                        <Link href = '/about'>
                        About
                        </Link>
                    </li>
                    <li onClick={handleNav} className='p-4'>
                        <Link href = '/branch-office'>
                        Branch Office
                        </Link>
                    </li>
                    <li onClick={handleNav} className='p-4'>
                        <Link href = '/blog'>
                        Blogs
                        </Link>
                    </li>
                    <li onClick={handleNav} className='p-4'>
                        <Link href = '/contact-us'>
                        Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar