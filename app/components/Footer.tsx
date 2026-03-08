export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 px-8 md:px-12 py-10 border-t border-border-subtle bg-bg text-center sm:text-left"
    >
      <p className="font-mono text-xs text-muted">
        &copy; 2026 &mdash; All rights reserved
      </p>
      <p className="font-mono text-xs text-accent tracking-wider">
        // available for new projects
      </p>
      <p className="font-mono text-xs text-muted">
        152.67.156.101 &mdash; uk-london-1
      </p>
    </footer>
  );
}
