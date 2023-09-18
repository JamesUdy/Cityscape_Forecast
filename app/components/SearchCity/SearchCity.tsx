"use client";

import React from 'react';

import { Search } from '@/app/assets';

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocationData: React.Dispatch<React.SetStateAction<string>>;
}

const SearchCity = ({handleSearch, setLocationData}: InputProps) => {
  return (
    <>
      <form id='cityName' name='cityName' className='bg-white shadow-xl ease-in duration-200 hover:ring-2 hover:ring-[#adb5bd86] shadow-[#adb5bd] hover:shadow-[#001f3f6b] flex w-2/5 justify-between px-2 py-2 gap-2 mx-auto rounded-lg group'>
        <input className='w-full mr-2 outline-none tracking-wider font-medium text-[#001233] group-hover:text-[#012a4a]' type="text" placeholder='🏙️ Search City...' onKeyDown={handleSearch} onChange={(e) => setLocationData(e.target.value)} />
        <Search />
      </form>
    </>
  )
};

export default SearchCity;
