import React, { useState } from 'react';

import getCurrentDate from '@/app/utils/currentDate';

import { Location } from '@/app/assets';

interface LiveWeatherUpdatesProps {
  weatherData: {
    current?: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
      temp_f: number;
    };
    location?: {
      name: string;
      region: string;
    }
  }
};

const LiveWeatherUpdates: React.FC<LiveWeatherUpdatesProps> = ({weatherData}) => {
  const currentDate = getCurrentDate();
  const weatherIcon = weatherData.current ? weatherData.current.condition.icon : null;
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  }

  return (
    <section className='flex flex-col font-mono space-y-4 px-4 py-6 bg-[#001f3feb] items-center text-slate-50 shadow-xl shadow-[#001f3ff2] rounded-xl w-64 mb-10 lg:mb-0'>
        <div className='w-full flex flex-col space-y-4'>
          <div className='flex flex-col space-y-1'>
            <span>Today</span>
            <p className='text-xs'>{currentDate}</p>
          </div>
          {weatherIcon && weatherData.current && (
              <div className='w-full'>
                <img loading='lazy' src={weatherIcon} alt={weatherData.current.condition.text} className='mx-auto w-fit h-fit' />
              </div>
            )}
        </div>
      {weatherData.current ? (
        <div className='flex flex-col items-center'>
          <p>{isCelsius ? `${weatherData.current.temp_c.toFixed()}°C` : `${weatherData.current.temp_f.toFixed()}°F` }</p>
          <span>{weatherData.current.condition.text}</span>
          <button onClick={toggleUnit} className='bg-slate-50 hover:bg-slate-300 text-[#001f3f] hover:text-slate-700 ring-2 ring-transparent hover:ring-[#244566] ease-in duration-200 px-4 py-1 my-2 rounded-md text-xs outline-none'>Toggle Unit</button>
        </div>
      ) : null}
      {weatherData.location ? (
        <div className='flex items-center space-x-2 text-sm'>
          <Location />
          <span>{weatherData.location.name}, {weatherData.location.region}</span>
        </div>
      ) : <p>🌦️ Location not found. Please double-check and provide more information for accurate weather data. 🌍</p>}    
    </section>
  )
};

export default LiveWeatherUpdates;
