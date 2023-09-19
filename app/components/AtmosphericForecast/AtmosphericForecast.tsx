import React, { useState } from 'react';

interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };

    maxtemp_c: number;
    mintemp_c: number;

    maxtemp_f: number;
    mintemp_f: number;
  }
}

interface AtmosphericForecastProps {
  weatherData: {
    forecast?: {
      forecastday: DayForecast[];
    }
  }
};

const AtmosphericForecast:React.FC<AtmosphericForecastProps> = ({weatherData}) => {
  const [unitStates, setUnitStates] = useState<boolean[]>(new Array(weatherData.forecast ? weatherData.forecast.forecastday.length : 0).fill(true));

  const toggleUnit = (index: number) => {
    const newUnitStates = [...unitStates];
    newUnitStates[index] = !newUnitStates[index];
    setUnitStates(newUnitStates);
  }

  return (
    <section className='flex flex-col items-center py-10'>
      <span>🚀 <span>3</span> - Day Weather Outlook</span>
      <div className='flex flex-wrap gap-4'>
        {weatherData.forecast ? weatherData.forecast.forecastday.map((day, index) => {
          return (
            <section key={index}>
              <p>{new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}</p>
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
              <div className='flex flex-col items-center'>
                <p>{unitStates[index] ? `Max: ${day.day.maxtemp_c.toFixed()}°C / Min: ${day.day.mintemp_c.toFixed()}°C` : `Max: ${day.day.maxtemp_f.toFixed()}°F / Min: ${day.day.mintemp_f.toFixed()}°F`}</p>
                <span>{day.day.condition.text}</span>
                <button onClick={() => toggleUnit(index)} className='bg-slate-50 hover:bg-slate-300 text-[#001f3f] hover:text-slate-700 ring-2 ring-transparent hover:ring-[#244566] ease-in duration-200 px-4 py-1 my-2 rounded-md text-xs outline-none'>Toggle Unit</button>
              </div>
            </section>
          )
        }) : null};
      </div>
    </section>
  )
};

export default AtmosphericForecast;
