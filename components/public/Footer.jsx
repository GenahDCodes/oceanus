'use client';

import Link from 'next/link';
import { Mail, Share2, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-steel-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-3xl text-white">Oceanus</h3>
            <p className="text-sm mt-3 leading-relaxed">
              Enterprise-grade shipping and logistics infrastructure trusted by multinational supply chains.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a  href="mailto:eventful049@gmail.com" className="hover:text-white transition-colors" title="Email">
                <Mail className="w-4 h-4" />
              </a>
              {/* <a href="#" className="hover:text-white transition-colors" title="Share">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors" title="Website">
                <Globe className="w-4 h-4" />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="hover:text-white transition-colors">Ocean Freight</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Air Freight</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Warehousing</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Customs Brokerage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Oceanus</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Track Shipment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Offices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-10 border-t border-navy-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
              © {currentYear} Oceanus Global Shipping. All rights reserved.
            </p>
          <div className="flex gap-5 text-xs">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
}
