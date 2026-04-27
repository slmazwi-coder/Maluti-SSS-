import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Documents', path: '/documents' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Sport', path: '/sport' },
  { name: 'General Application', path: '/admissions' },
  { name: 'Boarding', path: '/boarding' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="glass-nav shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center p-1 shadow-inner overflow-hidden">
                <img src="/Logo.png" alt="Maluti SSS Logo" className="h-full w-full object-contain" />
              </div>
              <div className="hidden md:block text-white leading-none">
                <span className="text-xl font-black block tracking-tighter">MALUTI SSS</span>
                <span className="text-[9px] font-bold text-blue-200 uppercase tracking-[0.2em]">Senior Secondary School</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  location.pathname === link.path
                    ? 'bg-white text-school-navy shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/student/login" className="ml-2 bg-white text-school-navy px-4 py-2 rounded-lg text-xs font-black flex items-center gap-2 hover:bg-blue-50 transition-colors">
              <User size={14} /> PORTAL
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-school-navy border-t border-white/10 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest ${
                location.pathname === link.path ? 'bg-white text-school-navy' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/student/login" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl bg-blue-500 text-white text-sm font-black uppercase text-center mt-4">
            Student Portal
          </Link>
        </div>
      )}
    </nav>
  );
};
