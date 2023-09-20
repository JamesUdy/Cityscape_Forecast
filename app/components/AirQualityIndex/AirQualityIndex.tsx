import React, { useEffect, useState } from 'react';

interface AirQualityIndexProps {
  airQualityData: {
    co: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
  };
  aqiIndexData: number | null | undefined; 
};

const AirQualityIndex: React.FC<AirQualityIndexProps> = ({ airQualityData, aqiIndexData }) => {
  const[category, setCategory] = useState("");

  useEffect(() => {
    setCategory(
      aqiIndexData !== null && aqiIndexData !== undefined
        ? aqiIndexData >= 0 && aqiIndexData <= 50
          ? "Good"
          : aqiIndexData > 50 && aqiIndexData <= 100
          ? "Moderate"
          : aqiIndexData > 100 && aqiIndexData <= 150
          ? "Unhealthy for Sensitive Groups"
          : aqiIndexData > 150 && aqiIndexData <= 200
          ? "Unhealthy"
          : aqiIndexData > 200 && aqiIndexData <= 300
          ? "Very Unhealthy"
          : aqiIndexData > 300 && aqiIndexData <= 500
          ? "Hazardous"
          : "🚫 Data Not Available"
        : "🚫 Data Not Available"
    );
  }, [aqiIndexData]);

  const bgColor = (category !== undefined && category !== null) 
    ? (category === "Good") 
    ? "bg-[#70e000] text-slate-900"
    : (category === "Moderate") 
    ? "bg-[#d4d700] text-slate-900"
    : (category === "Unhealthy for Sensitive Groups") 
    ? "bg-[#dc2f02] text-white"
    : (category === "Unhealthy") 
    ? "bg-[#9d0208] text-white"
    : (category === "Very Unhealthy") 
    ? "bg-[#240046] text-white"
    : (category === "Hazardous") 
    ? "bg-[#2f231a]"
    : "bg-[#6c757d]"
  : "bg-[#6c757d]";

  return (
    <section className='bg-[#001f3feb] text-slate-50 px-4 py-6 rounded-2xl flex flex-col space-y-4 items-center shadow-xl shadow-[#001f3ff2] w-72'>
      <span className='font-semibold text-lg'>Air Quality Index 🌈🌎</span>
      <div className='text-xs font-normal flex flex-col space-y-2 text-slate-200'>
        <p>💨 CO: {airQualityData.co}</p>
        <p>🌫️ NO2: {airQualityData.no2}</p>
        <p>☀️ O3: {airQualityData.o3}</p>
        <p>☁️ SO2: {airQualityData.so2}</p>
        <p>🏭 PM2.5: {airQualityData.pm2_5}</p>
        <p>🌁 PM10: {airQualityData.pm10}</p>
        <p>🌎🌿 Air Quality Index: {aqiIndexData ? aqiIndexData : "N/A"}</p>
      </div>
      <div className='font-sans flex flex-col items-center gap-4 w-full'>
        <span className=''>Status ℹ️</span> 
        <span className={`font-mono text-slate-50 text-sm font-semibold ${bgColor} px-4 py-2 w-2/3 text-center rounded-md`}>{category}</span>
      </div>
    </section>
  );
};

export default AirQualityIndex;
