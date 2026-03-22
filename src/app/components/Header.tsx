import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-in-out ${scrolled
        ? "bg-background/95 backdrop-blur-md border-b border-primary/15"
        : "bg-transparent border-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer"
          onClick={() => handleNavClick("#hero")}
        >
          <span className="text-primary text-xl font-mono tracking-wider">
            FERNANDO
          </span>
          <span className="text-secondary  text-xl font-mono tracking-wider">
            .OLIVEIRA
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 + 0.2 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              aria-label={`Ir para a seção ${link.label}`}
              className="group relative cursor-pointer border-none bg-none py-1 font-sans text-sm font-medium text-muted decoration-transparent"
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-[width] duration-300 ease-out group-hover:w-full"
              />
            </motion.a>
          ))}
          <motion.a
            href="#contato"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contato");
            }}
            aria-label="Ir para a seção Contato"
            className="cursor-pointer rounded border-none bg-primary px-5 py-2 font-sans text-sm font-semibold text-primary-foreground decoration-transparent transition-colors hover:bg-primary-hover"
          >
            Fale Comigo
          </motion.a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          className="cursor-pointer border-none bg-none text-primary md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 overflow-hidden rounded-lg border border-primary/20 bg-background/98 p-2 md:hidden origin-top"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  title={link.label}
                  aria-label={`Ir para a seção ${link.label}`}
                  className="block w-full cursor-pointer rounded-md bg-none px-4 py-3 text-left font-sans text-base font-medium text-muted decoration-transparent transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}