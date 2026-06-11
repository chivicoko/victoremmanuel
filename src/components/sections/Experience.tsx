const experiences = [
  {
    period: "April, 2025 — Present (Remote - UK)",
    role: "Front-end Engineer",
    company: "Optisource Technology Solutions",
    description:
      "Leading frontend architecture for a suite of fintech and engineering management products. Implemented micro-frontend architecture, reduced bundle size of the fintech app by 40%, and mentored a team of 3 developers.",
    technologies: ["React", "TypeScript", "Next.js", "Redux"],
    current: true,
  },
  {
    period: "July, 2025 - January, 2026 (7-months contract) (Remote - UK)",
    role: "Frontend Developer",
    company:
      "Technology for Social Change and Development Initiative (Tech4Dev)",
    description:
      "Contribute to the development of scalable B2B multi-tenant application (Nakise) that help provide platforms for businesses - especially tech organizations for carrying out their operations from start to finish. Introduced automated testing practices that improved code coverage to 85%.",
    technologies: ["React", "zustand", "shadcn", "Vitest", "PlayWright"],
    current: false,
  },
  {
    period:
      "November, 2024 - February, 2025 (4-months contract) (Remote - Nigeria)",
    role: "Front-end Engineer",
    company: "DEV47 Agency",
    description:
      "Contributed to the development of a SaaS platform from MVP to production. Collaborated with designers to implement pixel-perfect UI components.",
    technologies: ["React", "zustand", "shadcn"],
    current: false,
  },
  {
    period: "May, 2022 - April, 2023 (Nigeria)",
    role: "Front-end Developer",
    company: "Premium ESOWP Limited",
    description:
      "Contributed to the development of a SaaS platform from MVP to production. Collaborated with designers to implement pixel-perfect UI components.",
    technologies: ["React", "context API"],
    current: false,
  },
  {
    period: "2020 — 2022",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small businesses and startups. Built 10+ websites and applications, handling everything from design to deployment.",
    technologies: ["JavaScript", "Reactjs"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28 border-t"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
          {/* Left sidebar */}
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Career Journey</span>
            </div>
            <h2 className="section-title">
              Experience that <em>speaks volumes.</em>
            </h2>
            <p className="mt-6 text-muted-foreground text-[0.9375rem] leading-[1.75]">
              A timeline of my professional growth, from curious beginner to
              senior engineer leading teams and building products at scale.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 pb-10 last:pb-0"
                style={{
                  borderLeft:
                    idx < experiences.length - 1
                      ? "1px solid rgba(255,255,255,0.07)"
                      : "1px solid transparent",
                }}
              >
                {/* Dot */}
                <div
                  className="absolute left-[-5.55px] z-10 top-0.5 w-2.5 h-2.5 rounded-full"
                  style={{
                    background: exp.current
                      ? "#e8a44a"
                      : "rgba(255,255,255,0.5)",
                    border: "2px solid #0c0c0c",
                    boxShadow: exp.current
                      ? "0 0 0 4px rgba(232,164,74,0.15)"
                      : "none",
                  }}
                />

                <div className="mb-1 text-sm font-display font-bold tracking-wider text-muted-foreground/70">
                  {exp.period}
                </div>
                <div className="font-display font-bold text-[1.0625rem] text-foreground mb-0.5">
                  {exp.role}
                </div>
                <div className="text-base mb-3" style={{ color: "#e8a44a" }}>
                  {exp.company}
                </div>
                <p className="text-sm text-muted-foreground leading-[1.75] mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, j) => (
                    <span key={j} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
