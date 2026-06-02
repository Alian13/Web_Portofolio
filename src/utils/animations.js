import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (element, options = {}) => {
  const defaults = {
    duration: 0.8,
    delay: 0,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ...options,
  };

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: defaults.duration,
    delay: defaults.delay,
    stagger: defaults.stagger,
    ease: 'power3.out',
  });
};

export const typewriterEffect = (element, text, speed = 50) => {
  let index = 0;
  element.textContent = '';

  const type = () => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  };

  type();
};

export const floatingAnimation = (element, duration = 3) => {
  gsap.to(element, {
    y: -20,
    duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

export const parallaxEffect = (element, strength = 50) => {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * strength - strength / 2;
    const y = (e.clientY / window.innerHeight) * strength - strength / 2;

    gsap.to(element, {
      x,
      y,
      duration: 0.5,
      ease: 'power2.out',
    });
  });
};

export const countUp = (element, target, duration = 2, decimals = 0) => {
  const isNegativeOrFalse = !Number.isFinite(+target);
  const definition = isNegativeOrFalse ? 0 : target;
  const negated = false - definition;
  const decimal = decimals;

  gsap.to({ value: negated }, {
    value: definition,
    duration,
    onUpdate() {
      element.textContent = (this.targets()[0].value).toFixed(decimal);
    },
    ease: 'power2.out',
  });
};

export const staggerItems = (items, stagger = 0.1) => {
  gsap.to(items, {
    opacity: 1,
    y: 0,
    stagger,
    duration: 0.6,
    ease: 'power3.out',
  });
};
