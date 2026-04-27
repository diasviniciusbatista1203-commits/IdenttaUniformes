import { useEffect, useRef } from 'react';

export default function CTAFinal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const children = section.querySelectorAll('.cta-animate');
    children.forEach((el, i) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = i === 2 ? 'scale(0.95)' : 'translateY(24px)';
      (el as HTMLElement).style.transition = `opacity 0.6s ease ${0.1 + i * 0.2}s, transform 0.6s ease ${0.1 + i * 0.2}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          children.forEach((el, idx) => {
            (el as HTMLElement).style.opacity = '1';
            (el as HTMLElement).style.transform = idx === 2 ? 'scale(1)' : 'translateY(0)';
          });
          observer.unobserve(section);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="bg-navy py-24 lg:py-32"
    >
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="cta-animate text-3xl lg:text-5xl text-white font-bold max-w-[600px] mx-auto mb-6 leading-tight">
          Pronto para elevar a imagem do seu negócio?
        </h2>

        <p className="cta-animate text-lg text-white/70 max-w-[480px] mx-auto mb-10 leading-relaxed">
          Orçamento grátis. Resposta em minutos. Atendimento em Registro e toda a região.
        </p>

        <div className="cta-animate mb-8">
          <a
            href="https://wa.me/5513997273514"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-navy text-sm uppercase tracking-[0.05em] px-10 py-5 rounded-lg hover:bg-light-gray transition-colors duration-200 font-medium"
          >
            Falar no WhatsApp
          </a>
        </div>

        <a
          href="https://instagram.com/identta.uniformes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/60 hover:text-white transition-colors duration-200"
        >
          @identta.uniformes no Instagram
        </a>

        <div className="cta-animate flex flex-wrap items-center justify-center gap-6 mt-12">
          <span className="text-xs text-white/50 uppercase tracking-[0.05em]">
            ✓ Atendimento local
          </span>
          <span className="text-xs text-white/50 uppercase tracking-[0.05em]">
            ✓ Orçamento sem compromisso
          </span>
          <span className="text-xs text-white/50 uppercase tracking-[0.05em]">
            ✓ Prazo real
          </span>
        </div>
      </div>
    </section>
  );
}
