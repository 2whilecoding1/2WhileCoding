import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/526682101610?text=Hola,%20me%20interesa%20una%20landing%20para%20mi%20negocio"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/50 hover:shadow-green-500/75 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-40"
      aria-label="Contactanos por WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
};
