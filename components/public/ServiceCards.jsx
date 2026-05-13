'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Ship, Plane, Building2, FileCheck, Snowflake, Network } from 'lucide-react';

const services = [
  {
    icon: Ship,
    title: 'Ocean Freight',
    description: 'FCL and LCL routing across core east-west and north-south lanes.',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1400&q=80'
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Priority and deferred options for time-sensitive consignments.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80'
  },
  {
    icon: Building2,
    title: 'Warehousing',
    description: 'Bonded and non-bonded storage with regional distribution controls.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80'
  },
  {
    icon: FileCheck,
    title: 'Customs Brokerage',
    description: 'Document processing, compliance checks, and release management.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80'
  },
  {
    icon: Snowflake,
    title: 'Cold Chain',
    description: 'Validated temperature integrity for pharma and perishables.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1400&q=80'
  },
  {
    icon: Network,
    title: 'Supply Chain',
    description: 'Control tower visibility and KPI-driven network optimization.',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1400&q=80'
  }
];

export default function ServiceCards() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.28 } }
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">Service Portfolio</h2>
          <p className="mt-2 text-sm sm:text-base text-steel-400">Mode-specific capabilities designed for regulated, time-critical cargo.</p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={item} className="bg-white border border-steel-200 rounded overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-40 sm:h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="w-10 h-10 rounded bg-ocean-100 text-ocean-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-steel-400 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
