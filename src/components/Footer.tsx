import { Mail, Phone } from 'lucide-react';
import logo from '../../Imagenes/Landing-2WhileCoding/logo.png';

const WHATSAPP = 'https://wa.me/526682101610?text=Hola,%20me%20interesa%20una%20landing%20para%20mi%20negocio';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-secondary border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">

        {/* Grid principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 mb-3 group focus:outline-none"
            >
              <img
                src={logo}
                alt="2WhileCoding logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:opacity-80 transition-opacity"
              />
              <span className="font-bold text-lg text-white group-hover:text-brand-electric transition-colors">
                2WhileCoding
              </span>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed">
              Infinite Logic. Two Minds. One Loop.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Navegación</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Servicios', id: 'servicios' },
                { label: '¿Cómo funciona?', id: 'como-funciona' },
                { label: 'Precios', id: 'precios' },
                { label: 'Contacto', id: 'contacto' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-400 hover:text-brand-electric transition-colors text-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-electric flex-shrink-0" />
                <a
                  href="mailto:2whilecoding@gmail.com"
                  className="text-gray-400 hover:text-brand-electric transition-colors text-sm break-all"
                >
                  2whilecoding@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-electric flex-shrink-0" />
                <a
                  href="tel:+526682101610"
                  className="text-gray-400 hover:text-brand-electric transition-colors text-sm"
                >
                  668 210 1610
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Empieza hoy</h4>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center block text-sm"
            >
              Contáctanos
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} 2WhileCoding. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm">
            Hecho con ❤️ en México
          </p>
        </div>
      </div>
    </footer>
  );
};
