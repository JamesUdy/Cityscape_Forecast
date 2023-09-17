"use client";

import React from 'react';

import { Search } from '@/app/assets';

const SearchCity = () => {
  return (
    <>
      <form className='bg-white hover:shadow-lg ease-in duration-200 hover:shadow-[#adb5bd] flex w-2/5 justify-between px-2 py-2 gap-2 mx-auto rounded-lg group'>
        <input className='w-full mr-2 outline-none tracking-wider font-medium text-[#001233] group-hover:text-[#012a4a]' type="text" placeholder='🏙️ Search City...' />
        <Search />
      </form>
    </>
  )
};

export default SearchCity;
