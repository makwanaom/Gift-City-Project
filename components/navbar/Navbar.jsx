"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Events from '../events/Events'
import AboutUs from '@/app/AboutUs/page'
import { useState } from 'react'
import Home from '@/app/page'

const Navbar = () => {
  const menus=[
   { label:"Home" ,value: "/"},
    {label:"AboutUS" ,value: "/AboutUs"},
   { label:"Events" ,value: "/#Events"},
 {   label:"Community" ,value: "/Community"},
   { label:"Maps" ,value: "/#"},
    
  ]

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currTab,setCurrTab]=useState("Home")

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <nav className=' flex py-4 px-6 items-center '>

      <div >
        {/* <Image className=' ' src="logo.png" alt='' width={50} height={50}/> */}
        <img src="https://www.giftgujarat.in/assets/common/vectors/logo-dark.svg" className='' width={50} height={50} alt="" />
      </div>
      <div className=' flex justify-evenly  gap-x-5 ml-auto '>

          {/* <Link href="/">
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
          </Link> */}
          {menus.map((item,index)=>(
          <Link 
          href={item.value}
          key={index}
          className={`${currTab ==item.label ?"border-b-2  border-gray-600" : "" }`}
          onClick={()=>setCurrTab(item.label)}
          >
            {item.label}
          </Link>

          ))}
          </div>
          <div className=' ml-16 font-medium text-lg cursor-pointer text-black'>
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