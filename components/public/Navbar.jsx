'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-white border-b border-steel-200 transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-navy-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">◊</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-2xl font-bold tracking-tight text-navy-900">Oceanus</p>
              <p className="text-[10px] tracking-[0.2em] text-steel-400 uppercase">Global Shipping</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-navy-800 hover:text-ocean-500 transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium text-navy-800 hover:text-ocean-500 transition-colors">
              Services
            </Link>
            <Link href="#tracking" className="text-sm font-medium text-navy-800 hover:text-ocean-500 transition-colors">
              Track
            </Link>
            <Link href="#solutions" className="text-sm font-medium text-navy-800 hover:text-ocean-500 transition-colors">
              Solutions
            </Link>
            {/* <Link href="/admin" className="text-sm font-medium text-navy-800 hover:text-ocean-500 transition-colors">
              Dashboard
            </Link> */}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {/* <Link href="/tracking/OCN-2026-00142" className="text-sm font-semibold text-ocean-500 hover:text-ocean-600 transition-colors">
              Track Shipment
            </Link> */}
            {/* <Link href="/admin" className="bg-accent text-white px-4 py-2 text-sm font-semibold rounded hover:bg-accent-light transition-colors inline-flex items-center gap-2">
              <LogIn size={16} />
              Admin
            </Link> */}
          </div>

          <button
            className="lg:hidden p-2 hover:bg-steel-100 rounded transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-navy-800" />
            ) : (
              <Menu size={24} className="text-navy-800" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-steel-200">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/" className="text-sm font-medium text-navy-800 px-1">
                Home
              </Link>
              <Link href="#services" className="text-sm font-medium text-navy-800 px-1">
                Services
              </Link>
              {/* <Link href="#tracking" className="text-sm font-medium text-navy-800 px-1">
                Track Shipment
              </Link> */}
              <Link href="#solutions" className="text-sm font-medium text-navy-800 px-1">
                Solutions
              </Link>
              {/* <Link href="/admin" className="text-sm font-medium text-navy-800 px-1">
                Dashboard
              </Link> */}
              <div className="pt-2 border-t border-steel-200">
                {/* <Link href="/admin" className="w-full bg-accent text-white px-4 py-2 text-sm font-semibold rounded hover:bg-accent-light transition-colors inline-flex items-center justify-center gap-2">
                  <LogIn size={16} />
                  Admin Portal
                </Link> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
