import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, Trophy, GraduationCap, Globe, Dices, Target } from "lucide-react";

const PHOTO = "/im-even.jfif";

const highlights = [
  "Prêmios de Inovação e Melhor Projeto no Skycon 2026.",
  "Liderança técnica de uma migração de sistemas no-code para React.",
  "Conhecimento robusto em diversos serviços AWS como: Serveless Funcitons Lambda, Dynmao DB, SES, CloudFront, Router 53, S3, EC2, Cognito, IAM, CloudWatch.",
  "Inglês Avançado para documentações e oportunidades globais",
];

const timeline = [
  {
    period: "Fev/2026 – Atual",
    role: "Programador Sênior I",
    company: "Skyline",
    color: "primary" as const,
  },
  {
    period: "Ago/2025 – Fev/2026",
    role: "Programador Pleno",
    company: "Skyline",
    color: "secondary" as const,
  },
  {
    period: "Mar/2025 – Ago/2025",
    role: "Programador Junior",
    company: "Skyline",
    color: "muted" as const,
  },
  {
    period: "Jan/2024 – Ago/2024",
    role: "PO & Front-End Dev",
    company: "Turing / UniEvangélica",
    color: "muted" as const,
  },
  {
    period: "Out/2023 – Atual",
    role: "Estágio em Análise de Sistemas",
    company: "AEG – Assoc. Evangélica de Goiás",
    color: "muted" as const,
  },
];

const spots = [
  {
    icon: GraduationCap,
    title: "Engenharia de Software",
    sub: "UniEvangélica – Anápolis, GO (2023–2027)",
  },
  {
    icon: Globe,
    title: "Inglês Avançado",
    sub: "Documentações, aprendizado e oportunidades globais",
  },
  {
    icon: Dices,
    title: "Amante de Boardgames",
    sub: "Estrategista de tabuleiro e fã de manuais gigantes",
  },
  {
    icon: Target,
    title: "Jogador de Xadrez",
    sub: "Perdendo peças e ganhando experiência no Chess.com",
  },
]

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const colorMap: Record<string, { bg: string; text: string }> = {
    primary: { bg: "bg-primary", text: "text-primary" },
    secondary: { bg: "bg-secondary", text: "text-secondary" },
    muted: { bg: "bg-muted", text: "text-muted" },
  };

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative overflow-hidden bg-background py-24 px-6"
    >
      <div className="pointer-events-none absolute top-1/2 -left-[200px] h-[500px] w-[500px] -translate-y-1/2 bg-[radial-gradient(circle,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="h-0.5 w-10 bg-primary" />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Sobre mim
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side */}
          <div>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="relative overflow-hidden rounded-xl border border-primary/20">
                <img
                  src={PHOTO}
                  alt="Fernando trabalhando"
                  className="block w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -top-3 -left-3 h-[60px] w-[60px] rounded-tl-[4px] border-t-[3px] border-l-[3px] border-secondary" />
            </motion.div>

            {/* Education & extras */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-3"
            >
              {spots.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-[10px] border border-primary/15 bg-white/3 py-[14px] px-4"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="mb-0.5 font-sans text-[0.85rem] font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="font-sans text-xs font-medium text-muted">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="mb-2 font-heading text-[clamp(2.5rem,5vw,3.5rem)] leading-none tracking-[0.04em] text-primary">
              O QUE AGREGO
            </h2>
            <p className="mb-6 font-sans text-base font-bold tracking-[0.04em] text-secondary">
              Programador Sênior I · Full Stack Developer
            </p>
            <div className="mb-4 font-sans text-[0.95rem] font-medium leading-[1.9] text-muted">
              Foco em arquiteturas inteligentes e soluções com potencial de escala. Meu objetivo é entender a fundo a dor do usuário para entregar projetos que unem performance técnica e inovação premiada.
              <p className="mt-4 mb-8">
                Assim, combino também sólida capacidade técnica com visão estratégica de negócios e governança (ITIL/COBIT/ISO 25010).
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 flex-shrink-0 text-primary"
                  />
                  <span className="font-sans text-sm font-medium leading-relaxed text-muted">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <p className="mb-3.5 font-sans text-xs font-bold uppercase tracking-[0.1em] text-secondary">
              Trajetória Profissional
            </p>
            <div className="relative">
              <div className="absolute top-2 bottom-2 left-[7px] w-px bg-primary/20" />
              <div className="flex flex-col gap-4 pl-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    className="relative"
                  >
                    <div
                      className={`absolute top-1.5 -left-[22px] box-border h-[9px] w-[9px] rounded-full border-2 border-background ${colorMap[item.color]?.bg
                        }`}
                    />
                    <p
                      className={`font-sans text-[0.85rem] font-bold leading-[1.3] ${colorMap[item.color]?.text
                        }`}
                    >
                      {item.role}
                    </p>
                    <p className="font-sans text-[0.78rem] font-medium text-muted">
                      {item.company} · {item.period}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
