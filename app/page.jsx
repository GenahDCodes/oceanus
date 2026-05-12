import Navbar from '@/components/public/Navbar';
import HeroSection from '@/components/public/HeroSection';
import QuickActionCards from '@/components/public/QuickActionCards';
import ServiceCards from '@/components/public/ServiceCards';
import GlobalStatsSection from '@/components/public/GlobalStatsSection';
import EnterpriseSolutions from '@/components/public/EnterpriseSolutions';
import Testimonials from '@/components/public/Testimonials';
import Footer from '@/components/public/Footer';

export const metadata = {
  title: 'Oceanus Global Shipping | Global Logistics & Tracking',
  description: 'Leading global logistics, shipping, and supply chain solutions. Real-time tracking, seamless integration, and operational clarity for 220+ countries.'
};

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <HeroSection />
      <QuickActionCards />
      <ServiceCards />
      <GlobalStatsSection />
      <EnterpriseSolutions />
      <Testimonials />
      <Footer />
    </main>
  );
}
