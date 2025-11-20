import React, { useState, useEffect } from 'react';
import HugsberryLogo from './HugsberryLogo';
import { INSTAGRAM_URL } from '../constants';
import { Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <HugsberryLogo size="md" />
          </a>

          {/* Instagram CTA */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 sm:px-6 py-2.5 rounded-full bg-hugsberry-navy text-white font-bold text-sm shadow-xl shadow-blue-900/10 hover:bg-hugsberry-green hover:shadow-green-200 hover:-translate-y-1 transition-all duration-300"
          >
            <Instagram className="mr-2" size={18} />
            <span className="hidden sm:inline">Shop on Instagram</span>
            <span className="sm:hidden">Shop</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

