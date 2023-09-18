import React from 'react';

import { Logo } from '@/app/assets';

import './WebLogo.css';

import Link from 'next/link';

const WebLogo = () => {
  return (
    <>
        <Link href='#' className='flex items-center group space-x-2'>
          <Logo />
          <span className='text-4xl text-[#001233] group-hover:text-[#012a4a] ease-in duration-300 website-name'>Cityscape Forecast</span>
        </Link>
    </>
  )
};

export default WebLogo;