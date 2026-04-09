# Prompt: Landing Page 2WhileCoding (React + Vite)

## 1. Contexto y objetivo
Crea una landing page profesional y moderna para la agencia de desarrollo web "2WhileCoding". Es una agencia de dos personas que ofrece servicios web a negocios pequeños y medianos en México.

La página debe estar hecha con React + Vite (TypeScript). Usa Tailwind CSS para los estilos. La arquitectura debe ser limpia, bien organizada en carpetas y lista para subir a GitHub.

## 2. Paleta de colores y diseño visual
- Fondo principal oscuro: #0D0D1A (casi negro, tono azul-marino)
- Fondo secundario/cards: #111827 o #13132b
- Azul eléctrico (acento primario): #4A90D9 (#3B82F6 Tailwind blue-500)
- Blanco puro para texto principal: #FFFFFF
- Gris claro para texto secundario: #9CA3AF
- Gradiente CTA: de #3B82F6 a #7C3AED (azul → violeta)
- Verde WhatsApp en botón: #25D366

Estética general:
- Dark mode por defecto (sin toggle)
- Fuente: Inter (desde Google Fonts)
- Bordes con ligero resplandor azul en hover
- Secciones con fondo alternado entre #0D0D1A y #0f0f22
- Cards con border: 1px solid rgba(255,255,255,0.08) y backdrop-blur-sm

## 3. Secciones de la landing (en este orden)

### NAVBAR
- Logo SVG inline del símbolo ∞ + texto "2WhileCoding"
- Links: Servicios | ¿Cómo funciona? | Precios | Contacto
- CTA botón: "Empieza hoy" → scroll a sección de contacto
- Sticky + fondo translúcido con blur al hacer scroll

### HERO
- Headline: "Consigue más clientes desde internet"
- Subheadline: "Creamos tu landing profesional lista para vender — rápido, bonita y con todo incluido."
- Dos botones: "Empieza hoy →" (primario) y "Ver ejemplos" (secundario outline)
- Badge animado: "✓ Hosting incluido · ✓ Listo en días · ✓ WhatsApp integrado"
- Imagen decorativa: mockup de celular con web de ejemplo (SVG estilizado o placeholder)

### SERVICIOS (Cards)
- Título: "¿Qué incluye tu landing?"
- 5 cards con ícono, título y descripción:
  · ⚡ Diseño moderno
  · 💬 Botón directo a WhatsApp
  · 🌐 Hosting incluido
  · ⏱ Lista en pocos días
  · 🔥 Orientada a ventas

### CÓMO FUNCIONA
- Título: "Tu web lista en 3 pasos"
- Paso 1: Nos contactas y nos cuentas de tu negocio
- Paso 2: Diseñamos y desarrollamos tu landing
- Paso 3: La publicamos y te entregamos lista para vender

### PRECIOS
- Título: "Un precio claro, sin sorpresas"
- Card centrada: desde $3,999 MXN + lista de incluidos + CTA

### CONTACTO / CTA FINAL
- Título: "¿Listo para crecer en internet?"
- Botón WhatsApp verde: https://wa.me/526682101610?text=Hola,%20me%20interesa%20una%20landing%20para%20mi%20negocio
- Email: mailto:2whilecoding@gmail.com
- Teléfonos: 668 210 1610 · 664 775 5550

### FOOTER
- Logo + tagline: "Infinite Logic. Two Minds. One Loop."
- Links rápidos, email, teléfonos
- © 2025 2WhileCoding. Todos los derechos reservados.

## 4. Componentes y funcionalidad
Componentes en /src/components/:
Navbar.tsx, Hero.tsx, Services.tsx, HowItWorks.tsx, Pricing.tsx, Contact.tsx, Footer.tsx, WhatsAppButton.tsx

Funcionalidades:
- Smooth scroll a secciones
- Botón flotante de WhatsApp (esquina inferior derecha, siempre visible): https://wa.me/526682101610
- Animaciones fade-up con Intersection Observer al hacer scroll
- Responsive mobile-first (sm/md/lg)
- Meta tags SEO básicos en index.html

## 5. Estructura de archivos
2whilecoding-landing/
├── public/favicon.ico
├── src/
│   ├── components/ (todos los componentes mencionados)
│   ├── assets/logo.svg
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md

## 6. README.md
Incluir un README completo con: descripción, tecnologías, requisitos, instalación (git clone + npm install + npm run dev), scripts disponibles (tabla), personalización, y datos de contacto de la agencia.

## 7. Instrucciones finales
- Genera TODOS los archivos de una vez, sin placeholders
- El código debe compilar sin errores con npm run dev
- Usa lucide-react para íconos
- No uses librerías de animación externas (solo CSS + Intersection Observer)
- El logo ∞ debe ser SVG inline
- Tailwind config debe extender los colores de la marca
- Todos los textos en español latinoamericano
- Agrega comentarios en el código explicando cada sección importante