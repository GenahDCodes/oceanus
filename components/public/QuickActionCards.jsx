'use client';

import { motion } from 'framer-motion';
import { SearchCheck, FileText, CalendarDays, MapPin, Headset } from 'lucide-react';

const actions = [
  {
    icon: SearchCheck,
    title: 'Track Shipment',
    description: 'Real-time cargo milestone visibility'
  },
  {
    icon: FileText,
    title: 'Get a Quote',
    description: 'Freight estimate in under 2 minutes'
  },
  {
    icon: CalendarDays,
    title: 'Schedule Pickup',
    description: 'Book pickup slots by lane and mode'
  },
  {
    icon: MapPin,
    title: 'Find Locations',
    description: 'Ports, depots, and control towers'
  },
  {
    icon: Headset,
    title: 'Contact Support',
    description: '24/7 multilingual operations desk'
  }
];

export default function QuickActionCards() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25 } }
  };

  return (
    <section id="quick-actions" className="py-14 bg-steel-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-display text-4xl font-bold text-navy-900">Quick Actions</h2>
          <p className="mt-2 text-base text-steel-400">Operational shortcuts for customers and logistics teams.</p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="bg-white border border-steel-200 rounded p-6 flex flex-col items-center gap-3 hover:shadow-md transition-shadow cursor-pointer"
              >
                <Icon className="text-ocean-500 w-8 h-8" />
                <p className="text-sm font-semibold text-navy-900 text-center">{action.title}</p>
                <p className="text-xs text-steel-400 text-center">{action.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
