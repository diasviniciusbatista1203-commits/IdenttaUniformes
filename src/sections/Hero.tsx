import { useEffect, useRef } from 'react';
import { useParallax } from '../hooks/useParallax';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { containerRef, imageRef } = useParallax(0.5);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const children = section.querySelectorAll('.hero-animate');
    children.forEach((el, i) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(24px)';
      (el as HTMLElement).style.transition = `opacity 0.6s ease ${0.1 + i * 0.15}s, transform 0.6s ease ${0.1 + i * 0.15}s`;
    });

    requestAnimationFrame(() => {
      children.forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      });
    });
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen bg-white overflow-hidden pt-16"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(13,43,69,0.04) 79px, rgba(13,43,69,0.04) 80px),
            repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(13,43,69,0.04) 79px, rgba(13,43,69,0.04) 80px)
          `,
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 min-h-[calc(100vh-64px)] flex flex-col lg:flex-row items-center gap-12 lg:gap-8 py-12 lg:py-0">
        {/* Left Column - Text */}
        <div className="flex-1 lg:max-w-[55%] z-10">

          <h1 className="hero-animate text-4xl sm:text-5xl lg:text-[64px] text-navy font-bold leading-[1.1] tracking-[-0.02em] mb-6">
            Sua equipe
            <br />
            parece amadora?
          </h1>

          <p className="hero-animate text-lg text-dark-gray leading-relaxed max-w-[480px] mb-8">
            Uniformizar é a forma mais rápida e barata de elevar a percepção do seu negócio. Atendimento local. Resultado concreto. Sem burocracia.
          </p>

          <div className="hero-animate flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href="https://wa.me/5513997273514"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white text-sm uppercase tracking-[0.05em] px-8 py-4 rounded-lg hover:bg-accent-blue transition-all duration-300 text-center"
            >
              Quero um orçamento
            </a>
            <a
              href="#portfolio"
              className="bg-white text-navy text-sm uppercase tracking-[0.05em] px-8 py-4 rounded-lg border border-navy hover:bg-light-gray transition-all duration-300 text-center"
            >
              Ver resultados
            </a>
          </div>

          <p className="hero-animate text-sm text-medium-gray flex items-center gap-2">
            <span>📍</span> Registro SP · Atendimento em todo o Vale do Ribeira
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 lg:max-w-[45%] w-full z-10">
          <div
            ref={containerRef}
            className="relative overflow-hidden rounded-xl border border-navy"
            style={{ height: '500px' }}
          >
            <img
              ref={imageRef}
              src="/imagem-antes-depois.png"
              alt="Equipe uniformizada da Identta"
              className="w-full h-[120%] object-cover"
              style={{ willChange: 'transform' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
