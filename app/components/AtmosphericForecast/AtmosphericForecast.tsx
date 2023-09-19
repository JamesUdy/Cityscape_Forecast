import React, { useState } from 'react';

interface AtmosphericForecastProps {

};

const AtmosphericForecast:React.FC<AtmosphericForecastProps> = ({weatherData}) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  }

  return (
    <div className='flex flex-wrap gap-4'>
      {weatherData.forecast.forecastday.map((day, index) => {
        return (
          <section key={index}>
            <p>{new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <div className='flex flex-col items-center'>
              <p>{isCelsius ? `Max: ${day.day.maxtemp_c.toFixed()}°C / Min: ${day.day.mintemp_c.toFixed()}°C` : `Max: ${day.day.maxtemp_f.toFixed()}°F / Min: ${day.day.mintemp_f.toFixed()}°F`}</p>
              <span>{day.day.condition.text}</span>
              <button onClick={toggleUnit} className='bg-slate-50 hover:bg-slate-300 text-[#001f3f] hover:text-slate-700 ring-2 ring-transparent hover:ring-[#244566] ease-in duration-200 px-4 py-1 my-2 rounded-md text-xs outline-none'>Toggle Unit</button>
            </div>
          </section>
        )
      })}
    </div>
  )
};

export default AtmosphericForecast;
