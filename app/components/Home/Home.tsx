import React, { useState } from 'react';

import Logo from '../WebLogo/WebLogo';
import SearchCity from '../SearchCity/SearchCity';

import Marquee from "react-fast-marquee";

import features from '@/app/constants/constants';

const Home = () => {
  const [weatherData, setWeatherData] = useState({});
  const [locationData, setLocationData] = useState("");
  const [error, setError] = useState("");

  // const weatherAPIKey = process.env.REACT_APP_API_KEY;

  // console.log(process.env.REACT_APP_API_KEY);

  const weatherURL = `http://api.weatherapi.com/v1/forecast.json?key=472f53b61fb9488594d34124231609&q=${locationData}&days=3&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      e.preventDefault()
        try {
          const res = await fetch(weatherURL);
          if(!res.ok) {
            throw new Error()
          }
          const data = await res.json();
          setWeatherData(data)
          setLocationData("")
          setError("")
        } catch (err) {
          setError("Requested city not found 💬")
        }
    }
  };

  let content;
  if (Object.keys(weatherData).length === 0 && error === '') {
    content = (
      <section className='text-[#001F3F] mx-auto w-2/4 py-10 flex flex-col space-y-4 items-center'>
          <span className='text-xl font-semibold'>🌆 Welcome to CityscapeForecast, your innovative weather hub! 🌤️</span>
          <p className='font-semibold text-sm text-center'>Experience cutting-edge weather updates and forecasts like never before. 🌐📱</p>
          <span className='font-semibold text-sm text-center'>Here's what we offer today:</span>
          <Marquee loop={0} speed={50} className='flex h-12 p-2'>
            {features.map(feature => {
              return (
                <span key={feature.id} className='text-[#0a141f] mx-2 px-4 py-2 ring-1 ring-transparent ease-in duration-200 hover:ring-[#0a141f] font-semibold bg-[#1e5b976a] rounded-md backdrop-blur-xl text-sm text-center'>{feature.feat}</span>
              )
            })}
          </Marquee>
          <p className='font-semibold text-sm text-center'>Stay ahead of the weather with CityscapeForecast, where the cityscape meets your forecast needs! 🚀🌤️</p>
      </section>
    )  
  }

  return (
    <main className="bg-color h-screen px-10 py-6 flex flex-col space-y-8">
      <Logo />
      <SearchCity handleSearch={handleSearch} setLocationData={setLocationData} />
      {content}
      {error && <div>{error}</div>}
    </main>
  )
};

export default Home;
