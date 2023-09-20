import React from 'react';

import { generateInsightsData } from '@/app/constants/constants';

type insightChanceOfRainProps = {
  daily_chance_of_rain: number;
};


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
  };
  insightChanceOfRain: insightChanceOfRainProps;
}

const AtmosphericInsights: React.FC<AtmosphericInsightsProps> = ({ insightsData, insightsSunData, insightChanceOfRain }) => {
  const insights = generateInsightsData(insightsData, insightsSunData, insightChanceOfRain);

  return (
    <section className='w-fit lg:w-2/3 xl:w-1/2 flex flex-col items-center'>
      <span className='text-slate-800 font-semibold text-lg'>🌤️ Atmospheric Insights 🔍</span>
      <div className='flex flex-wrap justify-evenly xl:justify-center gap-2 lg:gap-6 mt-6'>
        {insights.map((insight) => {
          return (
            <div className='flex items-center gap-4 bg-[#94A3B8] px-4 py-4 rounded-xl' key={insight.id}>              
              <div className='flex flex-col'>
                <span>{insight.featTitle}</span>
                <span>{insight.featVal}</span>
              </div>
              <insight.icon />
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default AtmosphericInsights;
