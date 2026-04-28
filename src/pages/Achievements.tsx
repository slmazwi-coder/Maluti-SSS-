import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Star, TrendingUp, BarChart3, Medal, Calendar, Award, Image as ImageIcon } from 'lucide-react';
import { getHallOfFame, getResultsByYear, type HallOfFameEntry, type YearResults } from '../admin/utils/storage';

const StudentAvatar = ({ image, name, year }: { image: string; name: string; year: string }) => {
  const [hasError, setHasError] = useState(!image);

  return (
    <div className="aspect-[3/4] sm:aspect-square w-full relative overflow-hidden bg-white/10 rounded-2xl shadow-lg border border-white/20 flex items-center justify-center group">
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
          <p className="text-xs font-bold uppercase">{name}</p>
        </div>
      )}
    </div>
  );
};

export const Achievements = () => {
  const [activeResultsYear, setActiveResultsYear] = useState<'2025' | '2024' | '2023'>('2025');
  const [activeAchieversYear, setActiveAchieversYear] = useState<string>('2025');
  const [hallOfFame, setHallOfFame] = useState<HallOfFameEntry[]>(getHallOfFame());
  const [currentResults, setCurrentResults] = useState<YearResults | null>(getResultsByYear(activeResultsYear));

  useEffect(() => {
    setHallOfFame(getHallOfFame());
  }, []);

  useEffect(() => {
    setCurrentResults(getResultsByYear(activeResultsYear));
  }, [activeResultsYear]);

  const achieversByYear: Record<string, HallOfFameEntry[]> = {};
  hallOfFame.forEach((entry) => {
    if (!achieversByYear[entry.year]) achieversByYear[entry.year] = [];
    achieversByYear[entry.year].push(entry);
  });

  const yearsList = Object.keys(achieversByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="py-12 sm:py-16 bg-[#0B1F3B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title text-center mb-12 sm:mb-16 text-white text-4xl font-bold">Academic Excellence</h1>

        {/* Provincial Awardee Highlight */}
        <section className="mb-16 sm:mb-24">
          <div className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-12 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-yellow-400/50 shrink-0">
                <img
                  src="/matubatuba-kanetso.jpg"
                  alt="Matubatuba Kanetso"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Matubatuba+Kanetso&background=0B1F3B&color=fff"; }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="text-yellow-400" />
                  <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">2025 Provincial Awardee</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">Matubatuba Kanetso</h2>
                <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                  Achieved Position 1 in the Alfred Nzo West District with 7 distinctions. A shining example of Maluti SSS excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Matric Results Summary */}
        <section className="mb-20">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-2xl text-[#0B1F3B] text-center">
                <p className="text-4xl font-black">83%</p>
                <p className="text-xs font-bold uppercase opacity-70">Pass Rate</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-[#0B1F3B] text-center">
                <p className="text-4xl font-black">191</p>
                <p className="text-xs font-bold uppercase opacity-70">Learners Passed</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-[#0B1F3B] text-center">
                <p className="text-4xl font-black">90</p>
                <p className="text-xs font-bold uppercase opacity-70">Distinctions</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-[#0B1F3B] text-center">
                <p className="text-4xl font-black">230</p>
                <p className="text-xs font-bold uppercase opacity-70">Wrote</p>
              </div>
           </div>
        </section>

        {/* Hall of Fame List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {hallOfFame.map((student, idx) => (
              <div key={idx} className="text-center">
                <StudentAvatar image={student.image} name={student.name} year={student.year} />
                <h3 className="text-white font-bold mt-4">{student.name}</h3>
                <p className="text-white/50 text-sm">{student.title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
