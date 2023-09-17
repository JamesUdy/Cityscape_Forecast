import React from 'react';

import Logo from '../WebLogo/WebLogo';
import SearchCity from '../SearchCity/SearchCity';

const Home = () => {
  return (
    <main className="bg-color h-screen px-10 py-6 flex flex-col space-y-4">
      <Logo />
      <SearchCity />
    </main>
  )
};

export default Home;
