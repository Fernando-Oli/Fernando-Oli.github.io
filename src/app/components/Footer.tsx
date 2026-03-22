import { Github, Linkedin, Instagram, Heart } from "lucide-react";
import { LighthouseScore } from "./LighthouseScore";

const footerLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const socials = [
  { icon: Github, href: "https://github.com/Fernando-Oli", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/fernando1806", label: "LinkedIn" },
];

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t border-primary/15 bg-background-footer pt-12 px-6 pb-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">
          {/* Logo */}
          <div>
            <div className="mb-3">
              <span
                className="font-heading text-[2.2rem] tracking-[0.08em] text-primary"
              >
                FERNANDO
              </span>
              <span
                className="font-heading text-[2.2rem] tracking-[0.08em] text-secondary"
              >
                .OLIVEIRA
              </span>
            </div>
            <p
              className="max-w-[260px] font-sans text-[0.85rem] font-medium leading-[1.7] text-muted"
            >
              Programador Sênior I · Full Stack Developer. Construindo soluções inteligentes a partir de Anápolis, GO.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <p
              className="mb-3 font-sans text-[0.8rem] font-bold uppercase tracking-[0.1em] text-secondary"
            >
              Navegação
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  aria-label={link.label}
                  title={link.label}
                  className="cursor-pointer border-none bg-transparent py-0.5 text-left font-sans text-sm font-medium text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p
              className="mb-3 font-sans text-[0.8rem] font-bold uppercase tracking-[0.1em] text-secondary"
            >
              Redes
            </p>
            <div className="flex gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/7 text-muted transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <LighthouseScore />

        {/* Bottom bar */}
        <div
          className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-6"
        >
          <p
            className="font-sans text-[0.8rem] font-medium text-muted opacity-60"
          >
            © 2025 Fernando Luís Rodrigues de Oliveira — Todos os direitos reservados.
          </p>
          <p
            className="flex items-center gap-[5px] font-sans text-[0.8rem] font-medium text-muted opacity-60"
          >
            Feito com <Heart size={13} className="text-primary fill-primary" /> e muito café
          </p>
        </div>
      </div>
    </footer>
  );
}