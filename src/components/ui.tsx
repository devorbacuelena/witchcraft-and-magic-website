import { useEffect, useMemo, useRef, type ReactNode } from "react";
import { cn } from "../utils/cn";

export function Stars({ count = 70, className }: { count?: number; className?: string }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2.2 + 0.8,
        dur: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      })),
    [count]
  );
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {stars.map((s) => (
        <span
          key={s.id}
          className="animate-twinkle absolute rounded-full bg-gold-300"
          style={
            {
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              "--dur": `${s.dur}s`,
              "--delay": `${s.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)} aria-hidden>
      <span className="ornament-line w-16 sm:w-28" />
      <svg width="28" height="28" viewBox="0 0 24 24" className="text-gold-400" fill="currentColor">
        <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
        <circle cx="12" cy="10" r="1.6" className="text-night-950" fill="currentColor" />
      </svg>
      <span className="ornament-line w-16 sm:w-28" />
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("mb-14", align === "center" ? "text-center" : "text-left")}>
      {eyebrow && (
        <p className="mb-3 font-display text-xs tracking-[0.35em] text-mystic-400 uppercase">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl leading-tight font-semibold text-gold-300 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-purple-100/70 italic">{subtitle}</p>
      )}
      <Ornament className={cn("mt-6", align === "left" && "justify-start")} />
    </div>
  );
}

export function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PentacleRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth={0.8}>
      <circle cx="100" cy="100" r="96" />
      <circle cx="100" cy="100" r="80" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="60" />
      <polygon points="100,20 147,164 24,72 176,72 53,164" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={100 + Math.cos(a) * 80}
            y1={100 + Math.sin(a) * 80}
            x2={100 + Math.cos(a) * 96}
            y2={100 + Math.sin(a) * 96}
          />
        );
      })}
    </svg>
  );
}
