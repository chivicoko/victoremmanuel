const experiences = [
  {
    period: "April, 2025 — Present (Remote - UK)",
    role: "Front-End Engineer",
    company: "Optisource Technology Solutions",
    description:
      "Architecting and building production features using React.js and Next.js as the core technology stack. Driving development of scalable B2B technology solutions that help businesses streamline their operations, with a focus on platform performance and usability.",
    technologies: ["React", "Next.js", "TypeScript"],
    current: true,
  },
  {
    period: "July, 2025 - January, 2026 (7-months contract) (Remote - UK)",
    role: "Front-End Developer",
    company:
      "Technology for Social Change and Development Initiative (Tech4Dev)",
    description:
      "Engineered front-end features with React.js and Next.js for the NAKISE program, an initiative supporting employability, entrepreneurship, and workplace efficiency among graduates and undergraduates. Collaborated with cross-functional teams to build, optimize, and maintain internal applications addressing a range of business challenges.",
    technologies: ["React", "Next.js", "TypeScript"],
    current: false,
  },
  {
    period: "November, 2024 — Present · Part-time (Remote - Nigeria)",
    company: "DEV47 Agency",
    role: "Freelance Front-End Engineer",
    description:
      "Freelance Front-end Engineer contributing to client projects on a part-time basis, with end-to-end ownership of individual builds — including wearsbylegend.com, a production eCommerce platform for a body-wear brand.",
    technologies: ["React", "Next.js", "TypeScript"],
    current: true,
  },
  {
    period: "May, 2022 - April, 2023 (Nigeria)",
    role: "Front-End Developer",
    company: "Premium ESOWP Limited",
    description:
      "Developed websites and web applications for schools and businesses, using HTML, CSS, JavaScript, jQuery, Bootstrap, and React.js.",
    technologies: ["React", "JavaScript", "jQuery", "Bootstrap"],
    current: false,
  },
  {
    period: "2020 — 2022",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small businesses and startups. Built 10+ websites and applications, handling everything from design to deployment.",
    technologies: ["JavaScript", "Reactjs", "Nodejs"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-28"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-300 mx-auto px-6 md:px-8">
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
