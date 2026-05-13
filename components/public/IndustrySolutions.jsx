'use client';

import Image from 'next/image';

const industries = [
  {
    title: 'Healthcare & Pharmaceuticals',
    description: 'Temperature-controlled logistics for critical medical shipments and pharmaceuticals worldwide.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    features: ['Cold Chain Certified', 'Compliance Ready', 'Real-time Monitoring']
  },
  {
    title: 'Manufacturing & Industrial',
    description: 'Heavy-duty logistics solutions for industrial equipment, machinery, and raw materials.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    features: ['Specialized Handling', 'Custom Solutions', 'Project Cargo']
  },
  {
    title: 'Retail & E-Commerce',
    description: 'Fast-track fulfillment and distribution for retail goods globally.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    features: ['Speed Delivery', 'Bulk Operations', 'Last-Mile Support']
  },
  {
    title: 'Energy & Resources',
    description: 'Secure transport for hazardous materials, bulk commodities, and energy products.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    features: ['Hazmat Certified', 'Bulk Capacity', 'Safety Priority']
  }
];

export default function IndustrySolutions() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-2 sm:mb-4">Industry Solutions</h2>
          <p className="text-sm sm:text-base md:text-lg text-steel-400">Specialized logistics for every sector</p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? 'md:order-last' : ''}>
                <div className="relative h-48 sm:h-64 md:h-80 rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-2 sm:mb-4">{industry.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-steel-400 mb-4 sm:mb-6 leading-relaxed">{industry.description}</p>
                
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-semibold text-navy-900">Key Features:</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {industry.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-ocean-100 text-ocean-600 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-ocean-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-6 btn btn-outline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
