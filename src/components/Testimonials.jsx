import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Amelia Hart',
    role: 'CMO, Aurora Skincare',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    quote:
      'They elevated our brand and doubled our conversion rate within two months. Beautiful work with measurable impact.'
  },
  {
    name: 'Liam Chen',
    role: 'Founder, Volt Mobility',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
    quote:
      'A partner who truly understands growth and design. The launch campaign outperformed benchmarks across the board.'
  },
  {
    name: 'Sophia Rivera',
    role: 'Head of Product, Nimbus',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop',
    quote:
      'Meticulous, fast, and collaborative. Our new product site feels premium and performs flawlessly.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Clients say it best</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">A few words from teams we've partnered with.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-4 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{t.role}</p>
                </div>
              </div>
              <div className="mb-3 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">{t.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
