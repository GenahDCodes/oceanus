'use client';

const stats = [
  { value: '180+', label: 'Countries Served' },
  { value: '4,200+', label: 'Fleet Vessels' },
  { value: '2.8M+', label: 'Shipments/Year' },
  { value: '99.2%', label: 'On-Time Performance' }
];

export default function GlobalStatsSection() {
  return (
    <section className="bg-navy-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-steel-300">Global Operations at Scale</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-2">Built for Mission-Critical Supply Chains</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent">{stat.value}</p>
              <p className="text-xs sm:text-sm text-steel-300 mt-1 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
