import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, BarChart3, Medal, Calendar, Award, Image as ImageIcon } from 'lucide-react';
import { getHallOfFame, getResultsByYear, type HallOfFameEntry, type YearResults } from '../admin/utils/storage';

const StudentAvatar = ({ image, name, year }: { image: string; name: string; year: string }) => {
  const [hasError, setHasError] = useState(!image);

  return (
    <div className="aspect-square w-full relative overflow-hidden bg-white/10 rounded-2xl shadow-lg border border-white/20 flex items-center justify-center group">
      {!hasError ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-white/50 p-6 text-center">
          <ImageIcon className="opacity-60 mb-2" />
          <p className="text-[10px] font-bold uppercase tracking-widest">{name}</p>
        </div>
      )}
      <div className="absolute top-2 right-2 p-2 bg-[#0B1F3B]/80 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <Award size={16} />
      </div>
    </div>
  );
};

export const Achievements = () => {
  const [activeResultsYear, setActiveResultsYear] = useState<'2025' | '2024' | '2023'>('2025');
  const [hallOfFame, setHallOfFame] = useState<HallOfFameEntry[]>(getHallOfFame());
  const [currentResults, setCurrentResults] = useState<YearResults | null>(getResultsByYear(activeResultsYear));

  useEffect(() => {
    setHallOfFame(getHallOfFame());
    setCurrentResults(getResultsByYear(activeResultsYear));
  }, [activeResultsYear]);

  return (
    <div className="py-12 sm:py-16 bg-[#0B1F3B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Academic Excellence</h1>

        {/* Provincial Awardee Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="w-48 h-60 rounded-2xl overflow-hidden border-4 border-yellow-500 shadow-2xl shrink-0">
                <img
                  src="/matubatuba-kanetso.jpg"
                  alt="Matubatuba Kanetso"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://ui-avatars.com/api/?name=Matubatuba+Kanetso&background=0B1F3B&color=fff";
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3 text-yellow-500">
                  <Trophy size={20} />
                  <span className="font-bold uppercase tracking-widest text-sm">2025 Provincial Highlight</span>
                </div>
                <h2 className="text-4xl font-black text-white mb-4">Matubatuba Kanetso</h2>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-bold border border-white/20">🏆 Position 1 - District</span>
                  <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-bold border border-white/20">⭐ 7 Distinctions</span>
                </div>
                <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                  Celebrating historic success. Matubatuba achieved the top spot in the entire Alfred Nzo West district for the 2025 matric examinations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Matric Results Overview */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="text-white" />
            <h2 className="text-2xl font-bold text-white">Results Summary</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Pass Rate', val: '83%' },
              { label: 'Passed', val: '191' },
              { label: 'Distinctions', val: '90' },
              { label: 'Candidates', val: '230' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-xl text-center">
                <p className="text-3xl font-black text-[#0B1F3B]">{stat.val}</p>
                <p className="text-xs font-bold text-[#0B1F3B]/60 uppercase tracking-tighter">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hall of Fame */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <Medal className="text-white" />
            <h2 className="text-2xl font-bold text-white">Hall of Fame</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hallOfFame.map((student, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <StudentAvatar image={student.image} name={student.name} year={student.year} />
                <h3 className="text-white font-bold mt-4 leading-tight">{student.name}</h3>
                <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">{student.title}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
