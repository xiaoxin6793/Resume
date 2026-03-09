"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Mail, Phone } from "lucide-react";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 200, 220, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(100, 200, 220, ${0.1 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-glow animation-delay-300" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="opacity-0 animate-fade-in-up">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            Quantitative Analyst
          </p>
        </div>

        <h1 className="opacity-0 animate-fade-in-up animation-delay-100 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
          <span className="text-balance">孙文龙</span>
        </h1>

        <p className="opacity-0 animate-fade-in-up animation-delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          量化分析 · 区块链开发 · 全栈工程
          <br />
          <span className="text-foreground/80">
            用代码解构金融，以数据驱动决策
          </span>
        </p>

        <div className="opacity-0 animate-fade-in-up animation-delay-300 flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="mailto:surong6793@gmail.com"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 text-sm"
          >
            <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-foreground/80 group-hover:text-foreground transition-colors">
              surong6793@gmail.com
            </span>
          </a>
          <a
            href="tel:15275915650"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 text-sm"
          >
            <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-foreground/80 group-hover:text-foreground transition-colors">
              152-7591-5650
            </span>
          </a>
        </div>

        <div className="opacity-0 animate-fade-in-up animation-delay-400">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">探索更多</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
