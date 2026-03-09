"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground">SWL</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-sm text-muted-foreground">
            Quantitative Analyst
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} 孙文龙. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a
            href="#"
            className="hover:text-foreground transition-colors"
          >
            关于
          </a>
          <a
            href="#experience"
            className="hover:text-foreground transition-colors"
          >
            经历
          </a>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors"
          >
            联系
          </a>
        </div>
      </div>
    </footer>
  );
}
