import React from 'react';
import { motion } from 'motion/react';
import { Award, TrendingUp, Users, Megaphone, ArrowRight, Star } from 'lucide-react';

const stats = [
  { label: '2025 Matric Pass Rate', value: '83%', icon: TrendingUp },
  { label: 'Candidates Wrote', value: '230', icon: Users },
  { label: 'Distinctions (2025)', value: '90', icon: Award },
];

export const Home = () => {
  return (
    <div className="flex flex-col bg-[#0B1F3B]">
      {/* Notices */}
      <section className="py-10 sm:py-12 bg-[#0B1F3B]">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 sm:p-7 flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-white shrink-0">
                <Megaphone size={22} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-sm font-black uppercase tracking-widest text-white">Notice</div>
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-white/80">
                    2027
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white mt-2">Admissions applications are now open</h3>
                <p className="text-white/70 mt-1">
                  General school applications for the <span className="font-bold text-white">2027</span> academic year are open.
                </p>
                <a href="/admissions" className="mt-4 inline-flex items-center gap-2 text-white font-bold hover:text-white/70 transition-colors">
                  Apply now <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/5 p-6 sm:p-7 flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-white shrink-0">
                <Megaphone size={22} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-sm font-black uppercase tracking-widest text-white">Boarding</div>
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-white/80">
                    2027
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Quick View */}
      <section className="py-12 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-xl flex items-center gap-6 border-b-4 border-[#0B1F3B]"
            >
              <div className="p-4 bg-[#0B1F3B]/10 rounded-xl text-[#0B1F3B]">
                <stat.icon size={32} />
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0B1F3B]">{stat.value}</p>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Provincial Awardee Highlight */}
      <section className="py-12 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#0B1F3B] rounded-full flex flex-col items-center justify-center text-white border-8 border-[#0B1F3B]/20 shadow-lg shrink-0">
            <Star size={28} className="text-yellow-400 mb-1" fill="currentColor" />
            <span className="text-sm font-black uppercase tracking-tighter text-center leading-tight px-2">Provincial Awardee</span>
          </div>
          <div>
            <div className="text-sm font-black uppercase tracking-widest text-[#0B1F3B]/60 mb-2">2025 Top Achiever — Alfred Nzo West District</div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3B] mb-3">
              🎉 Matubatuba Kanetso
            </h2>
            <p className="text-gray-600 text-lg italic leading-relaxed">
              Position 1 in the whole of Alfred Nzo West District — with 7 Distinctions. Our provincial awardee who represented Maluti SSS with extraordinary excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-24 bg-white/5 rounded-3xl mx-4 my-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title">Our Motto</h2>
          <p className="text-2xl text-white/80 leading-relaxed font-light italic">
            "Your true determination, hard work and discipline."
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {['EMIS: 200500551', 'Quintile 3', 'No-Fee School'].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                <p className="text-white font-bold text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
