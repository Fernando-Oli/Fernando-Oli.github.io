import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript / JavaScript", level: 92 },
  { name: "Node.js / Express", level: 88 },
  { name: "MySQL / PostgreSQL / SQL Server", level: 85 },
  { name: "MongoDB / DynamoDB", level: 82 },
  { name: "AWS Lambda / Serverless", level: 78 },
  { name: "Docker / DevOps", level: 75 },
  { name: "Electron / Capacitor", level: 80 },
];

const techStack = [
  { label: "React", icon: "⚛️" },
  { label: "Next.js", icon: "▲" },
  { label: "TypeScript", icon: "📘" },
  { label: "Tailwind CSS", icon: "🎨" },
  { label: "Material UI", icon: "🧱" },
  { label: "Node.js", icon: "🟢" },
  { label: "Express", icon: "🚀" },
  { label: "AWS Lambda", icon: "☁️" },
  { label: "WebSockets", icon: "🔌" },
  { label: "Docker", icon: "🐳" },
  { label: "MySQL", icon: "🐬" },
  { label: "MongoDB", icon: "🍃" },
  { label: "DynamoDB", icon: "⚡" },
  { label: "Electron", icon: "💻" },
  { label: "Capacitor", icon: "📱" },
  { label: "Figma", icon: "🖌️" },
  { label: "Intuiface", icon: "🖥️" },
  { label: "Git", icon: "🔀" },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="font-sans text-sm font-semibold text-muted">
          {name}
        </span>
        <span className="font-sans text-sm font-bold text-primary">
          {level}%
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative overflow-hidden border-y border-primary/10 bg-white/[0.015] py-24 px-6"
    >
      <div className="pointer-events-none absolute top-1/2 -right-[200px] h-[500px] w-[500px] -translate-y-1/2 bg-[radial-gradient(circle,rgba(var(--secondary-rgb,203,108,230),0.05)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-0.5 w-10 bg-primary" />
          <span className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.2em] text-primary">
            Habilidades
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] leading-none tracking-[0.04em] text-primary mb-12"
        >
          STACK TECNOLÓGICO
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Skill Bars */}
          <div>
            <p className="font-sans text-[0.9rem] font-bold uppercase tracking-[0.05em] text-secondary mb-6">
              Proficiência Técnica
            </p>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 0.08} />
            ))}
          </div>

          {/* Tech Tags + Stats */}
          <div>
            <p className="font-sans text-[0.9rem] font-bold uppercase tracking-[0.05em] text-secondary mb-6">
              Ferramentas & Tecnologias
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.04 + 0.3 }}
                  className="flex cursor-default items-center gap-[7px] rounded-lg border border-primary/20 bg-primary/7 px-3.5 py-2 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/15"
                >
                  <span className="text-base">{tech.icon}</span>
                  <span className="font-sans text-[0.8rem] font-semibold text-muted">
                    {tech.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "Sênior I", label: "Nível atual\nna Skyline" },
                { value: "3×", label: "Empresas\natendidas" },
                { value: "18+", label: "Tecnologias\nno stack" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="rounded-xl border border-primary/15 bg-white/3 py-4 px-3 text-center"
                >
                  <p className={`font-heading leading-none text-primary ${stat.value.length > 4 ? "text-xl" : "text-[1.8rem]"}`}>
                    {stat.value}
                  </p>
                  <p className="font-sans text-[0.68rem] font-medium leading-[1.4] text-muted mt-1 whitespace-pre-line">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
