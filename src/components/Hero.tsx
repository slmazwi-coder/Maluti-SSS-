import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { url: '/Hero1.png', caption: 'Academic Excellence at Maluti SSS' },
  { url: '/Hero2.png', caption: 'Home of Top Provincial Achievers' },
  { url: '/Hero3.png', caption: 'Disciplined and Focused Learning' },
  { url: '/Hero4.png', caption: 'Matric Class of 2025 Pride' },
  { url: '/Hero5.png', caption: 'Building Matatiele\'s Future Leaders' },
  { url: '/Hero6.png', caption: 'Sports and Cultural Pride' },
  { url: '/Hero7.png', caption: 'No-Fee Quality Public Education' },
];

export const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-school-navy">
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
          <img src={slides[idx].url} alt="Hero" className="h-full w-full object-cover opacity-40" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">Maluti SSS</h1>
        <p className="text-lg md:text-2xl font-light italic mb-8 text-blue-100 max-w-2xl">
          "{slides[idx].caption}"
        </p>
        <div className="flex gap-4">
          <a href="/admissions" className="btn-primary">Apply Now</a>
          <a href="/about" className="btn-secondary">Our History</a>
        </div>
      </div>
    </div>
  );
};
