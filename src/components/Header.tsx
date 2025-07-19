import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-800">
            ConsultPro
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              خانه
            </button>
            <button onClick={() => scrollToSection('services')} className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              خدمات
            </button>
            <button onClick={() => scrollToSection('about')} className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              درباره ما
            </button>
            <button onClick={() => scrollToSection('approaches')} className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              رویکردها
            </button>
            <button onClick={() => scrollToSection('blog')} className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              مقالات
            </button>
            <button onClick={() => scrollToSection('contact')} className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              تماس با ما
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-blue-600 transition-colors text-right">
                خانه
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-800 hover:text-blue-600 transition-colors text-right">
                خدمات
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-blue-600 transition-colors text-right">
                درباره ما
              </button>
              <button onClick={() => scrollToSection('approaches')} className="text-gray-800 hover:text-blue-600 transition-colors text-right">
                رویکردها
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-gray-800 hover:text-blue-600 transition-colors text-right">
                مقالات
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-blue-600 transition-colors text-right">
                تماس با ما
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;