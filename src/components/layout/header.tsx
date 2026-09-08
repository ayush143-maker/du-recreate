"use client";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { NAV } from "@/data/site";
import { cn } from "@/lib/utils";
import { Crest } from "@/components/art/svg";

export function ScrollRule() {
  const { scrollYProgress } = useScroll();
  return <motion.div style={{ scaleX: scrollYProgress }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-brass" />;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <ScrollRule />
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="bg-ink text-paper">
          <div className="shell micro flex items-center justify-between py-1.5">
            <span>Est. 1922 · North Campus, Delhi</span>
            <span className="font-deva hidden md:block normal-case tracking-normal text-[11px]">निष्ठा दृढ़ा सेवायाम्</span>
            <span className="text-brass-2">Unofficial concept</span>
          </div>
        </div>
        <div className={cn("border-b border-line bg-paper/90 backdrop-blur transition-all", scrolled ? "py-2" : "py-4")}>
          <div className="shell flex items-center justify-between gap-6">
            <a href="#top" className="flex items-center gap-3">
              <Crest className={cn("transition-all", scrolled ? "h-8 w-8" : "h-10 w-10")} />
              <span className="leading-none">
                <span className="block font-display text-lg md:text-xl tracking-tight">University of Delhi</span>
                <span className="micro block text-ink-2 mt-1">Editorial redesign — concept v1</span>
              </span>
            </a>
            <nav className="hidden lg:flex items-center gap-8">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="micro group relative py-1 text-ink-2 hover:text-ink transition-colors">
                  {n.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-maroon transition-transform duration-500 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href="#admissions" className="micro hidden sm:block bg-maroon px-4 py-2.5 text-paper transition-colors hover:bg-ink">
                Apply via CSAS →
              </a>
              <button onClick={() => setOpen(true)} aria-label="Open menu" className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-line">
                <span className="h-px w-5 bg-ink" /><span className="h-px w-5 bg-ink" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-paper">
            <div className="shell flex items-center justify-between py-5">
              <span className="micro text-ink-2">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="micro border border-line px-4 py-2">Close ✕</button>
            </div>
            <nav className="shell mt-6 flex flex-col">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-line py-5 font-display text-4xl md:text-6xl tracking-tight hover:italic hover:text-maroon transition-colors"
                >
                  <span className="micro mr-4 text-brass align-middle">0{i + 1}</span>
                  {n.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
