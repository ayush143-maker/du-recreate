"use client";
import { Crest, DomeArt } from "@/components/art/svg";
import { FadeUp, Marquee, MaskLines, Parallax } from "@/components/motion/kit";
import { TICKER } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="pt-28 md:pt-36">
      <div className="shell grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <FadeUp className="micro flex items-center gap-3 text-brass">
            <span className="h-px w-10 bg-brass" /> 01 — A century of scholarship
          </FadeUp>
          <h1 className="mt-6 font-display text-[clamp(3.2rem,9vw,8.75rem)] leading-[0.92] tracking-[-0.03em]">
            <MaskLines
              lines={[
                <>A century of</>,
                <><em className="text-maroon">minds</em> in</>,
                <>motion.</>,
              ]}
            />
          </h1>
          <FadeUp delay={0.5} className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-ink-2">
            The University of Delhi, re-imagined as an editorial object — where notices read like
            marginalia, campuses like chapters, and a hundred and four years like a single
            uninterrupted sentence.
          </FadeUp>
          <FadeUp delay={0.65} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#admissions" className="micro bg-maroon px-6 py-4 text-paper transition-colors hover:bg-ink">
              Explore admissions 2026–27 →
            </a>
            <a href="#campus" className="micro group flex items-center gap-3 border border-line px-6 py-4 transition-colors hover:border-ink">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current transition-transform group-hover:scale-110">▶</span>
              Walk the campus
            </a>
          </FadeUp>
        </div>
        <div className="relative hidden lg:col-span-4 lg:block">
          <Crest className="animate-spin-slow ml-auto h-56 w-56 text-maroon" />
          <p className="micro absolute right-0 top-64 [writing-mode:vertical-rl] text-ink-2">
            निष्ठा दृढ़ा सेवायाम् — steadfast in service
          </p>
        </div>
      </div>

      <Parallax amount={30} className="mt-16 border-y border-line">
        <div className="shell py-8"><DomeArt className="text-ink/80" /></div>
      </Parallax>

      <Marquee className="bg-maroon py-2.5 text-paper" fast>
        {TICKER.map((t, i) => (
          <span key={i} className="micro flex items-center whitespace-nowrap px-5">
            {t} <span className="ml-10 text-brass-2">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
