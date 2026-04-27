import { useEffect, useRef } from 'react';

export function useParallax(speed: number = 0.5) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef<number>(0);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0]?.isIntersecting ?? false;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const handleScroll = () => {
      if (!isVisibleRef.current) return;
      
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = (rect.top + rect.height) / (windowHeight + rect.height);
        const translateY = (progress - 0.5) * speed * -20;
        image.style.transform = `translateY(${translateY}%)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [speed]);

  return { containerRef, imageRef };
}
