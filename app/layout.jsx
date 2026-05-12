import './globals.css';
import { DM_Sans, Barlow_Condensed, JetBrains_Mono } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans'
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  weight: ['400', '500', '600', '700']
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
});

export const metadata = {
  title: 'Oceanus Global Shipping | Global Logistics & Tracking',
  description: 'Leading global logistics, shipping, and supply chain solutions. Real-time tracking, seamless integration, and operational clarity for 220+ countries.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable} font-sans bg-white text-navy-900`}>
        {children}
      </body>
    </html>
  );
}
