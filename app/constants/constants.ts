import { FeelsLike, Humidity, Pressure, Sunrise, Sunset, UV, Visibility, WindDirection, WindSpeed } from "../assets";

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

export function generateInsightsData(insightsData: InsightsDataProps, insightsSunData: insightsSunDataProps) {
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
            icon: WindDirection,
            featTitle: "Wind Direction", 
            featVal: `${insightsData.wind_dir}`,
        },
        {
            id: 4,
            icon: Sunrise,
            featTitle: "Sunrise Time",
            featVal: `${insightsSunData.sunrise}`,
        },
        {
            id: 5,
            icon: Sunset,
            featTitle: "Sunset Time",
            featVal: `${insightsSunData.sunset}`,
        },
        {
            id: 6,
            icon: UV,
            featTitle: "UV",
            featVal: `${insightsData.uv} uv`,
        },
        {
            id: 7,
            icon: Pressure,
            featTitle: "Pressure",
            featVal: `${insightsData.pressure_mb} mb`,
        },
        {
            id: 8,
            icon: FeelsLike,
            featTitle: "FeelsLike",
            featVal: `${insightsData.feelslike_c}°C`,
        },
        {
            id: 9,
            icon: Visibility,
            featTitle: "Visibility",
            featVal: `${insightsData.vis_km} km`,
        },
    ];
};

export default features;
