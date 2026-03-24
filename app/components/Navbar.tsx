export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-6 border-b border-border-subtle"
      style={{
        backdropFilter: "blur(12px)",
        background: "rgba(10,10,10,0.8)",
      }}
    >
      <span className="font-mono text-sm text-accent tracking-widest">
        // ademic.dev
      </span>
      <ul className="flex gap-8 md:gap-10 list-none m-0 p-0">
        {(["Services", "About", "Team", "Contact"] as const).map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs text-muted tracking-widest uppercase hover:text-accent transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
