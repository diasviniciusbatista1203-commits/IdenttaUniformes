import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Kabanna Steakhouse',
    role: 'Proprietário, Kabanna Steakhouse',
    quote: ' Os uniformes da Identta fizeram diferença real na rotina da equipe. São leves, confortáveis e ajudam muito dentro da cozinha, principalmente por não esquentarem como os modelos tradicionais. A equipe aprovou. ',
  },
  {
    name: 'Orca Sistemas',
    role: 'Gerente, Orca Sistemas',
    quote: ' A Identta superou nossas expectativas. Atendimento ágil, produção rápida e um resultado final que realmente transmite profissionalismo.',
  },
  {
    name: 'Regina Célia Dias',
    role: 'Professora, Escola Estadual',
    quote: ' A Identta entregou um trabalho de qualidade. Os uniformes são confortáveis, bem acabados e contribuíram para um ambiente mais organizado e profissional na escola. Recomendo. ',
  },
];

export default function Testimonials() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="depoimentos" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-xs text-medium-gray uppercase tracking-[0.08em] font-medium mb-4">
            DEPOIMENTOS
          </p>
          <h2 className="text-3xl lg:text-[40px] text-navy font-bold leading-tight">
            O que dizem quem já fez a mudança
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: { name: string; role: string; quote: string };
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="bg-white border border-subtle rounded-lg p-8 h-full transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(13,43,69,0.06)]"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-navy fill-navy" />
        ))}
      </div>
      <p className="text-base text-dark-gray leading-relaxed italic mb-6">
        “{testimonial.quote}”
      </p>
      <div>
        <p className="text-sm text-navy font-bold">{testimonial.name}</p>
        <p className="text-sm text-medium-gray">{testimonial.role}</p>
      </div>
    </div>
  );
}
