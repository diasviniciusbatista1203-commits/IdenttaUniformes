import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Conversa',
    desc: 'Você manda uma mensagem no WhatsApp. A gente entende seu negócio em minutos.',
  },
  {
    num: '02',
    title: 'Orçamento',
    desc: 'Recebe opções com preço, prazo e amostra de tecido. Claro e direto.',
  },
  {
    num: '03',
    title: 'Aprovação',
    desc: 'Você valida cor, logo e corte. Ajustamos o que precisar.',
  },
  {
    num: '04',
    title: 'Entrega',
    desc: 'Produção local, prazo real. Sua equipe pronta para impressionar.',
  },
];

export default function Process() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-xs text-medium-gray uppercase tracking-[0.08em] font-medium mb-4">
            COMO FUNCIONA
          </p>
          <h2 className="text-3xl lg:text-[40px] text-navy font-bold leading-tight">
            De primeiro contato à equipe uniformizada
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:flex items-start justify-between gap-8">
          {steps.map((step, i) => (
            <StepItem key={step.num} step={step} index={i} total={steps.length} />
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="flex md:hidden flex-col gap-8">
          {steps.map((step, i) => (
            <StepItemMobile key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({
  step,
  index,
  total,
}: {
  step: { num: string; title: string; desc: string };
  index: number;
  total: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="flex-1 flex flex-col items-center text-center relative">
      {/* Connecting line */}
      {index < total - 1 && (
        <div className="absolute top-6 left-[60%] w-[80%] h-px border-t border-dashed border-navy" />
      )}

      <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold mb-4 z-10">
        {step.num}
      </div>
      <h3 className="text-lg text-navy font-bold mb-2">{step.title}</h3>
      <p className="text-sm text-dark-gray leading-relaxed max-w-[240px]">
        {step.desc}
      </p>
    </div>
  );
}

function StepItemMobile({
  step,
}: {
  step: { num: string; title: string; desc: string };
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold shrink-0">
        {step.num}
      </div>
      <div>
        <h3 className="text-lg text-navy font-bold mb-1">{step.title}</h3>
        <p className="text-sm text-dark-gray leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
}
