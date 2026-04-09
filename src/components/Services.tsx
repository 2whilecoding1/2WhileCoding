import { useEffect, useState, useRef, type RefObject, type ComponentType } from 'react';
import { Zap, MessageCircle, Globe, Zap as Clock, Flame } from 'lucide-react';

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

type ServiceCardProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
  className?: string;
};

const ServiceCard = ({ icon: Icon, title, description, index, className = '' }: ServiceCardProps) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`card-dark p-5 sm:p-6 lg:p-8 rounded-xl transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      <div className="mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 rounded-lg bg-brand-electric bg-opacity-10">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-electric" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export const Services = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const services = [
    {
      icon: Zap,
      title: 'Diseño moderno',
      description: 'Interfaz limpia y profesional que refleja la identidad de tu marca con estilo contemporáneo.',
    },
    {
      icon: MessageCircle,
      title: 'Botón WhatsApp',
      description: 'Comunicación directa con tus clientes. Botón integrado para atender consultas al instante.',
    },
    {
      icon: Globe,
      title: 'Hosting incluido',
      description: 'Tu sitio web alojado en servidores confiables. Sin costos adicionales de hosting.',
    },
    {
      icon: Clock,
      title: 'Lista en pocos días',
      description: 'Proceso ágil y eficiente. Puedes estar online en menos de una semana.',
    },
    {
      icon: Flame,
      title: 'Orientada a ventas',
      description: 'Cada elemento está diseñado para convertir visitantes en clientes potenciales.',
    },
  ];

  return (
    <section
      id="servicios"
      className="py-16 sm:py-20 lg:py-24 bg-dark-tertiary px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-10 sm:mb-14 lg:mb-16 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            ¿Qué incluye tu{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">landing?</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Todo lo que necesitas para tener presencia online profesional y convertir visitantes en clientes.
          </p>
        </div>

        {/* 1 col móvil / 2 col sm-md / 3 col lg+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
              className={
                index === services.length - 1
                  ? 'sm:col-span-2 sm:max-w-sm sm:mx-auto sm:w-full lg:col-span-1 lg:max-w-none lg:mx-0'
                  : ''
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
