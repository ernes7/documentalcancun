# Los Olvidos del Paraiso

Landing page para el documental "Los Olvidos del Paraiso" - una mirada critica a las desigualdades sociales en Cancun, Mexico.

## Tecnologias

- **Astro 5** - Framework web estatico
- **Tailwind CSS v4** - Estilos con CSS-first config
- **GSAP + ScrollTrigger** - Animaciones cinematicas
- **Maven Pro** - Tipografia

## Caracteristicas

- Tema oscuro cinematico con efecto film grain
- Video de fondo en hero section
- Animaciones scroll-triggered y parallax
- Navegacion flotante con glassmorphism
- Paleta de colores inspirada en Quintana Roo
- Reveal de texto caracter por caracter
- Soporte para reduced motion
- SEO optimizado con Open Graph y Twitter Cards

## Comandos

```bash
npm install      # Instalar dependencias
npm run dev      # Servidor local en localhost:4321
npm run build    # Construir para produccion
npm run preview  # Previsualizar build
```

## Estructura

```
src/
├── components/
│   ├── animation/   # FadeIn, Parallax, ScrollReveal
│   ├── layout/      # Navigation, Footer, Section
│   ├── sections/    # Hero, Synopsis, Analysis, etc.
│   └── ui/          # Button, Card, Heading, Text
├── data/
│   └── content.ts   # Contenido en espanol
├── layouts/
│   └── Layout.astro # SEO, meta tags, fonts
└── styles/
    └── global.css   # Variables CSS, film grain, vignette
```

## Creditos

- **Director:** Ernesto Arenas
- **Produccion:** Elizabeth Morales
- **Diseno Sonoro:** Pamela Pale
