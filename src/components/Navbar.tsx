import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { InfinityAtomLogo } from './InfinityAtomLogo';

const NAV_LINKS = [
  { label: 'Servicios', id: 'servicios' },
  { label: '¿Cómo funciona?', id: 'como-funciona' },
  { label: 'Precios', id: 'precios' },
  { label: 'Contacto', id: 'contacto' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al cambiar tamaño de pantalla a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-primary/85 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">

          {/* Logo + nombre */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none"
            aria-label="Ir al inicio"
          >
            <InfinityAtomLogo size={44} />
            <span className="font-bold text-base sm:text-lg lg:text-xl text-white whitespace-nowrap group-hover:text-brand-electric transition-colors">
              2WhileCoding
            </span>
          </button>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-gray-300 hover:text-brand-electric transition-colors text-sm lg:text-base font-medium"
              >
                {label}
              </button>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contacto')}
              className="btn-primary text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3"
            >
              Empieza hoy
            </button>
          </div>

          {/* Hamburger móvil */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-dark-primary/95 backdrop-blur-md">
            <div className="flex flex-col py-4 gap-1">
              {NAV_LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-base font-medium text-left px-4 py-3 rounded-lg mx-2"
                >
                  {label}
                </button>
              ))}
              <div className="px-2 pt-2 pb-2">
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="btn-primary text-base w-full"
                >
                  Empieza hoy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
