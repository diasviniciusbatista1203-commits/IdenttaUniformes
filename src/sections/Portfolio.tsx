import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    image: '/kabanna-team.png',
    title: 'Kabanna Steakhouse',
    tags: 'Restaurante · Bordado · Polo',
    quote: ' Os uniformes da Identta fizeram diferença real na rotina da equipe. ',
  },
  {
    image: 'orca-sistemas.png',
    title: 'Orca Sistemas',
    tags: 'Software · DTF · Polo',
    quote: ' A Identta superou nossas expectativas. ',
  },
];

export default function Portfolio() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="portfolio" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headerRef} className="mb-16">
          <p className="text-xs text-medium-gray uppercase tracking-[0.08em] font-medium mb-4">
            PORTFÓLIO
          </p>
          <h2 className="text-3xl lg:text-[40px] text-navy font-bold leading-tight mb-6">
            Quem já uniformizou com a Identta
          </h2>
          <p className="text-base text-dark-gray max-w-[600px] leading-relaxed">
            Resultado real de empresas locais que decidiram investir na imagem da equipe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: { image: string; title: string; tags: string; quote: string };
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="group bg-white border border-subtle rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(13,43,69,0.08)]"
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.03]"
        />
      </div>
      <div className="border-t border-navy p-6">
        <h3 className="text-xl text-navy font-bold mb-1">{project.title}</h3>
        <p className="text-xs text-medium-gray uppercase tracking-[0.05em] mb-4">
          {project.tags}
        </p>
        <p className="text-sm text-dark-gray italic leading-relaxed">
          “{project.quote}”
        </p>
      </div>
    </div>
  );
}
