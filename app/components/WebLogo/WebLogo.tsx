import React from 'react';

import { Logo } from '@/app/assets';

import './WebLogo.css';

const WebLogo = () => {
  return (
    <section className='flex items-center group space-x-2'>
        <Logo />
        <span className='text-4xl text-[#001233] group-hover:text-[#012a4a] ease-in duration-300'>Cityscape Forecast</span>
    </section>
  )
};

export default WebLogo;