import React from 'react';
import { Award, TrendingUp, Users, ArrowRight, ShieldCheck, Megaphone } from 'lucide-react';
import { motion } from 'motion/react';

export const Home = () => {
  return (
    <div className="bg-white">
      {/* Stats Bar */}
      <section className="py-16 px-4 max-w-7xl mx-auto -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="bg-school-navy p-10 rounded-3xl text-white shadow-2xl border-b-8 border-blue-500">
            <TrendingUp size={40} className="mb-6 text-blue-400" />
            <div className="text-6xl font-black mb-2">83%</div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">2025 Matric Pass Rate</div>
          </motion.div>

          <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-school-navy p-10 rounded-3xl text-white shadow-2xl border-b-8 border-blue-500">
            <Award size={40} className="mb-6 text-blue-400" />
            <div className="text-6xl font-black mb-2">90</div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">Total Distinctions</div>
          </motion.div>

          <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-school-navy p-10 rounded-3xl text-white shadow-2xl border-b-8 border-blue-500 flex flex-col justify-between">
            <div>
              <div className="text-4xl font-black text-white">Matubatuba</div>
              <div className="text-xl font-bold text-blue-300 italic">07 Distinctions</div>
            </div>
            <a href="/achievements" className="mt-6 flex items-center gap-2 text-sm font-bold text-white hover:underline uppercase tracking-widest">
              View Achievement <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Notices */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-20 h-20 bg-school-navy text-white rounded-2xl flex items-center justify-center shrink-0">
            <Megaphone size={40} />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl font-black text-school-navy uppercase mb-2">2027 Admissions Open</h3>
            <p className="text-gray-600 font-medium">General and Boarding applications for the 2027 academic year are now being processed. Apply early to secure your spot.</p>
          </div>
          <a href="/admissions" className="btn-primary !bg-school-navy !text-white px-10 py-4 shadow-xl whitespace-nowrap">Apply Online</a>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 text-center bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-school-navy/5 text-school-navy px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-school-navy/10">
            <ShieldCheck size={12} /> EMIS: 200500551
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-school-navy mb-8 uppercase tracking-tighter leading-tight">
            Academic Excellence <br/>is our Heritage
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed italic font-light">
            "Maluti Senior Secondary School continues to serve as a beacon of hope and a center of excellence in Matatiele. We foster an environment where discipline meets ambition."
          </p>
        </div>
      </section>
    </div>
  );
};
