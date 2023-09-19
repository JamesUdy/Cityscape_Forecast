import React from 'react';

interface AtmosphericInsightsProps {
  insightsData: {
    wind_mph: number;
    humidity: number;
    wind_dir: string;
    pressure_mb: number;
    feelslike_c: number;
    vis_km: number;
    uv: number;
  };
  insightsSunData: {
    sunrise: string;
    sunset: string;
  }
}

const AtmosphericInsights: React.FC<AtmosphericInsightsProps> = ({ insightsData, insightsSunData }) => {
  return (
    <section className='w-1/2 flex flex-col items-center'>
      <span className='text-slate-800 font-semibold text-lg'>🌤️ Atmospheric Insights 🔍</span>
      <div className='flex flex-wrap gap-6'>
        <span>Wind Speed: {insightsData.wind_mph} mph</span>
        <span>Humidity: {insightsData.humidity}%</span>
        <span>Wind Direction: {insightsData.wind_dir}</span>
        <span>Sunrise Time: {insightsSunData.sunrise}</span>
        <span>Sunset Time: {insightsSunData.sunset}</span>
        <span>UV: {insightsData.uv}</span>
        <span>Pressure: {insightsData.pressure_mb}</span>
        <span>FeelsLike: {insightsData.feelslike_c}</span>
        <span>Visibility: {insightsData.vis_km}</span>
      </div>
    </section>
  );
};

export default AtmosphericInsights;
