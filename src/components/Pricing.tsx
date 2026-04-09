import { useEffect, useState, useRef, type RefObject } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
): [RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [options]);

  return [ref, isVisible];
};

export const Pricing = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const features = [
    'Diseño profesional y moderno',
    'Responsive (móvil, tablet, desktop)',
    'WhatsApp integrado',
    'Hosting por 1 año',
    'Dominio personalizado',
    'SEO básico optimizado',
    'Formulario de contacto',
    'Google Analytics integrado',
    'Mantenimiento 1 mes gratis',
    'Soporte vía email',
  ];

  return (
    <section
      id="precios"
      className="py-16 sm:py-20 lg:py-24 bg-dark-tertiary px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div
          ref={ref}
          className={`text-center mb-10 sm:mb-14 lg:mb-16 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Un precio claro,{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">sin sorpresas</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Todo lo que necesitas para tener presencia profesional en internet.
          </p>
        </div>

        {/* Pricing Card */}
        <div
          className={`max-w-2xl mx-auto card-dark rounded-2xl p-6 sm:p-10 lg:p-12 transition-all duration-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Price */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-baseline gap-2 mb-2 flex-wrap justify-center">
              <span className="text-base sm:text-lg text-gray-300">desde</span>
              <span className="text-5xl sm:text-6xl font-bold text-brand-electric">$3,999</span>
              <span className="text-base sm:text-lg text-gray-300">MXN</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base">Landing page completa con hosting por 1 año</p>
          </div>

          <div className="w-full h-px bg-white bg-opacity-10 my-6 sm:my-8" />

          {/* Features List — 2 columnas en sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2.5 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-electric flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-white bg-opacity-10 my-6 sm:my-8" />

          {/* CTA Button */}
          <a
            href="https://wa.me/526682101610?text=Hola,%20me%20interesa%20una%20landing%20para%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-primary flex items-center justify-center gap-2 text-base sm:text-lg"
          >
            Contratalo hoy <ArrowRight size={20} />
          </a>

          <p className="text-center text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6">
            Incluye dominio (.com, .mx, .net). Sin cargos ocultos.
          </p>
        </div>

        {/* Alternative options */}
        <div
          className={`mt-10 sm:mt-12 max-w-2xl mx-auto text-center transition-all duration-500 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
            ¿Necesitas más características?{' '}
            <br className="sm:hidden" />
            Podemos personalizar el proyecto según tus necesidades.
          </p>
          <a
            href="mailto:2whilecoding@gmail.com"
            className="text-brand-electric hover:text-brand-purple transition-colors font-semibold text-sm sm:text-base"
          >
            Escribenos para detalles
          </a>
        </div>
      </div>
    </section>
  );
};
