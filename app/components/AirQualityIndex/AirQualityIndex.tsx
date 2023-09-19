import React from 'react';

interface AirQualityIndexProps {
airQualityData: {
        co: number;
        no2: number;
        o3: number;
        so2: number;
        pm2_5: number;
        pm10: number;
        us_epa_index: number;
    };
};

const AirQualityIndex: React.FC<AirQualityIndexProps> = ({ airQualityData }) => {
  return (
    <section className='bg-[#001f3feb] text-slate-50 px-4 py-6 rounded-md'>
      <span className='font-semibold text-lg'>🌈 Air Quality Index</span>
      <p>CO: {airQualityData.co}</p>
      <p>NO2: {airQualityData.no2}</p>
      <p>O3: {airQualityData.o3}</p>
      <p>SO2: {airQualityData.so2}</p>
      <p>PM2.5: {airQualityData.pm2_5}</p>
      <p>PM10: {airQualityData.pm10}</p>
      <p>US EPA Index: {airQualityData.us_epa_index}</p>
    </section>
  );
};

export default AirQualityIndex;
