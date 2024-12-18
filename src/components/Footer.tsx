import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { COMPANY_INFO } from '@/config/constants';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) {
      e.preventDefault();
      window.location.href = `/#${href}`;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{COMPANY_INFO.name}</h3>
            <p className="mb-4">Premier limousine and party bus services in Pittsburgh, PA.</p>
            <div className="flex space-x-4">
              <a href={COMPANY_INFO.social.facebook} className="hover:text-red-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={COMPANY_INFO.social.instagram} className="hover:text-red-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={COMPANY_INFO.social.twitter} className="hover:text-red-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                {COMPANY_INFO.phone}
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                {COMPANY_INFO.email}
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {COMPANY_INFO.location}
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  className="hover:text-red-500 transition-colors"
                  onClick={(e) => handleNavClick(e, 'services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#fleet" 
                  className="hover:text-red-500 transition-colors"
                  onClick={(e) => handleNavClick(e, 'fleet')}
                >
                  Fleet
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-red-500 transition-colors"
                  onClick={(e) => handleNavClick(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-red-500 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-red-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <p className="text-sm text-gray-400 mt-4">
                  Licensed and insured in accordance with Pennsylvania state law.
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}