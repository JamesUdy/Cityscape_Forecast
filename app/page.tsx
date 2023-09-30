import Home from "./components/Home/Home";

const page = () => {
  const weatherAPIKey = String(process.env.REACT_APP_WEATHER_API_KEY);
  const airQualityAPIKey = String(process.env.REACT_APP_AIR_QUALITY_API_KEY);

  return (
    <Home weatherAPIKey={weatherAPIKey} airQualityAPIKey={airQualityAPIKey} />
  )
};

export default page;
