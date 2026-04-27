import React from 'react';
import { getAbout } from '../admin/utils/storage';
import { ShieldCheck, Quote, MapPin } from 'lucide-react';

export const About = () => {
  const data = getAbout();

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-school-navy py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Our History</h1>
          <p className="text-xl text-blue-100 font-light italic">Founded on principles of excellence and discipline.</p>
        </div>
      </section>

      {/* Campus Image Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
          <img src="/campus.png" alt="Maluti SSS Campus" className="w-full h-[400px] md:h-[600px] object-cover" />
        </div>
      </section>

      {/* History Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="flex items-center gap-2 text-school-navy font-black text-xs uppercase tracking-widest mb-6">
            <ShieldCheck size={16} /> School Profile
          </div>
          <h2 className="text-4xl font-black text-school-navy uppercase mb-8 leading-tight">Serving the Matatiele Community</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
            {data.historyParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="mt-10 p-6 bg-gray-50 rounded-2xl border-l-4 border-school-navy">
             <div className="text-xs font-black uppercase text-school-navy mb-1 tracking-widest">EMIS Identifier</div>
             <div className="text-2xl font-black text-gray-900">200500551</div>
          </div>
        </div>

        <div className="bg-school-navy rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <Quote className="absolute top-10 right-10 text-white/5" size={150} />
          <h2 className="text-3xl font-black uppercase mb-8 italic">Principal's Message</h2>
          <div className="space-y-6 text-xl text-blue-50 leading-relaxed italic font-light relative z-10">
             {data.principalMessage.map((m, i) => <p key={i}>"{m}"</p>)}
          </div>
          <div className="mt-12 pt-10 border-t border-white/10">
            <p className="text-2xl font-black">{data.principalName}</p>
            <p className="text-blue-300 font-bold uppercase text-xs tracking-widest">{data.principalTitle}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
