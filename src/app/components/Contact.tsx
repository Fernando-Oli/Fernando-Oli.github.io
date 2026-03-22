import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "fernandoliveira.dev@gmail.com",
    href: "mailto:fernandoliveira.dev@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 (61) 99205-4796",
    href: "https://wa.me/5561992054796",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Anápolis, Goiás – Brasil",
    href: null,
  },
];

const socials = [
  { icon: Github, href: "https://github.com/Fernando-Oli", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/fernando1806", label: "LinkedIn" },
];
export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://6zityivqnt6wenpwuveq525wum0csfte.lambda-url.sa-east-1.on.aws/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar mensagem");
      }

      setSent(true);
    } catch (err) {
      console.error("Erro no envio:", err);
      setError("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-primary/20 bg-white/4 p-3 font-sans text-sm font-medium text-muted outline-none transition-colors focus:border-primary";

  return (
    <section
      id="contato"
      ref={ref}
      className="relative overflow-hidden bg-background py-24 px-6"
    >
      <div
        className="pointer-events-none absolute -bottom-[100px] -right-[100px] h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(203,108,230,0.06)_0%,transparent_70%)]"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-0.5 w-10 bg-primary" />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Contato
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 font-heading text-[clamp(2.5rem,5vw,3.5rem)] leading-none tracking-[0.04em] text-primary"
        >
          VAMOS TRABALHAR JUNTOS
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p
              className="mb-8 font-sans text-[0.95rem] font-medium leading-[1.9] text-muted"
            >
              Tem um projeto em mente? Precisa de um parceiro técnico que entenda o problema a
              fundo antes de codar? Entre em contato — estou aberto a projetos, parcerias e
              oportunidades globais.
            </p>

            {/* Contact Cards */}
            <div className="flex flex-col gap-4 mb-8">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-[14px] rounded-[10px] border border-primary/15 bg-white/3 p-4"
                  >
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10"
                    >
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p
                        className="mb-0.5 font-sans text-[0.75rem] font-bold uppercase tracking-[0.08em] text-secondary"
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-sans text-sm font-medium text-muted no-underline transition-colors hover:text-white"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-sans text-sm font-medium text-muted">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <p
                className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.1em] text-secondary"
              >
                Redes Sociais
              </p>
              <div className="flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/7 text-muted transition-all hover:border-primary hover:bg-primary/15 hover:text-primary"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[300px] h-full flex-col items-center justify-center gap-4 rounded-xl border border-primary/30 bg-primary/[0.06] p-8 text-center"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15"
                >
                  <Send size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-3xl tracking-[0.04em] text-primary">
                  MENSAGEM ENVIADA!
                </h3>
                <p className="font-sans text-sm font-medium text-muted">
                  Obrigado pelo contato, {form.name}! Responderei em breve.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-primary/15 bg-white/[0.02] p-8"
              >
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="mb-[6px] block font-sans text-xs font-bold uppercase tracking-[0.05em] text-secondary"
                    >
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-[6px] block font-sans text-xs font-bold uppercase tracking-[0.05em] text-secondary"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="mb-[6px] block font-sans text-xs font-bold uppercase tracking-[0.05em] text-secondary"
                  >
                    Assunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Ex: Desenvolvimento de aplicação web"
                    className={inputClasses}
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="mb-[6px] block font-sans text-xs font-bold uppercase tracking-[0.05em] text-secondary"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto ou ideia..."
                    className={`${inputClasses} min-h-[120px] resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`flex w-full items-center justify-center gap-2 rounded-lg border-none py-[14px] px-8 font-sans text-[0.95rem] font-bold tracking-[0.03em] text-primary-foreground transition-all ${loading
                    ? "cursor-wait bg-primary-hover"
                    : "cursor-pointer bg-primary hover:bg-primary-hover"
                    }`}
                >
                  <Send size={17} />
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
