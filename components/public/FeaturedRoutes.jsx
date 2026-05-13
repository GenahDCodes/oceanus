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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-navy-900 to-navy-800 border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Featured Trade Routes</h2>
          <p className="text-sm sm:text-base md:text-lg text-steel-300">Our most active and reliable shipping corridors</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {routes.map((route, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-48 sm:h-64 rounded overflow-hidden shadow-md hover:shadow-xl transition-all">
                <Image
                  src={route.image}
                  alt={route.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{route.name}</h3>
                  <p className="text-xs sm:text-sm text-steel-200 mb-3">{route.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold bg-ocean-600 px-2 sm:px-3 py-1 rounded-full">
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
