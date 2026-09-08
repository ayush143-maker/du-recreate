"use client";
import { Crest, DomeArt } from "@/components/art/svg";
import { FadeUp, Marquee, MaskLines, Parallax } from "@/components/motion/kit";
import { TICKER } from "@/data/site";

const GLANCE: [string, string][] = [
  ["1922", "Established"],
  ["91", "Colleges"],
  ["16", "Faculties"],
  ["7,00,000+", "Students"],
];

export function Hero() {
  return (
    <section id="top" className="pt-28 md:pt-32">
      <div className="shell micro flex items-center justify-between border-b border-line pb-3 text-ink-2">
        <span>Vol. CIV · No. 246</span>
        <span className="hidden md:block">Tuesday, 8 September 2026</span>
        <span>Delhi edition · free thought, no price</span>
      </div>

      <div className="shell grid gap-12 pt-12 pb-16 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <FadeUp className="micro flex items-center gap-3 text-brass">
            <span className="h-px w-10 bg-brass" /> 01 — A century of scholarship
          </FadeUp>
          <h1 className="mt-6 font-display text-[clamp(3.4rem,9.5vw,9rem)] leading-[0.9] tracking-[-0.035em]">
            <MaskLines lines={[<>A century of</>, <><em className="text-maroon">minds</em> in</>, <>motion.</>]} />
          </h1>
          <FadeUp delay={0.45} className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-ink-2">
            The University of Delhi, re-imagined as an editorial object — notices set like marginalia, campuses bound
            like chapters, and a hundred and four years read as one uninterrupted sentence.
          </FadeUp>
          <FadeUp delay={0.6} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#admissions" className="micro bg-maroon px-6 py-4 text-paper transition-colors hover:bg-ink">
              Explore admissions 2026–27 →
            </a>
            <a href="#campus" className="micro group flex items-center gap-3 border border-line px-6 py-4 transition-colors hover:border-ink">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current text-[8px] transition-transform group-hover:scale-110">▶</span>
              Walk the campus
            </a>
          </FadeUp>
          <FadeUp delay={0.75} className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-6 md:grid-cols-4">
            {GLANCE.map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-3xl md:text-4xl tracking-tight">{v}</p>
                <p className="micro mt-1 text-ink-2">{l}</p>
              </div>
            ))}
          </FadeUp>
        </div>

        <div className="lg:col-span-4">
          <FadeUp delay={0.3} className="relative border border-line bg-paper p-6 md:p-7">
            <Crest className="animate-spin-slow absolute right-5 top-5 h-14 w-14 text-maroon" />
            <p className="micro text-brass">The lead</p>
            <p className="mt-4 font-display text-2xl md:text-[1.7rem] leading-snug tracking-tight">
              A hundred and four years on, the university rewrites its <em className="text-maroon">front page</em>.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-2">
              Inside: plates drawn in line, notices set in mono, and a campus rendered as contour — no photographs, only memory.
            </p>
            <div className="mt-6 border-t border-line pt-4">
              <p className="micro mb-3 text-ink-2">Inside this issue</p>
              {[["Heritage", "p. 02"], ["Academics", "p. 03"], ["Campus", "p. 04"], ["Notices", "p. 05"]].map(([t, p]) => (
                <a key={t} href={`#${t.toLowerCase()}`} className="group flex items-baseline gap-2 py-1.5">
                  <span className="micro transition-colors group-hover:text-maroon">{t}</span>
                  <span className="flex-1 border-b border-dotted border-ink/30" />
                  <span className="micro text-ink-2">{p}</span>
                </a>
              ))}
            </div>
          </FadeUp>
          <p className="micro ml-auto mt-6 w-max text-right text-ink-2 [writing-mode:vertical-rl]">
            निष्ठा दृढ़ा सेवायाम् — steadfast in service
          </p>
        </div>
      </div>

      <Parallax amount={26} className="border-y border-line bg-paper-2/40">
        <div className="shell pt-8">
          <DomeArt className="text-ink/85" />
          <div className="micro flex justify-between border-t border-line py-3 text-ink-2">
            <span>Plate I — The main building, drawn from memory</span>
            <span className="hidden md:block">Line study · ink on paper · 1:2000</span>
          </div>
        </div>
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
