export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-8 md:px-12 pt-32 pb-20 bg-bg">
      {/* Left */}
      <div>
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="block h-px bg-accent"
            style={{ width: 32 }}
            aria-hidden="true"
          />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Software Engineer
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-extrabold mb-8 text-text-warm"
          style={{
            fontSize: "clamp(52px, 6vw, 88px)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
          }}
        >
          Building
          <br />
          <span style={{ color: "#e8ff47" }}>Scalable</span>
          <br />
          <span
            style={{
              WebkitTextStroke: "1px rgba(240,240,240,0.3)",
              color: "transparent",
            }}
          >
            Solutions
          </span>
        </h1>

        {/* Description */}
        <p
          className="font-mono text-sm text-muted max-w-md mb-12"
          style={{ lineHeight: 1.8 }}
        >
          Focused on designing and developing reliable systems that help
          businesses operate more efficiently and deliver better digital
          experiences.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#services"
            className="btn-primary font-mono text-xs tracking-widest uppercase px-7 py-3.5"
          >
            View Services &rarr;
          </a>
          <a
            href="#contact"
            className="btn-ghost font-mono text-xs tracking-widest uppercase px-7 py-3.5"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right — Terminal card */}
      <div className="relative hidden lg:block">
        <div
          className="font-mono text-sm overflow-hidden border border-border-subtle"
          style={{ backgroundColor: "#111111" }}
        >
          {/* macOS dots */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ backgroundColor: "#1e1e1e" }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="font-mono text-xs text-muted ml-2 tracking-wider">
              engineer.json
            </span>
          </div>

          {/* JSON body */}
          <div className="p-6 text-sm" style={{ lineHeight: 2 }}>
            <span style={{ color: "#444" }}>{"// profile.json"}</span>
            <br />
            {"{"}
            <br />
            &nbsp;&nbsp;
            <span style={{ color: "#47ffe8" }}>&quot;role&quot;</span>:{" "}
            <span style={{ color: "#b8a9ff" }}>
              &quot;Software Engineer&quot;
            </span>
            ,
            <br />
            &nbsp;&nbsp;
            <span style={{ color: "#47ffe8" }}>&quot;focus&quot;</span>:{" "}
            <span style={{ color: "#b8a9ff" }}>
              &quot;Scalable Systems&quot;
            </span>
            ,
            <br />
            &nbsp;&nbsp;
            <span style={{ color: "#47ffe8" }}>
              &quot;available&quot;
            </span>: <span style={{ color: "#7fdfff" }}>true</span>,
            <br />
            &nbsp;&nbsp;
            <span style={{ color: "#47ffe8" }}>&quot;services&quot;</span>: [
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#b8a9ff" }}>&quot;Mobile Apps&quot;</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#b8a9ff" }}>
              &quot;Web Applications&quot;
            </span>
            ,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#b8a9ff" }}>
              &quot;DevOps &amp; Infrastructure&quot;
            </span>
            ,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#b8a9ff" }}>
              &quot;Custom Software&quot;
            </span>
            <br />
            &nbsp;&nbsp;],
            <br />
            &nbsp;&nbsp;
            <span style={{ color: "#47ffe8" }}>&quot;goal&quot;</span>:{" "}
            <span style={{ color: "#b8a9ff" }}>
              &quot;Drive growth &amp; innovation&quot;
            </span>
            ,
            <br />
            &nbsp;&nbsp;
            <span style={{ color: "#47ffe8" }}>&quot;status&quot;</span>:{" "}
            <span style={{ color: "#b8a9ff" }}>&quot;Building...&quot;</span>{" "}
            <span
              style={{
                color: "#e8ff47",
                animation: "blink 1.2s infinite",
              }}
            >
              &#x258C;
            </span>
            <br />
            {"}"}
          </div>
        </div>

        {/* Floating badge */}
        <div
          className="absolute font-mono text-xs font-semibold tracking-widest uppercase px-5 py-4"
          style={{
            bottom: "-20px",
            right: "-20px",
            backgroundColor: "#e8ff47",
            color: "#0a0a0a",
            border: "3px solid #0a0a0a",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          Open for Projects
        </div>
      </div>
    </section>
  );
}
