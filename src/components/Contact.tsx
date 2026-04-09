import { useEffect, useState, useRef, type RefObject, type ComponentType, type FormEvent } from 'react';
import { Mail, Phone, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

// Hook para detectar cuando un elemento entra en viewport
const useIntersectionObserver = <T extends HTMLElement>(
  options: IntersectionObserverInit = {}
): [RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

type ContactMethodProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  index: number;
};

const ContactMethod = ({ icon: Icon, title, description, href, index }: ContactMethodProps) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLAnchorElement>();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className={`card-dark p-6 sm:p-8 rounded-xl transition-all duration-500 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      <div className="mb-4 inline-flex p-3 rounded-lg bg-brand-electric bg-opacity-10">
        <Icon className="w-6 h-6 text-brand-electric" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </a>
  );
};

type FormState = {
  nombre: string;
  email: string;
  mensaje: string;
};

type FormErrors = Partial<FormState>;

const WHATSAPP_NUMBER = '526682101610';

const validateForm = (values: FormState): FormErrors => {
  const errors: FormErrors = {};

  if (!values.nombre.trim()) {
    errors.nombre = 'El nombre es requerido';
  } else if (values.nombre.trim().length < 2) {
    errors.nombre = 'El nombre debe tener al menos 2 caracteres';
  }

  if (!values.email.trim()) {
    errors.email = 'El email es requerido';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Ingresa un email válido';
  }

  if (!values.mensaje.trim()) {
    errors.mensaje = 'Cuéntanos sobre tu negocio';
  } else if (values.mensaje.trim().length < 10) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
  }

  return errors;
};

export const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const [form, setForm] = useState<FormState>({ nombre: '', email: '', mensaje: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    nombre: false,
    email: false,
    mensaje: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormState]) {
      setErrors(validateForm({ ...form, [name]: value }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validateForm(form));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ nombre: true, email: true, mensaje: true });
    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const text = encodeURIComponent(
      `Hola, me interesa una landing para mi negocio.\n\n` +
      `*Nombre:* ${form.nombre}\n` +
      `*Email:* ${form.email}\n` +
      `*Mensaje:* ${form.mensaje}`
    );

    setSubmitted(true);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setForm({ nombre: '', email: '', mensaje: '' });
    setErrors({});
    setTouched({ nombre: false, email: false, mensaje: false });
    setSubmitted(false);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Respuesta rápida. Perfecto para consultas inmediatas.',
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20interesa%20una%20landing%20para%20mi%20negocio`,
    },
    {
      icon: Mail,
      title: 'Email',
      description: '2whilecoding@gmail.com - Detallamos tu proyecto.',
      href: 'mailto:2whilecoding@gmail.com',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      description: '668 320 9979 - Llamanos cuando prefieras.',
      href: 'tel:+526683209979',
    },
  ];

  return (
    <section
      id="contacto"
      className="py-20 bg-dark-primary px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            ¿Listo para <span className="bg-gradient-brand bg-clip-text text-transparent">crecer en internet?</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Elige tu forma de contacto favorita. Responderemos lo más pronto posible.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => (
            <ContactMethod key={index} {...method} index={index} />
          ))}
        </div>

        {/* Contact Form */}
        <div
          className={`text-center transition-all duration-500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-300 mb-6">
            O completa el formulario y te escribiremos directo por WhatsApp:
          </p>

          <div className="max-w-md mx-auto">
            {submitted ? (
              <div className="card-dark rounded-xl p-8 flex flex-col items-center gap-4">
                <CheckCircle className="w-14 h-14 text-green-400" />
                <h3 className="text-xl font-bold text-white">¡Mensaje enviado!</h3>
                <p className="text-gray-300 text-sm">
                  Se abrió WhatsApp con tu consulta. Si no se abrió automáticamente, escríbenos directo al <strong className="text-white">668 320 9979</strong>.
                </p>
                <button
                  onClick={handleReset}
                  className="btn-primary mt-2"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Nombre */}
                <div className="text-left">
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tu nombre"
                    className={`w-full px-4 py-3 rounded-lg bg-dark-secondary border text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      touched.nombre && errors.nombre
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white border-opacity-10 focus:border-brand-electric'
                    }`}
                  />
                  {touched.nombre && errors.nombre && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {errors.nombre}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="text-left">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tu email"
                    className={`w-full px-4 py-3 rounded-lg bg-dark-secondary border text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      touched.email && errors.email
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white border-opacity-10 focus:border-brand-electric'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div className="text-left">
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Cuéntanos sobre tu negocio"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-secondary border text-white placeholder-gray-500 focus:outline-none transition-colors resize-none ${
                      touched.mensaje && errors.mensaje
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white border-opacity-10 focus:border-brand-electric'
                    }`}
                  />
                  {touched.mensaje && errors.mensaje && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {errors.mensaje}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar consulta por WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
