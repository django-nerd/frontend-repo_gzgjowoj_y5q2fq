import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Moon, Sun } from 'lucide-react';

const accent = '#00A8E8';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          <span className="rounded-lg px-2 py-1 text-white" style={{ backgroundColor: accent }}>Flux</span> Studio
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex">
          <a href="#services" className="hover:text-slate-900 dark:hover:text-white">Services</a>
          <a href="#work" className="hover:text-slate-900 dark:hover:text-white">Work</a>
          <a href="#testimonials" className="hover:text-slate-900 dark:hover:text-white">Testimonials</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          <a href="#contact" className="rounded-full px-4 py-2 text-white" style={{ backgroundColor: accent }}>Get a Quote</a>
          <button aria-label="toggle theme" onClick={() => setDark(!dark)} className="rounded-full border border-slate-200/80 p-2 dark:border-white/10">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden rounded-xl border border-slate-200/80 p-2 dark:border-white/10">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mb-3 max-w-7xl px-6 md:hidden">
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 backdrop-blur dark:border-white/10 dark:bg-white/10">
            <div className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              <a href="#services" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50/80 dark:hover:bg-white/5">Services</a>
              <a href="#work" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50/80 dark:hover:bg-white/5">Work</a>
              <a href="#testimonials" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50/80 dark:hover:bg-white/5">Testimonials</a>
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50/80 dark:hover:bg-white/5">Contact</a>
              <div className="flex items-center justify-between gap-2 pt-2">
                <a href="#contact" className="w-full rounded-full px-4 py-2 text-center text-white" style={{ backgroundColor: accent }}>Get a Quote</a>
                <button aria-label="toggle theme" onClick={() => setDark(!dark)} className="rounded-full border border-slate-200/80 p-2 dark:border-white/10">
                  {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
