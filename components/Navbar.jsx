import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../public/assets/logo.png";
const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const handleNav = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-20 ease-in duration-300 shadow-md bg-white">
      <div className="max-w-[1240px] m-auto flex justify-between items-center px-4 py-1 text-[#14193D]-400">
        <Link href="/" className="sm:ml-20">
          <Image src={logo} alt="company's logo" width={141} height={48} />
        </Link>
        <ul className="hidden sm:flex sm:mr-20">
          <li className="p-4 hover:text-[#3CC1CD]">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-[#3CC1CD]">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 hover:text-[#3CC1CD]">
            <Link href="/services">Services</Link>
          </li>
          <li className="p-4 hover:text-[#3CC1CD]">
            <Link href="/portfolio">Porfolio</Link>
          </li>
          <li className="p-4 hover:text-[#3CC1CD]">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Buttons */}
        <div className="block sm:hidden z-10" onClick={handleNav}>
          {navToggle ? (
            <AiOutlineClose
              size={20}
              className={navToggle ? "text-white" : "text-black"}
            />
          ) : (
            <AiOutlineMenu size={20} className="lg:text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            navToggle
              ? `sm:hidden absolute top-0 left-0 right-0 bottom-0
           flex justify-center items-center w-full h-screen bg-[#122E34] text-center ease-in duration-300`
              : `sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 
          flex justify-center items-center w-full h-screen bg-[#122E34] text-center ease-in duration-300`
          }
        >
          <ul className="text-white">
            <li className="p-4 text-3xl">
              <Link href="/" onClick={handleNav}>Home</Link>
            </li>
            <li className="p-4 text-3xl">
              <Link href="/about" onClick={handleNav}>About</Link>
            </li>
            <li className="p-4 text-3xl">
              <Link href="/services" onClick={handleNav}>Services</Link>
            </li>
            <li className="p-4 text-3xl">
              <Link href="/portfolio" onClick={handleNav}>Porfolio</Link>
            </li>
            <li className="p-4 text-3xl">
              <Link href="/contact" onClick={handleNav}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
