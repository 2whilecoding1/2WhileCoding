import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 bg-dark-primary px-4 sm:px-6 lg:px-8 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Consigue más{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                clientes desde
              </span>{' '}
              internet
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Creamos tu landing profesional lista para vender — rápido, bonita y con todo incluido.
            </p>

            {/* Feature badges */}
            <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
              {['Hosting incluido', 'Listo en pocos días', 'WhatsApp integrado'].map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-electric flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('contacto')}
                className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Empieza hoy <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="btn-secondary flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Ver ejemplos
              </button>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className={`hidden md:flex justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-xl">

              {/* Browser mockup */}
              <div className="rounded-xl lg:rounded-2xl border border-white/10 bg-[#0f132a] shadow-2xl shadow-brand-electric/20 overflow-hidden">
                {/* Browser bar */}
                <div className="h-8 lg:h-10 px-3 lg:px-4 flex items-center gap-1.5 lg:gap-2 border-b border-white/10 bg-[#0b0f21]">
                  <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-red-400" />
                  <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-green-400" />
                  <div className="ml-2 text-xs text-gray-400 truncate">www.cafeteriaaurora.mx</div>
                </div>

                <div className="p-3 sm:p-4 lg:p-5 space-y-3 lg:space-y-4">
                  <div className="h-24 sm:h-28 lg:h-36 rounded-lg lg:rounded-xl bg-gradient-to-r from-brand-electric/30 via-brand-purple/25 to-brand-electric/15 border border-white/10 p-3 lg:p-4 flex flex-col justify-end">
                    <p className="text-white text-base lg:text-xl font-bold">Cafeteria Aurora</p>
                    <p className="text-gray-200 text-xs lg:text-sm">Cafe de especialidad y desayunos artesanales</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 lg:gap-3">
                    {[
                      { label: 'Reservas', value: 'Por WhatsApp' },
                      { label: 'Horario', value: '7:00 - 19:00' },
                      { label: 'Ubicacion', value: 'Centro, MX' },
                    ].map(({ label, value }) => (
                      <div key={label} className="rounded-md lg:rounded-lg border border-white/10 bg-white/5 p-2 lg:p-3">
                        <p className="text-xs text-gray-300">{label}</p>
                        <p className="text-xs lg:text-sm text-white font-semibold truncate">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg border border-brand-green/40 bg-brand-green/10 px-3 lg:px-4 py-2 lg:py-3 flex items-center justify-between">
                    <span className="text-xs lg:text-sm text-white font-medium">Boton directo a WhatsApp</span>
                    <span className="text-xs text-brand-green font-semibold">+ clientes</span>
                  </div>
                </div>
              </div>

              {/* Mobile preview card — solo en lg+ */}
              <div className="hidden lg:block absolute -bottom-8 -right-8 w-36 rounded-2xl border border-white/10 bg-[#0b1022]/95 backdrop-blur-sm shadow-xl p-3">
                <div className="h-20 rounded-lg bg-gradient-to-b from-brand-electric/30 to-brand-purple/25 mb-2" />
                <div className="h-1.5 w-16 rounded bg-white/40 mb-1.5" />
                <div className="h-1.5 w-12 rounded bg-white/25 mb-2.5" />
                <div className="h-8 rounded-lg bg-[#25D366] shadow-md shadow-green-500/40 text-white font-bold flex items-center justify-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.878-1.42A9.953 9.953 0 0 0 12 22c5.522 0 10-4.477 10-10S17.522 2 12 2zm0 18a8 8 0 0 1-4.43-1.327l-.32-.19-3.287.957.986-3.187-.21-.34A7.963 7.963 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/></svg>
                  <span className="text-[9px] font-light">Pedir por WhatsApp</span>
                </div>
              </div>

              {/* Decorative glows */}
              <div className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 w-28 h-28 lg:w-36 lg:h-36 bg-brand-electric rounded-full blur-3xl opacity-20 pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 lg:-bottom-10 lg:-left-10 w-32 h-32 lg:w-40 lg:h-40 bg-brand-purple rounded-full blur-3xl opacity-25 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
