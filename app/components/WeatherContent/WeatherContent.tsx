import React from 'react';
import Marquee from "react-fast-marquee";
import features from '@/app/constants/constants';
import AtmosphericForecast from '../AtmosphericForecast/AtmosphericForecast';
import MeteorologicalData from '../MeteorologicalData/MeteorologicalData';
import LiveWeatherUpdates from '../LiveWeatherUpdates/LiveWeatherUpdates';

interface WeatherContentProps {
    weatherData: Record<string, any>;
    airQualityIndexData: number | null;
    error: string;
}

const WeatherContent: React.FC<WeatherContentProps> = ({weatherData, airQualityIndexData, error}) => {
    if (Object.keys(weatherData).length === 0 && error === '') {
        return (
          <section className='text-[#001F3F] mx-auto w-full sm:w-2/3 lg:w-1/2 xl:w-2/4 pt-8 sm:py-24 flex flex-col space-y-4 items-center'>
            <span className='text-xl font-semibold text-center'>🌆 Welcome to CityscapeForecast, your innovative weather hub! 🌤️</span>
            <p className='font-semibold text-sm text-center'>Experience cutting-edge weather updates and forecasts like never before. 🌐📱</p>
            <span className='font-semibold text-sm text-center'>Here's what we offer today:</span>
            <Marquee loop={0} speed={50} className='flex h-12 p-2'>
                {features.map(feature => {
                return (
                        <span key={feature.id} className='text-white mx-2 px-4 py-2 ring-2 ring-transparent ease-in duration-200 hover:ring-[#3b72a5eb] font-medium bg-[#001f3feb] rounded-md backdrop-blur-xl text-sm text-center'>{feature.feat}</span>
                )
                })}
            </Marquee>
            <p className='font-semibold text-sm text-center'>Stay ahead of the weather with CityscapeForecast, where the cityscape meets your forecast needs! 🚀🌤️</p>
        </section>
        );
    } else if (error !== "") {
      return (
        <section className='text-[#001F3F] mx-auto w-full sm:w-2/3 lg:w-1/2 xl:w-2/4 pt-8 py-0 sm:pt-0 sm:my-24 flex flex-col space-y-4 items-center'>
            <p className='text-center'>🌦️ Location not found. Please double-check and provide more information for accurate weather data. 🌍</p>
        </section>
      );
    } else {
      return (
        <section className='text-[#001F3F] mx-auto w-fit py-10 flex flex-col space-y-4 items-center'>
          <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:gap-32 items-center'>
            <LiveWeatherUpdates weatherData={weatherData} />
            <AtmosphericForecast weatherData={weatherData} />
          </div>
          <div>
            <MeteorologicalData weatherData={weatherData} AQIndex={airQualityIndexData} />
          </div>
        </section>
      );
    }
};

export default WeatherContent;
