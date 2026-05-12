'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Oceanus delivers the operational transparency we need to manage cross-continental inventory without disruption.',
      author: "Sarah Chen",
      role: 'Supply Chain Director',
      company: 'TechCorp Industries',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80'
    },
    {
      quote: 'Milestone reliability and exception handling are exceptional across both ocean and inland transport legs.',
      author: 'Marcus Johnson',
      role: 'Operations Manager',
      company: 'Global Retail Co',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80'
    },
    {
      quote: 'Our compliance and delivery performance improved significantly after migrating strategic lanes to Oceanus.',
      author: 'Elena Rodriguez',
      role: 'Chief Executive Officer',
      company: 'Sustainable Goods Ltd',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80'
    }
  ];

  return (
    <section className="py-20 bg-steel-100 border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-display text-4xl font-bold text-navy-900">Trusted by Global Enterprise Teams</h2>
          <p className="mt-2 text-steel-400">Customer outcomes from logistics, procurement, and operations leaders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-steel-100 border border-steel-200 p-6 rounded">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-navy-800 mt-4 leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t border-steel-200 pt-4 mt-4 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{testimonial.author}</p>
                  <p className="text-xs text-steel-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
