import React from 'react';
import { motion } from 'framer-motion';

const accent = '#00A8E8';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-sky-100/70 to-transparent dark:via-sky-400/10" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Let's build something great</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Tell us about your goals. We'll get back within 24 hours.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 rounded-2xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5 sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
            <input required type="text" className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-sky-300 dark:border-white/10 dark:bg-white/10" placeholder="Jane Doe" />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
            <input required type="email" className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-sky-300 dark:border-white/10 dark:bg-white/10" placeholder="jane@company.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Project details</label>
            <textarea rows={5} className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-sky-300 dark:border-white/10 dark:bg-white/10" placeholder="Timeline, budget, goals..." />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <p className="text-xs text-slate-500">By submitting, you agree to our privacy policy.</p>
            <button type="submit" className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg" style={{ backgroundColor: accent }}>Send Message</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
