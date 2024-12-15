import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo size="sm" className="mr-2" />
          <span className="text-xl font-bold text-gray-900">RhythemicBeats</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <NavLink onClick={() => scrollToSection('features')}>Features</NavLink>
          <NavLink onClick={() => scrollToSection('how-it-works')}>How it Works</NavLink>
          <NavLink onClick={() => scrollToSection('specifications')}>Specifications</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <MobileNavLink onClick={() => scrollToSection('features')}>Features</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('how-it-works')}>How it Works</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('specifications')}>Specifications</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('contact')}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
    >
      {children}
    </button>
  );
}

function MobileNavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
    >
      {children}
    </button>
  );
}