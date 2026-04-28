import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, Facebook } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="py-12 sm:py-16 bg-[#0B1F3B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 text-white rounded-xl border border-white/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Physical Address</h3>
                  <p className="text-white/70">Ramohlakoawa A/A, Maluti, 4740</p>
                  <p className="text-white/70">Matatiele, Eastern Cape</p>
                  <h3 className="font-bold text-white mt-3">Postal Address</h3>
                  <p className="text-white/70">P O Box 222, 4740</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 text-white rounded-xl border border-white/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Phone</h3>
                  <p className="text-white/70">039-256-7244</p>
                  <p className="text-white/70">+27 78 065-1426</p>
                  <p className="text-white/40 text-xs mt-1 italic">Please verify current contact with school before visiting</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 text-white rounded-xl border border-white/20">
                  <Facebook size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Social Media</h3>
                  <a
                    href="https://www.facebook.com/Maluti-SSS-G12-113845124132746/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Facebook: Maluti SSS official
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 text-white rounded-xl border border-white/20">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Office Hours</h4>
                  <p className="text-white/70">Monday - Thursday: 07:30 - 15:30</p>
                  <p className="text-white/70">Friday: 07:30 - 13:30</p>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-12 rounded-3xl overflow-hidden h-[260px] sm:h-[320px] border border-white/20 shadow-inner bg-white/5 relative">
              <iframe
                title="Maluti SSS Location"
                src="https://www.google.com/maps?q=Maluti,Matatiele,Eastern+Cape&z=13&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="bg-white/10 p-6 sm:p-8 md:p-10 rounded-3xl border border-white/20"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80">Full Name</label>
                <input
                  type="text"
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:ring-2 focus:ring-white/30 outline-none text-white placeholder-white/40"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80">Email Address</label>
                <input
                  type="email"
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:ring-2 focus:ring-white/30 outline-none text-white placeholder-white/40"
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80">Subject</label>
                <input
                  type="text"
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:ring-2 focus:ring-white/30 outline-none text-white placeholder-white/40"
                  placeholder="What is this regarding?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:ring-2 focus:ring-white/30 outline-none resize-none text-white placeholder-white/40"
                  placeholder="How can we help you?"
                />
              </div>
              <button className="bg-white text-[#0B1F3B] w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors" type="button">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
