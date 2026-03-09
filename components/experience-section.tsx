"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2025.12 — 2025.03",
    company: "国海证券",
    role: "权益与量化投资FOF研究岗",
    description: [
      "独立搭建 FOF 端私募产品信息管理平台，对标私募排排网并通过部门审核",
      "实现私募头寸可视化管理",
      "开发申购赎回日程提醒、上下级头寸联动等功能",
      "提升机构投资管理效率",
    ],
    tags: ["量化投资", "FOF", "产品开发", "数据可视化"],
  },
  {
    period: "2025.02 — 2025.05",
    company: "北京大圣光华教育集团",
    role: "市场部实习生",
    description: [
      "主导策划讲座推广活动，快速响应竞品创新动作",
      "精准稳固核心客群并吸引竞品用户迁移",
      "累计完成十余场产品推广演讲",
      "深度对接60余名客户，成功建立长期合作",
    ],
    tags: ["市场营销", "活动策划", "客户关系", "演讲推广"],
  },
];

export function ExperienceSection() {
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
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 px-6 bg-card/30"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            实习经历
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            职业探索
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200 + 200}ms` }}
            >
              <div className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Time */}
                  <div className="lg:w-48 shrink-0">
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                            {exp.company}
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h3>
                          <p className="text-sm text-primary">{exp.role}</p>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
