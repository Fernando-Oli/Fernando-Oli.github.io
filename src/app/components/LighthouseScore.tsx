import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { label: "Performance", value: 90 },
  { label: "Acessibilidade", value: 92 },
  { label: "Práticas", value: 100 },
  { label: "SEO", value: 100 },
];

function CircularProgress({ value, label, delay }: { value: number; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  const size = 72;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 1200;
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setDisplayValue(start);
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  // Colors based on Lighthouse scoring thresholds
  const color = value >= 90 ? "#0cce6b" : value >= 50 ? "#ffa400" : "#ff4e42";
  const bg = value >= 90 ? "rgba(12, 206, 107, 0.15)" : value >= 50 ? "rgba(255, 164, 0, 0.15)" : "rgba(255, 78, 66, 0.15)";

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative flex items-center justify-center">
        <svg width={size} height={size} className="rotate-[-90deg]">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={bg}
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset } : {}}
            transition={{ duration: 1.2, delay, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute font-mono text-[1.2rem] font-bold" style={{ color }}>
          {displayValue}
        </span>
      </div>
      <span className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted opacity-90">
        {label}
      </span>
    </div>
  );
}

export function LighthouseScore() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-12 rounded-[14px] border border-primary/20 bg-black/20 p-6 sm:p-8 backdrop-blur"
    >
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-primary/15 pb-5">
        <div>
          <h1 className="font-heading text-xl sm:text-2xl tracking-[0.04em] text-primary uppercase leading-none">
            Métricas de Engenharia
          </h1>
          <p className="mt-2 font-sans text-sm font-medium text-muted">
            Performance robusta e acessibilidade como <span className="text-secondary font-bold">features</span> fundamentais.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 self-start sm:self-auto">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-primary">Lighthouse Score</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {metrics.map((metric, i) => (
          <CircularProgress key={metric.label} {...metric} delay={0.2 + i * 0.15} />
        ))}
      </div>
    </motion.div>
  );
}
