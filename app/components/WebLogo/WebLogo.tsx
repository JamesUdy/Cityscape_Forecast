import React from 'react';

import { Logo } from '@/app/assets';

const WebLogo = () => {
  return (
    <section className='flex items-center space-x-2'>
        <Logo />
        <span>Cityscape Forecast</span>
    </section>
  )
};

export default WebLogo;