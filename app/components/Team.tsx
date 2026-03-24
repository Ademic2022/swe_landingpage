const TEAM = [
  {
    name: "A. Ademic",
    role: "Lead Software Engineer",
    focus:
      "Architecture, backend systems, delivery, Cloud infrastructure, CI/CD",
  },
  {
    name: "F. Hassan",
    role: "Software Architectural Design",
    focus: "System architecture, domain modeling, and scalable design patterns",
  },
  {
    name: "L. Mercer",
    role: "Frontend Engineer",
    focus: "Web performance, UX systems, accessibility",
  },
] as const;

export default function Team() {
  return (
    <section id="team" className="relative z-10 px-8 md:px-12 py-28 bg-bg">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            Team
          </p>
          <h2
            className="font-display font-extrabold text-text-warm"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            People Behind
            <br />
            The Build
          </h2>
        </div>

        <p
          className="font-mono text-xs text-muted max-w-sm"
          style={{ lineHeight: 1.8 }}
        >
          A focused engineering team shipping production-grade software across
          web, mobile, and infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {TEAM.map((member) => (
          <article
            key={member.name}
            className="service-card-top relative bg-surface border border-border-subtle p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center font-mono text-xs text-accent">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <h3
                  className="font-display text-2xl text-text-warm"
                  style={{ lineHeight: 1 }}
                >
                  {member.name}
                </h3>
                <p className="font-mono text-xs text-muted tracking-wide uppercase mt-1">
                  {member.role}
                </p>
              </div>
            </div>

            <p
              className="font-mono text-xs text-muted"
              style={{ lineHeight: 1.8 }}
            >
              {member.focus}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
