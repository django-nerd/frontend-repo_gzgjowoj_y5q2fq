import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white font-inter text-slate-900 antialiased dark:bg-slate-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-slate-200/80 bg-white/70 py-10 backdrop-blur dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-600 dark:text-slate-300">© {new Date().getFullYear()} Flux Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#work" className="hover:underline">Work</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
