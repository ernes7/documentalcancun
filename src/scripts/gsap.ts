import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Default animation settings (slower, more deliberate for documentary theme)
export const defaultDuration = prefersReducedMotion ? 0 : 1.2;
export const defaultEase = 'power2.out';

// Configure GSAP defaults
gsap.defaults({
  duration: defaultDuration,
  ease: defaultEase,
});

// Configure ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
});

// Utility: Fade in from below
export function fadeInUp(
  element: gsap.TweenTarget,
  options: gsap.TweenVars = {}
) {
  if (prefersReducedMotion) {
    gsap.set(element, { opacity: 1, y: 0 });
    return;
  }

  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: defaultDuration,
    ...options,
  });
}

// Utility: Stagger fade in
export function staggerFadeIn(
  elements: gsap.TweenTarget,
  options: gsap.TweenVars = {}
) {
  if (prefersReducedMotion) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return;
  }

  return gsap.from(elements, {
    opacity: 0,
    y: 20,
    duration: defaultDuration,
    stagger: 0.15,
    ...options,
  });
}

// Utility: Parallax effect
export function createParallax(
  element: gsap.TweenTarget,
  speed: number = 0.5
) {
  if (prefersReducedMotion) return;

  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element as Element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}

// Utility: Continuous floating animation
export function floatAnimation(
  element: gsap.TweenTarget,
  options: { y?: number; duration?: number; delay?: number } = {}
) {
  if (prefersReducedMotion) return;

  const { y = 5, duration = 8, delay = 0 } = options;

  return gsap.to(element, {
    y: y,
    duration: duration,
    delay: delay,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}

// Utility: Subtle pulse animation
export function pulseAnimation(
  element: gsap.TweenTarget,
  options: { scale?: number; duration?: number } = {}
) {
  if (prefersReducedMotion) return;

  const { scale = 1.01, duration = 6 } = options;

  return gsap.to(element, {
    scale: scale,
    duration: duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}

// Utility: Text reveal (character by character)
export function textReveal(
  element: HTMLElement,
  options: gsap.TweenVars = {}
) {
  if (prefersReducedMotion) {
    gsap.set(element, { opacity: 1 });
    return;
  }

  const text = element.textContent || '';
  element.innerHTML = '';

  // Split text into spans
  text.split('').forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    element.appendChild(span);
  });

  return gsap.to(element.children, {
    opacity: 1,
    y: 0,
    duration: 0.03,
    stagger: 0.04,
    ease: 'none',
    ...options,
  });
}

// Utility: Create scroll-triggered animation
export function onScroll(
  element: gsap.TweenTarget,
  animation: gsap.TweenVars,
  triggerOptions: ScrollTrigger.Vars = {}
) {
  if (prefersReducedMotion) {
    gsap.set(element, { opacity: 1, y: 0, x: 0, scale: 1 });
    return;
  }

  return gsap.from(element, {
    ...animation,
    scrollTrigger: {
      trigger: element as Element,
      start: 'top 80%',
      end: 'bottom 20%',
      ...triggerOptions,
    },
  });
}

// Export gsap and ScrollTrigger for direct use
export { gsap, ScrollTrigger };
