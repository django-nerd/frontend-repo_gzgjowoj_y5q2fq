import React from 'react';
import { motion } from 'framer-motion';
import { Brush, Layout, Megaphone, LineChart } from 'lucide-react';

const services = [
  {
    icon: Brush,
    title: 'Branding & Identity',
    desc: 'Positioning, visual systems, and brand playbooks that feel timeless and premium.'
  },
  {
    icon: Layout,
    title: 'Web Design & Build',
    desc: 'Conversion-focused websites with elegant interactions and fast performance.'
  },
  {
    icon: Megaphone,
    title: 'Social & Content',
    desc: 'Strategic content, channel management, and campaigns that spark engagement.'
  },
  {
    icon: LineChart,
    title: 'Performance & Ads',
    desc: 'Data-driven growth with paid media, CRO, and analytics that actually matter.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-sky-50/60 to-transparent dark:via-sky-400/5" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Services</h2>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">A focused set of capabilities crafted to launch, evolve, and scale brands.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-slate-200/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white dark:border-white/10 dark:text-white md:inline-block">Get a proposal</a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur transition hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
