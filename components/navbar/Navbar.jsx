import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Events from '../events/Events'
import AboutUs from '@/app/AboutUs/page'

const Navbar = () => {
  return (
    <nav className=' flex  p-4 '>

      <div>
        <Image/>
      </div>
      <div className=' flex justify-evenly  gap-x-5 scroll-m-7'>

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
          <Link href="/Profile">
              Profile
          </Link>
          
          {/* Add more links as needed */}
      </div>
     
    </nav>
  )
}

export default Navbar