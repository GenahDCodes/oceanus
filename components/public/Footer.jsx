'use client';

import Link from 'next/link';
import { Mail, Share2, Globe, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-steel-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div>
            <h3 className="font-display text-3xl text-black">Oceanus</h3>
            <p className="text-sm mt-3 leading-relaxed">
              Enterprise-grade shipping and logistics infrastructure trusted by multinational supply chains.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {/* <a  href="mailto:eventful049@gmail.com" className="hover:text-white transition-colors" title="Email">
                <Mail className="w-4 h-4" />
              </a> */}
              {/* <a href="#" className="hover:text-white transition-colors" title="Share">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors" title="Website">
                <Globe className="w-4 h-4" />
              </a> */}
            </div>
          </div>

          {/* <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="hover:text-white transition-colors">Ocean Freight</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Air Freight</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Warehousing</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Customs Brokerage</Link></li>
            </ul>
          </div> */}

          {/* <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Oceanus</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div> */}

          {/* <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Track Shipment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Offices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div> */}

          <div >
            <h4 className="text-sm font-semibold text-black mb-3">Contact Us</h4>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 text-sm sm:justify-end lg:text-right">
              <a href="mailto:eventful049@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>eventful049@gmail.com</span>
              </a>

              <a href="https://wa.me/2348030000000" className="flex items-center gap-2 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                <Phone className="w-4 h-4" />
                <span>+234 803 000 0000</span>
              </a>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Florida, USA</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 mt-10 border-t border-navy-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
              © 1982 Oceanus Global Shipping. All rights reserved.
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
