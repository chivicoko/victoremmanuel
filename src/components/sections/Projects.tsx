"use client";

import Image from "next/image";
import { ArrowUpRight, Github, LayoutGrid, List } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "Forge",
    description:
      "A premium men's bodywear e-commerce platform with secure authentication, real-time cart and checkout, and integrated payments — built for a fast, polished shopping experience.",
    image: "/projects/project1.png",
    tags: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Supabase",
      "Stripe",
      "EmailJS",
    ],
    link: "https://forge-olive-three.vercel.app/",
    github: "https://github.com/iamvictorokoye/forge",
  },
  {
    title: "NovaBrief",
    description:
      "An AI-curated newsletter SaaS that automatically sources, summarizes, and delivers personalized content digests — powered by Gemini 2.5 Flash with background job scheduling for reliable delivery.",
    image: "/projects/project2.png",
    tags: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Supabase",
      "Stripe",
      "EmailJS",
      "Inngest",
      "Gemini",
    ],
    link: "https://novabrief-nine.vercel.app/",
    github: "https://github.com/iamvictorokoye/novabrief",
  },
  {
    title: "Brif",
    description:
      "A Chrome extension that summarizes any web page in one click, powered by Gemini 2.5 Flash — built with a secure build-step config pattern to keep API keys out of the client bundle.",
    image: "/projects/project3.png",
    tags: ["JavaScript", "CSS", "EmailJS", "Gemini"],
    link: "#",
    github: "https://github.com/iamvictorokoye/brif",
  },
  // {
  //   title: "Project Management Tool",
  //   description:
  //     "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
  //   image: "/projects/project4.png",
  //   tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
  //   link: "#",
  //   github: "#",
  // },
];

export const Projects = () => {
  const [gridView, setGridView] = useState(false);

  return (
    <section
      id="projects"
      className="py-16 sm:py-28 border-t"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-300 mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Featured Work</span>
            </div>
            <h2 className="section-title">
              Projects that <em>make impact.</em>
            </h2>
          </div>

          {/* Toggle */}
          <div
            className="flex rounded-full overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <button
              onClick={() => setGridView(false)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-display font-semibold transition-all"
              style={{
                background: !gridView ? "#e8a44a" : "transparent",
                color: !gridView ? "#0c0c0c" : "var(--color-muted-foreground)",
              }}
            >
              <List className="w-3.5 h-3.5" /> Stack
            </button>
            <button
              onClick={() => setGridView(true)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-display font-semibold transition-all"
              style={{
                background: gridView ? "#e8a44a" : "transparent",
                color: gridView ? "#0c0c0c" : "var(--color-muted-foreground)",
              }}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Grid
            </button>
          </div>
        </div>

        {/* Grid view */}
        {gridView ? (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 48px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "16/9", background: "#1a1a1a" }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(12,12,12,0.7)" }}
                  >
                    <Link
                      href={p.link}
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{
                        background: "var(--color-foreground)",
                        color: "#0c0c0c",
                      }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={p.github}
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{
                        background: "var(--color-foreground)",
                        color: "#0c0c0c",
                      }}
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div
                    className="text-base font-display tracking-widest uppercase mb-2"
                    style={{ color: "rgba(122,119,111,0.5)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display font-bold text-[1.125rem] mb-2 text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-[1.65] mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t, j) => (
                      <span key={j} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-20 mt-10 md:mt-20">
            {projects.map((p, i) => (
              <div
                key={i}
                className="
                  group
                  sticky
                  rounded-2xl
                  overflow-hidden
                  after:content-['']
                  after:absolute
                  after:inset-0
                  after:z-10
                  after:outline-2
                  after:-outline-offset-1
                  after:rounded-2xl
                  after:outline-white/20
                  after:pointer-events-none
                "
                style={{
                  top: `${80 + i * 35}px`,
                  zIndex: i + 1,
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="bg-white/20 sm:h-[4.5vh] px-6 py-2 text-primary font-bold">
                  {p.title}
                </div>
                <div className="grid lg:grid-cols-[1fr_1.3fr] sm:h-[55.5vh]">
                  {/* LEFT - CONTENT */}
                  <div className="flex flex-col justify-center p-4 sm:p-8 lg:p-10">
                    <div>
                      <div
                        className="text-base font-display tracking-widest uppercase mb-1 sm:mb-4"
                        style={{ color: "rgba(122,119,111,0.5)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 text-foreground group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed max-w-md">
                        {p.description}
                      </p>
                    </div>

                    <div className="mt-4 md:mt-10">
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                        {p.tags.map((t, j) => (
                          <span key={j} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <Link href={p.link} className="btn-secondary">
                          Live Demo
                          <ArrowUpRight className="size-4" />
                        </Link>

                        <Link href={p.github} className="social-link size-14">
                          <Github className="size-6" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* RIGHT - IMAGE */}
                  <div
                    className="
                      relative
                      overflow-hidden
                      bg-[#1a1a1a]
                      h-56
                      sm:h-64
                      lg:h-auto
                      border-t
                      md:border-t-0
                      md:border-l
                    "
                    style={{
                      borderColor: "rgba(255,255,255,0.07)",
                    }}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="
                        object-cover
                        object-top
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                      "
                      style={{
                        background:
                          "linear-gradient(to top, rgba(12,12,12,.5), transparent)",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* <div className="text-center mt-10">
          <Link href="#" className="btn-secondary font-bold">
            View More Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};
