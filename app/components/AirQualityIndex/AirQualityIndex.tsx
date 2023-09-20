import React from 'react';

interface AirQualityIndexProps {
  airQualityData: {
    co: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    'us-epa-index': number;
  };
  aqiIndexData: number | null | undefined; 
};

const AirQualityIndex: React.FC<AirQualityIndexProps> = ({ airQualityData, aqiIndexData }) => {
  return (
    <section className='bg-[#001f3feb] text-slate-50 px-4 py-6 rounded-md flex flex-col space-y-4 items-center'>
      <span className='font-semibold text-lg'>Air Quality Index 🌈🌎</span>
      <div className='text-xs font-normal flex flex-col space-y-2 text-slate-200'>
        <p>💨 CO: {airQualityData.co}</p>
        <p>🌫️ NO2: {airQualityData.no2}</p>
        <p>☀️ O3: {airQualityData.o3}</p>
        <p>☁️ SO2: {airQualityData.so2}</p>
        <p>🏭 PM2.5: {airQualityData.pm2_5}</p>
        <p>🌁 PM10: {airQualityData.pm10}</p>
        <p>🌎🌿 US EPA Index: {airQualityData['us-epa-index']}</p>
      </div>
      {aqiIndexData !== null && aqiIndexData !== undefined ? (
        <span className='font-sans'>AQI: {aqiIndexData}</span>
      ) : (
        <span className='font-sans text-xs'>AQI: 🚫 Data Not Available</span>
      )}
    </section>
  );
};

export default AirQualityIndex;
