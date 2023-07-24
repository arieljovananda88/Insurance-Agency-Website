import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    console.log(nav)
  return (
    <div className=' left-0 top-0 w-full z-10 ease-in duration-300 shadow-md'>
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
            <div onClick={handleNav} className='block sm:hidden'>
                {nav ? (<AiOutlineClose size = {20} style={{ color: `white` }} />) : (<AiOutlineMenu size = {20}/>)}
                {/* <AiOutlineMenu size = {20}></AiOutlineMenu> */}

            </div>
            <div className={
                nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center text-white' : 
                'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center text-white'}>
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