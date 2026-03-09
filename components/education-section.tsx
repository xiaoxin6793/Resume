"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    period: "2025.09 — 至今",
    school: "上海对外经贸大学",
    degree: "金融专硕",
    location: "上海",
    highlights: [
      "独立编写基于 Streamlit 的 VAR 风险可视化管理系统，监视每日投资组合风险",
      "基于 Python 的强势股筛选策略，辅助龙头战法投资",
      "基于 Java 的三角洲理论股指周期预测系统，辅助缠论战法投资",
    ],
    current: true,
  },
  {
    period: "2021.06 — 2025.09",
    school: "山东女子学院",
    degree: "计算机科学与技术（本科）",
    location: "山东",
    highlights: [
      "独立编写基于区块链的工作流公司代币系统",
      "精通 Python、Java、HTML+CSS 前端开发、Solidity",
      "区块链市场、大 A 市场等二级市场 4 年投资经验",
      "精通 ChatGPT、Cursor、Claude Code、Notion、Midjourney 等 AI 程序",
    ],
    current: false,
  },
];

const campusActivities = {
  period: "2021.06 — 2025.09",
  role: "山东女子学院宣传部委员",
  activities: [
    "多次组织并参与对优秀学生个人、优秀教师、优秀集体的采访与拍照",
    "参与多条校园剪辑视频任务，熟练应用剪影、Pr、Ae、达芬奇等工具",
    "多次撰稿并刊登于校公众号平台，多篇稿件收获高阅读量",
    "助力校园优秀典型事迹的广泛传播与正向影响扩散",
  ],
};

export function EducationSection() {
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
      id="education"
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
            教育背景
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            学术旅程
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {education.map((edu, index) => (
            <div
              key={edu.school}
              className={`relative mb-12 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200 + 200}ms` }}
            >
              <div
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="md:w-1/2 pl-12 md:pl-0 md:pr-8">
                  <div
                    className={`${index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}
                  >
                    <div
                      className={`p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 ${
                        edu.current ? "border-primary/50" : ""
                      }`}
                    >
                      {edu.current && (
                        <span className="inline-block px-3 py-1 rounded-full text-xs bg-primary/20 text-primary mb-3">
                          在读
                        </span>
                      )}
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {edu.school}
                      </h3>
                      <p className="text-primary text-sm mb-3">{edu.degree}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                      </div>
                      <ul
                        className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}
                      >
                        {edu.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-8 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 shadow-[0_0_0_4px_rgba(100,200,220,0.2)]" />
              </div>
            </div>
          ))}
        </div>

        {/* Campus Activities */}
        <div
          className={`mt-16 p-8 rounded-2xl bg-background border border-border/50 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                校园经历
              </h3>
              <p className="text-sm text-muted-foreground">
                {campusActivities.role}
              </p>
            </div>
          </div>
          <ul className="grid md:grid-cols-2 gap-3">
            {campusActivities.activities.map((activity, i) => (
              <li
                key={i}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
