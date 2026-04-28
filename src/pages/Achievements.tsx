import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, BarChart3, Medal, Award, Image as ImageIcon } from 'lucide-react';
import { getHallOfFame, getResultsByYear, type HallOfFameEntry, type YearResults } from '../admin/utils/storage';

const StudentAvatar = ({ image, name }: { image: string; name: string }) => {
  const [hasError, setHasError] = useState(!image);

  return (
    <div className="aspect-square w-full relative overflow-hidden bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center group">
      {!hasError ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="text-center p-4">
          <ImageIcon className="text-white/10 mx-auto mb-2" />
          <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{name}</p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <Award className="text-white" size={20} />
      </div>
    </div>
  );
};

export const Achievements = () => {
  const [hallOfFame, setHallOfFame] = useState<HallOfFameEntry[]>(getHallOfFame());

  useEffect(() => {
    setHallOfFame(getHallOfFame());
  }, []);

  return (
    <div className="py-12 sm:py-16 bg-[#0B1F3B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-16 text-center uppercase tracking-tighter">Academic Excellence</h1>

        {/* Top Achiever Hero */}
        <section className="mb-24">
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group shadow-2xl">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-56 h-72 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl shrink-0 rotate-2 group-hover:rotate-0 transition-transform duration-500 bg-white/10">
                <img
                  src="/assets/achievements/achiever2025.png"
                  alt="Matubatuba Kanetso"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Matubatuba+Kanetso&background=white&color=0B1F3B&size=512";
                  }}
                />
              </div>
              
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-yellow-500">
                  <Trophy size={24} fill="currentColor" />
                  <span className="font-black uppercase tracking-[0.2em] text-sm">2025 District Champion</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Matubatuba Kanetso</h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                  <span className="bg-white text-[#0B1F3B] px-6 py-2 rounded-full text-sm font-black uppercase">Alfred Nzo West #1</span>
                  <span className="bg-white/10 text-white px-6 py-2 rounded-full text-sm font-black border border-white/20 uppercase">7 Distinctions</span>
                </div>
                <p className="text-white/60 text-xl leading-relaxed max-w-2xl font-medium">
                  Setting the gold standard for Maluti SSS. Matubatuba represented our school at the Provincial Awards after placing first in the district.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hall of Fame Grid */}
        <section>
          <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
            <Medal className="text-white" size={32} />
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">The Hall of Fame</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {hallOfFame.map((student, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <StudentAvatar image={student.image} name={student.name} />
                <h3 className="text-white font-black mt-4 text-lg leading-tight uppercase tracking-tighter">{student.name}</h3>
                <p className="text-white/40 text-[10px] mt-1 font-bold uppercase tracking-[0.15em]">{student.title}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
