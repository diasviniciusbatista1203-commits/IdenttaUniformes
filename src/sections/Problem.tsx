import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProblemCard {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  isBefore: boolean;
}

const cards: ProblemCard[] = [
  {
    label: 'ANTES',
    title: 'Visual bagunçado',
    description: 'Funcionários com roupas variadas, sem coerência. O cliente não sabe quem é da equipe.',
    image: '/imagem-restaurante.png',
    imageAlt: 'Restaurante antes - equipe despadronizada',
    isBefore: true,
  },
  {
    label: 'DEPOIS',
    title: 'Equipe com identidade',
    description: 'Equipe padronizada com a cor da marca. Profissionalismo visível desde a porta.',
    image: '/imagem-restaurante-depois.png',
    imageAlt: 'Restaurante depois - equipe com uniforme padrão',
    isBefore: false,
  },
];

export default function Problem() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const card1Ref = useScrollReveal<HTMLDivElement>();
  const card2Ref = useScrollReveal<HTMLDivElement>();

  const cardRefs = [card1Ref, card2Ref];

  return (
    <section
      id="beneficios"
      ref={sectionRef}
      className="bg-white py-24 lg:py-32"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-medium-gray uppercase tracking-[0.08em] font-medium mb-4">
            O PROBLEMA
          </p>
          <h2 className="text-3xl lg:text-[40px] text-navy font-bold leading-tight max-w-[640px] mx-auto mb-6">
            Equipe despadronizada = cliente desconfiado
          </h2>
          <p className="text-base text-dark-gray max-w-[560px] mx-auto leading-relaxed">
            Quando cada funcionário veste o que quer, seu negócio perde autoridade. A primeira impressão é visual e você só tem uma chance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.label}
              ref={cardRefs[index]}
              className={`rounded-lg p-8 transition-all duration-300 hover:shadow-lg ${
                card.isBefore
                  ? 'bg-light-gray border border-subtle'
                  : 'bg-white border-2 border-navy'
              }`}
            >
              {/* Label */}
              <p className={`text-xs uppercase tracking-[0.05em] font-medium mb-4 ${
                card.isBefore ? 'text-medium-gray' : 'text-navy'
              }`}>
                {card.label}
              </p>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl text-navy font-bold mb-4">
                {card.title}
              </h3>

              {/* Image */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-sm text-dark-gray leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
