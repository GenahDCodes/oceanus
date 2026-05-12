'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import TrackingBar from './TrackingBar';

export default function HeroSection() {
  return (
    <section className="bg-white border-b border-steel-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ocean-500 mb-4">
              Oceanus Global Shipping
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold leading-tight text-navy-900 mb-4">
              Global Commerce Made Simple
            </h1>
            <p className="mt-5 text-base md:text-lg text-steel-400 max-w-xl leading-relaxed">
              Trusted multimodal shipping across 180+ countries with real-time visibility, compliance-ready operations, and precision delivery for global enterprise supply chains.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="bg-accent text-white px-5 py-3 text-sm font-semibold rounded hover:bg-accent-light transition-colors">
                Get Started
              </button>
              {/* <button className="border border-navy-900 text-navy-900 px-5 py-3 text-sm font-semibold rounded hover:bg-navy-900 hover:text-white transition-colors">
                Schedule Pickup
              </button> */}
            </div>

            <div id="tracking" className="mt-8">
              <TrackingBar compact />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="border border-steel-200 rounded p-3 bg-steel-100">
                <p className="font-display text-3xl text-navy-900">2.8M+</p>
                <p className="text-xs uppercase tracking-widest text-steel-400">Shipments/Year</p>
              </div>
              <div className="border border-steel-200 rounded p-3 bg-steel-100">
                <p className="font-display text-3xl text-navy-900">99.2%</p>
                <p className="text-xs uppercase tracking-widest text-steel-400">On-Time</p>
              </div>
              <div className="border border-steel-200 rounded p-3 bg-steel-100">
                <p className="font-display text-3xl text-navy-900">24/7</p>
                <p className="text-xs uppercase tracking-widest text-steel-400">Control Tower</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative h-[420px] lg:h-[560px] rounded overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80"
              alt="Cargo containers at port"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur border border-steel-200 rounded p-4">
              <p className="font-display text-2xl text-navy-900">Integrated Port-to-Door Visibility</p>
              <p className="text-sm text-steel-400">Ocean, air, and inland milestones synchronized in a single operational timeline.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
