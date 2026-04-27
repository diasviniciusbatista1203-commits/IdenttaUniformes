export default function Footer() {
  return (
    <footer className="bg-white border-t border-navy py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left - Logo & Tagline */}
          <div>
            <span className="text-navy font-bold text-lg tracking-[0.1em] uppercase block mb-2">
              IDENTTA
            </span>
            <p className="text-sm text-medium-gray max-w-[300px]">
              Uniformes profissionais para empresas que levam imagem a sério.
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap gap-6">
            {[
              { label: 'Início', href: '#inicio' },
              { label: 'Benefícios', href: '#beneficios' },
              { label: 'Serviços', href: '#servicos' },
              { label: 'Portfólio', href: '#portfolio' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-dark-gray hover:text-navy transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right - Contact */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <a
              href="https://wa.me/5513997273514"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white text-xs uppercase tracking-[0.05em] px-5 py-2.5 rounded-lg hover:bg-accent-blue transition-colors duration-200"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/identta.uniformes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-dark-gray hover:text-navy transition-colors duration-200"
            >
              @identta.uniformes
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-subtle text-center">
          <p className="text-xs text-medium-gray">
            © 2026 Identta Uniformes. Registro, SP.
          </p>
        </div>
      </div>
    </footer>
  );
}
