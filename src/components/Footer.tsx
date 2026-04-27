import React from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-school-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/Logo.png" alt="Logo" className="h-14 w-14 bg-white p-1 rounded-xl" />
              <div className="font-black leading-none">
                <p className="text-2xl tracking-tighter">MALUTI SSS</p>
                <p className="text-[10px] text-blue-300 uppercase tracking-widest">Matatiele, EC</p>
              </div>
            </div>
            <p className="text-blue-100 font-light leading-relaxed mb-8">
              A high-standard, no-fee Senior Secondary School dedicated to producing top national achievers in the Eastern Cape.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Maluti-SSS-G12-113845124132746/" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-2">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-blue-400 shrink-0" size={20} />
                <span className="text-blue-50 font-light">Ramohlakoawa A/A, Maluti, 4740, Matatiele, Eastern Cape</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-blue-400 shrink-0" size={20} />
                <span className="text-blue-50 font-light">039 256 7244 / +27 78 065 1426</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-blue-400 shrink-0" size={20} />
                <span className="text-blue-50 font-light">admin@malutisss.co.za</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-2">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
                <a href="/admissions" className="text-blue-100 hover:text-white transition-colors text-sm font-bold">2027 Admission</a>
                <a href="/boarding" className="text-blue-100 hover:text-white transition-colors text-sm font-bold">Boarding</a>
                <a href="/achievements" className="text-blue-100 hover:text-white transition-colors text-sm font-bold">Results</a>
                <a href="/student/login" className="text-blue-100 hover:text-white transition-colors text-sm font-bold">Student Portal</a>
                <a href="/about" className="text-blue-100 hover:text-white transition-colors text-sm font-bold">History</a>
                <a href="/documents" className="text-blue-100 hover:text-white transition-colors text-sm font-bold">Resources</a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center text-blue-300/50 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} Maluti Senior Secondary School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
