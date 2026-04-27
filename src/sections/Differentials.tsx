import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';

const differentials = [
  {
    num: '01',
    title: 'Atendimento próximo',
    desc: 'Empresa local. Resposta rápida. A gente entende a realidade de Registro e Vale do Ribeira porque faz parte dela.',
  },
  {
    num: '02',
    title: 'Personalização real',
    desc: 'Não enviamos catálogo genérico. O uniforme é feito para o negócio do cliente. cor, logo, tecido, corte.',
  },
  {
    num: '03',
    title: 'Resultado concreto',
    desc: 'Projetos entregues e equipes uniformizadas. Como o Kabanna Steakhouse, que elevou a percepção do restaurante.',
  },
  {
    num: '04',
    title: 'Processo simples',
    desc: 'Orçamento no WhatsApp. Aprovação rápida. Pedido sem burocracia. Você não perde tempo.',
  },
];

export default function Differentials() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const { containerRef, imageRef } = useParallax(0.8);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
          {/* Left Column - Text */}
          <div className="lg:w-[60%]">
            <div ref={headerRef} className="mb-12">
              <p className="text-xs text-medium-gray uppercase tracking-[0.08em] font-medium mb-4">
                POR QUE A IDENTTA
              </p>
              <h2 className="text-3xl lg:text-4xl text-navy font-bold leading-[1.15] mb-6">
                Não somos mais um fornecedor. Somos seu parceiro de imagem.
              </h2>
              <p className="text-base text-dark-gray leading-relaxed">
                Empresas da região escolhem a Identta porque entregamos o que prometemos sem enrolação.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {differentials.map((diff, i) => (
                <DifferentialItem key={diff.num} diff={diff} index={i} />
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-[40%]">
            <div
              ref={containerRef}
              className="relative overflow-hidden rounded-xl border border-navy"
              style={{ height: '500px' }}
            >
              <img
                ref={imageRef}
                src="/imagem.png"
                alt="Uniformes profissionais Identta"
                className="w-full h-[120%] object-cover"
                style={{ willChange: 'transform' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferentialItem({
  diff,
  index,
}: {
  diff: { num: string; title: string; desc: string };
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`pb-8 ${index < 3 ? 'border-b border-subtle' : ''}`}
    >
      <span className="text-xs text-navy uppercase tracking-[0.05em] font-medium block mb-2">
        {diff.num}
      </span>
      <h3 className="text-xl text-navy font-bold mb-2">{diff.title}</h3>
      <p className="text-sm text-dark-gray leading-relaxed max-w-[440px]">
        {diff.desc}
      </p>
    </div>
  );
}
