import { motion } from "motion/react";
import { ArrowDown, Code2, MapPin } from "lucide-react";
import { useRef, useState, useCallback } from "react";
export function Hero() {
  const scrollToAbout = () => {
    const el = document.querySelector("#sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const titleRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;
    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxTilt = 18;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = ((centerY - y) / centerY) * maxTilt;
    setTilt({ rotateX, rotateY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    if (titleRef.current) {
      rectRef.current = titleRef.current.getBoundingClientRect();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    rectRef.current = null;
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"

      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.08)_0%,transparent_65%),radial-gradient(ellipse_at_bottom_right,rgba(203,108,230,0.06)_0%,transparent_55%)]"
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.04)_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-5">


        {/* Main Title – 3D tilt on hover */}
        <div
          ref={titleRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: "900px",
            cursor: "default",
          }}
        >
          <div
            style={{
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              transition: isHovering ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-1 font-heading text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] tracking-[0.04em] text-primary"
              style={{ textShadow: isHovering ? "0 8px 24px rgba(var(--primary-rgb), 0.25)" : "none", transition: "text-shadow 0.3s ease" }}
            >
              SOLUÇÕES
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-1 font-heading text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] tracking-[0.04em] text-white"
              style={{ textShadow: isHovering ? "0 8px 24px rgba(255,255,255,0.15)" : "none", transition: "text-shadow 0.3s ease" }}
            >
              INTELIGENTES
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-8 font-heading text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] tracking-[0.04em] text-primary"
              style={{ textShadow: isHovering ? "0 8px 24px rgba(var(--primary-rgb), 0.25)" : "none", transition: "text-shadow 0.3s ease" }}
            >
              PARA VOCÊ
            </motion.h1>
          </div>
        </div>

        {/* Role tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-2 mb-5"
        >
          {[
            "Programador Sênior I @ Skyline",
            "Eng. de Software · UniEvangélica",
            "Inglês Avançado",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-white/4 py-1 px-3 font-sans text-[0.78rem] font-semibold tracking-[0.03em] text-muted"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mx-auto mb-10 max-w-[580px] font-sans text-[clamp(0.9rem,1.5vw,1.05rem)] font-medium leading-[1.85] text-muted"
        >
          Desenvolvo sistemas com foco em proatividade e eficiência, garantindo que sua
          infraestrutura tech esteja sempre um passo à frente.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#projetos");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex cursor-pointer items-center gap-2 rounded-md border-none bg-primary py-[14px] px-8 font-sans text-[0.95rem] font-bold tracking-[0.03em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            <Code2 size={18} />
            Ver Projetos
          </button>
          <button
            onClick={() => {
              const el = document.querySelector("#contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer rounded-md border-2 border-secondary bg-transparent py-[14px] px-8 font-sans text-[0.95rem] font-bold tracking-[0.03em] text-secondary transition-all hover:-translate-y-0.5 hover:bg-secondary/10"
          >
            Entrar em Contato
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollToAbout}
          className="mx-auto mt-16 flex cursor-pointer flex-col items-center gap-1.5 border-none bg-none"
        >
          <span className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted">
            Scroll
          </span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={20} className="text-primary" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
