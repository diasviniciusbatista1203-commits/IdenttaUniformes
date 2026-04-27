import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    num: '01',
    title: 'Base do seu negócio',
    desc: 'Camisetas e polos desenvolvidas para uso intenso no dia a dia. Tecidos confortáveis, resistentes e que mantêm a boa aparência mesmo após horas de trabalho e lavagens frequentes.',
  },
  {
    num: '02',
    title: 'Presença em qualquer clima',
    desc: 'Jaquetas e blusões pensados para manter o padrão da equipe em dias frios ou mudanças de temperatura, sem abrir mão do conforto e da identidade visual da empresa.',
  },
  {
    num: '03',
    title: 'Calças profissionais',
    desc: 'Modelagem funcional com bolsos estratégicos, caimento alinhado e alta durabilidade. Ideais para rotinas exigentes, garantindo conforto e resistência durante toda a jornada.',
  },
  {
    num: '04',
    title: 'Uniforme completo e padronizado',
    desc: 'Da camiseta ao avental, desenvolvemos conjuntos completos para sua equipe. Tudo alinhado para transmitir organização, profissionalismo e fortalecer a identidade da sua marca.',
  },
  {
    num: '05',
    title: 'Personalização e acabamento premium',
    desc: 'Aplicamos silk, bordado, DTF e patch com alta qualidade e definição. As estampas não descascam, não desbotam facilmente e mantêm a aparência profissional do uniforme por muito mais tempo.',
  },
];

export default function Services() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="servicos" className="bg-light-gray py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headerRef} className="mb-16">
          <p className="text-xs text-medium-gray uppercase tracking-[0.08em] font-medium mb-4">
            O QUE ENTREGAMOS
          </p>
          <h2 className="text-3xl lg:text-[40px] text-navy font-bold leading-tight max-w-[700px] mb-6">
            Uniformes feitos para a realidade do seu negócio
          </h2>
          <p className="text-base text-dark-gray max-w-[600px] leading-relaxed">
            Não vendemos catálogo genérico. Cada peça é pensada para funcionar no dia a dia da sua equipe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.num} service={service} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: { num: string; title: string; desc: string };
  delay: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="bg-white border border-subtle rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-[0_8px_24px_rgba(13,43,69,0.08)]"
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="text-xs text-navy uppercase tracking-[0.05em] font-medium block mb-4">
        {service.num}
      </span>
      <h3 className="text-xl text-navy font-bold mb-3">{service.title}</h3>
      <p className="text-sm text-dark-gray leading-relaxed">{service.desc}</p>
    </div>
  );
}
