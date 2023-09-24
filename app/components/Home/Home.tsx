"use client";

import React, { useState } from 'react';

import Logo from '../WebLogo/WebLogo';
import SearchCity from '../SearchCity/SearchCity';

import WeatherContent from '../WeatherContent/WeatherContent';

interface HomeProps {
  weatherAPIKey: string;
  airQualityAPIKey: string;
}

const Home: React.FC<HomeProps> = ({ weatherAPIKey, airQualityAPIKey }) => {
  const [weatherData, setWeatherData] = useState({});
  const [AQIndex, setAQIndex] = useState<number | null>(null);
  const [locationData, setLocationData] = useState("");
  const [error, setError] = useState("");

  const weatherAPI = `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIKey}&q=${locationData}&days=3&aqi=yes&alerts=yes`;

  const airQualityURL = `https://api.waqi.info/feed/${locationData}/?token=${airQualityAPIKey}`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      e.preventDefault()
        try {
          const res1 = await fetch(weatherAPI);
          const res2 = await fetch(airQualityURL);
          if(!res1.ok) {
            throw new Error()
          }
          const data1 = await res1.json();
          const data2 = await res2.json();
          const aqiValue = data2.data?.aqi ?? null;
          setWeatherData(data1);
          setAQIndex(aqiValue);
          setLocationData("")
          setError("")
        } catch (err) {
          setError("Requested city not found 💬")
        }
    }
  };
  
  return (
    <section className='flex flex-col justify-between h-screen'>
      <header className='px-4 w360:px-10 py-6'>
        <Logo />
      </header>
      <main className="px-4 w360:px-10 flex flex-col">
        <SearchCity handleSearch={handleSearch} setLocationData={setLocationData} />
        <WeatherContent weatherData={weatherData} airQualityIndexData={AQIndex} error={error} />
      </main>
      <footer className='w-full'>
        <span> &copy; 2023 YourWebsiteName. All Rights Reserved.</span>
      </footer>
    </section>
  )
};

export default Home;
