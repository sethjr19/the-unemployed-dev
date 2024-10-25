'use client'
import Link from 'next/link'
import React from 'react'
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav className="navbar h-[50px]">
      <div className='flex bg-gray-600 h-[100%] w-[100%] justify-center items-center'>
        <div className='flex justify-between w-[80%]'>
          <div>
          <Link href="/">ICON</Link>
          </div>
          <div>
            SEARCHBAR
          </div>

          <div>
            <ul className="nav-links flex justify-between px-5">
              { user ? (
                <>
                  <li>
                    <Link href="/profile">Profile</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/register">Register</Link>
                  </li>
                </>)}
            </ul> 
          </div>    
      </div>
    </div>
  </nav>
  )
}

export default Navbar