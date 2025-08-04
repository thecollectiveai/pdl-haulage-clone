"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        {/* Background overlay */}
        <div 
          className="absolute inset-0 bg-black/50" 
          onClick={toggleMobileMenu}
        />
        
        {/* Mobile navigation panel */}
        <div className="w-64 bg-white h-full ml-auto shadow-lg relative">
          {/* Close button */}
          <div className="flex justify-end p-4 border-b">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Mobile navigation links */}
          <nav className="p-4">
            <div className="space-y-4">
              <a 
                href="#home" 
                className="block text-gray-700 hover:text-[#0b496d] font-medium py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="block text-gray-700 hover:text-[#0b496d] font-medium py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Our Services
              </a>
              <a 
                href="#about" 
                className="block text-gray-700 hover:text-[#0b496d] font-medium py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                About Us
              </a>
              <a 
                href="#contact" 
                className="block text-gray-700 hover:text-[#0b496d] font-medium py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </a>
            </div>
            
            {/* Mobile contact info */}
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
              <div className="flex items-center space-x-2 text-[#8394a3] text-sm">
                <Mail className="h-4 w-4" />
                <span>info@pdlhaulageltd.com</span>
              </div>
              <div className="flex items-center space-x-2 text-[#8394a3] text-sm">
                <Phone className="h-4 w-4" />
                <span>087 9885435</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}