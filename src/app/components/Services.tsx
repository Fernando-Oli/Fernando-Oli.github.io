import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Globe, Smartphone, Server, Zap, Database, Layout } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Aplicações Web",
    subtitle: "React · Next.js · TypeScript",
    description:
      "Desenvolvimento de aplicações web modernas com React e Next.js, focadas em performance, SEO e experiência do usuário. Do MVP ao produto escalável.",
  },
  {
    icon: Server,
    title: "Back-end & Cloud",
    subtitle: "Node.js · AWS Lambda · WebSockets",
    description:
      "APIs robustas e arquiteturas serverless com AWS Lambda. Comunicação em tempo real com WebSockets e integração com DynamoDB e MongoDB.",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    subtitle: "SQL · NoSQL · Análise avançada",
    description:
      "Modelagem e otimização de bancos relacionais (MySQL, PostgreSQL, SQL Server) e não-relacionais (MongoDB, DynamoDB). Consultas e relatórios complexos.",
  },
  {
    icon: Layout,
    title: "Desktop & Kiosks",
    subtitle: "Electron · Capacitor",
    description:
      "Desenvolvimento de aplicações desktop e instaláveis mobile para ambiente físicos.",
  },
  {
    icon: Zap,
    title: "Consultoria & Migração",
    subtitle: "Análise · Consultoria",
    description:
      "Análise de sistemas e processos, identificação de gargalos e proposição de soluções tecnológicas para otimização de processos.",
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="servicos"
      ref={ref}
      className="relative overflow-hidden border-y border-primary/10 bg-white/[0.015] py-24 px-6"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(203,108,230,0.04)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-10 h-0.5 bg-primary" />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary">
            O que ofereço
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
        >
          <h2
            className="mb-4 font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-none tracking-[0.04em] text-primary"
          >
            SERVIÇOS
          </h2>
          <p className="max-w-[580px] font-sans text-[0.95rem] font-medium leading-[1.8] text-muted">
            Entrego soluções completas — do banco de dados à interface — com foco em código
            limpo, performance e experiências que o usuário realmente usa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative cursor-default overflow-hidden rounded-xl border border-primary/15 bg-white/3 p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(var(--primary-rgb),0.08)]"
              >
                <div className="absolute top-0 left-0 h-20 w-20 rounded-br-full bg-[radial-gradient(circle,rgba(var(--primary-rgb),0.08)_0%,transparent_70%)]" />

                <div className="mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-primary/25 bg-primary/10">
                  <Icon size={22} className="text-primary" />
                </div>

                <h3
                  className="mb-1 font-display text-[1.35rem] leading-none tracking-[0.04em] text-primary"
                >
                  {service.title}
                </h3>

                <p className="mb-3 font-sans text-[0.78rem] font-bold tracking-[0.02em] text-secondary">
                  {service.subtitle}
                </p>

                <p className="font-sans text-sm font-medium leading-[1.75] text-muted">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
