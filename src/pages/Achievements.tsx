import React from 'react';
import { Trophy, Medal, Award, Star, TrendingUp } from 'lucide-react';
import { getHallOfFame } from '../admin/utils/storage';

export const Achievements = () => {
  const hall = getHallOfFame();
  const matubatuba = hall.find((h: any) => h.id === 'mat-2025');

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Academic Achievements</h1>
        
        {/* TOP ACHIEVER BANNER */}
        {matubatuba && (
          <div className="bg-school-navy text-white rounded-[3rem] overflow-hidden mb-20 shadow-2xl border-4 border-white/5 flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-1/3 bg-white flex items-center justify-center p-3">
              <img 
                src="/Achiever2025.png" 
                alt="Matubatuba Kanetso" 
                className="w-full h-[450px] object-cover rounded-[2rem] shadow-2xl"
              />
            </div>
            <div className="lg:w-2/3 p-10 md:p-16 flex flex-col justify-center bg-gradient-to-br from-school-navy to-blue-900">
              <div className="flex items-center gap-3 text-yellow-400 font-black text-xs uppercase tracking-[0.3em] mb-6">
                <Trophy size={24} /> 2025 Provincial Spotlight
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none italic">
                Matubatuba <br/>Kanetso
              </h2>
              <p className="text-2xl text-blue-100 mb-10 leading-relaxed font-light max-w-xl">
                "Achieved an incredible 7 Distinctions in the 2025 NSC Examinations. Recognized as one of the top performing students in the Eastern Cape Province."
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="bg-white/10 backdrop-blur-xl px-8 py-5 rounded-2xl border border-white/20">
                  <div className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-1">Distinctions</div>
                  <div className="text-4xl font-black">07</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl px-8 py-5 rounded-2xl border border-white/20">
                  <div className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-1">Status</div>
                  <div className="text-4xl font-black italic">TOP 10</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STATS BREAKDOWN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                    <TrendingUp className="text-school-navy" size={32} />
                    <h3 className="text-2xl font-black text-school-navy uppercase tracking-tighter">2025 Matric Pass Rate</h3>
                </div>
                <div className="text-7xl font-black text-school-navy mb-2">83.0%</div>
                <p className="text-gray-500 font-medium italic">191 Learners passed out of 230 candidates</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                    <Award className="text-school-navy" size={32} />
                    <h3 className="text-2xl font-black text-school-navy uppercase tracking-tighter">Subject Excellence</h3>
                </div>
                <div className="text-7xl font-black text-school-navy mb-2">90</div>
                <p className="text-gray-500 font-medium italic">Total number of subject distinctions in 2025</p>
            </div>
        </div>

        {/* HALL OF FAME */}
        <div className="pt-16 border-t border-gray-100">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black text-school-navy uppercase tracking-tighter flex items-center gap-3">
              <Medal size={40} /> Hall of Fame
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {hall.map((entry: any) => (
              <div key={entry.id} className="card group !p-0 overflow-hidden border-none shadow-none">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-gray-100 relative shadow-xl">
                  {entry.image ? (
                    <img src={entry.image} alt={entry.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-200">
                      <Star size={64} fill="currentColor" />
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-school-navy to-transparent p-6 pt-20">
                     <p className="text-white font-black text-lg">{entry.name}</p>
                     <p className="text-blue-300 text-xs font-bold uppercase tracking-widest">{entry.title}</p>
                  </div>
                </div>
                <div className="px-2">
                    <p className="text-gray-400 text-xs font-bold mb-2">CLASS OF {entry.year}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{entry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
