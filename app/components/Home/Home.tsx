import React, { useState } from 'react';

import Logo from '../WebLogo/WebLogo';
import SearchCity from '../SearchCity/SearchCity';

import WeatherContent from '../WeatherContent/WeatherContent';

const Home = () => {
  const [weatherData, setWeatherData] = useState({});
  const [locationData, setLocationData] = useState("");
  const [error, setError] = useState("");

  // const weatherAPIKey = process.env.REACT_APP_API_KEY;

  // console.log(process.env.REACT_APP_API_KEY);

  const weatherURL = `https://api.weatherapi.com/v1/forecast.json?key=472f53b61fb9488594d34124231609&q=${locationData}&days=3&aqi=yes&alerts=yes`;

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
  
  return (
    <main className="bg-color h-screen px-10 py-6 flex flex-col space-y-8">
      <Logo />
      <SearchCity handleSearch={handleSearch} setLocationData={setLocationData} />
      <WeatherContent weatherData={weatherData} error={error} />
    </main>
  )
};

export default Home;
