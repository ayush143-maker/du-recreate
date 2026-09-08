"use client";
import { animate, motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Bulletproof reveal: above-fold elements mount pe hi animate, baaki scroll pe */
export function useReveal<T extends Element = HTMLDivElement>(amount = 0.2) {
  const ref = useRef<T | null>(null);
  const inView = useInView(ref, { once: true, amount });
  const [onScreen, setOnScreen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92 && r.bottom > 0) setOnScreen(true);
  }, []);
  return { ref, shown: inView || onScreen };
}

export function FadeUp({ children, delay = 0, className, y = 28 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Editorial line-mask reveal */
export function MaskLines({ lines, className, delay = 0, stagger = 0.12 }: { lines: ReactNode[]; className?: string; delay?: number; stagger?: number }) {
  const { ref, shown } = useReveal<HTMLSpanElement>(0.1);
  return (
    <span ref={ref} className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
          <motion.span
            className="block will-change-transform"
            initial={{ y: "115%" }}
            animate={shown ? { y: "0%" } : undefined}
            transition={{ duration: 1.05, delay: delay + i * stagger, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Count({ to, suffix = "", duration = 1.8, className }: { to: number; suffix?: string; duration?: number; className?: string }) {
  const { ref, shown } = useReveal<HTMLSpanElement>(0.5);
  useEffect(() => {
    if (!shown) return;
    const c = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString("en-IN") + suffix;
      },
    });
    return () => c.stop();
  }, [shown, to, suffix, duration]);
  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

export function Marquee({ children, className, fast = false, reverse = false }: { children: ReactNode; className?: string; fast?: boolean; reverse?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className={cn("flex w-max", fast ? "animate-marquee-fast" : "animate-marquee")} style={reverse ? { animationDirection: "reverse" } : undefined}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

export function Parallax({ children, amount = 40, className }: { children: ReactNode; amount?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
