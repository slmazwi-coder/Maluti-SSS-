
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
    <nav className="fixed top-0 z-50 w-full bg-[#0B1F3B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              {/* Logo Container - No background, matches your original setup */}
              <div className="flex items-center justify-center h-16 w-16 overflow-hidden bg-transparent">
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
                <span className="text-lg font-bold text-white block leading-none">Maluti SSS</span>
                <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Senior Secondary School</span>
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
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  location.pathname === link.path
                    ? 'text-white bg-white/20'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                )}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/student/login"
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all inline-flex items-center gap-2 ml-2 bg-white text-[#0B1F3B] hover:bg-gray-100 shadow-lg"
            >
              <User size={16} /> Student Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1F3B] border-t border-white/10">
          <div className="px-2 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-3 rounded-md text-base font-medium',
                  location.pathname === link.path
                    ? 'text-white bg-white/20'
                    : 'text-white/70'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                to="/student/login"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center px-3 py-3 rounded-xl text-base font-bold bg-white text-[#0B1F3B]"
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
