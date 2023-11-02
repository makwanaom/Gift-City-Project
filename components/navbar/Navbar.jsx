"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaUser } from "react-icons/fa"; 
// Import the menu icon from react-icons/fa
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  
  const { data: session } = useSession();

  const menus = [
    { label: "Home", value: "/" },
    { label: "About Us", value: "/AboutUs" },
    { label: "Events", value: "/#Events" },
    { label: "Community", value: "/Community" },
    { label: "Maps", value: "/#" },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currTab, setCurrTab] = useState("Home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className="flex py-8  px-6  items-center">
      <div>
        <img
          src="https://www.giftgujarat.in/assets/common/vectors/logo-dark.svg"
          className=""
          width={50}
          height={50}
          alt=""
        />
      </div>
      {/* Mobile menu button */}
      <div className="ml-auto block sm:hidden">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600 focus:outline-none">
          <FaBars />
        </button>
      </div>
      {/* Desktop navigation */}
      <div className="hidden sm:flex justify-evenly  ml-auto font-medium text-lg gap-12 cursor-pointer text-black ">
        {menus.map((item, index) => (
          <Link
            href={item.value}
            key={index}
            className={`${
              currTab === item.label ? "border-b-2 border-gray-600" : ""
            }`}
            onClick={() => setCurrTab(item.label)}>
            {item.label}
          </Link>
        ))}
      </div>
      {/* Mobile menu */}
      <div
        className={`ml-auto sm:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}>
        <div className="absolute top-16 right-0 left-0 bg-white p-4 border-b-2 border-gray-600">
          {menus.map((item, index) => (
            <Link
              href={item.value}
              key={index}
              className="block py-2 text-gray-600"
              onClick={() => {
                setMobileMenuOpen(false);
                setCurrTab(item.label);
              }}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="ml-4 font-medium px-10 text-xl cursor-pointer text-black">
        {isLoggedIn ? (
          <button onClick={toggleProfileMenu}>
            <FaUser />
          </button>
        ) : (
          <button onClick={toggleLoginStatus}>
            <Link href="/Login">Login</Link>
            <span>{`Hello, ${session.user?.name}`}</span>
          </button>
        )}
        {isProfileMenuOpen && (
          <ul className="bg-white p-2 border-b-2 border-gray-600 absolute right-0 mt-2">
            <li>
              <Link href="/Profile">Profile</Link>
            </li>

            <li onClick={toggleProfileMenu}>
              <Link onClick={toggleLoginStatus} href="/">
                Logout
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
