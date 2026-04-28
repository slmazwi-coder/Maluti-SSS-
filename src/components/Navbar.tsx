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
  { name: 'Boarding Application', path: '/boarding' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/Logo.png"
                alt="Maluti SSS logo"
                className="h-16 w-16 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="hidden md:block">
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
              className={cn(
                'px-3 py-2 rounded-md text-sm font-bold transition-colors inline-flex items-center gap-2 ml-2',
                location.pathname.startsWith('/student')
                  ? 'text-[#0B1F3B] bg-white'
                  : 'text-[#0B1F3B] bg-white hover:bg-gray-100'
              )}
            >
              <User size={16} /> Student Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/70 p-2"
              aria-label="Open menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1F3B] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
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
              onClick={() => setIsOpen(false)}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-bold',
                location.pathname.startsWith('/student')
                  ? 'text-[#0B1F3B] bg-white'
                  : 'text-[#0B1F3B] bg-white'
              )}
            >
              Student Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
