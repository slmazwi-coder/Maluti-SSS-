import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Documents', path: '/documents' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Sport', path: '/sport' },
  { name: 'Activities', path: '/activities' },
  { name: 'General Application', path: '/admissions' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#003399] border-b-4 border-[#CC0000] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              {/* Logo Container - White background to make the blue shield pop */}
              <div className="flex items-center justify-center h-14 w-14 overflow-hidden bg-white rounded-full border-2 border-white shadow-sm p-0.5">
                <img
                  src="/Logo.png"
                  alt="Maluti SSS logo"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-black text-white block leading-none uppercase tracking-tighter">Maluti SSS</span>
                <span className="text-[10px] font-bold text-white/90 uppercase tracking-[0.2em]">Excellence & Honor</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-3 py-2 rounded-md text-xs lg:text-sm font-bold transition-all uppercase tracking-wide',
                  location.pathname === link.path
                    ? 'text-[#003399] bg-white'
                    : 'text-white hover:bg-[#CC0000] hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/student/login"
              className="px-4 py-2 rounded-xl text-sm font-black transition-all inline-flex items-center gap-2 ml-2 bg-white text-[#003399] hover:bg-gray-100 shadow-md uppercase"
            >
              <User size={16} /> Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#003399] border-t border-white/10 shadow-2xl">
          <div className="px-2 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-3 rounded-md text-base font-bold uppercase tracking-wider',
                  location.pathname === link.path
                    ? 'text-[#003399] bg-white'
                    : 'text-white hover:bg-[#CC0000]'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                to="/student/login"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center px-3 py-4 rounded-xl text-base font-black bg-white text-[#003399] uppercase shadow-lg"
              >
                <User size={20} className="mr-2" /> Student Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
