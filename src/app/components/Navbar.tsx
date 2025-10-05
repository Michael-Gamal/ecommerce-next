import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Searchbar from './Searchbar'
import { Bell, Home, ShoppingCart } from 'lucide-react';
import ShoppingCartIcon from './ShoppingCartIcon';
const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-200 p-4'>
        {/* letf */}
        <Link className='flex items-center ' href={'/'}>
            <Image
                src="/logo.png" 
                alt="Trendlama" 
                width={36} 
                height={36} 
                className="w-6 h-6 md:w-9 md:h-9"
            />
            <p className="hidden md:block text-md font-meduim tracking-wider">TRENDLAMA</p>
        </Link>
        {/* right */}   
        <div className="flex items-center gap-6">
          <Searchbar />
          <Link href="/">
            <Home className='w-4 h-4 text-gray-600' />
          </Link>
          <Bell className='w-4 h-4 text-gray-600' />
          <ShoppingCartIcon  />
          {/* <ShoppingCart className='w-4 h-4 text-gray-600' /> */}
          <Link href="/login">
            Sign In
          </Link>
        </div>
    </nav>
  )
}

export default Navbar
