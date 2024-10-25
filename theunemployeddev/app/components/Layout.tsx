import React from 'react'
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
    <Navbar/>
    <main className='w-full'>{children}</main>
    </>
  )
}

export default Layout;