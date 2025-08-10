"use client";
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname()
console.log(pathName);

  const links = (
    <>
      <Link href={'/'}>Home</Link>
      <Link href={'/News'}>News</Link>
      <Link href={'/Destination'}>Destination</Link>
      <Link href={'/Blog'}>Blog</Link>
      <Link href={'/Contact'}>Contact</Link>
    </>
  );

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (  pathName === '/' ||
        pathName === '/Details' ||
        pathName === '/News' ||
        pathName === '/Blog' ||
        pathName === '/Destination' ||
        pathName === '/Register' ||
        pathName === '/Contact'
      ) {
    return (
    <div
      className={`${pathName === '/' ? 'fixed top-0' : 'sticky top-0'} w-full z-50 transition-all duration-300 py-3   ${
        isScrolled ? 'bg-white/40 backdrop-blur-md shadow-md text-black' : 'bg-transparent text-white'
      }`}
    >
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm flex items-center gap-3 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            {pathName === '/' && isScrolled && (
              <img src="https://res.cloudinary.com/deqw8tu5v/image/upload/v1754083078/Frame_1_an2s3r.png" alt="" />
            )}

            {pathName === '/' && !isScrolled && (
              <img src="https://res.cloudinary.com/deqw8tu5v/image/upload/v1754083068/Frame_w7mndv.png" alt="" />
            )}

            {pathName !== '/' && (
              <img src="https://res.cloudinary.com/deqw8tu5v/image/upload/v1754083078/Frame_1_an2s3r.png" alt="" />
            )}
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className={`menu flex items-center gap-5 text-base menu-horizontal px-1 ${pathName !== '/' && 'text-black'}`}>
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          <Link href={'/Register'} className='btn bg-[#F9A51A] border-none shadow-none rounded-lg'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
  }

  
};

export default Navbar;
