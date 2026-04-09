import { useEffect, useState, useRef, type RefObject } from 'react';
import { ArrowRight } from 'lucide-react';

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

type StepCardProps = {
  number: number;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
};

const StepCard = ({ number, title, description, index, isLast }: StepCardProps) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`relative flex flex-col transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
    >
      {/* Number circle + connector (horizontal en md+) */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-electric/30">
          <span className="text-white font-bold text-base sm:text-lg">{number}</span>
        </div>
        {/* Línea conectora horizontal — solo en md+ y si no es el último */}
        {!isLast && (
          <div className="hidden md:block flex-1 h-0.5 mx-4 bg-gradient-to-r from-brand-electric/50 to-transparent" />
        )}
      </div>

      {/* Card */}
      <div className="card-dark p-5 sm:p-6 rounded-xl flex-1">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>

      {/* Línea conectora vertical — solo en móvil y si no es el último */}
      {!isLast && (
        <div className="md:hidden flex justify-center my-2">
          <div className="w-0.5 h-6 bg-gradient-to-b from-brand-electric/50 to-transparent" />
        </div>
      )}
    </div>
  );
};

export const HowItWorks = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const steps = [
    {
      number: 1,
      title: 'Nos contactas',
      description:
        'Cuéntanos sobre tu negocio, qué servicios ofreces y a qué clientes quieres llegar. En una breve conversación, entendemos tu visión.',
    },
    {
      number: 2,
      title: 'Diseñamos y desarrollamos',
      description:
        'Nuestro equipo crea tu landing profesional con diseño moderno, optimizado para convertir. Todo personalizado a tu marca.',
    },
    {
      number: 3,
      title: 'Publicamos y entregamos',
      description:
        'Tu sitio web listo en internet, con dominio y hosting. Te pasamos las claves y está 100% listo para recibir clientes.',
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-16 sm:py-20 lg:py-24 bg-dark-primary px-4 sm:px-6 lg:px-8"
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
            Tu web lista en{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">3 pasos</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Un proceso simple y directo para que entiendas exactamente cómo funciona.
          </p>
        </div>

        {/* Steps — vertical en móvil / horizontal en md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              {...step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 sm:mt-16 text-center transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href="https://wa.me/526682101610?text=Hola,%20me%20interesa%20una%20landing%20para%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Comienza hoy mismo <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
