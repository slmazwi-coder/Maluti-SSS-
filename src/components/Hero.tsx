import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { url: '/Hero1.png', caption: 'Academic Excellence in Matatiele' },
  { url: '/Hero2.png', caption: 'Home of Top Provincial Achievers' },
  { url: '/Hero3.png', caption: 'Focused on Disciplined Learning' },
  { url: '/Hero4.png', caption: 'Class of 2025: A Historic Year' },
  { url: '/Hero5.png', caption: 'Building Tomorrow\'s Leaders' },
  { url: '/Hero6.png', caption: 'Pride in Sports and Culture' },
  { url: '/Hero7.png', caption: 'Dedicated to Community Success' },
];

export const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIdx((p) => (p + 1) % slides.length);
  const prev = () => setIdx((p) => (p - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-school-navy">
      <AnimatePresence mode="wait">
        <motion.div 
          key={idx} 
          initial={{ opacity: 0, scale: 1.05 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src={slides[idx].url} alt="Maluti SSS Hero" className="h-full w-full object-cover opacity-50" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-8xl font-black mb-4 uppercase tracking-tighter"
        >
          MALUTI SSS
        </motion.h1>
        <motion.p 
          key={`cap-${idx}`}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-lg md:text-2xl font-light italic mb-8 text-blue-100 max-w-2xl border-l-4 border-white pl-6"
        >
          "{slides[idx].caption}"
        </motion.p>
        <div className="flex gap-4">
          <a href="/admissions" className="btn-primary px-8 py-4">Apply for 2027</a>
          <a href="/about" className="btn-secondary px-8 py-4">Our History</a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setIdx(i)}
            className={`h-2 transition-all rounded-full ${i === idx ? 'w-10 bg-white' : 'w-2 bg-white/30'}`} 
          />
        ))}
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white"><ChevronLeft size={48} /></button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white"><ChevronRight size={48} /></button>
    </div>
  );
};
