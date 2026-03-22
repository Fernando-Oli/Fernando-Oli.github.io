import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Tag, Trophy, Network } from "lucide-react";
import { SkylineArchModal } from "./SkylineArchModal";

const IMG_TRAVEL = "/web.jfif";
const IMG_EDU = "/real.jfif";
const IMG_REAL = "/reala.jfif";
const IMG_WEB = "/ener.jfif";

const projects = [
  {
    id: 1,
    title: "Viaja Mais",
    subtitle: "Gerencie toda a sua aventura",
    description:
      "Aplicativo completo para organizar viagens do início ao fim: passagens, hospedagem, custos, roteiros e muito mais. Com uma feature especial para viajar em grupo — compartilhe e planeje com os amigos em tempo real.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Google APIS", "AWS"],
    category: "Mobile",
    image: IMG_TRAVEL,
    badge: null,
    status: "Em desenvolvimento",
    repo: "https://github.com/Fernando-Oli/viaja-mais.git",
    link: "https://viaja-mais.online/",
  },
  {
    id: 2,
    title: "SkyEnergy",
    subtitle: "Gamificação e Reconhecimento",
    description:
      "Sistema interno de avaliação e feedback para parabenizar colaboradores. Inclui dashboard para geração de relatórios detalhados e gestão de premiações baseada em desempenho.",
    tags: ["React", "Node.js", "PostgreSQL  ", "Dashboard", "Internal Tool"],
    category: "Web",
    image: IMG_EDU,
    badge: null,
    status: "Produção",
    repo: null,
    link: null,
  },
  {
    id: 3,
    title: "Skyline — Ecossistema Interativo",
    subtitle: "Sistemas Offline-First & Real-time",
    description:
      "Arquitetura e desenvolvimento de soluções interativas para estandes de vendas. O ecossistema integra apps desktop e mobile (Electron/Capacitor) para tablets e vídeo-walls com um painel de gestão centralizado. Foco total em resiliência offline e sincronização em tempo real via WebSockets e AWS.",
    tags: ["React", "Electron", "Capacitor", "WebSockets", "AWS Lambda", "DynamoDB", "S3", "PostgreSQL"],
    category: "Web",
    image: IMG_REAL,
    status: "Produção",
    repo: null,
    link: null,
  },
  {
    id: 4,
    title: "Turing – UniEvangélica",
    subtitle: "Product Owner & Front-End Dev",
    description:
      "Comunicação direta com clientes, gestão de backlog e desenvolvimento front-end com SCRUM/Kanban. Entrega de projetos acadêmicos reais usando React, Tailwind, Material UI e MongoDB.",
    tags: ["React", "Tailwind CSS", "Material UI", "MongoDB", "SCRUM"],
    category: "Web",
    image: IMG_WEB,
    badge: null,
    status: "Concluído",
    repo: "https://github.com/Fernando-Oli/medvet.git",
    link: null,
  },
];

const categories = ["Todos", "Web", "Mobile"];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [showSkylineArch, setShowSkylineArch] = useState(false);

  const statusStyles: Record<string, { dot: string; text: string; border: string }> = {
    "Em desenvolvimento": {
      dot: "bg-secondary",
      text: "text-secondary",
      border: "border-secondary/40",
    },
    Produção: {
      dot: "bg-success",
      text: "text-success",
      border: "border-success/40",
    },
    Concluído: {
      dot: "bg-muted",
      text: "text-muted",
      border: "border-muted/40",
    },
  };

  const filtered =
    activeCategory === "Todos" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projetos" ref={ref} className="relative overflow-hidden bg-background py-24 px-6">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(var(--primary-rgb),0.04)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-0.5 w-10 bg-primary" />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Portfólio
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-10"
        >
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] leading-none tracking-[0.04em] text-primary">
            PROJETOS DE DESTAQUE
          </h2>

          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer rounded-md border py-[6px] px-4 font-sans text-xs font-semibold transition-all ${activeCategory === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-primary/20 bg-primary/7 text-muted hover:border-primary/40 hover:bg-primary/10"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="cursor-default overflow-hidden rounded-xl border border-primary/15 bg-white/3 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(var(--primary-rgb),0.1)]"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/75" />
                {/* Category */}
                <div className="absolute top-3 left-3 flex items-center gap-[5px] rounded-md border border-secondary/40 bg-background/85 px-2.5 py-1">
                  <Tag size={11} className="text-secondary" />
                  <span className="font-sans text-[0.7rem] font-bold text-secondary">
                    {project.category}
                  </span>
                </div>
                {/* Status */}
                <div
                  className={`absolute top-3 right-3 flex items-center gap-[5px] rounded-md bg-background/85 px-2.5 py-1 ${statusStyles[project.status].border
                    }`}
                >
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${statusStyles[project.status].dot}`}
                  />
                  <span
                    className={`font-sans text-[0.7rem] font-bold ${statusStyles[project.status].text
                      }`}
                  >
                    {project.status}
                  </span>
                </div>
                {/* Award badge
                {project.badge && (
                  <div className="absolute bottom-3 right-3 flex items-center gap-[5px] rounded-md bg-primary px-2.5 py-[5px]">
                    <Trophy size={12} className="text-primary-foreground" />
                    <span className="font-sans text-[0.7rem] font-bold text-primary-foreground">
                      {project.badge}
                    </span>
                  </div>
                )} */}
              </div>

              {/* Content */}
              <div className="p-[22px]">
                <h3 className="mb-1 font-heading text-2xl leading-none tracking-[0.04em] text-primary">
                  {project.title}
                </h3>
                <p className="mb-3 font-sans text-[0.8rem] font-bold text-secondary">
                  {project.subtitle}
                </p>
                <p className="mb-4 font-sans text-sm font-medium leading-[1.75] text-muted">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-sm border border-primary/20 bg-primary/[0.08] px-2 py-[3px] font-sans text-[0.7rem] font-semibold text-muted">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 flex-wrap">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex cursor-pointer items-center gap-1.5 rounded-md border-none bg-primary px-[18px] py-2 font-sans text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                    >
                      <ExternalLink size={13} />
                      Ver Projeto
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex cursor-pointer items-center gap-1.5 rounded-md border border-white/20 bg-transparent px-[18px] py-2 font-sans text-xs font-semibold text-muted transition-all hover:border-white/50 hover:text-white"
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                  )}
                  {/* 
                  {project.id === 3 && (
                    <button
                      onClick={() => setShowSkylineArch(true)}
                      className="flex cursor-pointer items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-[18px] py-2 font-sans text-xs font-bold text-primary transition-all hover:bg-primary/20 hover:border-primary/60 hover:-translate-y-0.5"
                    >
                      <Network size={13} />
                      Ver Arquitetura
                    </button>
                  )} 
                  */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <SkylineArchModal open={showSkylineArch} onClose={() => setShowSkylineArch(false)} />
    </section>
  );
}
