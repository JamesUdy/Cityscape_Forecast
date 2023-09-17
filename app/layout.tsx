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
      <body className={inter.className}>{children}</body>
    </html>
  )
};
