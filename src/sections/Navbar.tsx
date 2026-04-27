import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-md border-b border-subtle'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="text-navy font-bold text-lg tracking-[0.12em] uppercase"
          >
            <img src="public\logoazul.png" alt="Identta Uniformes" className="h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-dark-gray hover:text-navy transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="https://wa.me/5513997273514"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white text-xs uppercase tracking-[0.05em] px-6 py-3 rounded-lg hover:bg-accent-blue transition-colors duration-200"
            >
              Falar no WhatsApp
            </a>
          </div>

          <button
            className="md:hidden text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl text-navy font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5513997273514"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy text-white text-sm uppercase tracking-[0.05em] px-8 py-4 rounded-lg mt-4"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
