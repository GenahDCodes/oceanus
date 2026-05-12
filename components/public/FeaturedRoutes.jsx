'use client';

import Image from 'next/image';

const routes = [
  {
    name: 'Trans-Pacific',
    description: 'Asia to North America shipping corridor',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    stats: '45K+ containers/month'
  },
  {
    name: 'Europe-Asia',
    description: 'Suez Canal express routes',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    stats: '38K+ containers/month'
  },
  {
    name: 'Transatlantic',
    description: 'Europe to North America trade',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    stats: '32K+ containers/month'
  },
  {
    name: 'Intra-Asia',
    description: 'Regional Southeast Asia network',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    stats: '52K+ containers/month'
  }
];

export default function FeaturedRoutes() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-50 to-ocean-50 border-t border-gray-200">
      <div className="container-max">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Featured Trade Routes</h2>
          <p className="text-xl text-gray-600">Our most active and reliable shipping corridors</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {routes.map((route, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <Image
                  src={route.image}
                  alt={route.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{route.name}</h3>
                  <p className="text-gray-200 mb-3">{route.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold bg-ocean-600 px-3 py-1 rounded-full">
                      {route.stats}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
