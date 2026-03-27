export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-6 border-b border-border-subtle"
      style={{
        backdropFilter: "blur(12px)",
        background: "rgba(10,10,10,0.8)",
      }}
    >
      <a
        href="#"
        aria-label="Ademic home"
        className="group inline-flex items-center"
      >
        <svg
          width="132"
          height="28"
          viewBox="0 0 132 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-opacity duration-200 group-hover:opacity-90"
        >
          <rect
            x="0.75"
            y="0.75"
            width="26.5"
            height="26.5"
            stroke="#e8ff47"
            strokeWidth="1.5"
          />
          <path
            d="M6 21L14 6L22 21"
            stroke="#e8ff47"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 15H18.5"
            stroke="#e8ff47"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M34 9H39.6C42.6 9 45 11.4 45 14C45 16.6 42.6 19 39.6 19H34V9Z"
            stroke="#e8ff47"
            strokeWidth="1.5"
          />
          <path d="M48.5 9H57.5" stroke="#666666" strokeWidth="1.5" />
          <path d="M48.5 14H56.5" stroke="#666666" strokeWidth="1.5" />
          <path d="M48.5 19H57.5" stroke="#666666" strokeWidth="1.5" />
          <path
            d="M60.5 19V9L66.3 15.2L72.1 9V19"
            stroke="#666666"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M75.5 9V19" stroke="#666666" strokeWidth="1.5" />
          <path
            d="M80 14C80 11.3 82.1 9 84.8 9H89"
            stroke="#666666"
            strokeWidth="1.5"
          />
          <path
            d="M80 14C80 16.7 82.1 19 84.8 19H89"
            stroke="#666666"
            strokeWidth="1.5"
          />
          <circle cx="94" cy="20" r="1.8" fill="#e8ff47" />
        </svg>
      </a>
      <ul className="flex gap-8 md:gap-10 list-none m-0 p-0">
        {(["Services", "Team", "About", "Contact"] as const).map((link) => (
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
