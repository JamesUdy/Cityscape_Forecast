import React from 'react';

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
}

interface MeteorologicalDataProps {
  weatherData: {
    forecast?: {
      forecastday: Array<{
        day?: {
          air_quality?: AirQualityIndexProps['airQualityData'];
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
  let airQualityData;
  let insightsSunData;
  let aqiIndexData;

  if (weatherData.forecast?.forecastday?.length) {
    const firstForecastDay = weatherData.forecast.forecastday[0];
    airQualityData = firstForecastDay.day?.air_quality;
    insightsSunData = firstForecastDay.astro;
    aqiIndexData = AQIndex !== undefined ? AQIndex : null;
  }
  const insightsData = weatherData.current ? weatherData.current : null;

  return (
    <div className='flex flex-col xl:flex-row gap-16 xl:gap-32 mt-10 font-mono justify-center items-center xl:items-start'>
      {insightsData && insightsSunData && <AtmosphericInsights insightsData={ insightsData } insightsSunData={ insightsSunData } />}
      {airQualityData && <AirQualityIndex airQualityData={airQualityData} aqiIndexData={aqiIndexData} />}
    </div>
  );
};

export default MeteorologicalData;
