"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "编程语言",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Solidity", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "量化与金融",
    skills: [
      { name: "VAR风险管理", level: 90 },
      { name: "量化策略开发", level: 88 },
      { name: "FOF研究", level: 85 },
      { name: "区块链投资", level: 82 },
      { name: "技术分析", level: 90 },
    ],
  },
  {
    title: "AI & 工具",
    skills: [
      { name: "ChatGPT", level: 95 },
      { name: "Cursor", level: 90 },
      { name: "Claude", level: 88 },
      { name: "Midjourney", level: 85 },
      { name: "Notion", level: 92 },
    ],
  },
  {
    title: "创意工具",
    skills: [
      { name: "Premiere Pro", level: 88 },
      { name: "After Effects", level: 82 },
      { name: "达芬奇", level: 80 },
      { name: "剪映", level: 90 },
      { name: "Excel", level: 95 },
    ],
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            技能特长
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            专业能力
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`p-6 rounded-2xl bg-card/50 border border-border/50 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150 + 200}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground/80">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${categoryIndex * 150 + skillIndex * 100 + 400}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div
          className={`mt-12 p-8 rounded-2xl bg-card/50 border border-border/50 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            证书资质
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "大学英语四级证书",
              "普通话国家一级乙等证书",
              "计算机考试二级证书",
            ].map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
