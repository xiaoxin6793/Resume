"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "surong6793@gmail.com",
    href: "mailto:surong6793@gmail.com",
  },
  {
    icon: Phone,
    label: "电话",
    value: "152-7591-5650",
    href: "tel:15275915650",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            联系方式
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            让我们建立联系
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            如果您对量化投资、区块链开发或全栈项目有任何合作意向，欢迎随时与我联系。
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-6 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {contactLinks.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="group flex items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <contact.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{contact.label}</p>
                <p className="text-foreground font-medium">{contact.value}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        <div
          className={`flex justify-center gap-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="group w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
