# Los Olvidos del Paraiso - Documentacion

## Resumen del Proyecto

**Nombre:** Los Olvidos del Paraiso - Landing Page Documental
**Tipo:** Sitio web single-page
**Idioma:** Espanol
**Estado:** Completado

### Informacion del Documental
- **Titulo:** "Los Olvidos del Paraiso"
- **Tagline:** "No todos habitan en el paraiso que ayudaron a construir"
- **Duracion:** 21:28
- **Pais:** Mexico
- **Categoria:** Documental
- **Genero:** Derechos Humanos
- **Tema:** Desigualdades

---

## Stack Tecnologico

| Tecnologia | Eleccion |
|------------|----------|
| Framework | Astro 5.x |
| Estilos | Tailwind CSS v4 via @tailwindcss/vite |
| Animaciones | GSAP + ScrollTrigger |
| Deployment | Netlify |
| Video | YouTube Embed (facade pattern) |
| Fuente | Maven Pro (Google Fonts) |

---

## Sistema de Diseno

### Paleta de Colores (OKLCH)
```css
/* Primario - Azul oceano desaturado */
--color-primary: oklch(0.50 0.08 220);

/* Secundario - Tonos tierra/terracota */
--color-secondary: oklch(0.55 0.10 45);

/* Fondos - Cinematico oscuro */
--color-background: oklch(0.12 0.02 260);
--color-surface: oklch(0.18 0.02 260);

/* Texto */
--color-text: oklch(0.95 0.01 260);
--color-text-secondary: oklch(0.75 0.02 260);
```

### Efectos Visuales
- **Film Grain:** Overlay de ruido animado al 3.5% opacidad
- **Vignette:** Gradiente radial en Hero y Quote sections
- **Glassmorphism:** Navegacion flotante con backdrop-filter

---

## Secciones de la Pagina

| Seccion | Descripcion |
|---------|-------------|
| Hero | Video de fondo, titulo con gradiente Quintana Roo, animacion de entrada |
| Introduction | Layout dos columnas, cita destacada |
| Synopsis | Texto centrado con comillas decorativas |
| Quote | Statement full-width con parallax y reveal caracter por caracter |
| Analysis | Grid de 4 tarjetas con reveal escalonado |
| Trailer | Embed YouTube con facade pattern |
| Team | Grid de 3 miembros del equipo |
| Gallery | Masonry grid de 9 imagenes |
| Footer | Metadata del documental |

---

## Componentes

### UI (`src/components/ui/`)
- `Button.astro` - Variantes: primary, secondary, ghost, outline
- `Card.astro` - Variantes: default, glass, elevated
- `Heading.astro` - h1-h6 con presets de tamano
- `Text.astro` - Variantes: body, lead, small, muted, accent
- `Image.astro` - Lazy loading con placeholder
- `VideoEmbed.astro` - YouTube facade pattern

### Animacion (`src/components/animation/`)
- `FadeIn.astro` - Fade con direccion, scroll-triggered
- `SlideIn.astro` - Reveal horizontal
- `Parallax.astro` - Movimiento basado en scroll
- `ScrollReveal.astro` - Animaciones: fade, scale, clip, blur

### Layout (`src/components/layout/`)
- `Section.astro` - Wrapper reutilizable
- `Navigation.astro` - Dock flotante glassmorphism
- `Footer.astro` - Metadata del documental

---

## Animaciones

### Configuracion Base
- **Duracion default:** 1.2s (deliberado, estilo documental)
- **Easing:** power2.out
- **Parallax:** 0.15 velocidad

### Hero
- Entrada de titulo: 1.8s
- Elementos flotantes: ciclos de 12-15s
- Movimiento sutil: 8-20px

### Quote
- Reveal caracter por caracter
- Stagger: 40ms entre caracteres
- Glow pulse: 8s ciclo

---

## Rendimiento

| Metrica | Objetivo |
|---------|----------|
| Page Load | < 3 segundos |
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |

### Estrategias Implementadas
- Lazy loading para imagenes
- YouTube facade (carga al interactuar)
- GSAP cargado async
- Soporte prefers-reduced-motion

---

## SEO y Accesibilidad

### Meta Tags
- Title, description, keywords
- Open Graph (Facebook)
- Twitter Cards
- Structured Data (Movie schema)
- robots, theme-color

### Accesibilidad (WCAG 2.1 AA)
- Skip-to-content link
- Focus-visible styles
- ARIA labels en navegacion
- HTML semantico
- Soporte reduced motion

---

## Estructura de Archivos

```
src/
├── components/
│   ├── animation/    # FadeIn, SlideIn, Parallax, ScrollReveal
│   ├── layout/       # Section, Navigation, Footer
│   ├── sections/     # Hero, Introduction, Synopsis, etc.
│   └── ui/           # Button, Card, Heading, Text, Image, VideoEmbed
├── data/
│   └── content.ts    # Todo el contenido en espanol
├── layouts/
│   └── Layout.astro  # SEO, OG, Twitter, Schema
├── pages/
│   └── index.astro   # Ensamblaje de secciones
├── scripts/
│   └── gsap.ts       # Utilidades GSAP
└── styles/
    └── global.css    # Variables CSS, film grain, vignette
```

---

## Equipo

| Nombre | Rol |
|--------|-----|
| Ernesto Arenas | Director |
| Elizabeth Morales | Direccion de Produccion |
| Pamela Pale | Diseno Sonoro y Edicion |

---

## Assets Pendientes

| Asset | Seccion | Estado |
|-------|---------|--------|
| Hero video | Hero | Completado |
| Foto retrato | Introduction | Pendiente |
| Foto impacto | Quote | Pendiente |
| URL trailer YouTube | Trailer | Pendiente |
| Fotos equipo | Team | Pendiente |
| Imagenes galeria | Gallery | Pendiente |

---

## Deployment

```bash
# Build
npm run build

# Netlify
Build command: npm run build
Publish directory: dist
Node version: 18+
```
