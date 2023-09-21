import Home from "./components/Home/Home";

const page = () => {
  const weatherAPIKey = process.env.WEATHER_API_KEY;
  const airQualityAPIKey = process.env.AIR_QUALITY_API_KEY;
  
  const airQualityURLKey = `${airQualityAPIKey}`;
  const weatherURLKey = `${weatherAPIKey}`;
  return (
    <Home weatherURLKey={weatherURLKey} airQualityURLKey={airQualityURLKey} />
  )
};

export default page;
