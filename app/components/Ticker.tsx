const TICKER_TEXT =
  "MOBILE DEVELOPMENT\u00A0\u2014\u00A0WEB APPLICATIONS\u00A0\u2014\u00A0DEVOPS INFRASTRUCTURE\u00A0\u2014\u00A0CUSTOM SOFTWARE\u00A0\u2014\u00A0SCALABLE SYSTEMS\u00A0\u2014\u00A0";

export default function Ticker() {
  return (
    <div className="overflow-hidden bg-surface border-y border-border-subtle py-4 ticker-wrapper">
      <div className="flex whitespace-nowrap ticker-track" aria-hidden="true">
        <span className="font-mono text-sm text-accent tracking-widest uppercase shrink-0 px-4">
          {TICKER_TEXT}
        </span>
        <span className="font-mono text-sm text-accent tracking-widest uppercase shrink-0 px-4">
          {TICKER_TEXT}
        </span>
      </div>
      <p className="sr-only">
        Mobile Development — Web Applications — DevOps Infrastructure — Custom
        Software — Scalable Systems
      </p>
    </div>
  );
}
