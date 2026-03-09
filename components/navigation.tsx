"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "关于", href: "#about" },
  { label: "经历", href: "#experience" },
  { label: "技能", href: "#skills" },
  { label: "教育", href: "#education" },
  { label: "联系", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-4"
          : "py-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
        >
          SWL
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "text-sm transition-all duration-300 relative",
                  activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300",
                    activeSection === item.href.slice(1) ? "w-full" : "w-0"
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:surong6793@gmail.com"
          className="hidden md:inline-flex px-4 py-2 rounded-full text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          联系我
        </a>
      </div>
    </nav>
  );
}
