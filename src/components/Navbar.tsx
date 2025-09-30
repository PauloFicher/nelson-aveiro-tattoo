import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Cuidado Post-Tatuaje', href: '/cuidado-post-tatuaje' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Reservas', href: '#reservas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <nav className="absolute w-full z-50 transition-all duration-500 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo con animación */}
            <a href="/" className="hidden md:flex items-center group cursor-pointer">
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-red-600 transform group-hover:rotate-12 transition-transform duration-300">鬼</span>
                <span className="group-hover:text-red-500 transition-colors duration-300">
                  Nelson Aveiro Tattoos
                </span>
              </div>
            </a>

            {/* Desktop Navigation con animaciones */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-white font-medium group overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10 group-hover:text-red-500 transition-colors duration-300">
                    {item.name}
                  </span>
                  {/* Efecto hover underline animado */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-300"></span>
                  {/* Efecto glow en hover */}
                  <span className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-all duration-300 rounded-lg"></span>
                </a>
              ))}
            </div>

            {/* Mobile menu button con animación */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 text-white hover:text-red-500 transition-colors duration-300 flex items-center justify-center group"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 rounded-lg transition-all duration-300"></div>
                <div className="relative">
                  {isMenuOpen ? (
                    <X size={24} className="animate-in spin-in-90 duration-300" />
                  ) : (
                    <Menu size={24} className="animate-in spin-in-90 duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay con fade */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation - Slide desde la derecha */}
      <div className={`
        fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl z-50 md:hidden
        transform transition-transform duration-500 ease-out border-l border-red-600/20
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Header del menú móvil */}
        <div className="flex justify-between items-center p-6 border-b border-red-600/20">
          <div className="text-xl font-bold text-red-600 flex items-center gap-2">
            <span>鬼</span>
            <span className="text-white">Menú</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-red-500 transition-colors duration-300 p-2 hover:bg-red-600/10 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items del menú con animación staggered */}
        <div className="p-6 space-y-2">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`
                block px-6 py-4 text-lg text-white font-medium rounded-xl
                hover:bg-red-600/10 hover:text-red-500 
                transition-all duration-300 border border-transparent hover:border-red-600/30
                transform hover:translate-x-2
                ${isMenuOpen ? 'animate-in slide-in-from-right fade-in' : ''}
              `}
              style={{ 
                animationDelay: `${index * 75}ms`,
                animationDuration: '500ms',
                animationFillMode: 'backwards'
              }}
            >
              <span className="flex items-center justify-between">
                {item.name}
                <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </span>
            </a>
          ))}
        </div>
        {/* Footer del menú móvil */}
        
             
            
           
       
       
      </div>
    </>
  );
};

export default Navbar;