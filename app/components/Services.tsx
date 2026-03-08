import FadeUp from "./FadeUp";

const services = [
  {
    num: "01",
    icon: "📱",
    title: "Mobile Development",
    desc: "Cross-platform mobile applications built for performance, scalability, and seamless user experience across iOS and Android.",
  },
  {
    num: "02",
    icon: "🌐",
    title: "Web Applications",
    desc: "Modern, high-performance web apps with robust backend systems, clean architecture, and responsive interfaces.",
  },
  {
    num: "03",
    icon: "⚙️",
    title: "DevOps & Infrastructure",
    desc: "End-to-end deployment pipelines, cloud infrastructure, containerization, and automation for reliable operations.",
  },
  {
    num: "04",
    icon: "🔧",
    title: "Custom Software",
    desc: "Tailored software systems designed around your business needs — from architecture to delivery and ongoing support.",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="relative z-10 px-8 md:px-12 py-28 bg-bg">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 pb-8 border-b border-border-subtle gap-4">
        <div>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2
            className="font-display font-extrabold text-text-warm"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            Our Services
          </h2>
        </div>
        <span
          className="font-display font-extrabold"
          style={{ fontSize: 80, color: "#1e1e1e", lineHeight: 1 }}
          aria-hidden="true"
        >
          01
        </span>
      </div>

      {/* Card grid — 1px gap via background colour trick */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle">
        {services.map((s, i) => (
          <FadeUp key={s.num} delay={i * 100}>
            <div className="service-card-top relative bg-bg p-10 overflow-hidden h-full hover:bg-surface transition-colors duration-300">
              <span className="block text-3xl mb-6">{s.icon}</span>
              <h3
                className="font-display font-bold text-text-warm text-lg mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                {s.title}
              </h3>
              <p
                className="font-mono text-xs text-muted"
                style={{ lineHeight: 1.8 }}
              >
                {s.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
