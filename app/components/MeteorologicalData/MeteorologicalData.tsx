import React, { useEffect, useState, useRef } from 'react';

import AirQualityIndex from '../AirQualityIndex/AirQualityIndex';
import AtmosphericInsights from '../AtmosphericInsights/AtmosphericInsights';

interface AirQualityIndexProps {
  airQualityData: {
    co: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
  };
};

interface MeteorologicalDataProps {
  weatherData: {
    forecast?: {
      forecastday: Array<{
        day?: {
          air_quality?: AirQualityIndexProps['airQualityData'];
          'daily_chance_of_rain'?: number | string | null;
        };
        astro: {
          sunrise: string;
          sunset: string;
        };
      }>;
    };
    current?: {
      wind_mph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
      uv: number;
    };
  };
  AQIndex: number | null | undefined;
};

const MeteorologicalData: React.FC<MeteorologicalDataProps> = ({ weatherData, AQIndex }) => {

  const [isShown, setIsShown] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleShowEvent = () => {
    setIsShown(!isShown);
  };

  useEffect(() => {
  if (isShown) {
    const atmosphereInsightElement = document.getElementById('atmosphereInsight');
    if (atmosphereInsightElement) {
      const yOffset = atmosphereInsightElement.offsetTop - window.innerHeight / 10;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  } else {
    if (buttonRef.current) {
      const yOffset = buttonRef.current.offsetTop;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }
}, [isShown]);

  let airQualityData;
  let insightsSunData;
  let aqiIndexData;
  let insightChanceOfRain;

  if (weatherData.forecast?.forecastday?.length) {
    const firstForecastDay = weatherData.forecast.forecastday[0];
    insightChanceOfRain = firstForecastDay.day?.daily_chance_of_rain;;
    airQualityData = firstForecastDay.day?.air_quality;
    insightsSunData = firstForecastDay.astro;
    aqiIndexData = AQIndex !== undefined ? AQIndex : null;
  }
  const insightsData = weatherData.current ? weatherData.current : null;

  const buttonText = isShown ? "Simplify View 🌞" : "Expand View 🌈";

  const insightComponent = isShown ? "block" : "hidden";

  return (
    <div className='flex flex-col items-center pt-10'>
      <button className='px-4 py-2 bg-[#ffffff] ease-in-out duration-300 hover:bg-slate-200 text-[#001f3ff7] rounded-lg text-center font-mono shadow-lg shadow-[#001f3ff2] hover:shadow-slate-600' onClick={toggleShowEvent} ref={buttonRef}>{buttonText}</button>
      <div id='atmosphereInsight' className={`${insightComponent} flex flex-col xl:flex-row gap-16 xl:gap-32 mt-10 font-mono justify-center items-center xl:items-start`}>
        {insightsData && insightsSunData && (
          <AtmosphericInsights
            insightsData={insightsData}
            insightsSunData={insightsSunData}
            insightChanceOfRain={{
              daily_chance_of_rain: insightChanceOfRain !== null && !isNaN(Number(insightChanceOfRain)) ? Number(insightChanceOfRain) : 0
            }}            
          />
        )}

        {airQualityData && <AirQualityIndex airQualityData={airQualityData} aqiIndexData={aqiIndexData} />}
      </div>
    </div>
  );
};

export default MeteorologicalData;
