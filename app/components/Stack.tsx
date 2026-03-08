const TAGS = [
  "React",
  "Next.js",
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

export default function Stack() {
  return (
    <section className="px-8 py-24 border-t border-border-subtle bg-bg">
      <p className="font-mono text-xs text-muted tracking-widest uppercase mb-12">
        [ STACK ]
      </p>
      <div className="flex flex-wrap gap-3">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-text-warm border border-border-subtle px-3 py-1 hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
