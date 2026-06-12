"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Tooltip } from "../ui/Tooltip";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) =>
        document.getElementById(link.href),
      );

      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        if (!section) continue;

        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section.id);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-500 z-50",
        isScrolled
          ? "bg-[rgba(12,12,12,0.92)] backdrop-blur-xl border-b border-border py-3"
          : "bg-transparent py-5",
      )}
    >
      <nav className="max-w-300 mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="font-display text-xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors uppercase"
        >
          Victor Okoye<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <Link
                key={link.href}
                href={`#${link.href}`}
                className={cn(
                  "px-4 py-2 text-sm rounded-full border transition-all duration-500",
                  isActive
                    ? "text-foreground font-semibold border-border bg-surface2 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:border-border hover:bg-surface2",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Tooltip
          content="Reach out - I'm always ready to serve"
          position="bottom"
        >
          <button
            className="hidden md:flex btn-primary text-sm py-2.5 px-5"
            onClick={() => router.push("/#contact")}
          >
            Contact Me
          </button>
        </Tooltip>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[rgba(12,12,12,0.98)] backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="max-w-300 mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <Link
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg py-3 border-b transition-colors",
                    isActive
                      ? "text-foreground border-primary"
                      : "text-muted-foreground border-[rgba(255,255,255,0.05)] hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <button
              className="btn-primary mt-4 justify-center"
              onClick={() => {
                router.push("/#contact");
                setIsMobileMenuOpen(false);
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
