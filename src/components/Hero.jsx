import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const accent = '#00A8E8';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 dark:from-slate-900/60 dark:via-slate-900/70 dark:to-slate-900" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center sm:pt-32">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur dark:border-white/10 dark:bg-white/5"
          style={{ color: accent }}
        >
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
          Premium Marketing Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-balance bg-gradient-to-b from-slate-900 to-slate-600 bg-clip-text text-4xl font-bold leading-tight text-transparent dark:from-white dark:to-slate-300 sm:text-6xl"
        >
          We Build Brands That Connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-5 max-w-2xl text-pretty text-base text-slate-600 dark:text-slate-300 sm:text-lg"
        >
          A minimalist, elegant approach to strategy, design, and performance marketing. Smooth motion, smart execution, measurable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            style={{ backgroundColor: accent }}
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <Play className="h-4 w-4" style={{ color: accent }} />
            View Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
