import React from 'react';

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
}

const LiveWeatherUpdates: React.FC<LiveWeatherUpdatesProps> = ({weatherData}) => {
  const currentDate = getCurrentDate();
  const weatherIcon = weatherData.current ? weatherData.current.condition.icon : null;

  return (
    <section className='flex flex-col gap-2'>
      <div>
        <div className='text-[#001F3F]'>
          <span>Today</span>
          <p>{currentDate}</p>
          <div>
            {weatherIcon && weatherData.current && (
              <div>
                <img src={weatherIcon} alt={weatherData.current.condition.text} />
              </div>
            )}
          </div>
        </div>
      </div>
      {weatherData.current ? (
        <div>
          <p>{weatherData.current.temp_c.toFixed()}°C</p>
          <span>{weatherData.current.condition.text}</span>
        </div>
      ) : null}
      {weatherData.location ? (
        <div>
          <Location />
          <span>{weatherData.location.name}, {weatherData.location.region}</span>
        </div>
      ) : <p>🌦️ Location not found. Please double-check and provide more information for accurate weather data. 🌍</p>}    
    </section>
  )
};

export default LiveWeatherUpdates;
