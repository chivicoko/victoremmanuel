"use client";

import Image from "next/image";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Terminal,
  MoveDownIcon,
  Mail,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Tooltip } from "../ui/Tooltip";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Vercel",
  "Tailwind CSS",
  "Supabase",
  "Prisma",
  "Jest",
  "Cypress",
  "Vitest",
  "Playwright",
  "Figma",
  "Git",
  "GitHub Actions",
];

const subject = encodeURIComponent("Let's Work Together");
const socialLinks = [
  {
    icon: Mail,
    href: `mailto:victor.c.okoye@gmail.com?subject=${subject}`,
    label: "Email",
  },
  { icon: Github, href: "https://github.com/chivicoko", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/codesvictor/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/codes_victor_/",
    label: "Twitter",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/+2348028845693",
    label: "WhatsApp",
  },
];

const tools = [
  {
    title: "Reactjs",
    image: "/icons/reactjs.svg",
  },
  {
    title: "Nextjs",
    image: "/icons/nextjs.jpeg",
  },
  {
    title: "Typescript",
    image: "/icons/typescript.webp",
  },
  {
    title: "Javascript",
    image: "/icons/js.jpg",
  },
  {
    title: "TailwindCSS",
    image: "/icons/tailwind.png",
  },
  {
    title: "GitHub",
    image: "/icons/github.png",
  },
  {
    title: "Figma",
    image: "/icons/figma.png",
  },
  {
    title: "Playwright",
    image: "/icons/playwright.webp",
  },
];

export const Hero = () => {
  const router = useRouter();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-6 sm:pt-24 md:pt-36 pb-16">
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at center, black 50%, transparent 80%)",
          }}
        />
        {/* Amber radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 65% 40%, rgba(232,164,74,0.04) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-300 mx-auto px-6 md:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
            {/* Left */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8 animate-fade-in">
                <span className="w-8 h-px bg-primary shrink-0" />
                <span className="font-display text-base tracking-[0.15em] uppercase text-primary">
                  Software Engineer · Frontend Expert
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-display font-extrabold leading-[0.95] tracking-[-0.03em] capitalize mb-8 animate-fade-in animation-delay-100"
                style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}
              >
                Crafting <br />
                <em
                  className="font-serif font-semibold text-[#e8a44a]"
                  // style={{ color: "#e8a44a", fontStyle: "italic" }}
                  style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
                >
                  seamless digital
                </em>
                <br />
                experiences.
              </h1>

              <p className="text-muted-foreground text-[1.2625rem] max-w-150 leading-[1.45] mb-5 sm:mb-10 animate-fade-in animation-delay-200">
                A fullstack{" "}
                <span className="font-bold">front-end expert&nbsp;</span>
                with &nbsp;
                <span className="font-bold">5+ years of experience</span>{" "}
                building scalable, performant web applications that users love.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-12 animate-fade-in animation-delay-300">
                <Tooltip content="Reach out - I'm always ready to serve">
                  <button
                    className="btn-primary px-4 sm:px-6"
                    onClick={() => router.push("/#contact")}
                  >
                    Contact Me{" "}
                    <ArrowRight className="hidden sm:inline w-4 h-4" />
                  </button>
                </Tooltip>

                <Tooltip content="Click to view CV in a new tab">
                  <button
                    className="btn-secondary px-4 sm:px-6"
                    onClick={() => window.open("/VICTOR_OKOYE.pdf", "_blank")}
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </button>
                </Tooltip>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-3 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground/00">
                  Let&apos;s chat:
                </span>
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="social-link"
                    aria-label={s.label}
                  >
                    <s.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — profile image */}
            <div className="space-y-2">
              <div className="relative hidden lg:block animate-fade-out animation-delay-300">
                {/* Exp badge */}
                <div
                  className="absolute -top-4 -right-4 z-20 w-20 h-20 rounded-full flex flex-col items-center justify-center"
                  style={{
                    background: "#e8a44a",
                    color: "#0c0c0c",
                    boxShadow: "0 0 0 4px #0c0c0c",
                  }}
                >
                  <span className="font-display font-extrabold text-4xl leading-none">
                    5+
                  </span>
                  <span className="font-display font-semibold text-[0.6625rem] tracking-wider">
                    YRS EXP.
                  </span>
                </div>

                <div
                  className="relative rounded-3xl overflow-hidden border"
                  style={{
                    borderColor: "rgba(255,255,255,0.14)",
                    background: "#141414",
                  }}
                >
                  <Image
                    src="/victorImage.jpeg"
                    alt="Photo of Victor Okoye"
                    width={420}
                    height={420}
                    className="w-full object-cover"
                    style={{ height: "420px", filter: "grayscale(15%)" }}
                    priority
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 50%, rgba(12,12,12,0.6) 100%)",
                    }}
                  />
                  {/* Avail badge */}
                  <div
                    className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                    style={{
                      background: "rgba(12,12,12,0.9)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.14)",
                    }}
                  >
                    <span className="relative flex size-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                    </span>
                    Available for work
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="hidden lg:block rounded-3xl outline outline-border p-3 animate-fade-in animation-delay-300">
                <h4 className="font-display text-base tracking-widest uppercase text-primary text-center pb-2">
                  Favorite Tools
                </h4>
                <div className="flex items-center justify-center flex-wrap gap-2">
                  {tools.map((tool, idx) => (
                    <Tooltip key={idx} content={tool.title}>
                      <div
                        className="relative bg-[#1a1a1a] size-16 rounded-full border"
                        style={{
                          borderColor: "rgba(255,255,255,0.07)",
                        }}
                      >
                        <Image
                          src={tool.image}
                          alt={tool.title}
                          fill
                          className="rounded-full border object-cover"
                        />
                      </div>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 outline rounded-full text-amber">
          <button onClick={() => router.push("/#about")} className="py-2">
            <MoveDownIcon className="animate-bounce" />
          </button>
        </div>
      </section>

      {/* ── Skills marquee ── */}
      {/* <div
        className="py-10 overflow-hidden border-y"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <p
          className="text-center text-base tracking-[0.15em] uppercase mb-6 font-display"
          style={{ color: "rgba(122,119,111,0.6)" }}
        >
          Technologies I work with
        </p>
        <div className="relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10"
            style={{
              background: "linear-gradient(to right, #0c0c0c, transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10"
            style={{
              background: "linear-gradient(to left, #0c0c0c, transparent)",
            }}
          />
          <div className="flex animate-marquee">
            {[...skills, ...skills].map((s, i) => (
              <div
                key={i}
                className="shrink-0 px-10 text-sm font-display font-semibold tracking-wider uppercase transition-colors"
                style={{
                  color: "rgba(122,119,111,0.5)",
                  borderRight: "1px solid rgba(255,255,255,0.07)",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};
