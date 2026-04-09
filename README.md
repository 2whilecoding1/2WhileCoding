# 2WhileCoding - Landing Page

Agencia de desarrollo web minimalista especializada en landing pages profesionales para negocios pequeños y medianos en México.

## 🚀 Descripción

Landing page moderna y profesional para la agencia **2WhileCoding**, construida con tecnologías modernas y enfocada en conversión. La página presenta los servicios, el modelo de trabajo y la propuesta de valor de la agencia de una manera clara y atractiva.

## 💻 Tecnologías

- **Frontend Framework**: [React 18](https://react.dev/) - Librería JavaScript para construir interfaces de usuario
- **Build Tool**: [Vite](https://vitejs.dev/) - Build tool rápido y moderno
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) - Tipado estático para JavaScript
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- **Iconos**: [Lucide React](https://lucide.dev/) - Librería de iconos bonitos y simples
- **Animaciones**: CSS3 + Intersection Observer API - Sin dependencias externas

## 📋 Requisitos

- Node.js 16.x o superior
- npm o yarn

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/2WhileCoding/landing-page.git
   cd landing-page
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173`

## 🛠️ Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con hot reload |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Previsualiza la build de producción localmente |
| `npm run lint` | Ejecuta ESLint para verificar la calidad del código |

## 📁 Estructura de Carpetas

```
2whilecoding-landing/
├── public/
│   └── favicon.ico                 # Favicon del sitio
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Barra de navegación
│   │   ├── Hero.tsx                # Sección hero/principal
│   │   ├── Services.tsx            # Sección de servicios
│   │   ├── HowItWorks.tsx          # Sección ¿Cómo funciona?
│   │   ├── Pricing.tsx             # Sección de precios
│   │   ├── Contact.tsx             # Sección de contacto
│   │   ├── Footer.tsx              # Pie de página
│   │   ├── WhatsAppButton.tsx      # Botón flotante de WhatsApp
│   │   └── index.ts                # Exportaciones de componentes
│   ├── assets/                     # Archivos estáticos
│   ├── App.tsx                     # Componente principal
│   ├── main.tsx                    # Punto de entrada
│   └── index.css                   # Estilos globales
│
├── index.html                      # HTML principal
├── vite.config.ts                  # Configuración de Vite
├── tailwind.config.ts              # Configuración de Tailwind CSS
├── tsconfig.json                   # Configuración de TypeScript
├── package.json                    # Dependencias y scripts
├── postcss.config.js               # Configuración de PostCSS
├── .gitignore                      # Archivos ignorados por git
└── README.md                       # Este archivo
```

## 🎨 Personalización

### Colores

Los colores de la marca están definidos en `tailwind.config.ts`. Edita la sección `colors` para cambiar la paleta:

```typescript
colors: {
  dark: {
    primary: '#0D0D1A',    // Fondo principal
    secondary: '#111827',  // Fondo secundario
    tertiary: '#0f0f22',   // Fondo terciario
    card: '#13132b',       // Fondo de cards
  },
  brand: {
    blue: '#4A90D9',       // Azul primario
    electric: '#3B82F6',   // Azul eléctrico
    purple: '#7C3AED',     // Púrpura
    green: '#25D366',      // Verde WhatsApp
    gray: '#9CA3AF',       // Gris
  },
}
```

### Textos

Todos los textos están en español latinoamericano y se encuentran directamente en los componentes:

- **Navbar.tsx**: Enlaces y CTA principal
- **Hero.tsx**: Headline, subheadline y características
- **Services.tsx**: Título de servicios y cards
- **HowItWorks.tsx**: Pasos del proceso
- **Pricing.tsx**: Precio y características
- **Contact.tsx**: Métodos de contacto
- **Footer.tsx**: Información de contacto y links

### Enlaces de Contacto

Actualiza los números de WhatsApp y email en:

1. **Navbar.tsx**: CTA del navbar
2. **Hero.tsx**: Botones secundarios
3. **HowItWorks.tsx**: CTA final
4. **Pricing.tsx**: Botón de compra
5. **Contact.tsx**: Métodos de contacto y formulario
6. **WhatsAppButton.tsx**: Botón flotante
7. **Footer.tsx**: Enlaces en el pie

Números actuales:
- WhatsApp: `+526682101610`
- Email: `2whilecoding@gmail.com`
- Teléfono alternativo: `+526647755550`

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. Vercel detectará automáticamente Vite y hará el deploy
3. Tu sitio estará listo en minutos

### Netlify

1. Conecta tu repositorio en [Netlify](https://netlify.com)
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `dist`

### GitHub Pages

1. Agrega a `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/',
     // ... resto de config
   })
   ```

2. Deploy ejecutando:
   ```bash
   npm run build
   git add dist && git commit -m "Deploy"
   git subtree push --prefix dist origin gh-pages
   ```

3. Si vas a usar `2whilecoding.com`, agrega el dominio personalizado en la configuración de GitHub Pages.

### Dominio Propio

Para usar `2whilecoding.com`, el dominio debe apuntar al hosting que elijas mediante DNS. El proyecto ya está preparado para servir desde la raíz `/`.

## 📱 Características

✅ **Responsive Design** - Se adapta a todos los tamaños de pantalla
✅ **Dark Mode** - Modo oscuro por defecto
✅ **Smooth Scroll** - Navegación suave entre secciones
✅ **Animaciones** - Fade-up animations al hacer scroll (sin librerías externas)
✅ **Botón WhatsApp Flotante** - Acceso rápido a contacto
✅ **Optimizado para SEO** - Meta tags y estructura semántica
✅ **TypeScript** - Código tipado y más seguro
✅ **Lighthouse Friendly** - Optimizado para performance

## 🔧 Desarrollo

### Agregar nuevos componentes

1. Crea un archivo `.tsx` en `src/components/`
2. Exporta el componente en `src/components/index.ts`
3. Importa en `App.tsx` y úsalo

### Modificar estilos

Tailwind CSS está configurado con clases utility. Los estilos personalizados están en:
- `src/index.css` - Estilos globales y animaciones
- `tailwind.config.ts` - Extensión de tema

## 📊 Performance

La página está optimizada para:
- ⚡ Cargas rápidas (Vite)
- 🎯 Core Web Vitals
- 📱 Mobile-first
- 🔍 SEO

## 📝 Licencia

© 2025 2WhileCoding - Todos los derechos reservados.

## 📧 Contacto

- **Email**: 2whilecoding@gmail.com
- **WhatsApp**: +526682101610
- **Teléfono**: +526647755550

---

**Hecho con ❤️ en México**
