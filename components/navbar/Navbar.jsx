"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Events from '../events/Events'
import AboutUs from '@/app/AboutUs/page'
import { useState } from 'react'

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <nav className=' flex  p-4 '>

      <div >
        <Image className=' ' src={"https://www.giftgujarat.in/assets/common/vectors/logo-dark.svg"} width={50} height={50}/>
      </div>
      <div className=' flex justify-evenly  gap-x-5 ml-auto '>

          <Link href="/">
              Home
          </Link>
          <Link href="/AboutUs">
              About Us
          </Link>
          <Link href="/#Events">
                Events
          </Link>
          <Link href="/Community">
              Community
          </Link>
          <Link href="/#">
              Map
          </Link>
          </div>
          <div className=' ml-16'>
          {/* Add more links as needed */}
          <button onClick={!isLoggedIn ? toggleLoginStatus : null}>
            {isLoggedIn ? (
              <Link href="/Profile">Profile</Link>
            ) : (
              <Link href="/Login">Login</Link>
            )}
          </button>
          {isLoggedIn && (
            <ul className="">
              <li onClick={isLoggedIn ? toggleLoginStatus : null}>
                <Link href="/">Logout</Link>
              </li>
            </ul>
              )}

         </div>
     
     
    </nav>
  )
}

export default Navbar