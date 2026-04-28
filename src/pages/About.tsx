import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Image as ImageIcon } from 'lucide-react';
import { getAbout, type AboutInfo } from '../admin/utils/storage';

export const About = () => {
  const [data, setData] = useState<AboutInfo>(getAbout());
  const [campusFailed, setCampusFailed] = useState(false);
  const [principalFailed, setPrincipalFailed] = useState(false);

  // Updated paths to match your GitHub public folder root
  const campusImageUrl = '/campus.png';
  const principalImageUrl = '/principal.jpg';

  useEffect(() => {
    setData(getAbout());
  }, []);

  return (
    <div className="py-12 sm:py-16 bg-[#0B1F3B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">About Maluti Senior Secondary School</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Our School</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              {data.historyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Address', value: 'Ramohlakoawa A/A, Maluti, 4740' },
                { label: 'Phone', value: '039-256-7244' },
                { label: 'Mobile', value: '+27 78 065-1426' },
                { label: 'EMIS', value: '200500551' },
                { label: 'Quintile', value: '3 — No-Fee School' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">{item.label}</p>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-video"
          >
            {!campusFailed ? (
              <img
                src={campusImageUrl}
                alt="Maluti SSS campus"
                className="w-full h-full object-cover"
                onError={() => setCampusFailed(true)}
              />
            ) : (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-white/40">
                <div className="text-center">
                  <ImageIcon size={48} className="mx-auto mb-2" />
                  <p>Campus Image Missing</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Principal's Message */}
        <section className="bg-white/5 rounded-3xl p-6 sm:p-10 md:p-12 mb-16 relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 p-8 text-white/5">
            <Quote size={120} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-center relative z-10">
            <div className="col-span-1">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white/20 shadow-lg bg-white/10">
                {!principalFailed ? (
                  <img
                    src={principalImageUrl}
                    alt="Principal"
                    className="w-full h-full object-cover object-top"
                    onError={() => setPrincipalFailed(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/30">
                    <ImageIcon size={40} />
                  </div>
                )}
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">{data.principalName}</h3>
                <p className="text-white/60">{data.principalTitle}</p>
              </div>
            </div>

            <div className="col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 italic">Principal's Message</h2>
              <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
                {data.principalMessage.map((p, i) => (
                  <p key={i}>"{p}"</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
