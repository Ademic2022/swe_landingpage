const stats = [
  { num: "100%", label: "Delivery Rate" },
  { num: "4+", label: "Service Areas" },
  { num: "∞", label: "Scalability" },
  { num: "24/7", label: "Infrastructure" },
] as const;

export default function Stats() {
  return (
    <div
      className="relative z-10 grid grid-cols-2 lg:grid-cols-4"
      style={{ backgroundColor: "#e8ff47" }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center justify-center text-center px-10 py-12"
        >
          <span
            className="font-display font-extrabold block"
            style={{
              fontSize: 64,
              color: "#0a0a0a",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            {s.num}
          </span>
          <span
            className="font-mono block mt-2"
            style={{
              fontSize: 11,
              color: "rgba(0,0,0,0.5)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
