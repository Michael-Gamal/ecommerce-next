import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center md:flex-row md:item-start gap-8 md:gap-0 bg-gray-800 p-8 rounded-lg md:justify-between'>
      <div className="flex flex-col items-center gap-4 md:items-start ">
        <Link className='flex items-center ' href={'/'}>
            <Image
                src="/logo.png" 
                alt="Trendlama" 
                width={36} 
                height={36} 
            />
            <p className=" text-white hidden md:block text-md font-meduim tracking-wider">TRENDLAMA</p>
        </Link>
        <p className='text-sm text-gray-400'>;&copy-right 2025 Trendlama</p>
        <p className='text-sm text-gray-400'>All rights reserved</p>
      </div>
        <div className="flex flex-col text-sm text-gray-400 items-center md:items-start">
        <p className='text-sm text-amber-50'>Links</p>
        <Link href="/" className=''>Home</Link>
        <Link href="/" className=''>Contact</Link>
        <Link href="/" className=''>Terms of Servace</Link>
        <Link href="/" className=''>Privacy Policy</Link>
      </div>
        <div className="flex flex-col text-sm text-gray-400 items-center md:items-start">
        <p className='text-sm text-amber-50'>Links</p>
        <Link href="/" className=''>All Products</Link>
        <Link href="/" className=''>New Arrivals</Link>
        <Link href="/" className=''>Best Saller</Link>
        <Link href="/" className=''>Sale</Link>
      </div>
        <div className="flex flex-col text-sm text-gray-400 items-center md:items-start">
        <p className='text-sm text-amber-50'>Links</p>
        <Link href="/" className=''>About</Link>
        <Link href="/" className=''>Contact</Link>
        <Link href="/" className=''>Blog</Link>
        <Link href="/" className=''>Affiliate</Link>
      </div>
    </div>
  )
}

export default Footer
