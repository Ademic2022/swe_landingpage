const STACK = [
  "React",
  "Node.js",
  "Docker",
  "Nginx",
  "PostgreSQL",
  "Redis",
  "Flutter",
  "TypeScript",
  "CI/CD",
  "AWS",
  "OCI",
  "Linux",
] as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-8 md:px-12 py-28 bg-bg"
    >
      {/* Left — text */}
      <div>
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          About
        </p>
        <h2
          className="font-display font-extrabold text-text-warm mb-8"
          style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          Engineering
          <br />
          with Purpose
        </h2>
        <div className="flex flex-col gap-5">
          <p
            className="font-mono text-sm text-muted"
            style={{ lineHeight: 1.9 }}
          >
            <strong className="text-text-warm font-medium">
              Software engineering focused on real-world impact.
            </strong>{" "}
            Every system built is designed to solve a genuine problem — not just
            to write code, but to create solutions that drive growth,
            efficiency, and innovation.
          </p>
          <p
            className="font-mono text-sm text-muted"
            style={{ lineHeight: 1.9 }}
          >
            Together with a dedicated team, we handle everything from{" "}
            <strong className="text-text-warm font-medium">
              architecture and backend systems
            </strong>{" "}
            to deployment and automation — covering mobile, web, DevOps, and
            custom software across multiple platforms.
          </p>
          <p
            className="font-mono text-sm text-muted"
            style={{ lineHeight: 1.9 }}
          >
            By combining{" "}
            <strong className="text-text-warm font-medium">
              strong engineering practices with modern technologies
            </strong>
            , we help transform ideas into fully functional products used by
            real users.
          </p>
        </div>
      </div>

      {/* Right — stack grid */}
      <div>
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">
          Tech Stack
        </p>
        <div className="grid grid-cols-3 gap-2">
          {STACK.map((tag) => (
            <div
              key={tag}
              className="stack-item border border-border-subtle px-4 py-3 font-mono text-xs text-muted tracking-wide text-center transition-colors duration-200"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
