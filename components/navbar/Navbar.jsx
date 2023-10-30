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
    <nav className=' flex p-4 '>

      <div >
        <Image className=' ' src={"https://www.giftgujarat.in/assets/common/vectors/logo-dark.svg"} width={50} height={50}/>
      </div>

      <div class="sm:hidden ml-auto">
			<button class="navbar-burger flex items-center text-blue-600 p-3">
				<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>

      <div className=' flex justify-evenly  gap-x-5 ml-auto  '>

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