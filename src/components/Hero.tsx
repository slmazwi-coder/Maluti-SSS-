import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const slides = [
  { url: '/assets/hero/Hero1.png', caption: 'Excellence in Education' },
  { url: '/assets/hero/Hero2.png', caption: 'Discipline and Pride' },
  { url: '/assets/hero/Hero3.png', caption: 'Our Community' },
  { url: '/assets/hero/Hero4.png', caption: 'Celebrating Achievement' },
  { url: '/assets/hero/Hero5.png', caption: 'Academic Excellence' },
  { url: '/assets/hero/Hero6.png', caption: 'Building Leaders' },
  { url: '/assets/hero/Hero7.png', caption: 'Our School Family' },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentIndex];
  const showImage = !!slide.url && !failed[currentIndex];

  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-[#0B1F3B]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.995 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          {showImage ? (
            <img
              src={slide.url}
              alt={slide.caption}
              className="h-full w-full object-cover object-center opacity-40"
              onError={() => setFailed((p) => ({ ...p, [currentIndex]: true }))}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#0B1F3B] via-[#0B2A57] to-[#081529] opacity-95 flex items-center justify-center">
              <div className="text-center text-white/70 px-6">
                <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                  <ImageIcon />
                </div>
                <div className="font-semibold">Add Hero1.png – Hero7.png</div>
                <div className="text-sm text-white/60">
                  Place in <span className="font-mono">public/assets/hero/</span>
                </div>
              </div>
            </div>
          )}

          <div className="absolute bottom-20 left-0 right-0 text-center z-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={`caption-${currentIndex}`}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="text-white/85 text-lg md:text-xl font-medium tracking-wide uppercase"
            >
              {slide.caption}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/70 via-transparent to-[#0B1F3B]/30 z-10 pointer-events-none" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
          className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wide drop-shadow-lg"
        >
          Maluti Senior Secondary School
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          className="text-lg md:text-2xl font-light italic text-white/90"
        >
          "Your true determination, hard work and discipline."
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
          className="mt-8 flex gap-4"
        >
          <a href="/admissions" className="bg-white text-[#0B1F3B] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Admissions
          </a>
          <a href="/about" className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
            Learn More
          </a>
        </motion.div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors z-30"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 w-2 rounded-full transition-colors ${i === currentIndex ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};
