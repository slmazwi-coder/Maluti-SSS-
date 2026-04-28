import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#060f1e] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-xl bg-white overflow-hidden border border-white/20 shadow-lg flex items-center justify-center">
                <img
                  src="/assets/Logo.png"
                  alt="Maluti SSS logo"
                  className="h-full w-full object-contain p-1"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <h3 className="text-xl font-bold">Maluti SSS</h3>
            </div>
            <p className="text-white/60 mb-2 text-sm">Senior Secondary School</p>
            <p className="text-white/60 mb-6 italic text-sm">"Your true determination, hard work and discipline."</p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Maluti-SSS-G12-113845124132746/"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1" size={18} />
                <span>Ramohlakoawa A/A, Maluti, 4740, Matatiele, Eastern Cape</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>039-256-7244</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>+27 78 065-1426</span>
              </li>
              <li className="text-white/40 text-xs italic">EMIS: 200500551 | Quintile 3 | No-Fee School</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="/about" className="hover:text-white transition-colors">About Our School</a></li>
              <li><a href="/documents" className="hover:text-white transition-colors">Documents</a></li>
              <li><a href="/achievements" className="hover:text-white transition-colors">Achievements</a></li>
              <li><a href="/admissions" className="hover:text-white transition-colors">General Application</a></li>
              <li><a href="/boarding" className="hover:text-white transition-colors">Boarding Application</a></li>
              <li><a href="/student/login" className="hover:text-white transition-colors">Student Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">School Hours</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex justify-between"><span>Mon - Thu:</span> <span>07:30 - 15:30</span></li>
              <li className="flex justify-between"><span>Friday:</span> <span>07:30 - 13:30</span></li>
              <li className="flex justify-between"><span>Sat - Sun:</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Maluti Senior Secondary School. All Rights Reserved.</p>
          <p className="text-white/30 text-xs mt-1">Ramohlakoawa A/A, Maluti, 4740, Matatiele, Eastern Cape | EMIS: 200500551</p>
          <Link
            to="/admin/login"
            className="text-white/20 hover:text-white/50 text-xs mt-2 inline-block transition-colors"
          >
            Staff Portal
          </Link>
        </div>
      </div>
    </footer>
  );
};
