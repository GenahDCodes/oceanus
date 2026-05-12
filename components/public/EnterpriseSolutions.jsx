'use client';

import Image from 'next/image';

const solutions = [
  {
    title: 'Healthcare Logistics',
    description: 'Validated transport corridors for pharmaceuticals, diagnostic kits, and temperature-sensitive medical products.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1400&q=80'
  },
  {
    title: 'Manufacturing Networks',
    description: 'Factory-to-distribution routing with strict milestone control, lane optimization, and customs coordination.',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1400&q=80'
  },
  {
    title: 'Retail & E-commerce',
    description: 'Omnichannel replenishment and peak-season fulfillment across regional warehousing and cross-border hubs.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=80'
  },
  {
    title: 'Energy Supply Chains',
    description: 'Project cargo planning and controlled movement of specialized components into high-risk operating environments.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&q=80'
  },
  {
    title: 'Industrial Logistics',
    description: 'Heavy-lift handling and multimodal dispatch for mining, infrastructure, and large-scale engineering programs.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80'
  }
];

export default function EnterpriseSolutions() {
  return (
    <section id="solutions" className="py-20 bg-white border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-display text-4xl font-bold text-navy-900">Enterprise Solutions</h2>
          <p className="mt-2 text-steel-400">Industry-specialized capabilities configured for complex global operations.</p>
        </div>

        <div className="space-y-10">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={900}
                  height={560}
                  className="w-full h-64 lg:h-72 object-cover rounded"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-xs uppercase tracking-[0.2em] text-ocean-500 mb-2">Industry Program</p>
                <h3 className="font-display text-3xl font-bold text-navy-900">{solution.title}</h3>
                <p className="mt-3 text-steel-400 leading-relaxed">{solution.description}</p>
                {/* <button className="mt-5 border border-navy-900 text-navy-900 px-4 py-2 text-sm font-semibold rounded hover:bg-navy-900 hover:text-white transition-colors">
                  Explore Solution
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
