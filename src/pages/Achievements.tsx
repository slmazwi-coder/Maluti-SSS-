import React from 'react';
import { Trophy, Star, Medal } from 'lucide-react';
import { getHallOfFame } from '../admin/utils/storage';

export const Achievements = () => {
  const hall = getHallOfFame();

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="section-title">Academic Achievements</h1>
        
        {/* Matubatuba Kanetso Section */}
        <div className="bg-school-navy text-white rounded-3xl p-10 mb-20 shadow-2xl flex flex-col md:flex-row items-center gap-10 border-4 border-blue-400">
          <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center shrink-0">
             <Trophy size={80} className="text-yellow-400" />
          </div>
          <div>
            <div className="text-yellow-400 font-black text-sm uppercase tracking-[0.2em] mb-2">2025 Provincial Highlight</div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Matubatuba Kanetso</h2>
            <p className="text-xl text-blue-100 italic mb-6">
              "7 Distinctions in the 2025 NSC Examinations. Recognized as one of the top learners in the Eastern Cape Province."
            </p>
            <div className="flex gap-2">
               <span className="px-4 py-2 bg-blue-500/30 rounded-full text-xs font-bold">NSC TOP 10</span>
               <span className="px-4 py-2 bg-blue-500/30 rounded-full text-xs font-bold">7 DISTINCTIONS</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-black text-school-navy mb-8 flex items-center gap-2">
          <Medal /> HALL OF FAME
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hall.map((entry: any) => (
            <div key={entry.id} className="card text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="text-yellow-500" />
              </div>
              <h3 className="font-black text-lg">{entry.name}</h3>
              <p className="text-school-navy font-bold text-sm">{entry.title}</p>
              <p className="text-gray-400 text-xs mt-2">{entry.year} • {entry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
