import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cityscape Forecast | Urban Weather Unveiled',
  description: "Navigating the Weather of Urban Life. Discover your city's ever-changing atmospheric canvas with accurate forecasts and climate insights. Get in tune with your urban surroundings, and stay one step ahead of the elements with CityscapeForecast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>  
        <meta name="google-site-verification" content="APnAHatyt388b1ozRCJrW4PRK9EBLqb8X2ErT_IO2DQ" />      
        <meta property="og:url" content="https://cityscape-forecast.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cityscape Forecast | Urban Weather Unveiled" />
        <meta property="og:description" content="Navigating the Weather of Urban Life. Discover your city's ever-changing atmospheric canvas with accurate forecasts and climate insights. Get in tune with your urban surroundings, and stay one step ahead of the elements with CityscapeForecast." />
        <meta property="og:image" content="https://i.imgur.com/qqvNslC.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="cityscape-forecast.vercel.app"/>
        <meta property="twitter:url" content="https://cityscape-forecast.vercel.app/"/>
        <meta name="twitter:title" content="Cityscape Forecast | Urban Weather Unveiled"/>
        <meta name="twitter:description" content="Navigating the Weather of Urban Life. Discover your city's ever-changing atmospheric canvas with accurate forecasts and climate insights. Get in tune with your urban surroundings, and stay one step ahead of the elements with CityscapeForecast."/>
        <meta name="twitter:image" content="https://i.imgur.com/qqvNslC.png"/>
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="630" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
};
