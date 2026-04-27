import React from 'react';
import { Award, TrendingUp, Users, ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <div className="bg-white">
      {/* Stats Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-school-navy p-8 rounded-3xl text-white shadow-2xl">
            <TrendingUp size={40} className="mb-4 text-blue-300" />
            <div className="text-5xl font-black mb-2">83%</div>
            <div className="text-sm font-bold uppercase tracking-widest text-blue-200">2025 Matric Pass Rate</div>
          </div>
          <div className="bg-school-navy p-8 rounded-3xl text-white shadow-2xl">
            <Award size={40} className="mb-4 text-blue-300" />
            <div className="text-5xl font-black mb-2">90</div>
            <div className="text-sm font-bold uppercase tracking-widest text-blue-200">Total Distinctions</div>
          </div>
          <div className="bg-school-navy p-8 rounded-3xl text-white shadow-2xl">
            <Users size={40} className="mb-4 text-blue-300" />
            <div className="text-5xl font-black mb-2">7</div>
            <div className="text-sm font-bold uppercase tracking-widest text-blue-200">Matubatuba's Distinctions</div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="section-title">Welcome to Maluti</h2>
        <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed italic">
          "Maluti Senior Secondary School is a home of high academic standards in Ramohlakoawa A/A, Matatiele. We pride ourselves on producing provincial top achievers year after year."
        </p>
        <div className="mt-10">
          <span className="font-bold text-school-navy">EMIS: 200500551 | QUINTILE 3</span>
        </div>
      </section>
    </div>
  );
};
