import { ChanceOfRain, FeelsLike, Humidity, Pressure, Sunrise, Sunset, UV, Visibility, WindDirection, WindSpeed } from "../assets";

interface Features {
    id: number;
    feat: string;
}

interface InsightsDataProps {
    wind_mph: number;
    humidity: number;
    wind_dir: string;
    pressure_mb: number;
    feelslike_c: number;
    vis_km: number;
    uv: number;
};

interface insightsSunDataProps {
    sunrise: string;
    sunset: string;
};

interface insightChanceOfRainProps {
    'daily_chance_of_rain': number;
}

const features: Features[] = [
    {
        id: 1,
        feat: "🌡️ Real-time temperature updates",
    },
    {
        id: 2,
        feat: "☀️ Hourly sunshine forecast",
    },
    {
        id: 3,
        feat: "🌧️ Precipitation probability",
    },
    {
        id: 4,
        feat: "💨 Wind speed and direction",
    },
    {
        id: 5,
        feat: "🌅 Sunrise and 🌇 sunset times",
    },
    {
        id: 6,
        feat: "🌎 Multiple location support",
    },
];

export function generateInsightsData(insightsData: InsightsDataProps, insightsSunData: insightsSunDataProps, insightChanceOfRain: insightChanceOfRainProps) {
    return [
        {
          id: 1,
          icon: WindSpeed,
          featTitle: "Wind Speed",
          featVal: `${insightsData.wind_mph} mph`,
        },
        {
          id: 2,
          icon: Humidity,
          featTitle: "Humidity",
          featVal: `${insightsData.humidity} %`,
        },
        {
          id: 3,
          icon: FeelsLike,
          featTitle: "FeelsLike",
          featVal: `${insightsData.feelslike_c}°C`,
        },
        {
          id: 4,
          icon: UV,
          featTitle: "UV",
          featVal: `${insightsData.uv} uv`,
        },
        {
          id: 5,
          icon: ChanceOfRain,
          featTitle: "Chance of Rain",
          featVal: `${insightChanceOfRain.daily_chance_of_rain} %`,
        },
        {
          id: 6,
          icon: Pressure,
          featTitle: "Pressure",
          featVal: `${insightsData.pressure_mb} mb`,
        },
        {
          id: 7,
          icon: Visibility,
          featTitle: "Visibility",
          featVal: `${insightsData.vis_km} km`,
        },
        {
          id: 8,
          icon: WindDirection,
          featTitle: "Wind Direction", 
          featVal: `${insightsData.wind_dir}`,
        },
        {
          id: 9,
          icon: Sunrise,
          featTitle: "Sunrise Time",
          featVal: `${insightsSunData.sunrise}`,
        },
        {
          id: 10,
          icon: Sunset,
          featTitle: "Sunset Time",
          featVal: `${insightsSunData.sunset}`,
        },
      ];
};

export default features;
