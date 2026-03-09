"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, TrendingUp, Boxes, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    title: "量化投资",
    description: "4年二级市场投资经验，精通股票量化策略开发",
  },
  {
    icon: Boxes,
    title: "区块链开发",
    description: "独立编写基于区块链的代币系统，精通Solidity",
  },
  {
    icon: Code2,
    title: "全栈开发",
    description: "Python、Java、前端开发全技能覆盖",
  },
  {
    icon: Sparkles,
    title: "AI工具应用",
    description: "精通ChatGPT、Cursor、Claude、Midjourney等",
  },
];

export function AboutSection() {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-primary text-sm tracking-widest uppercase mb-4">
              关于我
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              金融与科技的
              <br />
              <span className="text-primary">跨界探索者</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                我是孙文龙，一名量化分析师与全栈开发者。目前就读于上海对外经贸大学金融专硕，本科毕业于山东女子学院计算机科学与技术专业。
              </p>
              <p>
                拥有4年区块链市场和A股市场的投资经验，独立开发过VAR风险可视化管理系统、强势股筛选策略、三角洲理论股指周期预测系统等量化工具。
              </p>
              <p>
                热衷于将编程技术与金融投资相结合，探索数据驱动的投资决策方法论。
              </p>
            </div>
          </div>

          {/* Right column - highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
