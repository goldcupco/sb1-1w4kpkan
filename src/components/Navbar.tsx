import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { href: "services", label: "Services" },
    { href: "fleet", label: "Fleet" },
    { href: "booking", label: "Book Now", isHighlighted: true },
    { href: "contact", label: "Contact" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) {
      e.preventDefault();
      window.location.href = `/#${href}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">Steel City Rollz</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={`#${link.href}`}
                className={`transition duration-300 ${
                  link.isHighlighted 
                    ? 'bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full'
                    : 'hover:text-gray-300'
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  className={`transition duration-300 ${
                    link.isHighlighted 
                      ? 'bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-center'
                      : 'hover:text-gray-300'
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}