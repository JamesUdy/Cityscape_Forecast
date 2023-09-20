import React, { useState } from 'react';

import Logo from '../WebLogo/WebLogo';
import SearchCity from '../SearchCity/SearchCity';

import WeatherContent from '../WeatherContent/WeatherContent';
import AirQualityIndex from '../AirQualityIndex/AirQualityIndex';

const Home = () => {
  const [weatherData, setWeatherData] = useState({});
  const [AQIndex, setAQIndex] = useState<number | null>(null);
  const [locationData, setLocationData] = useState("");
  const [error, setError] = useState("");

  // const weatherAPIKey = process.env.REACT_APP_API_KEY;

  // console.log(process.env.REACT_APP_API_KEY);

  const weatherURL = `https://api.weatherapi.com/v1/forecast.json?key=472f53b61fb9488594d34124231609&q=${locationData}&days=3&aqi=yes&alerts=yes`;

  const airQualityURL = `https://api.waqi.info/feed/${locationData}/?token=1d3c6abb2c9bc75b89eeb13dad7deed605271097`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      e.preventDefault()
        try {
          const res1 = await fetch(weatherURL);
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
    <main className="px-4 w360:px-10 py-6 flex flex-col space-y-8">
      <Logo />
      <SearchCity handleSearch={handleSearch} setLocationData={setLocationData} />
      <WeatherContent weatherData={weatherData} airQualityIndexData={AQIndex} error={error} />
    </main>
  )
};

export default Home;
