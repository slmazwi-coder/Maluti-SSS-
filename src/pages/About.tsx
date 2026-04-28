import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Image as ImageIcon } from 'lucide-react';
import { getAbout, type AboutInfo } from '../admin/utils/storage';

export const About = () => {
  const [data, setData] = useState<AboutInfo>(getAbout());
  const [campusFailed, setCampusFailed] = useState(false);
  const [principalFailed, setPrincipalFailed] = useState(false);

  // VITE RULE: Do not include "public" in the path. 
  // If the file is in public/assets/about/campus.png, use the path below:
  const campusImageUrl = "/assets/about/campus.png"; 
  const principalImageUrl = "/principal.jpg"; // Keeping this as root based on previous info

  useEffect(() => {
    setData(getAbout());
  }, []);

  return (
    <div className="py-12 sm:py-16 bg-[#0B1F3B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center uppercase tracking-tight">About Maluti SSS</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-white pl-4">Our School</h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-lg">
              {data.historyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Address', value: 'Ramohlakoawa A/A, Maluti, 4740' },
                { label: 'EMIS', value: '200500551' },
                { label: 'Contact', value: '039-256-7244' },
                { label: 'Quintile', value: '3 (No-Fee)' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-black mb-1">{item.label}</p>
                  <p className="text-white font-bold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 aspect-video flex items-center justify-center"
          >
            <img
              src={campusImageUrl}
              alt="Maluti SSS campus"
              className="w-full h-full object-cover"
              onError={() => setCampusFailed(true)}
            />
            {campusFailed && (
              <div className="text-center p-10">
                <ImageIcon size={48} className="text-white/20 mx-auto mb-4" />
                <p className="text-white/40 text-sm">Image not found at {campusImageUrl}</p>
              </div>
            )}
          </motion.div>
        </div>

        <section className="bg-white/5 rounded-3xl p-8 md:p-12 mb-16 border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
            <div className="col-span-1 text-center">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-white/20 mb-6 bg-white/5">
                <img
                  src={principalImageUrl}
                  alt="Principal"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    setPrincipalFailed(true);
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Principal&background=0B1F3B&color=fff&size=512";
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-white">{data.principalName}</h3>
              <p className="text-white/50 text-sm">{data.principalTitle}</p>
            </div>

            <div className="col-span-2">
              <Quote className="text-white/10 mb-4" size={40} />
              <h2 className="text-3xl font-bold text-white mb-6 italic">Principal's Message</h2>
              <div className="space-y-4 text-white/80 text-lg leading-relaxed italic">
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
