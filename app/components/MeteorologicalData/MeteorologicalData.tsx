import React from 'react';

import AirQualityIndex from '../AirQualityIndex/AirQualityIndex';
import AtmosphericInsights from '../AtmosphericInsights/AtmosphericInsights';

const MeteorologicalData = () => {
  return (
    <div className='flex flex-row gap-32 mt-10 font-mono'>
      <AtmosphericInsights />
      <AirQualityIndex />
    </div>
  )
};

export default MeteorologicalData;
