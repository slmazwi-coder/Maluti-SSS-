import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Quote, Image as ImageIcon } from 'lucide-react';
import { getAbout, type AboutInfo } from '../admin/utils/storage';

export const About = () => {
  const [data, setData] = useState<AboutInfo>(getAbout());
  const [campusFailed, setCampusFailed] = useState(false);
  const [principalFailed, setPrincipalFailed] = useState(false);

  const campusImageUrl = '/assets/about/campus.png';
  const principalImageUrl = '/assets/about/principal.jpg';

  useEffect(() => {
    setData(getAbout());
  }, []);

  return (
    <div className="py-12 sm:py-16 bg-[#0B1F3B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">About Maluti Senior Secondary School</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Our School</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              {data.historyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Key facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Address', value: 'Ramohlakoawa A/A, Maluti, 4740' },
                { label: 'Postal', value: 'P O Box 222, 4740' },
                { label: 'Phone', value: '039-256-7244' },
                { label: 'Mobile', value: '+27 78 065-1426' },
                { label: 'EMIS', value: '200500551' },
                { label: 'Quintile', value: '3 — No-Fee School' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">{item.label}</p>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-white/20"
          >
            {!campusFailed ? (
              <img
                src={campusImageUrl}
                alt="Maluti SSS campus"
                className="w-full h-[260px] sm:h-[400px] object-cover"
                onError={() => setCampusFailed(true)}
              />
            ) : (
              <div className="w-full h-[260px] sm:h-[400px] bg-gradient-to-br from-[#0B1F3B] via-[#0B2A57] to-[#081529] flex items-center justify-center">
                <div className="text-center text-white/70 px-6">
                  <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                    <ImageIcon />
                  </div>
                  <div className="font-semibold">Campus image</div>
                  <div className="text-sm text-white/60">Add <span className="font-mono">public/assets/about/campus.png</span></div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Principal's Message */}
        <section className="bg-white/10 rounded-3xl p-6 sm:p-10 md:p-12 mb-16 sm:mb-24 relative overflow-hidden border border-white/20">
          <div className="absolute top-0 right-0 p-8 text-white/5">
            <Quote size={120} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-center">
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
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center px-6 text-white/50">
                      <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                        <ImageIcon />
                      </div>
                      <div className="font-semibold text-sm">Principal photo</div>
                      <div className="text-xs mt-1">Add <span className="font-mono">public/assets/about/principal.jpg</span></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">{data.principalName}</h3>
                <p className="text-white/60">{data.principalTitle}</p>
                <p className="text-white/40 text-xs mt-1 italic">Verify current principal with school</p>
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
