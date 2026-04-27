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
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src="/Logo.png" alt="Maluti SSS Logo" className="h-12 w-12 object-contain" />
              <div className="hidden md:block">
                <span className="text-xl font-bold text-white block leading-none">Maluti SSS</span>
                <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Senior Secondary School</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 py-1 text-xs font-bold uppercase transition-colors ${
                  location.pathname === link.path ? 'text-white border-b-2 border-white' : 'text-blue-200 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/student/login" className="bg-white text-school-navy px-4 py-2 rounded-lg text-xs font-black flex items-center gap-2">
              <User size={14} /> PORTAL
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
