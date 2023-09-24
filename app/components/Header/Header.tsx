import React from 'react';

import Logo from '../WebLogo/WebLogo';
import { Github } from '@/app/assets';

import Link from 'next/link';

const Header = () => {
  return (
    <header className='px-4 w360:px-10 py-6 flex justify-between'>
        <Logo />
        <Link href="https://github.com/JamesUdy/Cityscape_Forecast" target='_blank' rel='noopener noreferrer'>
        <Github />
        </Link>
  </header>
  )
};

export default Header;
