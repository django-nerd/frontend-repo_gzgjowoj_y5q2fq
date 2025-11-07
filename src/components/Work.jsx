import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Aurora Skincare',
    tag: 'E-commerce UX + Performance',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Volt Mobility',
    tag: 'Brand + Launch Campaign',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Nimbus Finance',
    tag: 'Product Site + Web App',
    image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function Work() {
  return (
    <section id="work" className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Selected Work</h2>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">Case studies that blend strategy, aesthetics, and results.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-slate-200/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white dark:border-white/10 dark:text-white md:inline-block">Start a project</a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-xl bg-white/80 p-4 backdrop-blur dark:bg-white/10">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{p.tag}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
