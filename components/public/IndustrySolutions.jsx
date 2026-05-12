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
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="container-max">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Industry Solutions</h2>
          <p className="text-xl text-gray-600">Specialized logistics for every sector</p>
        </div>

        <div className="space-y-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? 'md:order-last' : ''}>
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
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
                <h3 className="text-3xl font-bold text-navy-900 mb-4">{industry.title}</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                
                <div className="space-y-3">
                  <p className="font-semibold text-navy-900">Key Features:</p>
                  <div className="flex flex-wrap gap-3">
                    {industry.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-ocean-50 text-ocean-700 px-4 py-2 rounded-full text-sm font-semibold border border-ocean-200"
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
