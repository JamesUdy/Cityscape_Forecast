import React from 'react';

import { Logo } from '@/app/assets';

import './WebLogo.css';

import Link from 'next/link';

const WebLogo: React.FC = () => {
  const handleLogoClick = () => {
    window.location.reload();
  }

  return (
    <>
        <Link href='/' onClick={handleLogoClick} className='flex items-center group space-x-2'>
          <Logo />
          <span className='text-4xl text-[#001233] group-hover:text-[#012a4a] ease-in duration-300 website-name'>Cityscape Forecast</span>
        </Link>
    </>
  )
};

export default WebLogo;
